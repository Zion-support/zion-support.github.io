import React, { createContext, useContext } from 'react;';

const defaultConfig = {
  companyName: 'Zion Tech Group',
  logo: '/logo.svg',
  primaryColor: '#1e40af',
  secondaryColor: '#7c3aed',
  domain: 'https://ziontechgroup.com',
  isWhitelabel: false,
  contactInfo: {
<<<<<<< HEAD
    phone: '+1 302 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 1008 Middletown DE 19709';}};
=======
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',,
  },
};
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

const WhitelabelContext = createContext(defaultConfig);

export const useWhitelabel = () => useContext(WhitelabelContext);

export const WhitelabelProvider = ({ children, config = {} }) => {;
  const mergedConfig = { ...defaultConfig, ...config };
  return (
    <WhitelabelContext.Provider value={mergedConfig}>
      {children}
    </WhitelabelContext.Provider>
  );
};<//WhitelabelContext.Provider><///WhitelabelContext.Provider>