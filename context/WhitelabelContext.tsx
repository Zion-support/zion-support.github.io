import React, { createContext, useContext, ReactNode } from 'react';

interface WhitelabelContextType {
  isWhitelabel: boolean;
  brandName: string;
  logo: string;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(
  undefined
);

interface WhitelabelProviderProps {
  children: ReactNode;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({
  children,
}) => {
  const value = {
    isWhitelabel: false,
    brandName: 'Zion Tech Group',
    logo: '/logos/zion-logo.png',
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
