
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

<<<<<<< HEAD
=======
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
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


export function LanguageSelector() {


import React from 'react',;
import { useTranslation } from 'react-i18next',;
import { Button } from '@/components/ui/button',;
import { Globe } from 'lucide-react',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;

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

            </div>;

          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


            className={`cursor-pointer ${;
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10';


const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const { t } = useTranslation(),
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage(),


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

            className={`cursor-pointer ${;
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10';

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
            }`}
            onClick={() => changeLanguage(lang.code)}
          >"
            <div className="flex items-center gap-2">"
              <span className="text-lg">{lang.flag}</span>`
<<<<<<< HEAD

              <span>{t(`language.${lang.code}`)}</span>
            </div>
          </DropdownMenuItem>

        ))}


=======
              <span>{t(`language.${lang.code}`)}</span>
            </div>
          </DropdownMenuItem>
        ))});
}
});
}

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


  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
