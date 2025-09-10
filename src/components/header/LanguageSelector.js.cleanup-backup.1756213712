<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
export function LanguageSelector() {
=======
import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
export const LanguageSelector = () => {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
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
<<<<<<< HEAD
        { code: 'KO', name: '한국어', flag: '🇰🇷' },
=======
        { code: 'KO', name: '한국어', flag: '🇰🇷' }
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
    ];
    const handleLanguageChange = (languageCode) => {
        setCurrentLanguage(languageCode);
        setIsOpen(false);
<<<<<<< HEAD
        // Here you would typically call a function to change the app's language
        console.log(`Language changed to: ${languageCode}`);
    };
    const currentLang = languages.find(lang => lang.code === currentLanguage);
    return (_jsxs("div", { className: "relative", children: [_jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setIsOpen(!isOpen), className: "text-zion-cyan hover:bg-zion-cyan/10", "aria-expanded": isOpen, "aria-label": "Language selector", children: [_jsx(Globe, { className: "w-4 h-4 mr-2" }), currentLang === null || currentLang === void 0 ? void 0 : currentLang.flag, " ", currentLang === null || currentLang === void 0 ? void 0 : currentLang.code] }), isOpen && (_jsx("div", { className: "absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg py-2 z-50 max-h-64 overflow-y-auto", children: languages.map((language) => (_jsxs("button", { onClick: () => handleLanguageChange(language.code), className: `flex items-center w-full px-4 py-2 text-left transition-colors ${language.code === currentLanguage
                        ? 'bg-zion-blue text-white'
                        : 'text-zion-slate-light hover:bg-zion-blue hover:text-white'}`, children: [_jsx("span", { className: "mr-3", children: language.flag }), _jsx("span", { className: "mr-2", children: language.code }), _jsx("span", { className: "text-sm", children: language.name })] }, language.code))) }))] }));
}
=======
        // Here you would typically implement language change logic
    };
    const currentLang = languages.find(lang => lang.code === currentLanguage);
    return (<div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-3 py-2 text-white hover:text-zion-cyan transition-colors cursor-pointer">
        <Globe className="w-4 h-4"/>
        <span className="text-sm font-medium">{currentLang?.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
      </button>

      {isOpen && (<div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-800 z-50">
          <div className="py-2">
            {languages.map((language) => (<button key={language.code} onClick={() => handleLanguageChange(language.code)} className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${currentLanguage === language.code
                    ? 'text-zion-cyan bg-gray-800/50'
                    : 'text-white hover:text-zion-cyan hover:bg-gray-800/30'}`}>
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>))}
          </div>
        </div>)}
    </div>);
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
