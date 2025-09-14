<<<<<<< HEAD
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
=======
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useWhitelabelTenant, WhitelabelTenant } from '@/hooks/useWhitelabelTenant';

export interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  logoUrl: string | null;
  brandName: string;
  themePreset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landingPageCopy: {
    headline: string;
    subtitle: string;
    cta: string;
  };
  tenant: WhitelabelTenant | null;
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
    cta: 'Get Started'},
  tenant: null};

// The context may be undefined if the provider is not mounted.  By declaring
// the generic as `WhitelabelContextType | null` we get proper type checking
// without falling back to an empty object which triggers TS2740 errors.
const WhitelabelContext = createContext<WhitelabelContextType | null>(null);

export const useWhitelabel = (): WhitelabelContextType => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  // Cast is used here because the context default is `null` until provided by
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.
  return context as WhitelabelContextType;
};

interface WhitelabelProviderProps {
  children: ReactNode;
}

export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext);
  const { tenant, isLoading } = useWhitelabelTenant();

  useEffect(() => {
    if (!isLoading && tenant) {
      setContextValue({
        isWhitelabel: true,
        primaryColor: tenant.primary_color,
        logoUrl: tenant.logo_url,
        brandName: tenant.brand_name,
        themePreset: tenant.theme_preset,
        landingPageCopy: tenant.landing_page_copy,
        tenant: tenant});
    } else if (!isLoading) {
      setContextValue(defaultContext);
    }
  }, [tenant, isLoading]);

  return (
    <WhitelabelContext.Provider value={contextValue}>
      {children}
    </WhitelabelContext.Provider>
  );
};
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-e03a
