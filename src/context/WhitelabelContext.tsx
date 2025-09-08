import React, { createContext, useContext, PropsWithChildren } from 'react';

type WhitelabelConfig = {
	companyName: string;
	logo: string;
	primaryColor: string;
	secondaryColor: string;
	domain: string;
	isWhitelabel: boolean;
	contactInfo: { phone: string; email: string; address: string };
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

export const WhitelabelProvider = ({ children, config = {} as Partial<WhitelabelConfig> }: PropsWithChildren<{ config?: Partial<WhitelabelConfig> }>) => {
	const mergedConfig: WhitelabelConfig = { ...defaultConfig, ...config } as WhitelabelConfig;
	return (
		<WhitelabelContext.Provider value={mergedConfig}>
			{children}
		</WhitelabelContext.Provider>
	);
};
