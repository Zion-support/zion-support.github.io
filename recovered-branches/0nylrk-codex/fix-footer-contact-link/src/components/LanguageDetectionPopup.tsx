<<<<<<< HEAD

=======
import { useState, useEffect } from "react";"

import { useTranslation } from "react-i18next";
>>>>>>> origin/cursor/delete-old-data-records-6bba

  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {


export function LanguageDetectionPopup() {

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  }
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;


<<<<<<< HEAD
  useEffect(() => {;
=======
export function LanguageDetectionPopup() {;
  }
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Check if this is first visit;
    const hasVisited = localStorage && localStorage.getItem("zion_has_visited");"
    if (hasVisited) return;

<<<<<<< HEAD
=======
    // Mark as visited;
    localStorage && localStorage.setItem("zion_has_visitedtrue");"
    // Get browser language;
    const browserLang = navigator && navigator.language.substring(0, 2) as SupportedLanguage;

    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages && supportedLanguages.some(;
      (lang) => lang && lang.code === browserLang,;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    );
    if (isSupported && browserLang !== currentLanguage) {;    );
    }
    if (isSupported && browserLang !== currentLanguage) {;
<<<<<<< HEAD
=======
      }
    );
    if (isSupported && browserLang !== currentLanguage) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

      setDetectedLanguage(browserLang);
      setOpen(true);
    }
  }, []);
<<<<<<< HEAD

  if (!detectedLanguage) return null;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


    await changeLanguage(detectedLanguage);

    setOpen(false);
  }
<<<<<<< HEAD



=======

import { useState, useEffect } from 'react';'
import { useTranslation } from 'react-i18next';'
  }


import { useTranslation } from 'react-i18next',;
import {;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle} from '../components/ui/alert-dialog',;'
import { useLanguage, SupportedLanguage, LanguageContextType } from '../context/LanguageContext',;'
export function LanguageDetectionPopup() {;
  }
  const [open, setOpen] = useState(false),;
  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;
  useEffect(() => {;
    // Check if this is first visit;
    }
    const hasVisited = localStorage.getItem('zion_has_visited'),;'
    if (hasVisited) return,;
    // Mark as visited;
    localStorage.setItem('zion_has_visitedtrue'),;'
    // Get browser language;
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage,;
    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages.some(lang => { return lang.code === browserLang),; }
    if (isSupported && browserLang !== currentLanguage) {;
      }
      setDetectedLanguage(browserLang),;
      setOpen(true);
<<<<<<< HEAD


=======
  AlertDialogTitle} from '../components/ui/alert-dialog',
import { useLanguage, SupportedLanguage, LanguageContextType } from '../context/LanguageContext';
export function LanguageDetectionPopup() {
  const [open, setOpen] = useState($2);
  const { t } = useTranslation($2);
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),

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
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage, supportedLanguages } =
    useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] =
    useState<SupportedLanguage | null>(null);
  useEffect(() => {
    // Check if this is first visit
    const hasVisited = localStorage.getItem($2);
    if (hasVisited) return,

    // Mark as visited
    localStorage.setItem($2);
    // Get browser language
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage,
    
    // Check if browser language is supported and different from current language
    const isSupported = supportedLanguages.some($2);
    if (isSupported && browserLang !== currentLanguage) {
      setDetectedLanguage($2);
      setOpen(true)
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  }, []),

  if (!detectedLanguage) return null,


  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage,

<<<<<<< HEAD



=======
  const handleAccept = async () => {}
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },


  const languageName =
    supportedLanguages.find((lang) => lang.code === detectedLanguage)?.name |
    detectedLanguage;

  const handleAccept = async () => {;
    }
    await changeLanguage(detectedLanguage);
    setOpen(false);
  const languageName = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleAccept = async () => {
    await changeLanguage($2);
    setOpen(false)
  },

<<<<<<< HEAD





    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;

  const handleAccept = async () => {;

    await changeLanguage(detectedLanguage);
    setOpen(false);

  }
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false),;


  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;


=======
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            {t('language.switch_to_detected', { language: languageName})}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-zion-slate-light">
            {`${supportedLanguages.find((lang) => lang.code === detectedLanguage)?.flag |""} ${languageName}`}

  return (
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <AlertDialogAction

            onClick={handleAccept}

            className="bg-zion-purple text-white hover:bg-zion-purple-dark">;
<<<<<<< HEAD

            {t("general && general.yes")}


            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t("general.yes")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>


            {t('general.no')}

          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >'
=======

            {t("general && general.yes")});

            {t('general.no')}
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t("general.yes")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
  }export function LanguageDetectionPopup() {;
  }
  const [open, setOpen] = useState(false),;
  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;            {t('general.no')}'
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}
            className="bg-zion-purple text-white "hover":bg-zion-purple-dark""
          >
            {t('general.yes')}'
</AlertDialogAction>
          </AlertDialogTitle>;"
          <AlertDialogDescription className="text-zion-slate-light">;"
</AlertDialogDescription>
          </AlertDialogDescription>;
        </AlertDialogHeader>;
        <AlertDialogFooter>;
</AlertDialogFooter>"
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">;            {t('general.no')}'
</AlertDialogCancel>
          </AlertDialogCancel>;
          <AlertDialogAction ;
            onClick={handleAccept}'
            className="bg-zion-purple text-white hover:bg-zion-purple-dark";"
          >;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {t('general.yes')}


          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>;


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
  );    // Mark as visited;
    local_storage.set_item ("zion_has_visitedtrue");
    useState < SupportedLanguage | null>(null);
;
  useEffect (() => {
    // Check if this is first visit;"
    const has_visited = local_storage.get_item ("zion_has_visited");"
    // Check condition;
if (return) {
  $2

  );


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
    // Mark as visited;

    local_storage.set_item ("zion_has_visitedtrue");

;
    // Get browser language;
    const browser_lang = navigator.language.substring (0, 2) as SupportedLanguage;
;
    // Check if browser language is supported and different from current language;
const is_supported = supported_languages.some (;
      (lang) => lang.code === browser_lang,
    );
    // Check condition,
if ( {) {
  $2
}
      setDetectedLanguage (browser_lang);
      set_open (true);
    }
  }, []);
;
  // Check condition,
if (return null) {
  $2
}
  const language_name =;
    supported_languages.find ((lang) => lang.code === detected_language)?.name ||;
    detected_language;
;
  const handle_accept = async () => {
    }
    await change_language (detected_language);
    set_open (false);
  }
;
return (;
    <AlertDialog open={open} onOpenChange={set_open}>;
      <AlertDialogContent className="bg - zion - blue - dark text - white border border - zion-purple / 20">;"
        <AlertDialogHeader>;
          <AlertDialogTitle className="text-white">;"
            {t ("language.switch_to_detected", { "language": language_name })}"
          </AlertDialogTitle>;
          <AlertDialogDescription className="text - zion - slate-light">;"
            {`${supported_languages.find ((lang) => lang.code === detected_language)?.flag || ""} ${language_name}`}`
          </AlertDialogDescription>;
        </AlertDialogHeader>;
        <AlertDialogFooter>;
          <AlertDialogCancel className="bg - transparent text - white border border - zion - purple / 20 "hover":bg - zion-purple / 10">;"
            {t ("general.no")}"
          </AlertDialogCancel>;
          <AlertDialogAction;
            on_click={handle_accept}
            className="bg - zion - purple text - white "hover":bg - zion - purple-dark";"
          >;
            {t ("general.yes")}"
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>);

<<<<<<< HEAD



=======

  ),; if (!detectedLanguage) return null;
> {
  t ('general.yes') 
}</AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) 

});

});
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
