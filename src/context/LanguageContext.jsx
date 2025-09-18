// Language context
import React, { createContext, useContext } from 'react';
const LanguageContext = createContext();
export const LanguageProvider = ({ children, authState }) => {
  const value = {
    language: 'en',
    setLanguage: () => {},
    authState: authState || { isAuthenticated: false, user: null }
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);
