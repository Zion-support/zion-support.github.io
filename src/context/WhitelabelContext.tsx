import React, { createContext, useContext, useState } from 'react';

<<<<<<< HEAD
interface WhitelabelConfig {companyName: string; logo: string; primaryColor: string; secondaryColor: string; domain: string; isWhitelabel: boolean; contactInfo: {,}
interface WhitelabelConfig {
companyName: string; logo: string; primaryColor: string; secondaryColor: string; domain: string; isWhitelabel: boolean; contactInfo: {,
phone: string; email: string; address: string};
=======
interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  brandName: string;
  setBrandName: (name: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export function WhitelabelProvider({ children }: { children: React.ReactNode }) {
  const [isWhitelabel] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6');
  const [brandName, setBrandName] = useState('Zion Tech Group');
  const [logo, setLogo] = useState('');

<<<<<<< HEAD
interface WhitelabelProviderProps {children: ReactNode;
}
}
interface WhitelabelProviderProps {
children: ReactNode;
config?: Partial<WhitelabelConfig>};
export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ ;
children;
config = {}
}) => {
const mergedConfig = { ...defaultConfig, ...config };
=======
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
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e

export function useWhitelabel() {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
}