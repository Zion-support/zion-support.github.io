import React, { createContext, useContext, useState } from 'react';

const defaultConfig = {
  companyName: 'Zion Tech Group',
  logo: '/logo.svg',
  primaryColor: '#1e40af',
  secondaryColor: '#7c3aed',
  domain: 'https://ziontechgroup.com',
  isWhitelabel: false,
  primaryColor: '#22ddd2', // Default Zion cyan
});

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

const WhitelabelContext = createContext(defaultConfig);

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

export const WhitelabelProvider = ({ children, config = {} }) => {
  const [primaryColor, setPrimaryColor] = useState(defaultConfig.primaryColor);
  const [brandName, setBrandName] = useState(defaultConfig.companyName);
  const [logo, setLogo] = useState(defaultConfig.logo);
  
  const mergedConfig = { 
    ...defaultConfig, 
    ...config,
    primaryColor,
    setPrimaryColor,
    brandName: setBrandName,
    logo,
    setLogo
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};