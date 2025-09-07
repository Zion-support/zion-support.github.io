import { useState, useEffect } from "react";"
<<<<<<< HEAD
import { useTranslation } from "react-i18next";"
=======
<<<<<<< HEAD
import { useTranslation } from "react-i18next";

=======
=======



<<<<<<< HEAD

import { useState, useEffect } from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useTranslation } from "react-i18next";

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
<<<<<<< HEAD
AlertDialogTitle,;export function LanguageDetectionPopup() {} from "../context/LanguageContext";"
export function LanguageDetectionPopup() {
}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD

export function LanguageDetectionPopup() {

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
} from "../context/LanguageContext";"
=======
<<<<<<< HEAD

} from "../context/LanguageContext";

export function LanguageDetectionPopup() {;

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

    );
    if (isSupported && browserLang !== currentLanguage) {;
    );
    if (isSupported && browserLang !== currentLanguage) {;

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
} from "../context/LanguageContext";
>>>>>>> origin/resolved-merge-conflicts
export function LanguageDetectionPopup() {;
  }
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
    // Check if this is first visit;
    const hasVisited = localStorage && localStorage.getItem("zion_has_visited");"
    if (hasVisited) return;

    // Mark as visited;
    localStorage && localStorage.setItem("zion_has_visitedtrue");"
    // Get browser language;
    const browserLang = navigator && navigator.language.substring(0, 2) as SupportedLanguage;

    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages && supportedLanguages.some(;
      (lang) => lang && lang.code === browserLang,;

    );
    if (isSupported && browserLang !== currentLanguage) {;    );
    }
    if (isSupported && browserLang !== currentLanguage) {;
<<<<<<< HEAD
      }
=======
<<<<<<< HEAD
    );
    if (isSupported && browserLang !== currentLanguage) {;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      setDetectedLanguage(browserLang);
      setOpen(true);
    }
  }, []);
<<<<<<< HEAD
  if (!detectedLanguage) return null;    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
import { useState, useEffect } from 'react';'
import { useTranslation } from 'react-i18next';'
=======
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    await changeLanguage(detectedLanguage);

    setOpen(false);
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from 'react';'
import { useTranslation } from 'react-i18next';'
  }
=======

<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useTranslation } from 'react-i18next',;
>>>>>>> origin/resolved-merge-conflicts
import {;
  }
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
    }
  }, []),

  if (!detectedLanguage) return null,
<<<<<<< HEAD
  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage,
  const handleAccept = async () => {
    }
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },
            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}  const languageName =;`    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
=======
<<<<<<< HEAD

  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage,

=======
<<<<<<< HEAD

  const languageName = $2;
=======

  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage,

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleAccept = async () => {}
    await changeLanguage(detectedLanguage),
    setOpen(false)
  },
<<<<<<< HEAD

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

    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages.some(lang => lang.code === browserLang),;
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang),;

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

            className="bg-zion-purple text-white hover:bg-zion-purple-dark">;

            {t("general && general.yes")});

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
=======
=======

<<<<<<< HEAD
  const languageName =
    supportedLanguages.find((lang) => lang.code === detectedLanguage)?.name |
>>>>>>> origin/resolved-merge-conflicts
    detectedLanguage;

  const handleAccept = async () => {;
    }
    await changeLanguage(detectedLanguage);
    setOpen(false);
  const languageName = $2;
  const handleAccept = async () => {
    await changeLanguage($2);
    setOpen(false)
  },

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            {t('language.switch_to_detected', { language: languageName})}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-zion-slate-light">
            {`${supportedLanguages.find((lang) => lang.code === detectedLanguage)?.flag |""} ${languageName}`}
<<<<<<< HEAD
=======
            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
<<<<<<< HEAD
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
<<<<<<< HEAD
=======
<<<<<<< HEAD
            {t("general.no")}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleAccept}
=======
<<<<<<< HEAD
  const languageName =;
    supportedLanguages && supportedLanguages.find((lang) => lang && lang.code === detectedLanguage)?.name ||;
    detectedLanguage;
  const handleAccept = async () => {;
    await changeLanguage(detectedLanguage);
    setOpen(false);
  }
<<<<<<< HEAD
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
=======
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
>>>>>>> merged-prs-20250907-203621
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t("general.yes")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
<<<<<<< HEAD
  )
}
=======

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
>>>>>>> origin/resolved-merge-conflicts
  }export function LanguageDetectionPopup() {;
  }
  const [open, setOpen] = useState(false),;
  const { t } = useTranslation(),;
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType,;
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null),;            {t('general.no')}'
          </AlertDialogCancel>;
          <AlertDialogAction;
<<<<<<< HEAD
            onClick={handleAccept}
            className="bg-zion-purple text-white "hover":bg-zion-purple-dark""
          >
            {t('general.yes')}'
=======
            onClick={handleAccept}"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark">;"
</AlertDialogAction>
          </AlertDialogCancel>;
          <AlertDialogAction;
            onClick={handleAccept}"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark""
          >
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;
    </AlertDialog>;
<<<<<<< HEAD
  );    // Mark as visited;
    local_storage.set_item ("zion_has_visitedtrue");"
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
    // Mark as visited;

    local_storage.set_item ("zion_has_visitedtrue");

>>>>>>> origin/resolved-merge-conflicts
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
}
  ),; if (!detectedLanguage) return null;
> {
  }
  t ('general.yes')'
}</AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>)
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ),; if (!detectedLanguage) return null;
> {
  t ('general.yes') 
}</AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog>) 
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});

});
}
}
=======
>>>>>>> origin/resolved-merge-conflicts
}
  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

});
}
}