<<<<<<< HEAD
import { useState, useEffect } from "react";"
=======



<<<<<<< HEAD

import { useState, useEffect } from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
AlertDialogTitle,;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
import { useState, useEffect } from 'react',;
import { useTranslation } from 'react-i18next',;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

} from "../components/ui/alert-dialog";
import {}
  useLanguage,
  SupportedLanguage,;
  LanguageContextType,;

} from "../context/LanguageContext";
export function LanguageDetectionPopup() {
<<<<<<< HEAD

export function LanguageDetectionPopup() {

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
<<<<<<< HEAD

=======
<<<<<<< HEAD
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
=======
  AlertDialogTitle,;
} from "../components/ui/alert-dialog";
import {;
  useLanguage,;
  SupportedLanguage,;
  LanguageContextType,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from "../context/LanguageContext";

export function LanguageDetectionPopup() {;

  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage, supportedLanguages } =;
    useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] =;
    useState<SupportedLanguage | null>(null);

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

    );
    if (isSupported && browserLang !== currentLanguage) {;
<<<<<<< HEAD
    );
    if (isSupported && browserLang !== currentLanguage) {;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setDetectedLanguage(browserLang);
      setOpen(true);
    }
  }, []);
<<<<<<< HEAD
=======
  if (!detectedLanguage) return null;
<<<<<<< HEAD
=======


  const languageName =;
    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleAccept = async () => {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    await changeLanguage(detectedLanguage);

    setOpen(false);
  }
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react';'
import { useTranslation } from 'react-i18next';'
  }
=======

=======


  const languageName =
    supportedLanguages.find((lang) => lang.code === detectedLanguage)?.name |
    detectedLanguage;
  const handleAccept = async () => {
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
import { useState, useEffect } from 'react',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useTranslation } from 'react-i18next',;
import {;
>>>>>>> origin/chore/fix-lint-and-merge
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;'
  AlertDialogTitle} from '../components/ui/alert-dialog',;'
import { useLanguage, SupportedLanguage, LanguageContextType } from '../context/LanguageContext',;
export function LanguageDetectionPopup() { return null; }
  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;
  useEffect(() => {;
    // Check if this is first visit;'
    const hasVisited = localStorage.getItem('zion_has_visited'),;
    if (hasVisited) return,;
    // Mark as visited;'
    localStorage.setItem('zion_has_visitedtrue'),;
    // Get browser language;
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage,;
    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages.some(lang => lang.code === browserLang),;
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang),;
      setOpen(true);
<<<<<<< HEAD
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
  useLanguage
  SupportedLanguage
  LanguageContextType
} from "../context/LanguageContext";
export function LanguageDetectionPopup() {;
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
    }
  }, []),

  if (!detectedLanguage) return null,

  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage,

<<<<<<< HEAD
  const handleAccept = async () => {}
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },
=======

<<<<<<< HEAD
  const languageName =
    supportedLanguages.find((lang) => lang.code === detectedLanguage)?.name |
    detectedLanguage;
const handleAccept = async () => {
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const handleAccept = async () => {
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },
<<<<<<< HEAD

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            {t('language.switch_to_detected', { language: languageName })}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-zion-slate-light">
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;

  const handleAccept = async () => {;

    await changeLanguage(detectedLanguage);
    setOpen(false);
<<<<<<< HEAD
  const languageName = $2;
    await changeLanguage($2);
    setOpen(false)
  },
=======
  }
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false),;
>>>>>>> origin/chore/fix-lint-and-merge

  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;

<<<<<<< HEAD
=======
<<<<<<< HEAD
{`${supportedLanguages.find((lang) => lang.code === detectedLanguage)?.flag |""} ${languageName}`}
            {`${supportedLanguages.find((lang) => lang.code === detectedLanguage)?.flag |""} ${languageName}`}
            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
<<<<<<< HEAD
  const languageName =;
    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;
  const handleAccept = async () => {;
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages.some(lang => lang.code === browserLang),;
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang),;
<<<<<<< HEAD

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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <AlertDialog open={open} onOpenChange={setOpen}>;
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">;
        <AlertDialogHeader>;
          <AlertDialogTitle className="text-white">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <AlertDialogAction

            onClick={handleAccept}

            className="bg-zion-purple text-white hover:bg-zion-purple-dark">;
<<<<<<< HEAD
=======
            {t("general && general.yes")}
<<<<<<< HEAD
{t("general.no")}
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
);
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            {t("general && general.yes")});

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {t('general.no')}
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
            {t('general.yes')}
<<<<<<< HEAD

          </AlertDialogTitle>;
          <AlertDialogDescription className="text-zion-slate-light">;
            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
  AlertDialogTitle,;"
} from "../components/ui/alert-dialog";"
import {;
  useLanguage,;
  SupportedLanguage,;
  LanguageContextType,;"
} from "../context/LanguageContext";"
export function LanguageDetectionPopup() {;
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const { changeLanguage, currentLanguage, supportedLanguages } =
    useLanguage() as LanguageContextType;

  const [detectedLanguage, setDetectedLanguage] =;
    useState<SupportedLanguage | null>(null);
</SupportedLanguage>
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;
</SupportedLanguage>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
<<<<<<< HEAD
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
  }export function LanguageDetectionPopup() {;
  }
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;            {t('general.no')}'
=======
</AlertDialogFooter>"
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">"
</AlertDialogCancel>
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;
</SupportedLanguage>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
</AlertDialogFooter>"
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">"
</AlertDialogCancel>
    <AlertDialog open={open} onOpenChange={setOpen}>;
</AlertDialog>"
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">;"
</AlertDialogContent>
        <AlertDialogHeader>;
</AlertDialogHeader>"
          <AlertDialogTitle className="text-white">;"
</AlertDialogTitle>
          </AlertDialogTitle>;"
          <AlertDialogDescription className="text-zion-slate-light">;"
</AlertDialogDescription>
          </AlertDialogDescription>;
        </AlertDialogHeader>;
        <AlertDialogFooter>;
</AlertDialogFooter>"
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">;"
</AlertDialogCancel>
>>>>>>> origin/chore/fix-lint-and-merge
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark">;"
</AlertDialogAction>
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark""
          >
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
            {t('general.yes')}

=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  $2;
}
      setDetectedLanguage (browser_lang);
      set_open (true);
    }
  }, []);
;

  $2;
}
  const language_name =;
    supported_languages.find ((lang) => lang.code === detected_language)?.name ||;
    detected_language;
;
  const handle_accept = async () => {}
    await change_language (detected_language);
    set_open (false);
  }
;
  return (

            {t ("general.yes")}
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>);
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ),; if (!detectedLanguage) return null;
> {
  t ('general.yes') 
}</AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) 
<<<<<<< HEAD
});

});
}
}
=======
}
  );

}

  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
