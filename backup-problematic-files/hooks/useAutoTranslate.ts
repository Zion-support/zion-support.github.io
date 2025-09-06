

<<<<<<< HEAD
import { useEffect, useMemo, useState } from 'react';
=======
=======


import { useEffect, useMemo, useState } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/useAutoTranslate.ts
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {;

<<<<<<< HEAD
:hooks/useAutoTranslate.ts
import { useEffect, useMemo, useState  } from 'react';
:backup-problematic-files/hooks/useAutoTranslate.ts
import { useEffect, useMemo, useState } from 'react',;
import { translateTextViaAI } from '../utils/translation',;
export type UseAutoTranslateResult = {;
  translations: Record<string string>,;
  loading: boolean,;
  error?: string;
},;
export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {;
  const [translations, setTranslations] = useState<Record<string string>>({}),;
  const [loading, setLoading] = useState(false),;
  const [error, setError] = useState<string | undefined>(undefined),;
  const key = useMemo(() => JSON.stringify({ text, targets }), [text, targets]),;
  useEffect(() => {;
    if (!text || targets.length === 0) {;
      setTranslations({}),;
      return;
    }
;
    let cancelled = false,;
    const timer = setTimeout(async () => {;
      try {;
        setLoading(true),;
        setError(undefined),;
        const res = await translateTextViaAI(text, targets),;
        if (!cancelled) setTranslations(res);
      } catch (e: any) {;
        if (!cancelled) setError(e?.message || 'Translation failed');
      } finally {;
        if (!cancelled) setLoading(false);
      }
    }, debounceMs),;
    return () => {;
      cancelled = true;
      clearTimeout(timer);
    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}
:backup-problematic-files/hooks/useAutoTranslate.ts
import { useEffect, useMemo, useState } from 'react';
:backup-problematic-files/hooks/useAutoTranslate.ts
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {
export type UseAutoTranslateResult = {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  translations: Record<string, string>;
  loading: boolean;
  error?: string;
}
export function useAutoTranslate(
<<<<<<< HEAD
  text: string
  targets: string[]
  debounceMs = 600
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  text: string,
  targets: string[],
  debounceMs = 600;
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
:hooks/useAutoTranslate.ts
    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}
}
main:hooks/useAutoTranslate.ts
:backup-problematic-files/hooks/useAutoTranslate.ts
=======

}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/hooks/useAutoTranslate.ts
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
