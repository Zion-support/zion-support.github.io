<<<<<<< HEAD


import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';
};

return;



=======
import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';
export type UseAutoTranslateResult = {
  translations: Record<string, string>,
  loading: boolean,
  error?: string
},

export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
  const [translations, setTranslations] = useState<Record<string, string>>({}),
  const [loading, setLoading] = useState($2);
  const [error, setError] = useState<string | undefined>(undefined),

  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]),

  useEffect(() => {
    if (!text || targets.length === 0) {
      setTranslations($2);
      return
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    let cancelled = $2;
    const timer = setTimeout(async () => {
      try {
<<<<<<< HEAD



      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Translation failed')
      } finally {
        if (set_loading (false)) {
  $2
}      }      } catch (e: any) {
        if (set_error (e?.message || 'Translation failed')) {
  $2
}
      } finally {
        if (set_loading (false)) {
  $2
}
      }
    }
  }, [key, debounce_ms]);
;
  return { translations, loading, error }

    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}


    }
  }, [key, debounce_ms]);
;
  return { translations, loading, error }
}
    }
  }, [key, debounce_ms]);
;
  return { translations, loading, error }
}


=======
        setLoading($2);
        setError($2);
        const res = await translateTextViaAI($2);
        if (!cancelled) setTranslations(res)
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Translation failed')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }, debounceMs),

    return () => {
      cancelled = $2;
      clearTimeout(timer)
    }
  }, [key, debounceMs]),

  return { translations, loading, error }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
