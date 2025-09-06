<<<<<<< HEAD
import { useEffect, useMemo, useState  } from 'react';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
}
export function useAutoTranslate(
  text: string
  targets: string[]
  debounceMs = 600
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
=======
import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';
export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean,
  error?: string
};

export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
<<<<<<< HEAD
  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);
  useEffect(() => {
    if (!text |targets.length === 0) {
=======

  const key = useMemo(() => JSON && JSON.stringify({ text, targets }), [text, targets]);

  useEffect(() => {
    if (!text || targets && targets.length === 0) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setTranslations({});
<<<<<<< HEAD
      return;    }      return
=======
      return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
    let cancelled = false;
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(undefined);
        const res = await translateTextViaAI(text, targets);
<<<<<<< HEAD
        if (!cancelled) setTranslations(res);
      } catch (e: any) {
        if (!cancelled) setError(e?.message |'Translation failed');
      } finally {
        if (!cancelled) setLoading(false);      }      } catch (e: any) {
        if (!cancelled) setError(e?.message |'Translation failed')
=======
        if (!cancelled) setTranslations(res)
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Translation failed')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      } finally {
        if (!cancelled) setLoading(false)
      }
    }, debounceMs);
    return () => {
      cancelled = true;
<<<<<<< HEAD
      clearTimeout(timer);
=======
      clearTimeout(timer)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
  }, [key, debounceMs]);

  return { translations, loading, error }
<<<<<<< HEAD
    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
