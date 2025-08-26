import React, { createContext, useContext, ReactNode } from 'react';
interface WhitelabelConfig {
  companyName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  domain: string;
  isWhitelabel: boolean;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}
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
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
};
const WhitelabelContext = createContext<WhitelabelConfig>(defaultConfig);
<<<<<<< HEAD:src/context/WhitelabelContext.tsx

// Explicitly type the return value so consumers get accurate typings when
// destructuring properties from the hook result.
export const useWhitelabel = (): WhitelabelContextType =>
  useContext(WhitelabelContext);

=======
export const useWhitelabel = () => useContext(WhitelabelContext);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/WhitelabelContext.tsx
interface WhitelabelProviderProps {
  children: ReactNode;
  config?: Partial<WhitelabelConfig>;
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
