import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WhitelabelContextType {
  brandName: string;
  setBrandName: (name: string) => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export const WhitelabelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [brandName, setBrandName] = useState('Zion Tech Group');
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');

  return (
    <WhitelabelContext.Provider value={{ brandName, setBrandName, primaryColor, setPrimaryColor }}>
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