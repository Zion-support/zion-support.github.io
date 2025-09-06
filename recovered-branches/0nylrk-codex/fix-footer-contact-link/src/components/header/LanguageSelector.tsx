<<<<<<< HEAD



<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD

import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;

=======
import {
DropdownMenu
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
<<<<<<< HEAD
=======
=======
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function LanguageSelector() {;
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
<<<<<<< HEAD
=======

=======
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
<<<<<<< HEAD
  const { t } = useTranslation(),
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage(),
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </div>;
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
=======
import React from './react';
import { use_translation  } from './react - i18next';
import { Button  } from '@/components / ui / button';
import { Globe  } from './lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
DropdownMenuTrigger,;
=======
  DropdownMenuTrigger,
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

      </DropdownMenuContent>;
    </DropdownMenu>;
=======
      </DropdownMenuContent>
    </DropdownMenu>
      </DropdownMenuContent>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
}
}
<<<<<<< HEAD
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
</DropdownMenuContent>
    </DropdownMenu>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  );
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
