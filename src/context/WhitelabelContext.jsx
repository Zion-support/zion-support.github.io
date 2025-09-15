import React, { createContext, useContext, useState } from 'react';

const WhitelabelContext = createContext();

export const WhitelabelProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const [branding, setBranding] = useState({
    logo: '/logo.png',
    companyName: 'Zion Tech Group',
    primaryColor: '#1e40af'
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

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};