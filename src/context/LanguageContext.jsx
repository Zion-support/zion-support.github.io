import React, { createContext, useContext, useState } from 'react;';

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {;
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      welcome: 'Welcome';
      get_started: 'Get Started';
      learn_more: 'Learn More';
<<<<<<< HEAD
      contact_us: 'Contact Us';},
=======
      contact_us: 'Contact Us';
    },
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
    es: {
      welcome: 'Bienvenido';
      get_started: 'Comenzar';
      learn_more: 'Saber Más';
<<<<<<< HEAD
      contact_us: 'Contáctanos';}};
=======
      contact_us: 'Contáctanos';
    },
  };
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

  const t = (key) => translations[language]?.[key] || key;
  const isRTL = language === 'ar' || language === 'he';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {;
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}<//LanguageContext.Provider><///LanguageContext.Provider>