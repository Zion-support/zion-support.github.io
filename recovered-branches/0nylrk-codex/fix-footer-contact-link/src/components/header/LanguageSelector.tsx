<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/LanguageSelector.tsx

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {
=======
import {
DropdownMenu
=======
import {
  DropdownMenu
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
<<<<<<< HEAD
=======
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
export function LanguageSelector() {;
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from 'react',
import { useTranslation } from 'react-i18next',
import { Button } from '@/components/ui/button',
import { Globe } from 'lucide-react',
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext',

export function LanguageSelector() {
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
<<<<<<< HEAD
=======

import React from 'react',;
import { useTranslation } from 'react-i18next',;
import { Button } from '@/components/ui/button',;
import { Globe } from 'lucide-react',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/LanguageSelector.tsx
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
<<<<<<< HEAD
  DropdownMenuTrigger,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/LanguageSelector.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/LanguageSelector.tsx
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
export function LanguageSelector() {;
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  return (
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-zion-purple/10">;
          <Globe className="h-5 w-5" />;
          <span className="sr-only">{t("general && general.select_language")}</span>;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent
        align="end"
        className="bg-zion-blue-dark border border-zion-purple/20">;
        {supportedLanguages && supportedLanguages.map((lang) => (;
          <DropdownMenuItem
            key={lang && lang.code}
            className={`cursor-pointer ${
              currentLanguage === lang && lang.code
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10"
            }`}
            onClick={() => changeLanguage(lang && lang.code)}
          >;
            <div className="flex items-center gap-2">;
              <span className="text-lg">{lang && lang.flag}</span>;
              <span>{t(`language.${lang && lang.code}`)}</span>;
=======
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',;
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext',;
;
export function LanguageSelector() {;
  const { t } = useTranslation(),;
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage(),;
;
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button variant="ghost" size="icon" className="text-white hover:bg-zion-purple/10">;
          <Globe className="h-5 w-5" />;
          <span className="sr-only">{t('general.select_language')}</span>;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align="end" className="bg-zion-blue-dark border border-zion-purple/20">;
        {supportedLanguages.map((lang) => (;
          <DropdownMenuItem;
            key={lang.code}
            className={`cursor-pointer ${;
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' :'text-white hover:bg-zion-purple/10';
            }`}
            onClick={() => changeLanguage(lang.code)}
          >;
            <div className="flex items-center gap-2">;
              <span className="text-lg">{lang.flag}</span>;
              <span>{t(`language.${lang.code}`)}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>;
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
<<<<<<< HEAD
  );
import React from './react';
import { use_translation  } from './react - i18next';
import { Button  } from '@/components / ui / button';
import { Globe  } from './lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
import { use_language, SupportedLanguage  } from '@/context / LanguageContext';
export /**
 * LanguageSelector - Function description
 */
function LanguageSelector() {
  const { t } = use_translation ();
  const { current_language, change_language, supported_languages } = use_language ();
;
=======
import {

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <DropdownMenu>;
      <DropdownMenuTrigger as_child>;
        <Button;
          variant="ghost";
          size="icon";
          className="text - white hover:bg - zion - purple / 10";
        >;
          <Globe className="h - 5 w - 5" />;
          <span className="sr - only">{t ("general.select_language")}</span>;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;
        align="end";
        className="bg - zion - blue - dark border border - zion - purple / 20";
      >;
        {supported_languages.map ((lang) => (
          <DropdownMenuItem;
            key={lang.code}

<<<<<<< HEAD
=======

            className={`cursor-pointer ${;
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
=======
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const { t } = useTranslation(),
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage(),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-zion-purple/10">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t('general.select_language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zion-blue-dark border border-zion-purple/20">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
<<<<<<< HEAD
className={`cursor-pointer ${
              currentLanguage === lang.code
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10"

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            className={`cursor-pointer ${
              currentLanguage === lang.code
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10"
            className={`cursor-pointer ${;
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            }`}
            onClick={() => changeLanguage(lang.code)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span>{t(`language.${lang.code}`)}</span>
            </div>
          </DropdownMenuItem>
        ))}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
      </DropdownMenuContent>
    </DropdownMenu>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </DropdownMenuContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/LanguageSelector.tsx
    </DropdownMenu>;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  );
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
========
    </DropdownMenu>);
}
=======
  ),;}
 return (<DropdownMenu> <DropdownMenuTrigger asChild> key= {
  lang.code 
}className= {
  `cursor-pointer $ {
  currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10' 
}` 
}onClick= {
  () => changeLanguage (lang.code) 
}> </div> </DropdownMenuItem>) ) 
}</DropdownMenuContent> </DropdownMenu>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/header/LanguageSelector.tsx
=======
</DropdownMenuContent>
    </DropdownMenu>

  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
