import { useEffect, useMemo, useState } from 'react';
<<<<<<< HEAD
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean,
=======

// Stub translation function
const translateTextViaAI = async (text: string, target: string): Promise<string> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${text} (${target})`);
    }, 100);
  });
};

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
  error?: string;
};

export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
<<<<<<< HEAD
=======

>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);
  
  useEffect(() => {
    if (!text || targets.length === 0) {
      setTranslations({});
<<<<<<< HEAD
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
=======
      setLoading(false);
      setError(undefined);
      return;
    }
    
    setLoading(true);
    setError(undefined);
    
    const timeoutId = setTimeout(async () => {
      try {
        const newTranslations: Record<string, string> = {};
        
        // Translate to each target language
        await Promise.all(
          targets.map(async (target) => {
            const translation = await translateTextViaAI(text, target);
            newTranslations[target] = translation;
          })
        );
        
        setTranslations(newTranslations);
        setError(undefined);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Translation failed');
      } finally {
        setLoading(false);
      }
    }, debounceMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [key, debounceMs]);
  
  return {
    translations,
    loading,
    error
  };
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
}