<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';

interface UseAutoTranslateOptions {
  sourceLanguage?: string;
  targetLanguage?: string;
  onTranslate?: (text: string, translatedText: string) => void;
}

export const useAutoTranslate = (options: UseAutoTranslateOptions = {}) => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedText, setTranslatedText] = useState<string>('');

  const translate = useCallback(async (text: string) => {
    if (!text.trim()) return;

    setIsTranslating(true);
    try {
      // Mock translation - replace with actual translation service
      const mockTranslation = `Translated: ${text}`;
      setTranslatedText(mockTranslation);
      options.onTranslate?.(text, mockTranslation);
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [options]);

  return {
    isTranslating,
    translatedText,
    translate
  };
};

export default useAutoTranslate;
=======
import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';
export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
  error?: string
};

export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);

  useEffect(() => {
    if (!text || targets.length === 0) {
      setTranslations({});
      return
    }

    let cancelled = false;
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(undefined);
        const res = await translateTextViaAI(text, targets);
        if (!cancelled) setTranslations(res)
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Translation failed')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }, debounceMs);

    return () => {
      cancelled = true;
      clearTimeout(timer)
    }
  }, [key, debounceMs]);

  return { translations, loading, error }
}
>>>>>>> 7a79ab46aa7794ec396c2388b3c38de69cb877ae
