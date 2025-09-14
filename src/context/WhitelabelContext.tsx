import React, { createContext, useContext, ReactNode } from 'react';

<<<<<<< HEAD
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
=======
type ContactInfo = {
  phone: string;
  email: string;
  address: string;
};

export type WhitelabelConfig = {
  companyName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  domain: string;
  isWhitelabel: boolean;
  contactInfo: ContactInfo;
};

const defaultConfig: WhitelabelConfig = {
  companyName: 'Zion Tech Group',
  logo: '/logo.svg',
  primaryColor: '#1e40af',
  secondaryColor: '#7c3aed',
  domain: 'https://ziontechgroup.com',
  isWhitelabel: false,
  contactInfo: {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  },
};

const WhitelabelContext = createContext<WhitelabelConfig>(defaultConfig);

export const useWhitelabel = () => useContext(WhitelabelContext);

export function WhitelabelProvider({ 
  children, 
  config = {} as Partial<WhitelabelConfig> 
}: { 
  children: ReactNode; 
  config?: Partial<WhitelabelConfig> 
}) {
  const mergedConfig: WhitelabelConfig = { 
    ...defaultConfig, 
    ...config, 
    contactInfo: { 
      ...defaultConfig.contactInfo, 
      ...config.contactInfo 
    } 
  } as WhitelabelConfig;
  
  return (
    <WhitelabelContext.Provider value={mergedConfig}>
      {children}
    </WhitelabelContext.Provider>
  );
}
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-fbe9
