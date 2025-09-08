import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
export function LanguageSelector() {
        { code: 'KO', name: '한국어', flag: '🇰🇷' },
        // Here you would typically call a function to change the app's language
        console.log(`Language changed to: ${languageCode}`);
    };
    const currentLang = languages.find(lang => lang.code === currentLanguage);
    return (_jsxs("div", { className: "relative", children: [_jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setIsOpen(!isOpen), className: "text-zion-cyan hover:bg-zion-cyan/10", "aria-expanded": isOpen, "aria-label": "Language selector", children: [_jsx(Globe, { className: "w-4 h-4 mr-2" }), currentLang === null || currentLang === void 0 ? void 0 : currentLang.flag, " ", currentLang === null || currentLang === void 0 ? void 0 : currentLang.code] }), isOpen && (_jsx("div", { className: "absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg py-2 z-50 max-h-64 overflow-y-auto", children: languages.map((language) => (_jsxs("button", { onClick: () => handleLanguageChange(language.code), className: `flex items-center w-full px-4 py-2 text-left transition-colors ${language.code === currentLanguage
                        ? 'bg-zion-blue text-white'
                        : 'text-zion-slate-light hover:bg-zion-blue hover:text-white'}`, children: [_jsx("span", { className: "mr-3", children: language.flag }), _jsx("span", { className: "mr-2", children: language.code }), _jsx("span", { className: "text-sm", children: language.name })] }, language.code))) }))] }));
}
