import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe } from 'lucide-react';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

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

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
    // Implement language change logic here
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:block">{currentLanguage?.flag}</span>
        <span className="hidden sm:block text-sm">{currentLanguage?.code}</span>
        <ChevronDown className="w-3 h-3" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
          <div className="p-2">
            <div className="px-3 py-2 border-b border-zion-purple/20">
              <p className="text-sm font-medium text-white">Select Language</p>
            </div>
            <div className="py-1 max-h-60 overflow-y-auto">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-md transition-colors ${
                    selectedLanguage === language.code
                      ? 'text-zion-cyan bg-zion-purple/20'
                      : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                  {selectedLanguage === language.code && (
                    <span className="ml-auto text-zion-cyan">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}