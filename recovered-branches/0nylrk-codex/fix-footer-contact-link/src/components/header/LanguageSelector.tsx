
<<<<<<< HEAD
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
  const { t } = useTranslation(),
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage(),

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant=&quot;ghost&quot; size=&quot;icon&quot; className=&quot;text-white hover:bg-zion-purple/10&quot;>
          <Globe className=&quot;h-5 w-5&quot; />
          <span className=&quot;sr-only&quot;>{t('general.select_language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align=&quot;end&quot; className=&quot;bg-zion-blue-dark border border-zion-purple/20&quot;>
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
=======
import React from 'react',;
import { useTranslation } from 'react-i18next',;
import { Button } from '@/components/ui/button',;
import { Globe } from 'lucide-react',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',;
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext',;
export function LanguageSelector() {;
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            key={lang.code}
            className={`cursor-pointer ${;
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10';
            }`}
            onClick={() => changeLanguage(lang.code)}
<<<<<<< HEAD
          >
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-lg&quot;>{lang.flag}</span>
              <span>{t(`language.${lang.code}`)}</span>
            </div>
          </DropdownMenuItem>
=======
          >;
            <div className="flex items-center gap-2">;
              <span className="text-lg">{lang.flag}</span>;
              <span>{t(`language.${lang.code}`)}</span>;
            </div>;
          </DropdownMenuItem>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
;