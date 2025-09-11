


import { useEffect, useMemo, useState } from 'react';>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {;

export type UseAutoTranslateResult = {
export type UseAutoTranslateResult = {;
=======  translations: Record<string, string>;
  loading: boolean;
  error?: string;
}
export function useAutoTranslate(
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  text: string,
  targets: string[],
  debounceMs = 600;
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {;
  return { translations, loading, error }
}