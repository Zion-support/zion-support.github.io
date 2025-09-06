import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
};

export function useAutoTranslate(
  text: string,
  targets: string[],
  debounceMs = 600
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});
=======
export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
  const [translations, setTranslations] = useState<Record<string, string>>({});
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);

  useEffect(() => {
    if (!text || targets.length === 0) {
      setTranslations({});
      return;    }
=======
      return
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    let cancelled = false;
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError(undefined);
        const res = await translateTextViaAI(text, targets);
        if (!cancelled) setTranslations(res);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Translation failed');
      } finally {
        if (!cancelled) setLoading(false);      }
=======
        if (!cancelled) setLoading(false)
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }, debounceMs);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [key, debounceMs]);

  return { translations, loading, error };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      clearTimeout(timer)
    }
  }, [key, debounceMs]);

  return { translations, loading, error }
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
