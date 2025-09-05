
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

// The context may be undefined if the provider is not mounted.  By declaring
// the generic as `WhitelabelContextType | null` we get proper type checking
// without falling back to an empty object which triggers TS2740 errors.
const _WhitelabelContext = createContext<WhitelabelContextType | null>(null);

export const _useWhitelabel = (): WhitelabelContextType => {_const _context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');}
  // Cast is used here because the context default is `null` until provided by
  // `WhitelabelProvider`. The runtime check above guarantees it's defined.
  return context as WhitelabelContextType;
};

interface WhitelabelProviderProps {_children: ReactNode;}

export const _WhitelabelProvider = (_{_children}: WhitelabelProviderProps) => {_const [contextValue, _setContextValue] = useState<WhitelabelContextType>(defaultContext);
  const { tenant, _isLoading} = useWhitelabelTenant();

  useEffect__(() => {_if (!isLoading && tenant) {
      setContextValue({
        isWhitelabel: true, _primaryColor: tenant.primary_color, _logoUrl: tenant.logo_url, _brandName: tenant.brand_name, _themePreset: tenant.theme_preset, _landingPageCopy: tenant.landing_page_copy, _tenant: tenant});
    } else if (!isLoading) {_setContextValue(defaultContext);}
  }, [tenant, isLoading]);

  return (
    <WhitelabelContext.Provider value={_contextValue}>
      {_children}
    </WhitelabelContext.Provider>
  );
};

