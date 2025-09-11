const localeLabelKey: Record<string, string> = {

  en: "lang.english"
  pt: "lang.portuguese"
  es: "lang.spanish"
  ar: "lang.arabic"
}
export default function LanguageSwitchPrompt() {

const localeLabelKey: Record<string, string> = {
  en: "lang.english",
  pt: "lang.portuguese",
  es: "lang.spanish",
  ar: "lang.arabic",
};
export default function LanguageSwitchPrompt() {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n, { supportedLocales, isRtl } from '../../utils/i18n';
const localeLabelKey: Record<string, string> = {
  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic'
};
export default function LanguageSwitchPrompt() {
=======


export default function LanguageSwitchPrompt() {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n, { supportedLocales, isRtl } from "../../utils/i18n";

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const { t } = useTranslation();
  const [suggested, setSuggested] = useState<string | null>(null);
  useEffect(() => {


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n, { supportedLocales, isRtl } from "../../utils/i18n";
const localeLabelKey: Record<string, string> = {;
  en: "lang && lang.english",;
  pt: "lang && lang.portuguese",;
  es: "lang && lang.spanish",;
  ar: "lang && lang.arabic",;
};
export default function LanguageSwitchPrompt() {;
  const { t } = useTranslation();
  const [suggested, setSuggested] = useState<string | null>(null);
  useEffect(() => {;
    const key = "langPromptShown";
    const preferred = localStorage && localStorage.getItem("preferredLanguage");
    if (preferred) return; // user has chosen;
    if (localStorage && localStorage.getItem(key)) return; // already prompted;
    const detected =;
      i18n && i18n.language || i18n && i18n.resolvedLanguage || navigator && navigator.language || "en";
    const normalized = detected && detected.split("-")[0];
    const suggestion =;
      supportedLocales && supportedLocales.includes(normalized as any) && normalized !== "en";
        ? normalized;
        : null;

=======

    );
    document && document.documentElement.setAttribute("lang", suggested!);
    setSuggested(null);

  };
  const decline = () => {;
    localStorage && localStorage.setItem("langPromptShown1", "true");

<<<<<<< HEAD=======    setSuggested(null);
  }
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">;
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm">;
        <div>;
          {t("lang && lang.switch_prompt", { language: t(localeLabelKey[suggested]) })}
        </div>;
        <div className="flex items-center gap-2">;
          <button
            className="px-3 py-1 rounded bg-amber-600 text-white"
            onClick={accept}>;
            {t("lang && lang.switch_accept")}
          </button>;
          <button
            className="px-3 py-1 rounded border border-amber-300 dark:border-amber-700"
            onClick={decline}>;
            {t("lang && lang.switch_decline")}
          </button>;
        </div>;
      </div>;
    </div>;

  );
}
    localStorage.setItem('preferredLanguage', suggested!);
    localStorage.setItem('langPromptShown1');
    document.documentElement.setAttribute('dir', isRtl(suggested!) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', suggested!);
    setSuggested(null)
  };
  const decline = () => {
    localStorage.setItem('langPromptShown1');
    setSuggested(null)
  };
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm">
        <div>
          {t('lang.switch_prompt', { language: t(localeLabelKey[suggested]) })}
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded bg-amber-600 text-white" onClick={accept}>{t('lang.switch_accept')}</button>
          <button className="px-3 py-1 rounded border border-amber-300 dark:border-amber-700" onClick={decline}>{t('lang.switch_decline')}</button>
        </div>
      </div>
    </div>

}
  if (!suggested) return null,

  const accept = async () => {
    await i18n.changeLanguage(suggested!),
    localStorage.setItem('preferredLanguage', suggested!),
    localStorage.setItem('langPromptShown1'),
    document.documentElement.setAttribute('dir', isRtl(suggested!) ? 'rtl' : 'ltr'),
    document.documentElement.setAttribute('lang', suggested!),
    setSuggested(null)
  },

  const decline = () => {
    localStorage.setItem('langPromptShown1'),
    setSuggested(null)
  },

  return (
    <div className=&quot;bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200&quot;>
      <div className=&quot;container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm&quot;>
        <div>
          {_t('lang.switch_prompt', _{ language: t(localeLabelKey[suggested])})}
        </div>
        <div className=&quot;flex items-center gap-2&quot;>
          <button className=&quot;px-3 py-1 rounded bg-amber-600 text-white&quot; onClick={accept}>{t('lang.switch_accept')}</button>
          <button className=&quot;px-3 py-1 rounded border border-amber-300 dark:border-amber-700&quot; onClick={decline}>{t('lang.switch_decline')}</button>
        </div>
      </div>
    </div>
  )

}
  en: "lang.english"
  pt: "lang.portuguese"
  es: "lang.spanish"
  ar: "lang.arabic"
}
export default function LanguageSwitchPrompt() {

const localeLabelKey: Record<string, string> = {
  en: "lang.english",
  pt: "lang.portuguese",
  es: "lang.spanish",
  ar: "lang.arabic",
};
export default function LanguageSwitchPrompt() {;

  const { t } = useTranslation();
  const [suggested, setSuggested] = useState<string | null>(null);
  useEffect(() => {
    const key = "langPromptShown";
    const preferred = localStorage.getItem("preferredLanguage");
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
    localStorage.setItem("preferredLanguage", suggested!);
    localStorage.setItem("langPromptShown1", "true");
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
          </button>
        </div>
      </div>
    </div>
  );
);
  );
}
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
