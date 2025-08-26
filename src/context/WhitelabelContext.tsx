<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const WhitelabelContext = createContext(undefined);
export function WhitelabelProvider({ children }) {
    const [isWhitelabel] = useState(false); // Set to true for white-label instances
    const [primaryColor, setPrimaryColor] = useState('#8B5CF6'); // Default Zion purple
    const [brandName, setBrandName] = useState('Zion Tech Group');
    const [logo, setLogo] = useState('');
    const value = {
        isWhitelabel,
        primaryColor,
        setPrimaryColor,
        brandName,
        setBrandName,
        logo,
        setLogo,
    };
    return (_jsx(WhitelabelContext.Provider, { value: value, children: children }));
}
export function useWhitelabel() {
    const context = useContext(WhitelabelContext);
    if (context === undefined) {
        throw new Error('useWhitelabel must be used within a WhitelabelProvider');
    }
    return context;
}
=======
import React, { createContext, useContext } from 'react';
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
export const useWhitelabel = () => useContext(WhitelabelContext);
export const WhitelabelProvider = ({ children, config = {} }) => {
    const mergedConfig = { ...defaultConfig, ...config };
    return (<WhitelabelContext.Provider value={mergedConfig}>
      {children}
    </WhitelabelContext.Provider>);
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
