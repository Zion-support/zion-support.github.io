
translations: Record<string, string>;


import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {;







  text: string,
  targets: string[],
  debounceMs = 600;
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {;







