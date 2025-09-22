import { useEffect, useMemo, useState } from 'react';

import { translateTextViaAI } from '../utils/translation';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  translations: Record<string, string>;
loading: boolean;
  error?: string;
}
export function useAutoTranslate(
text: string,
  targets: string[],
  debounceMs = 600;
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [translations, setTranslations] = useState<Record<string, string>>({});

return { translations, loading, error }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
