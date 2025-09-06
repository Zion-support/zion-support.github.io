
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    headline: string,
    subtitle: string,
    cta: string;
  };
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx

=======


export const useWhitelabel = (): WhitelabelContextType => {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx
  const context = useContext(WhitelabelContext);
  if (!context) {;
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const useWhitelabel = (): WhitelabelContextType => {

export const useWhitelabel = (): WhitelabelContextType => {;
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider')
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Cast is used here because the context default is `null` until provided by
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.
  return context as WhitelabelContextType
}
interface WhitelabelProviderProps {
  children: ReactNode
}
<<<<<<< HEAD
<<<<<<< HEAD

=======



export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {

export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }, [tenant, isLoading]);
  return (
    <WhitelabelContext.Provider value={contextValue}>
      {children}
    </WhitelabelContext.Provider>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx
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
=======
  // Cast is used here because the context default is `null` until provided by;
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.;
  return context as WhitelabelContextType;
},;
interface WhitelabelProviderProps {;
  children: ReactNode;
}
;
export const WhitelabelProvider = ({ children }: WhitelabelProviderProps) => {;
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext),;
  const { tenant, isLoading } = useWhitelabelTenant(),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    if (!isLoading && tenant) {;
      setContextValue({;
        isWhitelabel: true,;
<<<<<<< HEAD
        primaryColor: tenant && tenant.primary_color,;
        logoUrl: tenant && tenant.logo_url,;
        brandName: tenant && tenant.brand_name,;
        themePreset: tenant && tenant.theme_preset,;
        landingPageCopy: tenant && tenant.landing_page_copy,;
=======
        primaryColor: tenant.primary_color,;
        logoUrl: tenant.logo_url,;
        brandName: tenant.brand_name,;
        themePreset: tenant.theme_preset,;
        landingPageCopy: tenant.landing_page_copy,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        tenant: tenant});
    } else if (!isLoading) {;
      setContextValue(defaultContext);
    }
  }, [tenant, isLoading]);
<<<<<<< HEAD
  return (
    <WhitelabelContext && WhitelabelContext.Provider value={contextValue}>;
      {children}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx

    </WhitelabelContext && WhitelabelContext.Provider>;
  );
};

=======
========
    </WhitelabelContext && WhitelabelContext.Provider>;
  );
};
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx

    </WhitelabelContext.Provider>;
  );
};

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </WhitelabelContext.Provider>);
}
;
=======

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react',;
import { useWhitelabelTenant, WhitelabelTenant } from '@/hooks/useWhitelabelTenant',;
;
export interface WhitelabelContextType {;
  isWhitelabel:boolean,;
  primaryColor:string,;
  logoUrl:string | null,;
  brandName:string,;
  themePreset:'light' | 'dark' | 'neon' | 'corporate' | 'startup',;
  landingPageCopy:{;
    headline:string,;
    subtitle:string,;
    cta:string;
  },;
  tenant:WhitelabelTenant | null;
}
;
const defaultContext:WhitelabelContextType = {;
  isWhitelabel:false,;
  primaryColor:'#9b87f5', // Default Zion purple;
  logoUrl:null,;
  brandName:'Zion AI Marketplace',;
  themePreset:'light',;
  landingPageCopy:{;
    headline:'AI Talent Marketplace',;
    subtitle:'Find the best AI talent for your projects',;
    cta:'Get Started'},;
  tenant:null},;
;
// The context may be undefined if the provider is not mounted.  By declaring;
// the generic as `WhitelabelContextType | null` we get proper type checking;
// without falling back to an empty object which triggers TS2740 errors.;
const WhitelabelContext = createContext<WhitelabelContextType | null>(null),;
;
export const useWhitelabel = ():WhitelabelContextType => {;
  const context = useContext(WhitelabelContext),;
  if (!context) {;
    throw new Error('useWhitelabel must be used within a WhitelabelProvider'),;
  }
  // Cast is used here because the context default is `null` until provided by;
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.;
  return context as WhitelabelContextType,;
},;
;
interface WhitelabelProviderProps {;
  children:ReactNode;
}
;
export const WhitelabelProvider = ({ children } WhitelabelProviderProps) => {;
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext),;
  const { tenant, isLoading } = useWhitelabelTenant(),;
;
  useEffect(() => {;
    if (!isLoading && tenant) {;
      setContextValue({;
        isWhitelabel:true,;
        primaryColor:tenant.primary_color,;
        logoUrl:tenant.logo_url,;
        brandName:tenant.brand_name,;
        themePreset:tenant.theme_preset,;
        landingPageCopy:tenant.landing_page_copy,;
        tenant:tenant}),;
    } else if (!isLoading) {;
      setContextValue(defaultContext),;
    }
  }, [tenant, isLoading]),;
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <WhitelabelContext.Provider value={contextValue}>;
      {children}
    </WhitelabelContext.Provider>;
<<<<<<< HEAD
  ),;
},;
; // The context may be undefined if the provider is not mounted. By declaring // the generic as `WhitelabelContextType | null` we get proper type checking // without falling back to an empty object which triggers TS2740 errors. // Cast is used here because the context default is `null` until provided by // `WhitelabelProvider`. The runtime check above guarantees it's defined. return context as WhitelabelContextType 
};
useEffect ( () => {
  if (!isLoading && tenant) {
  setContextValue ({
  return (<WhitelabelContext.Provider value= {
  contextValue 
}> {
  children 
}</WhitelabelContext.Provider>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/WhitelabelContext.tsx
=======
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
