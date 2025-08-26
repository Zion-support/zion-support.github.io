import React, { createContext, useContext, useState } from 'react';

<<<<<<< HEAD
type ContactInfo = { phone: string; email: string; address: string };
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

export function WhitelabelProvider({ children, config = {} as Partial<WhitelabelConfig> }: { children: ReactNode; config?: Partial<WhitelabelConfig> }) {
	const mergedConfig: WhitelabelConfig = { ...defaultConfig, ...config, contactInfo: { ...defaultConfig.contactInfo, ...config.contactInfo } } as WhitelabelConfig;
	return <WhitelabelContext.Provider value={mergedConfig}>{children}</WhitelabelContext.Provider>;
}
=======
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
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
};

const WhitelabelContext = createContext(defaultConfig);

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

export const WhitelabelProvider = ({ children, config = {} }) => {
  const [primaryColor, setPrimaryColor] = useState(defaultConfig.primaryColor);
  const [brandName, setBrandName] = useState(defaultConfig.companyName);
  const [logo, setLogo] = useState(defaultConfig.logo);
  
  const mergedConfig = { 
    ...defaultConfig, 
    ...config,
    primaryColor,
    setPrimaryColor,
    brandName: setBrandName,
    logo,
    setLogo
  };

  return (
    <WhitelabelContext.Provider value={mergedConfig}>
      {children}
    </WhitelabelContext.Provider>
  );
};
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
