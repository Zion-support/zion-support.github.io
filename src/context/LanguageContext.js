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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-60a7
export const useLanguage = () => useContext(LanguageContext);
