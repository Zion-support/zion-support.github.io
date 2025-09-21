import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
};

export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const debouncedText = useMemo(() => {
    const timer = setTimeout(() => text, debounceMs);
    return () => clearTimeout(timer);
  }, [text, debounceMs]);

  useEffect(() => {
    if (!text || targets.length === 0) return;

    setLoading(true);
    setError(undefined);

    const translatePromises = targets.map(async (target) => {
      try {
        const result = await translateTextViaAI(text, target);
        return { target, translation: result };
      } catch (err) {
        console.error(`Translation failed for ${target}:`, err);
        return { target, translation: text };
      }
    });

    Promise.all(translatePromises).then((results) => {
      const newTranslations = results.reduce((acc, { target, translation }) => {
        acc[target] = translation;
        return acc;
      }, {} as Record<string, string>);
      
      setTranslations(newTranslations);
      setLoading(false);
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, [text, targets]);

  return { translations, loading, error };
}