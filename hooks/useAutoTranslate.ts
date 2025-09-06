<<<<<<< HEAD
import { useEffect, useMemo, useState  } from 'react';
=======
import { useEffect, useMemo, useState } from 'react';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import { translateTextViaAI } from '../utils/translation';
<<<<<<< HEAD
export type UseAutoTranslateResult = any;
=======
export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
<<<<<<< HEAD
}
export function useAutoTranslate(
  text: string
  targets: string[]
  debounceMs = 600
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
=======
};
}

export function useAutoTranslate(
  text: string,
  targets: string[],
  debounceMs = 600
): UseAutoTranslateResult {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);
  useEffect(() => {
    if (!text |targets.length === 0) {
      setTranslations({});
<<<<<<< HEAD
      return;    }      return
=======
      return;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
        if (!cancelled) setLoading(false);      }      } catch (e: any) {
        if (!cancelled) setError(e?.message |'Translation failed')
      } finally {
        if (!cancelled) setLoading(false)
=======
        if (!cancelled) setLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    }, debounceMs);
    return () => {
      cancelled = true;
      clearTimeout(timer);
<<<<<<< HEAD
    }
  }, [key, debounceMs]);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return { translations, loading, error }
    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}
=======
    };
  }, [key, debounceMs]);

  return { translations, loading, error };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
