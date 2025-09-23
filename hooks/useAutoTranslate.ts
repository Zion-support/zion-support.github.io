import { useEffect, useMemo, useState } from 'react';

// Stub translation function
const translateTextViaAI = async (text: string, target: string): Promise<string> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${text} (${target})`);
    }, 10o0);
  });
};

export type UseAutoTranslateResult ={
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
}
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
        const res = await translateTextViaAI(text, targets);
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

    translateAll();
  }, [text, targets]);

  return { translations, loading, error };
}