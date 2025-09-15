import React, { createContext, useContext, useState } from 'react';

const WhitelabelContext = createContext();

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

export const WhitelabelProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const [branding, setBranding] = useState({
    logo: '/logo.png',
    companyName: 'Zion Tech Group',
    primaryColor: '#6366f1'
  });

  const value = {
    theme,
    setTheme,
    branding,
    setBranding
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};