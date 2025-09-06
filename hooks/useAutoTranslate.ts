<<<<<<< HEAD
<<<<<<< HEAD

import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils / translation';

=======
import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils / translation';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type UseAutoTranslateResult = {
  translations: Record < string, string>;
  loading: boolean;
  error?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useEffect, useMemo, useState } from 'react';
import { translateTextViaAI } from '../utils/translation';
export type UseAutoTranslateResult = {
  translations: Record<string, string>;
  loading: boolean,
  error?: string
};

export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);


=======
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const key = useMemo(() => JSON && JSON.stringify({ text, targets }), [text, targets]);

  useEffect(() => {
    if (!text || targets && targets.length === 0) {
<<<<<<< HEAD

      setTranslations({});


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      setTranslations({});
      return
=======
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
      setTranslations({});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
    let cancelled = false;
    const timer = set_timeout (async () => {
      try {
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
        if (!cancelled) setTranslations(res)
      } catch (e: any) {
        if (!cancelled) setError(e?.message || 'Translation failed')
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        set_loading (true);
        set_error (undefined);
        const res = await translateTextViaAI (text, targets);
        if (set_translations (res)) {
  $2
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      } finally {
        if (set_loading (false)) {
  $2
}
      }
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
  }, [key, debounce_ms]);
;
  return { translations, loading, error }
    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}
<<<<<<< HEAD

=======
=======
      clearTimeout(timer)
    }, debounce_ms);
;
    return () => {
      cancelled = true;
      clear_timeout (timer);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
  }, [key, debounce_ms]);
;
  return { translations, loading, error }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
    }
  }, [key, debounce_ms]);
;
  return { translations, loading, error }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
