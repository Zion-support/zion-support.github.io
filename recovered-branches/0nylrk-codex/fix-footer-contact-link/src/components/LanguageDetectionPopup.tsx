<<<<<<< HEAD
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
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
=======



import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage, supportedLanguages } =;
    useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] =;
    useState<SupportedLanguage | null>(null);
    );
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang);
      setOpen(true);
    }
  }, []);
  if (!detectedLanguage) return null;
<<<<<<< HEAD


  const languageName =;
    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;
<<<<<<< HEAD
  const handleAccept = async () => {
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
=======

  const handleAccept = async () => {;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }

<<<<<<< HEAD

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  const handleAccept = async () => {
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            {t('language.switch_to_detected', { language: languageName })}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-zion-slate-light">
            {`${supportedLanguages.find((lang) => lang.code === detectedLanguage)?.flag |""} ${languageName}`}
            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
            {t("general.no")}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleAccept}
<<<<<<< HEAD
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t("general.yes")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
);
=======
            className="bg-zion-purple text-white hover:bg-zion-purple-dark">;
            {t("general && general.yes")}
=======

);

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            {t('general.no')}
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t('general.yes')}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
=======
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
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
