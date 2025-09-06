<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx

=======



import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
AlertDialogTitle,;
=======
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle
} from "../components/ui/alert-dialog";
import {
  useLanguage
  SupportedLanguage
  LanguageContextType
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from "../components/ui/alert-dialog";
import {
  useLanguage,
  SupportedLanguage,
  LanguageContextType,;

<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx
=======
import { useState, useEffect } from 'react',;
import { useTranslation } from 'react-i18next',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
<<<<<<< HEAD
  AlertDialogTitle,;
} from "../components/ui/alert-dialog";
import {;
  useLanguage,;
  SupportedLanguage,;
  LanguageContextType,;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
<<<<<<< HEAD
  const { changeLanguage, currentLanguage, supportedLanguages } =;
    useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] =;
    useState<SupportedLanguage | null>(null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx
  useEffect(() => {;
    // Check if this is first visit;
    const hasVisited = localStorage && localStorage.getItem("zion_has_visited");
    if (hasVisited) return;
    // Mark as visited;
    localStorage && localStorage.setItem("zion_has_visitedtrue");
    // Get browser language;
    const browserLang = navigator && navigator.language.substring(0, 2) as SupportedLanguage;
    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages && supportedLanguages.some(;
      (lang) => lang && lang.code === browserLang,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx
    );
    if (isSupported && browserLang !== currentLanguage) {;
=======
  const { changeLanguage, currentLanguage, supportedLanguages } =
    useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] =
    useState<SupportedLanguage | null>(null);
  useEffect(() => {
    // Check if this is first visit
    const hasVisited = localStorage.getItem("zion_has_visited");
    if (hasVisited) return;
    // Mark as visited
    localStorage.setItem("zion_has_visitedtrue");
    // Get browser language
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage;
    // Check if browser language is supported and different from current language
    const isSupported = supportedLanguages.some(
      (lang) => lang.code === browserLang
    );
    if (isSupported && browserLang !== currentLanguage) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setDetectedLanguage(browserLang);
      setOpen(true);
    }
  }, []);
  if (!detectedLanguage) return null;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx


  const languageName =;
    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;

<<<<<<< HEAD
=======
  const handleAccept = async () => {;

    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState, useEffect } from 'react',;
import { useTranslation } from 'react-i18next',;
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle} from '../components/ui/alert-dialog',;
import { useLanguage, SupportedLanguage, LanguageContextType } from '../context/LanguageContext',;
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false),;
  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;
  useEffect(() => {;
    // Check if this is first visit;
    const hasVisited = localStorage.getItem('zion_has_visited'),;
    if (hasVisited) return,;
    // Mark as visited;
    localStorage.setItem('zion_has_visitedtrue'),;
    // Get browser language;
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage,;
    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages.some(lang => lang.code === browserLang),;
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang),;
      setOpen(true);
    }
  }, []),

  if (!detectedLanguage) return null,

  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage,
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const languageName =
    supportedLanguages.find((lang) => lang.code === detectedLanguage)?.name |
    detectedLanguage;
const handleAccept = async () => {
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const handleAccept = async () => {
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            {t('language.switch_to_detected', { language: languageName })}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-zion-slate-light">
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (


            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
{`${supportedLanguages.find((lang) => lang.code === detectedLanguage)?.flag |""} ${languageName}`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
<<<<<<< HEAD

<<<<<<< HEAD
========
  const languageName =;
    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;
  const handleAccept = async () => {;
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx
=======
  AlertDialogTitle} from '../components/ui/alert-dialog',;
import { useLanguage, SupportedLanguage, LanguageContextType } from '../context/LanguageContext',;
;
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false),;
  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;
;
  useEffect(() => {;
    // Check if this is first visit;
    const hasVisited = localStorage.getItem('zion_has_visited'),;
    if (hasVisited) return,;
;
    // Mark as visited;
    localStorage.setItem('zion_has_visitedtrue'),;
    ;
    // Get browser language;
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage,;
    ;
    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages.some(lang => lang.code === browserLang),;
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang),;
      setOpen(true),;
    }
  }, []),;
;
  if (!detectedLanguage) return null,;
;
  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage,;
;
  const handleAccept = async () => {;
    await changeLanguage(detectedLanguage),;
    setOpen(false),;
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <AlertDialog open={open} onOpenChange={setOpen}>;
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">;
        <AlertDialogHeader>;
          <AlertDialogTitle className="text-white">;
<<<<<<< HEAD
            {t("language && language.switch_to_detected", { language: languageName })}
          </AlertDialogTitle>;
          <AlertDialogDescription className="text-zion-slate-light">;
            {`${supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.flag || ""} ${languageName}`}
          </AlertDialogDescription>;
        </AlertDialogHeader>;
        <AlertDialogFooter>;
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">;
            {t("general && general.no")}
          </AlertDialogCancel>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx
          <AlertDialogAction
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark">;
            {t("general && general.yes")}
=======
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx

);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
{t("general.no")}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t("general.yes")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  );
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {t('general.no')}
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t('general.yes')}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
            {t('language.switch_to_detected', { language:languageName })}
          </AlertDialogTitle>;
          <AlertDialogDescription className="text-zion-slate-light">;
            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
          </AlertDialogDescription>;
        </AlertDialogHeader>;
        <AlertDialogFooter>;
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">;            {t('general.no')}
          </AlertDialogCancel>;
          <AlertDialogAction ;
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark";
          >;
            {t('general.yes')}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx

<<<<<<< HEAD
}

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx
import { useState, useEffect  } from './react';
import { use_translation  } from './react - i18next';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components / ui / alert - dialog';
import {
  use_language,
  SupportedLanguage,
  LanguageContextType,
} from '../context / LanguageContext';
export /**
 * LanguageDetectionPopup - Function description
 */
function LanguageDetectionPopup() {
  const [open, set_open] = useState (false);
  const { t } = use_translation ();
  const { change_language, current_language, supported_languages } =;
    use_language () as LanguageContextType;
  const [detected_language, setDetectedLanguage] =;
    useState < SupportedLanguage | null>(null);
;
  useEffect (() => {
    // Check if this is first visit;
    const has_visited = local_storage.get_item ("zion_has_visited");
    // Check condition
if (return) {
  $2
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
    // Mark as visited;
    local_storage.set_item ("zion_has_visitedtrue");
;
    // Get browser language;
    const browser_lang = navigator.language.substring (0, 2) as SupportedLanguage;
;
    // Check if browser language is supported and different from current language;
    const is_supported = supported_languages.some (
      (lang) => lang.code === browser_lang,
    );
    // Check condition
if ( {) {
  $2
}
      setDetectedLanguage (browser_lang);
      set_open (true);
    }
  }, []);
;
  // Check condition
if (return null) {
  $2
}
  const language_name =;
    supported_languages.find ((lang) => lang.code === detected_language)?.name ||;
    detected_language;
;
  const handle_accept = async () => {
    await change_language (detected_language);
    set_open (false);
  }
;
  return (
    <AlertDialog open={open} onOpenChange={set_open}>;
      <AlertDialogContent className="bg - zion - blue - dark text - white border border - zion - purple / 20">;
        <AlertDialogHeader>;
          <AlertDialogTitle className="text - white">;
            {t ("language.switch_to_detected", { language: language_name })}
          </AlertDialogTitle>;
          <AlertDialogDescription className="text - zion - slate - light">;
            {`${supported_languages.find ((lang) => lang.code === detected_language)?.flag || ""} ${language_name}`}
          </AlertDialogDescription>;
        </AlertDialogHeader>;
        <AlertDialogFooter>;
          <AlertDialogCancel className="bg - transparent text - white border border - zion - purple / 20 hover:bg - zion - purple / 10">;
            {t ("general.no")}
          </AlertDialogCancel>;
          <AlertDialogAction;
            on_click={handle_accept}
            className="bg - zion - purple text - white hover:bg - zion - purple - dark";
          >;
            {t ("general.yes")}
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),; if (!detectedLanguage) return null;
> {
  t ('general.yes') 
}</AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/LanguageDetectionPopup.tsx
=======
  );

}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
