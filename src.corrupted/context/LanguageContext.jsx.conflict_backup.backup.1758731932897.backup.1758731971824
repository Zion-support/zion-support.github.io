import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

<<<<<<< HEAD
=======
export const LanguageProvider = ({ children, authState }) => {
  const [language, setLanguage] = useState('en');
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const value = {
    language,
    changeLanguage,
    isLanguageDetected,
    setIsLanguageDetected,
    authState,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

>>>>>>> cursor/create-and-deploy-new-content-c963
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

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
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
