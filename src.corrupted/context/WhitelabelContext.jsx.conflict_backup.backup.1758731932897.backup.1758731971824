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
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
