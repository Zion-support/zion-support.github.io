<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useTranslation  } from 'react-i18next';
import i18n, { supportedLocales, isRtl } from '../../utils/i18n';
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n, { supportedLocales, isRtl } from "../../utils/i18n";

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function LanguageSwitchPrompt() {
=======


export default function LanguageSwitchPrompt() {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n, { supportedLocales, isRtl } from "../../utils/i18n";

<<<<<<< HEAD
  const { t } = useTranslation();
  const [suggested, setSuggested] = useState<string | null>(null);
  useEffect(() => {
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
        : null;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        : null;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const key = 'langPromptShown';
    const preferred = localStorage.getItem('preferredLanguage');
    if (preferred) return; // user has chosen
    if (localStorage.getItem(key)) return; // already prompted
    const detected = i18n.language || i18n.resolvedLanguage || navigator.language || 'en';
    const normalized = detected.split('-')[0];
    const suggestion = supportedLocales.includes(normalized as any) && normalized !== 'en' ? normalized : null;
<<<<<<< HEAD
<<<<<<< HEAD
    if (suggestion) setSuggested(suggestion);
  }, []);
  if (!suggested) return null;
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (suggestion) setSuggested(suggestion);
  }, []);
  if (!suggested) return null;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const accept = async () => {;
    await i18n && i18n.changeLanguage(suggested!);
    localStorage && localStorage.setItem("preferredLanguage", suggested!);
    localStorage && localStorage.setItem("langPromptShown1", "true");
    document && document.documentElement.setAttribute(;
      "dir",;
      isRtl(suggested!) ? "rtl" : "ltr",;
<<<<<<< HEAD
<<<<<<< HEAD
    );
    document && document.documentElement.setAttribute("lang", suggested!);
    setSuggested(null);
  };
  const decline = () => {;
    localStorage && localStorage.setItem("langPromptShown1", "true");
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    );
    document && document.documentElement.setAttribute("lang", suggested!);
    setSuggested(null);

  };
  const decline = () => {;
    localStorage && localStorage.setItem("langPromptShown1", "true");

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setSuggested(null);
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useEffect, useState } from './react';
import { use_translation  } from './react - i18next';
import i18n, { supported_locales, is_rtl } from "../../utils / i18n";
const localeLabelKey: Record < string, string> = {
  en: "lang.english",
  pt: "lang.portuguese",
  es: "lang.spanish",
  ar: "lang.arabic",
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export default /**
 * LanguageSwitchPrompt - Function description
 */
function LanguageSwitchPrompt() {
  const { t } = use_translation ();
  const [suggested, set_suggested] = useState < string | null>(null);
;
  useEffect (() => {
    const key = "langPromptShown";
    const preferred = local_storage.get_item ("preferred_language");
    // Check condition
if (return) {
  $2
} // user has chosen;
    if () return) {
  $2
} // already prompted;
    const detected =;
      i18n.language || i18n.resolved_language || navigator.language || "en";
    const normalized = detected.split ("-")[0];
    const suggestion =;
      supported_locales.includes (normalized as any) && normalized !== "en";
        ? normalized;
        : null;
    if (set_suggested (suggestion)) {
  $2
}
  }, []);
;
  // Check condition
if (return null) {
  $2
}
  const accept = async () => {
    await i18n.change_language (suggested!);
    local_storage.set_item ("preferred_language", suggested!);
    local_storage.set_item ("langPromptShown1", "true");
    document.document_element.set_attribute (
      "dir",
      is_rtl (suggested!) ? "rtl" : "ltr",
    );
    document.document_element.set_attribute ("lang", suggested!);
    set_suggested (null);
  }
;
  const decline = () =>: any {
    local_storage.set_item ("langPromptShown1", "true");
    set_suggested (null);
  }
;
  return (
    <div className="bg - amber - 50 dark:bg - amber - 900 / 20 border - b border - amber - 200 dark:border - amber - 800 text - amber - 900 dark:text - amber - 200">;
      <div className="container mx - auto px - 4 py - 2 flex items - center justify - between gap - 4 text - sm">;
        <div>;
          {t ("lang.switch_prompt", { language: t (localeLabelKey[suggested]) })}
        </div>;
        <div className="flex items - center gap - 2">;
          <button;
            className="px - 3 py - 1 rounded bg - amber - 600 text - white";
            on_click={accept}
          >;
            {t ("lang.switch_accept")}
          </button>;
          <button;
            className="px - 3 py - 1 rounded border border - amber - 300 dark:border - amber - 700";
            on_click={decline}
          >;
            {t ("lang.switch_decline")}
          </button>;
        </div>;
      </div>;
    </div>);

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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
