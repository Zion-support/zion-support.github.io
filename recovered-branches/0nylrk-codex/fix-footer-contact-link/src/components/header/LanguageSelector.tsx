
<<<<<<< HEAD
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD

import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
<<<<<<< HEAD
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react";"
import { useTranslation } from "react-i18next";"
import { Button } from "@/components/ui/button";"
import { Globe } from "lucide-react";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,'
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu','
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext',

export function LanguageSelector() {};
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
<<<<<<< HEAD
<<<<<<< HEAD
  const { t } = useTranslation(),
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage(),
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
);} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";

  return (
    <DropdownMenu>;
      <DropdownMenuTrigger as_child>;
<Button;
          variant="ghost";
          size="icon";
          className="text - white hover:bg - zion-purple / 10";
        >;
          <Globe className="h - 5 w-5" />;
          <span className="sr-only">{t ("general.select_language")}</span>;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;
        align="end";
<<<<<<< HEAD
        className="bg - zion - blue - dark border border - zion-purple / 20";
=======
        className="bg - zion - blue - dark border border - zion-purple / 20";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            }`}
            onClick={() => changeLanguage(lang.code)}
          >"
            <div className="flex items-center gap-2">"
              <span className="text-lg">{lang.flag}</span>`
              <span>{t(`language.${lang.code}`)}</span>
            </div>
          </DropdownMenuItem>
        ))}

  );
}
}  );
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

=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // TODO: Implement
}
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext',;
export function LanguageSelector() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  return (
    <DropdownMenu>;

      <DropdownMenuTrigger asChild>;

        <Button;
          variant="ghost"""
          size="icon"""
          className="text-white hover:bg-zion-purple/10">;"
"
          <Globe className="h-5 w-5" />;"
)"
          <span className="sr-only">{t("general && general.select_language")}</span>;"
        ;
      <DropdownMenuContent;"
        align="end"""
        className="bg-zion-blue-dark border border-zion-purple/20">;"

          <DropdownMenuItem;
            key={lang && lang.code}
            className={`cursor-pointer ${
              currentLanguage === lang && lang.code;"
                ? "bg-zion-purple/20 text-zion-cyan"""
                : "text-white hover:bg-zion-purple/10""`;
            }`}
            onClick={() => changeLanguage(lang && lang.code)}
            <div className="flex items-center gap-2">;"
</DropdownMenuItem>"
            <div className="flex items-center gap-2">"
</div>"
              <span className="text-lg">{lang && lang.flag}</span>;"`;
              <span>{t(`language.${lang && lang.code}`)}</span>;
            </div>;

      <DropdownMenuTrigger as_child>;

        <Button;"
          variant="ghost";""
          size="icon";""
          className="text - white hover:bg - zion - purple / 10";"
        >;
          <Globe className="h - 5 w - 5" />;"
          <span className="sr - only">{t ("general.select_language")}</span>;"
        align="end";""
        className="bg - zion - blue - dark border border - zion - purple / 20";"

            key={lang.code}`;
            onClick={() => changeLanguage(lang.code)}
            <div className="flex items-center gap-2">"
              <span className="text-lg">{lang.flag}</span>"`;
              <span>{t(`language.${lang.code}`)}</span>
            </div>
 return (<DropdownMenu> <DropdownMenuTrigger asChild> key= {
)
}> </div> ) ) 
} ) 

    "`;
pr-12325
</DropdownMenu>)
}> </div> </DropdownMenuItem>) ) 
}</DropdownMenuContent> </DropdownMenu>) 
</DropdownMenuContent>
    </DropdownMenu>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
