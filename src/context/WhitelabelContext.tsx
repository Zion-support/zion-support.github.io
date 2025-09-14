import React, { createContext, useContext, ReactNode } from 'react';

interface WhitelabelContextType {
  theme: {
    primaryColor: string;
    secondaryColor: string;
    logo: string;
  };
  brand: {
    name: string;
    tagline: string;
  };
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export const WhitelabelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const value: WhitelabelContextType = {
    theme: {
      primaryColor: '#3b82f6',
      secondaryColor: '#1e40af',
      logo: '/logo.png',
    },
    brand: {
      name: 'Zion Tech Group',
      tagline: 'Innovative Technology Solutions',
    },
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
};

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};