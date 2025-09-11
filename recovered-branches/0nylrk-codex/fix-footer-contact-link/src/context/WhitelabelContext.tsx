
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useWhitelabelTenant, WhitelabelTenant } from '@/hooks/useWhitelabelTenant';
export interface WhitelabelContextType {


    headline: string,
    subtitle: string,
    cta: string;
  };


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

=======


export const useWhitelabel = (): WhitelabelContextType => {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const context = useContext(WhitelabelContext);
  if (!context) {;
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }



export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {;


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

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react',;
import { useWhitelabelTenant, WhitelabelTenant } from '@/hooks/useWhitelabelTenant',;
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
  },;
  tenant: WhitelabelTenant | null;
}
;
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
const WhitelabelContext = createContext<WhitelabelContextType | null>(null),;
export const useWhitelabel = (): WhitelabelContextType => {;
  const context = useContext(WhitelabelContext),;
  if (!context) {;
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
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

    </WhitelabelContext && WhitelabelContext.Provider>;
  );
};

=======
import React, { create_context, useContext, useState, useEffect, ReactNode } from 'react';
import {useWhitelabelTenant, WhitelabelTenant} from '@/hooks / useWhitelabelTenant';
export interface WhitelabelContextType {
  is_whitelabel: boolean,
  primary_color: string,
  logo_url: string | null,
  brand_name: string,
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup',
  landingPageCopy: {
    headline: string,
    subtitle: string,
    cta: string;
  }
  tenant: WhitelabelTenant | null;
}
const default_context: WhitelabelContextType = {
  is_whitelabel: false,
  primary_color: '#9b87f5', // Default Zion purple;
  logo_url: null,
  brand_name: 'Zion AI Marketplace',
  theme_preset: 'light',
  landingPageCopy: {
    headline: 'AI Talent Marketplace',
    subtitle: 'Find the best AI talent for your projects',
    cta: 'Get Started'},
  tenant: null},
// The context may be undefined if the provider is not mounted.  By declaring;
// the generic as `WhitelabelContextType | null` we get proper type checking;
// without falling back to an empty object which triggers TS2740 errors.;
const WhitelabelContext = create_context < WhitelabelContextType | null>(null);
;
export const use_whitelabel = (): WhitelabelContextType => {
  const context = useContext (WhitelabelContext);
  // Check condition
if ( {) {
  $2
}
    throw new Error ('use_whitelabel must be used within a WhitelabelProvider');
  }
  // Cast is used here because the context default is `null` until provided by;
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.;
  return context as WhitelabelContextType;
}
;
interface WhitelabelProviderProps {
  children: ReactNode;
}
export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) =>: any {
  const [context_value, setContextValue] = useState < WhitelabelContextType>(default_context);
  const { tenant, is_loading } = useWhitelabelTenant ();
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      setContextValue ({
        is_whitelabel: true,
        primary_color: tenant.primary_color,
        logo_url: tenant.logo_url,
        brand_name: tenant.brand_name,
        theme_preset: tenant.theme_preset,
        landingPageCopy: tenant.landing_page_copy,
        tenant: tenant});
    } else // Check condition
if ( {) {
  $2
}
      setContextValue (default_context);
    }
  }, [tenant, is_loading]);
;
  return (
    <WhitelabelContext.Provider value={context_value}>;
      {children}

    </WhitelabelContext.Provider>;
  );
};



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
