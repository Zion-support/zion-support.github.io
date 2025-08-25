<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Globe } from 'lucide-react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

export function LanguageSelector() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 text-white hover:text-zion-cyan transition-colors cursor-pointer">
      <Globe className="w-4 h-4" />
      <span className="hidden sm:inline">EN</span>
<<<<<<< HEAD
=======
=======
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'IT', name: 'Italiano', flag: '🇮🇹' },
    { code: 'PT', name: 'Português', flag: '🇵🇹' },
    { code: 'RU', name: 'Русский', flag: '🇷🇺' },
    { code: 'ZH', name: '中文', flag: '🇨🇳' },
    { code: 'JA', name: '日本語', flag: '🇯🇵' },
    { code: 'KO', name: '한국어', flag: '🇰🇷' },
  ];

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    setIsOpen(false);
    // Here you would typically call a function to change the app's language
    console.log(`Language changed to: ${languageCode}`);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-zion-cyan hover:bg-zion-cyan/10"
        aria-expanded={isOpen}
        aria-label="Language selector"
      >
        <Globe className="w-4 h-4 mr-2" />
        {currentLang?.flag} {currentLang?.code}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg py-2 z-50 max-h-64 overflow-y-auto">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`flex items-center w-full px-4 py-2 text-left transition-colors ${
                language.code === currentLanguage
                  ? 'bg-zion-blue text-white'
                  : 'text-zion-slate-light hover:bg-zion-blue hover:text-white'
              }`}
            >
              <span className="mr-3">{language.flag}</span>
              <span className="mr-2">{language.code}</span>
              <span className="text-sm">{language.name}</span>
            </button>
          ))}
        </div>
      )}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    </div>
  );
}