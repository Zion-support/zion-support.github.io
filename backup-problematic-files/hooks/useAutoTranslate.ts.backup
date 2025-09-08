<<<<<<< HEAD

translations: Record<string, string>;


import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {;




=======
import { useEffect, useMemo, useState  } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
}
export function useAutoTranslate(
<<<<<<< HEAD



  text: string,
  targets: string[],
  debounceMs = 600;
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {;



=======
  text: string
  targets: string[]
  debounceMs = 600
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);
  useEffect(() => {
    if (!text |targets.length === 0) {
      setTranslations({});
      return;    }      return
    }
    let cancelled = false;
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(undefined);
        const res = await translateTextViaAI(text, targets);
        if (!cancelled) setTranslations(res);
      } catch (e: any) {
        if (!cancelled) setError(e?.message |'Translation failed');
      } finally {
        if (!cancelled) setLoading(false);      }      } catch (e: any) {
        if (!cancelled) setError(e?.message |'Translation failed')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }, debounceMs);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    }
  }, [key, debounceMs]);

  return { translations, loading, error }
<<<<<<< HEAD




=======
    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
