<<<<<<< HEAD
<<<<<<< HEAD

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
=======
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
AlertDialogTitle,;
} from "../components/ui/alert-dialog";
import {
  useLanguage,
  SupportedLanguage,
  LanguageContextType,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {
=======
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;
} from "../components/ui/alert-dialog";
import {;
  useLanguage,;
  SupportedLanguage,;
  LanguageContextType,;
} from "../context/LanguageContext";

export function LanguageDetectionPopup() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage, supportedLanguages } =;
    useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] =;
    useState<SupportedLanguage | null>(null);


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

    );
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang);
      setOpen(true);
    }
  }, []);
  if (!detectedLanguage) return null;


  const languageName =;
    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;
<<<<<<< HEAD
  const handleAccept = async () => {
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  const handleAccept = async () => {
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (


            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}


          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">

    <AlertDialog open={open} onOpenChange={setOpen}>;
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">;
        <AlertDialogHeader>;
          <AlertDialogTitle className="text-white">;
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

          <AlertDialogAction
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t("general.yes")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
<<<<<<< HEAD
  );
}
=======

);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            {t('general.no')}
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t('general.yes')}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}