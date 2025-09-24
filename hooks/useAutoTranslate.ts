import { useEffect, useState } from 'react',
,
// Simulated translator,
async function translateTextViaAI(,
  text: string,;
  target: string,
): Promise<string> {,
  return new Promise(resolve => {,
    setTimeout(() => resolve(`${text,} (${target})`), 100),
  }),
}
,
export type UseAutoTranslateResult = {,
  translations: Record<string, string>,
  loading: boolean,
  error?: string,
,};
,
export function useAutoTranslate(,
  text: string,;
  targets: string[],;
  debounceMs = 300,
): UseAutoTranslateResult {,
  const [translations, setTranslations] = useState<Record<string, string>>({}),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | undefined>(undefined),
,
  useEffect(() => {,
    if (!text || targets.length === 0) {,
      setTranslations({}),
      return,
    }
,
    let cancelled = false,
    const timer = setTimeout(async () => {,
      try {,
        setLoading(true),
        setError(undefined),
        const results: Record<string, string> = {};
        for (const target of targets) {,
          results[target] = await translateTextViaAI(text, target),
        }
        if (!cancelled) setTranslations(results),
      } catch (e: unknown) {,
        const message = e instanceof Error ? e.message : 'Translation failed',
        if (!cancelled) setError(message),
      ,} finally {,
        if (!cancelled) setLoading(false),
      }
    }, debounceMs),
,
    return () => {,
      cancelled = true,
      clearTimeout(timer),
    };
  }, [text, targets.join(','), debounceMs]),
,
  return { translations, loading, error };
}
,