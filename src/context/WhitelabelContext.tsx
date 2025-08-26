import React, { createContext, useContext, useState } from 'react';

const defaultConfig = {
  companyName: 'Zion Tech Group',
  logo: '/logo.svg',
  primaryColor: '#1e40af',
  secondaryColor: '#7c3aed',
  domain: 'https://ziontechgroup.com',
  isWhitelabel: false,
  contactInfo: {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
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
    <WhitelabelContext.Provider value={mergedConfig}>
      {children}
    </WhitelabelContext.Provider>
  );
};
