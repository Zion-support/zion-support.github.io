// Whitelabel context
import React, { createContext, useContext } from 'react';

const WhitelabelContext = createContext();

export const WhitelabelProvider = ({ children }) => {
  const value = {
    theme: 'default',
    branding: {}
  };
  
  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};

export const useWhitelabel = () => useContext(WhitelabelContext);