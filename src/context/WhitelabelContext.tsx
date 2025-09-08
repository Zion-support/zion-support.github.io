import React, { createContext, useContext, useState } from 'react';

interface WhitelabelContextType {
  theme: string;
  setTheme: (theme: string) => void;
  brandName: string;
  setBrandName: (name: string) => void;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export const WhitelabelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const [brandName, setBrandName] = useState('Zion');

  return (
    <WhitelabelContext.Provider value={{ theme, setTheme, brandName, setBrandName }}>
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