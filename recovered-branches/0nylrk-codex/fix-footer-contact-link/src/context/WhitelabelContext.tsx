    headline: string
    subtitle: string

    cta: string
  }
    headline: string,
    subtitle: string,
    cta: string
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
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  logoUrl: string | null;
  brandName: string;
  themePreset: "light" | "dark" | "neon" | "corporate" | "startup";
  landingPageCopy: {
    headline: string;
    subtitle: string;
    cta: string
};
  tenant: WhitelabelTenant | null;
}


