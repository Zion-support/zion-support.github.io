import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean,
  error?: string;
};

export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);
  
  useEffect(() => {
    if (!text || targets.length === 0) {
      setTranslations({});
      return;
    }
    
    let cancelled = false;
    const timer = setTimeout(async () => {
      setLoading(true);
      setError(undefined);
      
      try {
        const results = await Promise.all(
          targets.map(async (target) => {
            const result = await translateTextViaAI(text, target);
            return { target, result };
          })
        );
        
        if (!cancelled) {
          const newTranslations = results.reduce((acc, { target, result }) => {
            acc[target] = result;
            return acc;
          }, {} as Record<string, string>);
          
          setTranslations(newTranslations);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Translation failed');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }, debounceMs);
    
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [key, debounceMs]);
  
  return { translations, loading, error };
}