import React, { createContext, useContext, useState } from 'react';
const LanguageProvider({ children }) {
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

    };
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const t = (key) => {
        return translations[language]?.[key] || key};
    const isRTL = language === 'ar' || language === 'he';
    return (<LanguageContext.Provider value = {
  { language, setLanguage, t,
  isRTL 






}}>
      {children}
<<<<<<< HEAD
    </LanguageContext.Provider>);

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');

    return context;
}}}}
=======
    </LanguageContext.Provider>)}
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')}
    return context}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
