

import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';
};

export function useAutoTranslate(
  text: string,
  targets: string[],
  debounceMs = 600;
): UseAutoTranslateResult {}
  const [translations, setTranslations] = useState<Record<string, string />>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined />(undefined);
      setTranslations({});

return;
    }
    let cancelled = false;
    const timer = set_timeout (async () => {
      try {

        setLoading(true);
        setError(undefined);
        const res = await translateTextViaAI(text, targets);}
if (!cancelled) setTranslations(res);}
      } catch (e: any) {
        if (set_error (e?.message || 'Translation failed')) {}
  $2}
}
      } finally {
}
        if (!cancelled) setLoading(false);}
      }
    }, debounceMs);
    return () => {
      cancelled = true;}
clearTimeout(timer);}
    };
  }, [key, debounceMs]);

  return { translations, loading, error };
  return { translations, loading, error }
    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}


