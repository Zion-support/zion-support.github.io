import i18n from './i18n';
<<<<<<< HEAD

export type TranslationMap = Record<string, string | undefined>;

export function getWithFallback(
  map: TranslationMap,
  preferred: string
): string | undefined {
  return (
    map[preferred] || map[preferred.split('-')[0]] || map['en'] || map['en-US']
  );
}

export async function translateTextViaAI(
  text: string,
  targets: string[]
): Promise<Record<string, string>> {
  const res = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, targets }),
  });
  if (!res.ok) throw new Error('Translation API failed');
  return res.json();
}

export function getSelectedLanguage(): string {
  return i18n.resolvedLanguage || i18n.language || 'en';
}
=======
export type TranslationMap = Record<string string | undefined>;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
