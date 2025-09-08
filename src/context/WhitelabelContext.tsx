
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
		address: '364 E Main St STE 1008 Middletown DE 19709',
	},
};

const WhitelabelContext = createContext(defaultConfig);
export const useWhitelabel = () => useContext(WhitelabelContext);

export function WhitelabelProvider({ children, config = {} }) {
	const mergedConfig = { ...defaultConfig, ...config, contactInfo: { ...defaultConfig.contactInfo, ...config.contactInfo } };
	return <WhitelabelContext.Provider value={mergedConfig}>{children}</WhitelabelContext.Provider>;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ 
  children, 
  config = {} 
}) => {
  const mergedConfig = { ...defaultConfig, ...config };

  return (
    <WhitelabelContext.Provider value={mergedConfig}>
      {children}
    </WhitelabelContext.Provider>
  );
};
=======
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  brandName: string;
  setBrandName: (name: string) => void;
  logo: string;
  setLogo: (logo: string) => void;
}

const defaultContext: WhitelabelContextType = {
  isWhitelabel: false,
  primaryColor: '#9b87f5', // Default Zion purple
  logoUrl: null,
  brandName: 'Zion AI Marketplace',
  themePreset: 'light',
  landingPageCopy: {
    headline: 'AI Talent Marketplace',
    subtitle: 'Find the best AI talent for your projects',
    cta: 'Get Started',
  },
  tenant: null,
};

const WhitelabelContext = createContext<WhitelabelContextType>(defaultContext);

export const useWhitelabel = () =>
  useContext<WhitelabelContextType>(WhitelabelContext);

interface WhitelabelProviderProps {
  children: ReactNode;
}

export function WhitelabelProvider({ children }: WhitelabelProviderProps) {
  const [isWhitelabel] = useState(false); // Set to true for white-label instances
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6'); // Default Zion purple
  const [brandName, setBrandName] = useState('Zion Tech Group');
  const [logo, setLogo] = useState('');

  const value: WhitelabelContextType = {
    isWhitelabel,
    primaryColor,
    setPrimaryColor,
    brandName,
    setBrandName,
    logo,
    setLogo,
  };

  return (
    <WhitelabelContext.Provider value={value}>
      {children}
    </WhitelabelContext.Provider>
  );
}

export function useWhitelabel(): WhitelabelContextType {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
}
