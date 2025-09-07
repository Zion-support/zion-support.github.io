<<<<<<< HEAD
=======
<<<<<<< HEAD
=======




<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
<<<<<<< HEAD
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";

import React from 'react',
import { useTranslation } from 'react-i18next',
import { Button } from '@/components/ui/button',
import { Globe } from 'lucide-react',
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext';
export function LanguageSelector() {
  const { t } = useTranslation($2);
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage($2);
=======
<<<<<<< HEAD
import {
DropdownMenu
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
export function LanguageSelector() {;
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export function LanguageSelector() {


import React from 'react',;
import { useTranslation } from 'react-i18next',;
import { Button } from '@/components/ui/button',;
import { Globe } from 'lucide-react',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
<<<<<<< HEAD
  DropdownMenuTrigger,;

import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;

=======
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function LanguageSelector() {;
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
import React from 'react',
import { useTranslation } from 'react-i18next',
import { Button } from '@/components/ui/button',

import { Globe } from 'lucide-react',
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,'
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu','
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext',

export function LanguageSelector() {};
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </div>;

          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      >;
        {supported_languages.map ((lang) => (
</DropdownMenu>
      <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>
        <Button;'
          variant="ghost"""
          size="icon"""
          className="text-white hover:bg-zion-purple/10">;"
</Button>"
          <Globe className="h-5 w-5" />;"
</Globe>)"
          <span className="sr-only">{t("general && general.select_language")}</span>;"
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;"
        align="end"""
        className="bg-zion-blue-dark border border-zion-purple/20">;"
</DropdownMenuContent>
          <DropdownMenuItem;
            key={lang && lang.code}
            className={`cursor-pointer ${
              currentLanguage === lang && lang.code;"
                ? "bg-zion-purple/20 text-zion-cyan"""
                : "text-white hover:bg-zion-purple/10""
            }`}
            onClick={() => changeLanguage(lang && lang.code)}
</DropdownMenuItem>"
            <div className="flex items-center gap-2">;"
</div>"
              <span className="text-lg">{lang && lang.flag}</span>;"
              <span>{t(`language.${lang && lang.code}`)}</span>;
            </div>;
          </DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;
    <DropdownMenu>;
</DropdownMenu>
      <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>
        <Button;"
          variant="ghost";""
          size="icon";""
          className="text - white hover:bg - zion - purple / 10";"
        >;
</Button>"
          <Globe className="h - 5 w - 5" />;"
</Globe>"
          <span className="sr - only">{t ("general.select_language")}</span>;"
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;"
        align="end";""
        className="bg - zion - blue - dark border border - zion - purple / 20";"
      >;
</DropdownMenuContent>
          <DropdownMenuItem;
            key={lang.code}

<<<<<<< HEAD
=======

            className={`cursor-pointer ${;
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10';


const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const { t } = useTranslation(),
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage(),

>>>>>>> merged-prs-20250907-203621
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
            className={`cursor-pointer ${
              currentLanguage === lang.code
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10"
<<<<<<< HEAD
            }`}
            onClick={() => changeLanguage(lang.code)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
=======
            className={`cursor-pointer ${;
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }`}
            onClick={() => changeLanguage(lang.code)}
          >"
            <div className="flex items-center gap-2">"
              <span className="text-lg">{lang.flag}</span>`
>>>>>>> merged-prs-20250907-203621
              <span>{t(`language.${lang.code}`)}</span>
            </div>
          </DropdownMenuItem>
<<<<<<< HEAD
        ))});
}
});
}
=======
        ))}
<<<<<<< HEAD
      </DropdownMenuContent>
    </DropdownMenu>
  )
=======
<<<<<<< HEAD
      </DropdownMenuContent>
    </DropdownMenu>
      </DropdownMenuContent>;
  );
}
    </DropdownMenu>);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
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
<<<<<<< HEAD
=======

  );
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  );
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
