<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useTranslation  } from 'react-i18next';
import i18n, { supportedLocales, isRtl } from '../../utils/i18n';
<<<<<<< HEAD
const localeLabelKey: Record<string, string> = {
<<<<<<< HEAD
<<<<<<< HEAD
  en: 'lang.english';
  pt: 'lang.portuguese';
  es: 'lang.spanish';
  ar: 'lang.arabic'},

export default function LanguageSwitchPrompt() {
  const { t } = useTranslation();
  const [suggested, setSuggested] = useState<string | null>(null),

  useEffect(() => {
    const key = null;
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n, { supportedLocales, isRtl } from "../../utils/i18n";
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const localeLabelKey: Record<string, string> = {

  en: "lang.english"
  pt: "lang.portuguese"
  es: "lang.spanish"
  ar: "lang.arabic"
}
=======
  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic',
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function LanguageSwitchPrompt() {
=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
const localeLabelKey: Record<string, string> = {
  en: "lang.english",
  pt: "lang.portuguese",
  es: "lang.spanish",
  ar: "lang.arabic",
};
export default function LanguageSwitchPrompt() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { t } = useTranslation();
  const [suggested, setSuggested] = useState<string | null>(null);
  useEffect(() => {
<<<<<<< HEAD
    const key = "langPromptShown";
    const preferred = localStorage.getItem("preferredLanguage");
=======
    const key = 'langPromptShown';
    const preferred = localStorage.getItem('preferredLanguage');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    if (preferred) return; // user has chosen
    if (localStorage.getItem(key)) return; // already prompted
    const detected =
      i18n.language |i18n.resolvedLanguage |navigator.language |"en";
    const normalized = detected.split("-")[0];
    const suggestion =
      supportedLocales.includes(normalized as any) && normalized !== "en"
        ? normalized
        : null;
    if (suggestion) setSuggested(suggestion);
  }, []);
  if (!suggested) return null;
  const accept = async () => {
    await i18n.changeLanguage(suggested!);
<<<<<<< HEAD
    localStorage.setItem("preferredLanguage", suggested!);
    localStorage.setItem("langPromptShown1", "true");
=======
    localStorage.setItem('preferredLanguage', suggested!);
    localStorage.setItem('langPromptShown', '1');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    document.documentElement.setAttribute(
      "dir"
      isRtl(suggested!) ? "rtl" : "ltr"
    );
    document.documentElement.setAttribute("lang", suggested!);
    setSuggested(null);
  }
  const decline = () => {
    localStorage.setItem("langPromptShown1", "true");
    setSuggested(null);
<<<<<<< HEAD
  }

  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm">
        <div>
          {t("lang.switch_prompt", { language: t(localeLabelKey[suggested]) })}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 rounded bg-amber-600 text-white"
            onClick={accept}
          >
            {t("lang.switch_accept")}
          </button>
          <button
            className="px-3 py-1 rounded border border-amber-300 dark:border-amber-700"
            onClick={decline}
          >
            {t("lang.switch_decline")}
=======
  };

  return (
    <div className='bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'>
      <div className='container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm'>
        <div>
          {t('lang.switch_prompt', { language: t(localeLabelKey[suggested]) })}
        </div>
        <div className='flex items-center gap-2'>
          <button
            className='px-3 py-1 rounded bg-amber-600 text-white'
            onClick={accept}
          >
            {t('lang.switch_accept')}
          </button>
          <button
            className='px-3 py-1 rounded border border-amber-300 dark:border-amber-700'
            onClick={decline}
          >
            {t('lang.switch_decline')}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
<<<<<<< HEAD
);
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
