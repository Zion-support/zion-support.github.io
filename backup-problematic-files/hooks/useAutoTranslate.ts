=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useEffect, useMemo, useState } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/useAutoTranslate.ts
import { translateTextViaAI } from '../utils/translation';
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
}
export function useAutoTranslate(
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/useAutoTranslate.ts
