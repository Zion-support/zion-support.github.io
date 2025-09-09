import React, { createContext, useContext, useState } from 'react';
const LanguageContext = createContext(undefined);
export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');
    const translations = {
        en: {
            'welcome': 'Welcome',
            'get_started': 'Get Started',
            'learn_more': 'Learn More',
            'contact_us': 'Contact Us'
        },
        es: {
            'welcome': 'Bienvenido',
            'get_started': 'Comenzar',
            'learn_more': 'Saber Más',
            'contact_us': 'Contáctanos'
        }
    };
    const t = (key) => {
        return translations[language]?.[key] || key;
    };
    const isRTL = language === 'ar' || language === 'he';
    return React.createElement(LanguageContext.Provider, { value: { language, setLanguage, t, isRTL } }, children);
}
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
