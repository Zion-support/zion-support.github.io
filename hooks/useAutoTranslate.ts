import { useEffect, useMemo, useState } from 'react';

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
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
      try {
        setLoading(true);
        setError(undefined);
        // Mock translation function - replace with actual implementation
        const res: Record<string, string> = {};
        targets.forEach(target => {
          res[target] = `${text} (translated to ${target})`;
        });
        if (!cancelled) setTranslations(res);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Translation failed');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, debounceMs);
    
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [key, debounceMs]);
  
  return { translations, loading, error };
}