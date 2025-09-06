



import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
<<<<<<< HEAD
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
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
            </div>;
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
=======
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
DropdownMenuTrigger,;
} from "@/components/ui/dropdown-menu";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
<<<<<<< HEAD
export function LanguageSelector() {;
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


            className={`cursor-pointer ${;
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            }`}
            onClick={() => changeLanguage(lang.code)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span>{t(`language.${lang.code}`)}</span>
            </div>
          </DropdownMenuItem>
        ))}

      </DropdownMenuContent>;
    </DropdownMenu>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}