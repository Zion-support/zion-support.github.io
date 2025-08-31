import React, { createContext, useContext } from 'react';
const defaultConfig = {
  companyName: 'Zion Tech Group',
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
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
    const mergedConfig = {
  ...defaultConfig,
  ...config 
};
    return (<WhitelabelContext.Provider value={mergedConfig}>
      {children}
    </WhitelabelContext.Provider>)};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
