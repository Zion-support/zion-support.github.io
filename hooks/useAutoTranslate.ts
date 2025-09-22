import { useEffect, useMemo, useState } from 'react';

// Stub translation function
const translateTextViaAI = async (text: string, target: string): Promise<string> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${text} (${target})`);
    }, 100);
  });
};

export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
}
import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';
};

export function useAutoTranslate(
  text: string,
  targets: string[],
  debounceMs = 600
): UseAutoTranslateResult {
origin/cursor/automate-test-improve-and-merge-code-2533
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]);
  
  useEffect(() => {
    if (!text || targets.length === 0) {
      setTranslations({});
;
export function useAutoTranslate (
  text: string,
  targets: string[],
  debounce_ms = 600): UseAutoTranslateResult {  const [translations, set_translations] = useState < Record < string, string>>({});export function useAutoTranslate (text: string, targets: string[], debounce_ms = 600): UseAutoTranslateResult {
  const [translations, set_translations] = useState < Record < string, string>>({});
  const [loading, set_loading] = useState (false);
  const [error, set_error] = useState < string | undefined>(undefined);
;
  const key = useMemo (() => JSON.stringify ({ text, targets }), [text, targets]);
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      set_translations ({});
      return;    }      return;
return;
origin/cursor/automate-test-improve-and-merge-code-2533
    }
    let cancelled = false;
    const timer = set_timeout (async () => {
      try {
        set_loading (true);
        set_error (undefined);
        const res = await translateTextViaAI (text, targets);
        if (set_translations (res)) {
  $2
}
        setLoading(true);
        setError(undefined);
        const res = await translateTextViaAI(text, targets);
if (!cancelled) setTranslations(res);
origin/cursor/automate-test-improve-and-merge-code-2533
      } catch (e: any) {
        if (set_error (e?.message || 'Translation failed')) {
  $2
}
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
        if (!cancelled) setLoading(false);
      }
    }, debounceMs);
    return () => {
      cancelled = true;
clearTimeout(timer);
    };
  }, [key, debounceMs]);
  
  return {
    translations,
    loading,
    error
  };
}
}
    }
  }, [key, debounce_ms]);
;
  return { translations, loading, error }
}
origin/cursor/automate-test-improve-and-merge-code-2533
