import React, { createContext, useContext, useState } from 'react';

const WhitelabelContext = createContext(undefined);

export function WhitelabelProvider({ children }) {
  const [isWhitelabel] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6');
  const [brandName, setBrandName] = useState('Zion Tech Group');
  const [logo, setLogo] = useState('');

  const value = {
    isWhitelabel,
    primaryColor,
    setPrimaryColor,
    brandName,
    setBrandName,
    logo,
    setLogo
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
}

export function useWhitelabel() {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
}