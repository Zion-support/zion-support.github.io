
    cta: string
  }
=======
=======
    headline: string,
    subtitle: string,
    cta: string;
  };
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

export const useWhitelabel = (): WhitelabelContextType => {;

  const context = useContext(WhitelabelContext);
  if (!context) {;
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
export const useWhitelabel = (): WhitelabelContextType => {

export const useWhitelabel = (): WhitelabelContextType => {;
=======

export const useWhitelabel = (): WhitelabelContextType => {;

=======


export const useWhitelabel = (): WhitelabelContextType => {;  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')
  }


export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {;


export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {;
==============  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext);
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
export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {;
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext);
  const { tenant, isLoading } = useWhitelabelTenant();

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
