<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d



import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
AlertDialogTitle,;
=======
<<<<<<< HEAD
AlertDialogTitle,;
=======
  AlertDialogTitle,
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
} from "../components/ui/alert-dialog";
import {
  useLanguage,
  SupportedLanguage,
  LanguageContextType,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {
=======
=======
import { useState, useEffect } from 'react',;
import { useTranslation } from 'react-i18next',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  AlertDialogTitle,;
} from "../components/ui/alert-dialog";
import {;
  useLanguage,;
  SupportedLanguage,;
  LanguageContextType,;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
} from "../context/LanguageContext";

export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const { changeLanguage, currentLanguage, supportedLanguages } =;
    useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] =;
    useState<SupportedLanguage | null>(null);
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  useEffect(() => {;
    // Check if this is first visit;
    const hasVisited = localStorage && localStorage.getItem("zion_has_visited");
    if (hasVisited) return;
<<<<<<< HEAD

    // Mark as visited;
    localStorage && localStorage.setItem("zion_has_visitedtrue");

    // Get browser language;
    const browserLang = navigator && navigator.language.substring(0, 2) as SupportedLanguage;

    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages && supportedLanguages.some(;
      (lang) => lang && lang.code === browserLang,;

    );
    if (isSupported && browserLang !== currentLanguage) {;
=======
    // Mark as visited;
    localStorage && localStorage.setItem("zion_has_visitedtrue");
    // Get browser language;
    const browserLang = navigator && navigator.language.substring(0, 2) as SupportedLanguage;
    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages && supportedLanguages.some(;
      (lang) => lang && lang.code === browserLang,;
    );
    if (isSupported && browserLang !== currentLanguage) {;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    );
    if (isSupported && browserLang !== currentLanguage) {;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setDetectedLanguage(browserLang);
      setOpen(true);
    }
  }, []);
  if (!detectedLanguage) return null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
  const handleAccept = async () => {;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }

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

  const handleAccept = async () => {
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },
<<<<<<< HEAD


            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
=======


            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const languageName =;
    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;

  const handleAccept = async () => {;
<<<<<<< HEAD

    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
=======


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
=======
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
  return (
  AlertDialogTitle} from '../components/ui/alert-dialog',;
import { useLanguage, SupportedLanguage, LanguageContextType } from '../context/LanguageContext',;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false),;
  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;
<<<<<<< HEAD
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  useEffect(() => {;
    // Check if this is first visit;
    const hasVisited = localStorage.getItem('zion_has_visited'),;
    if (hasVisited) return,;
<<<<<<< HEAD
    // Mark as visited;
    localStorage.setItem('zion_has_visitedtrue'),;
    // Get browser language;
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage,;
=======
;
    // Mark as visited;
    localStorage.setItem('zion_has_visitedtrue'),;
    ;
    // Get browser language;
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage,;
    ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages.some(lang => lang.code === browserLang),;
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang),;
<<<<<<< HEAD
      setOpen(true);
    }
  }, []),

  if (!detectedLanguage) return null,

  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage,


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  const handleAccept = async () => {
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (


            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
<<<<<<< HEAD
);
=======

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

          <AlertDialogAction
            onClick={handleAccept}
=======
);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            className="bg-zion-purple text-white hover:bg-zion-purple-dark">;
            {t("general && general.yes")}

);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            {t('general.no')}
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t('general.yes')}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>;
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
  ),; if (!detectedLanguage) return null;
> {
  t ('general.yes') 
}</AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) 
}
  );

}

  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
