<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const defaultWhitelabelContext = {
    isWhitelabel: false,
    brandName: 'Zion Tech Group',
    brandLogo: '/logo.png',
    primaryColor: '#3B82F6'
};
const WhitelabelContext = createContext(defaultWhitelabelContext);
export const useWhitelabel = () => {
    const context = useContext(WhitelabelContext);
    if (!context) {
        throw new Error('useWhitelabel must be used within a WhitelabelProvider');
    }
    return context;
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
>>>>>>> origin/chore/fix-links-and-build
};
export const WhitelabelProvider = ({ children, value = {} }) => {
    const contextValue = Object.assign(Object.assign({}, defaultWhitelabelContext), value);
    return (_jsx(WhitelabelContext.Provider, { value: contextValue, children: children }));
};
