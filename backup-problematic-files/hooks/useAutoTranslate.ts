import { useEffect, useMemo, useState } from 'react';

import { translateTextViaAI } from '../utils/translation';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {;
  translations: Record<string, string>;
loading: boolean;
  error?: string;
}
export function useAutoTranslate(
text: string,
  targets: string[],
  debounceMs = 600;
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {;

  const [translations, setTranslations] = useState<Record<string, string>>({});

return { translations, loading, error }
