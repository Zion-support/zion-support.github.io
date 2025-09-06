import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function useAutoTranslate(
  text: string,
  targets: string[],
  debounceMs = 600
<<<<<<< HEAD
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});
=======
): UseAutoTranslateResult {
=======
<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react';

interface UseAutoTranslateOptions {
  sourceLanguage?: string;
  targetLanguage?: string;
  onTranslate?: (text: string, translatedText: string) => void,
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
  loading: boolean,
  error?: string
};

export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const [translations, setTranslations] = useState<Record<string, string>>({});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);

  useEffect(() => {
    if (!text || targets.length === 0) {
      setTranslations({});
<<<<<<< HEAD
      return;    }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    let cancelled = false;
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(undefined);
        const res = await translateTextViaAI(text, targets);
<<<<<<< HEAD
        if (!cancelled) setTranslations(res);
=======
<<<<<<< HEAD
<<<<<<< HEAD
        if (!cancelled) setTranslations(res);
=======
        if (!cancelled) setTranslations(res)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Translation failed');
      } finally {
<<<<<<< HEAD
        if (!cancelled) setLoading(false);      }
=======
<<<<<<< HEAD
        if (!cancelled) setLoading(false);
=======
        if (!cancelled) setTranslations(res)
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Translation failed')
      } finally {
        if (!cancelled) setLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        if (!cancelled) setLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }, debounceMs);

    return () => {
      cancelled = true;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      clearTimeout(timer);
    };
  }, [key, debounceMs]);

<<<<<<< HEAD
  return { translations, loading, error };
=======
  return { translations, loading, error };
=======
      clearTimeout(timer)
    }
  }, [key, debounceMs]);

  return { translations, loading, error }
}
>>>>>>> 7a79ab46aa7794ec396c2388b3c38de69cb877ae
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      clearTimeout(timer)
    }
  }, [key, debounceMs]);

  return { translations, loading, error }
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
