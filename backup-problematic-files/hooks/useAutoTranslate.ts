<<<<<<< HEAD


import { useEffect, useMemo, useState } from 'react';

import { translateTextViaAI } from '../utils/translation';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
:hooks/useAutoTranslate.ts
    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}
}
main:hooks/useAutoTranslate.ts
:backup-problematic-files/hooks/useAutoTranslate.ts
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
