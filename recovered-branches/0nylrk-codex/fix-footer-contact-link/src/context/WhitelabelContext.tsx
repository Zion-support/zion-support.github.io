
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useWhitelabelTenant, WhitelabelTenant } from '@/hooks/useWhitelabelTenant';
export interface WhitelabelContextType {

=======

    cta: string
  }
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    headline: string,
    subtitle: string,
    cta: string;
  };
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  tenant: WhitelabelTenant | null
}

const defaultContext: WhitelabelContextType = {
  isWhitelabel: false
  primaryColor: '#9b87f5', // Default Zion purple
  logoUrl: null
  brandName: 'Zion AI Marketplace'
  themePreset: 'light'
  landingPageCopy: {
    headline: 'AI Talent Marketplace'
    subtitle: 'Find the best AI talent for your projects'
    cta: 'Get Started'}
  tenant: null}
// The context may be undefined if the provider is not mounted.  By declaring
// the generic as `WhitelabelContextType | null` we get proper type checking
// without falling back to an empty object which triggers TS2740 errors.
const WhitelabelContext = createContext<WhitelabelContextType | null>(null);
export const useWhitelabel = (): WhitelabelContextType => {

export const useWhitelabel = (): WhitelabelContextType => {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')
  }
  // Cast is used here because the context default is `null` until provided by
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.
  return context as WhitelabelContextType
}
interface WhitelabelProviderProps {
  children: ReactNode
}
export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {


export const useWhitelabel = (): WhitelabelContextType => {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const context = useContext(WhitelabelContext);
  if (!context) {;
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext);
  const { tenant, isLoading } = useWhitelabelTenant();
  useEffect(() => {
    if (!isLoading && tenant) {
      setContextValue({
        isWhitelabel: true
        primaryColor: tenant.primary_color
        logoUrl: tenant.logo_url
        brandName: tenant.brand_name
        themePreset: tenant.theme_preset
        landingPageCopy: tenant.landing_page_copy
        tenant: tenant})
    } else if (!isLoading) {
      setContextValue(defaultContext)
    }
  }, [tenant, isLoading]);
  return (
    <WhitelabelContext.Provider value={contextValue}>
      {children}
    </WhitelabelContext.Provider>
  )
}

    }
  }, [tenant, isLoading]);
  return (
    <WhitelabelContext && WhitelabelContext.Provider value={contextValue}>;
      {children}

    </WhitelabelContext && WhitelabelContext.Provider>;
  );
};

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
