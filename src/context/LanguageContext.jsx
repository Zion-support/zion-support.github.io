import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');
<<<<<<< HEAD
    
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

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    const t = (key) => {
        return translations[language]?.[key] || key;
    };

    const isRTL = language === 'ar' || language === 'he';
<<<<<<< HEAD

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
=======
    return (<LanguageContext.Provider value = {
  { language, setLanguage, t,
  isRTL 
}}>
      {children}
    </LanguageContext.Provider>)}
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')}
    return context}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
