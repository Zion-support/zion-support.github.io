import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, authState }) => {
  const [language, setLanguage] = useState('en');
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const value = {
    language,
    changeLanguage,
    isLanguageDetected,
    setIsLanguageDetected,
    authState
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};