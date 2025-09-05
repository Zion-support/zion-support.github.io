
<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react',
import { useWhitelabelTenant, WhitelabelTenant } from '@/hooks/useWhitelabelTenant',

export interface WhitelabelContextType {
  isWhitelabel: boolean,
  primaryColor: string,
  logoUrl: string | null,
  brandName: string,
  themePreset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup',
  landingPageCopy: {
    headline: string,
    subtitle: string,
    cta: string
  },
  tenant: WhitelabelTenant | null
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
  tenant: null},
=======
import React, {_createContext, _useContext, _useState, _useEffect, _ReactNode} from 'react';

export interface WhitelabelContextType {_isWhitelabel: boolean;
  primaryColor: string;
  logoUrl: string | null;
  brandName: string;
  themePreset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landingPageCopy: {
    headline: string;
    subtitle: string;
    cta: string;};
  tenant: WhitelabelTenant | null;
}

const defaultContext: WhitelabelContextType = {_isWhitelabel: false, _primaryColor: '#9b87f5', _// Default Zion purple
  logoUrl: null, _brandName: 'Zion AI Marketplace', _themePreset: 'light', _landingPageCopy: {
    headline: 'AI Talent Marketplace', _subtitle: 'Find the best AI talent for your projects', _cta: 'Get Started'},
  tenant: null};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// The context may be undefined if the provider is not mounted.  By declaring
// the generic as `WhitelabelContextType | null` we get proper type checking
// without falling back to an empty object which triggers TS2740 errors.
<<<<<<< HEAD
const WhitelabelContext = createContext<WhitelabelContextType | null>(null),

export const useWhitelabel = (): WhitelabelContextType => {
  const context = useContext(WhitelabelContext),
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')
  }
=======
const _WhitelabelContext = createContext<WhitelabelContextType | null>(null);

export const _useWhitelabel = (): WhitelabelContextType => {_const _context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  // Cast is used here because the context default is `null` until provided by
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.
  return context as WhitelabelContextType
},

<<<<<<< HEAD
interface WhitelabelProviderProps {
  children: ReactNode
}

export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext),
  const { tenant, isLoading } = useWhitelabelTenant(),
=======
interface WhitelabelProviderProps {_children: ReactNode;}

export const _WhitelabelProvider = (_{_children}: WhitelabelProviderProps) => {_const [contextValue, _setContextValue] = useState<WhitelabelContextType>(defaultContext);
  const { tenant, _isLoading} = useWhitelabelTenant();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {_if (!isLoading && tenant) {
      setContextValue({
<<<<<<< HEAD
        isWhitelabel: true,
        primaryColor: tenant.primary_color,
        logoUrl: tenant.logo_url,
        brandName: tenant.brand_name,
        themePreset: tenant.theme_preset,
        landingPageCopy: tenant.landing_page_copy,
        tenant: tenant})
    } else if (!isLoading) {
      setContextValue(defaultContext)
    }
  }, [tenant, isLoading]),
=======
        isWhitelabel: true, _primaryColor: tenant.primary_color, _logoUrl: tenant.logo_url, _brandName: tenant.brand_name, _themePreset: tenant.theme_preset, _landingPageCopy: tenant.landing_page_copy, _tenant: tenant});
    } else if (!isLoading) {_setContextValue(defaultContext);}
  }, [tenant, isLoading]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <WhitelabelContext.Provider value={_contextValue}>
      {_children}
    </WhitelabelContext.Provider>
  )
},

