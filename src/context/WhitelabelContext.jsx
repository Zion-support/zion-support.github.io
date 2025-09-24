import React, { createContext, useContext, useState } from 'react';

const WhitelabelContext = createContext();

<<<<<<< HEAD
export const WhitelabelProvider = ({ children }) => {
  const [whitelabelConfig, setWhitelabelConfig] = useState({
    brandName: 'Zion Tech Group',
    logo: '/logo.png',
    primaryColor: '#1e40af',
    secondaryColor: '#3b82f6',
    theme: 'default'
  });

  const updateConfig = (newConfig) => {
    setWhitelabelConfig(prev => ({ ...prev, ...newConfig }));
  };

  return (
    <WhitelabelContext.Provider value={{ whitelabelConfig, updateConfig }}>
      {children}
    </WhitelabelContext.Provider>
  );
};

=======
>>>>>>> cursor/create-and-deploy-new-content-7720
export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
<<<<<<< HEAD
=======
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
>>>>>>> cursor/create-and-deploy-new-content-7720
};