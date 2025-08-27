import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-white hover:text-zion-cyan transition-colors cursor-pointer"
      >
        <Globe className="w-4 h-4"/>
        <span className="text-sm font-medium">{currentLang?.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800 z-50">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                  currentLanguage === language.code
                    ? 'text-zion-cyan bg-gray-800/50'
                    : 'text-white hover:text-zion-cyan hover:bg-gray-800/30'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
