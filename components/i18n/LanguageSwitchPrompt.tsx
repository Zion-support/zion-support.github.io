import React, {_useEffect, _useState} from 'react';
import i18n, {_supportedLocales, _isRtl} from '../../utils/i18n';

const localeLabelKey: Record<string, string> = {_en: 'lang.english', _pt: 'lang.portuguese', _es: 'lang.spanish', _ar: 'lang.arabic'};

export default function LanguageSwitchPrompt() {_const { t} = useTranslation();
  const [suggested, setSuggested] = useState<string | null>(null);

  useEffect__(() => {_const _key = 'langPromptShown';
    const _preferred = localStorage.getItem('preferredLanguage');
    if (preferred) return; // user has chosen
    if (localStorage.getItem(key)) return; // already prompted

    const _detected = i18n.language || i18n.resolvedLanguage || navigator.language || 'en';
    const _normalized = detected.split('-')[0];
    const _suggestion = supportedLocales.includes(normalized as any) && normalized !== 'en' ? normalized : null;
    if (suggestion) setSuggested(suggestion);}, []);

  if (!suggested) return null;

  const _accept = async () => {_await i18n.changeLanguage(suggested!);
    localStorage.setItem('preferredLanguage', _suggested!);
    localStorage.setItem('langPromptShown', _'1');
    document.documentElement.setAttribute('dir', _isRtl(suggested!) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', _suggested!);
    setSuggested(null);};

  const _decline = () => {_localStorage.setItem('langPromptShown', _'1');
    setSuggested(null);};

  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm">
        <div>
          {_t('lang.switch_prompt', _{ language: t(localeLabelKey[suggested])})}
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded bg-amber-600 text-white" onClick={_accept}>{_t('lang.switch_accept')}</button>
          <button className="px-3 py-1 rounded border border-amber-300 dark:border-amber-700" onClick={_decline}>{_t('lang.switch_decline')}</button>
        </div>
      </div>
    </div>
  );
}