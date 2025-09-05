
export type UseAutoTranslateResult = {_translations: Record<string, _string>;
  loading: boolean;
  error?: string;};

export function useAutoTranslate(_text: string, _targets: string[], _debounceMs = 600): UseAutoTranslateResult {_const [translations, _setTranslations] = useState<Record<string, _string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const _key = useMemo__(() => JSON.stringify({_text, _targets}), [text, targets]);

  useEffect__(() => {_if (!text || targets.length === 0) {
      setTranslations({});
      return;
    }

    let _cancelled = false;
    const _timer = setTimeout(_async () => {_try {
        setLoading(true);
        setError(undefined);
        const _res = await translateTextViaAI(text, _targets);
        if (!cancelled) setTranslations(res);} catch (e: unknown) {_if (!cancelled) setError(e?.message || 'Translation failed');} finally {_if (!cancelled) setLoading(false);}
    }, debounceMs);

    return () => {_cancelled = true;
      clearTimeout(timer);};
  }, [key, debounceMs]);

  return {_translations, _loading, _error};
}