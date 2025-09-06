
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
<<<<<<< HEAD
import { useWhitelabelTenant, WhitelabelTenant } from '@/hooks/useWhitelabelTenant';
export interface WhitelabelContextType {

  isWhitelabel: boolean
  primaryColor: string
  logoUrl: string | null
  brandName: string
  themePreset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup'
  landingPageCopy: {
    headline: string
    subtitle: string

    cta: string
  }
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
=======
import {useWhitelabelTenant, WhitelabelTenant} from '@/hooks/useWhitelabelTenant';

export interface WhitelabelContextType {;
  isWhitelabel: boolean,;
  primaryColor: string,;
  logoUrl: string | null,;
  brandName: string,;
  themePreset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup',;
  landingPageCopy: {;
    headline: string,;
    subtitle: string,;
    cta: string;
  };
  tenant: WhitelabelTenant | null;
}

const defaultContext: WhitelabelContextType = {;
  isWhitelabel: false,;
  primaryColor: '#9b87f5', // Default Zion purple;
  logoUrl: null,;
  brandName: 'Zion AI Marketplace',;
  themePreset: 'light',;
  landingPageCopy: {;
    headline: 'AI Talent Marketplace',;
    subtitle: 'Find the best AI talent for your projects',;
    cta: 'Get Started'},;
  tenant: null},;

// The context may be undefined if the provider is not mounted.  By declaring;
// the generic as `WhitelabelContextType | null` we get proper type checking;
// without falling back to an empty object which triggers TS2740 errors.;
const WhitelabelContext = createContext<WhitelabelContextType | null>(null);

export const useWhitelabel = (): WhitelabelContextType => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const context = useContext(WhitelabelContext);
  if (!context) {;
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
<<<<<<< HEAD
  // Cast is used here because the context default is `null` until provided by
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.
  return context as WhitelabelContextType
}
interface WhitelabelProviderProps {
  children: ReactNode
}
export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {
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
=======
  // Cast is used here because the context default is `null` until provided by;
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.;
  return context as WhitelabelContextType;
};

interface WhitelabelProviderProps {;
  children: ReactNode;
}

export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {;
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext);
  const { tenant, isLoading } = useWhitelabelTenant();

  useEffect(() => {;
    if (!isLoading && tenant) {;
      setContextValue({;
        isWhitelabel: true,;
        primaryColor: tenant && tenant.primary_color,;
        logoUrl: tenant && tenant.logo_url,;
        brandName: tenant && tenant.brand_name,;
        themePreset: tenant && tenant.theme_preset,;
        landingPageCopy: tenant && tenant.landing_page_copy,;
        tenant: tenant});
    } else if (!isLoading) {;
      setContextValue(defaultContext);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }, [tenant, isLoading]);
  return (
    <WhitelabelContext && WhitelabelContext.Provider value={contextValue}>;
      {children}
<<<<<<< HEAD
    </WhitelabelContext.Provider>
  )
}

=======
    </WhitelabelContext && WhitelabelContext.Provider>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
