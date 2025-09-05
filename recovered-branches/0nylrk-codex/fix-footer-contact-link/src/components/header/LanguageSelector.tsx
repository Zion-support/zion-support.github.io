
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
=======
import React from 'react';
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from '@/components/ui/dropdown-menu';

export function LanguageSelector() {_const { t} = useTranslation();
  const {_currentLanguage, _changeLanguage, _supportedLanguages} = useLanguage();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
        <Button variant=&quot;ghost&quot; size=&quot;icon&quot; className=&quot;text-white hover:bg-zion-purple/10&quot;>
          <Globe className=&quot;h-5 w-5&quot; />
          <span className=&quot;sr-only&quot;>{t('general.select_language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align=&quot;end&quot; className=&quot;bg-zion-blue-dark border border-zion-purple/20&quot;>
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
=======
        <Button variant="ghost" size="icon" className="text-white hover:bg-zion-purple/10">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{_t('general.select_language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zion-blue-dark border border-zion-purple/20">
        {_supportedLanguages.map(_(lang) => (_<DropdownMenuItem
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            key={lang.code}
            className={_`cursor-pointer ${
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10'}`}
            onClick={_() => changeLanguage(lang.code)}
          >
<<<<<<< HEAD
            <div className=&quot;flex items-center gap-2&quot;>
              <span className=&quot;text-lg&quot;>{lang.flag}</span>
              <span>{t(`language.${lang.code}`)}</span>
=======
            <div className="flex items-center gap-2">
              <span className="text-lg">{_lang.flag}</span>
              <span>{_t(`language.${lang.code}`)}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
