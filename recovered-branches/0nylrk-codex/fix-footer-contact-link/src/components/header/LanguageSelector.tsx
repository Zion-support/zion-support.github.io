
import React from 'react';
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from '@/components/ui/dropdown-menu';

export function LanguageSelector() {_const { t} = useTranslation();
  const {_currentLanguage, _changeLanguage, _supportedLanguages} = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-zion-purple/10">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{_t('general.select_language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zion-blue-dark border border-zion-purple/20">
        {_supportedLanguages.map(_(lang) => (_<DropdownMenuItem
            key={lang.code}
            className={_`cursor-pointer ${
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10'}`}
            onClick={_() => changeLanguage(lang.code)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{_lang.flag}</span>
              <span>{_t(`language.${lang.code}`)}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
