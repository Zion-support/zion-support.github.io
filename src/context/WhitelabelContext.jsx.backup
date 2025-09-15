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
<<<<<<< HEAD
  const [whitelabelConfig, setWhitelabelConfig] = useState({
    brandName: 'Zion Tech Group',
    logo: '/logo.png',
    primaryColor: '#1e40af',
    secondaryColor: '#3b82f6',
  });

  const updateConfig = (newConfig) => {
    setWhitelabelConfig(prev => ({ ...prev, ...newConfig }));
  };

  const value = {
    whitelabelConfig,
    updateConfig,
=======
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
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};