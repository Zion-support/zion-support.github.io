import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children, authState }) => {
  const [language, setLanguage] = useState('en');
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  useEffect(() => {
    // Detect user language preference
    const detectedLanguage = navigator.language.split('-')[0] || 'en';
    setLanguage(detectedLanguage);
    setIsLanguageDetected(true);
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
  };

  const value = {
    language,
    changeLanguage,
    isLanguageDetected,
    authState,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};