import { useEffect, useMemo, useState } from 'react';

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
  error?: string;
};

export function useAutoTranslate(
  text: string,
  targets: string[],
  debounceMs = 600
): UseAutoTranslateResult {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const debouncedText = useMemo(() => {
    const timeoutId = setTimeout(() => text, debounceMs);
    return () => clearTimeout(timeoutId);
  }, [text, debounceMs]);

  useEffect(() => {
    if (!text || targets.length === 0) {
      setTranslations({});
      return;
    }

    setLoading(true);
    setError(undefined);

    const translateAll = async () => {
      try {
        const translationPromises = targets.map(async (target) => {
          const translation = await translateTextViaAI(text, target);
          return { target, translation };
        });

        const results = await Promise.all(translationPromises);
        const newTranslations = results.reduce((acc, { target, translation }) => {
          acc[target] = translation;
          return acc;
        }, {} as Record<string, string>);

        setTranslations(newTranslations);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Translation failed');
      } finally {
        setLoading(false);
      }
    };

    translateAll();
  }, [text, targets]);

  return { translations, loading, error };
}