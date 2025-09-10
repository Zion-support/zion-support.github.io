import React, { createContext, useContext } from 'react';

const defaultWhitelabelContext = {
    isWhitelabel: false,
    companyName: 'Zion Tech Group',
    brandName: 'Zion Tech Group',
    logo: '/logo.svg',
    brandLogo: '/logo.svg',
    primaryColor: '#1e40af',
    secondaryColor: '#7c3aed',
    domain: 'https://ziontechgroup.com',
    contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
    }
};

const WhitelabelContext = createContext(defaultWhitelabelContext);

export const useWhitelabel = () => {
    const context = useContext(WhitelabelContext);
    if (!context) {
        throw new Error('useWhitelabel must be used within a WhitelabelProvider');
    }
    return context;
};

export const WhitelabelProvider = ({ children, value = {} }) => {
    const contextValue = { ...defaultWhitelabelContext, ...value };
    return (
        <WhitelabelContext.Provider value={contextValue}>
            {children}
        </WhitelabelContext.Provider>
    );
};
