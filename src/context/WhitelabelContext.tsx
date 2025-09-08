<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WhitelabelTenant {
  id: string;
  primary_color: string;
  logo_url: string | null;
  brand_name: string;
  theme_preset: "light" | "dark" | "neon" | "corporate" | "startup";
  landing_page_copy: {
    headline: string;
    subtitle: string;
    cta: string;
  };
}

export interface WhitelabelContextType {
  isWhitelabel: boolean;
  primaryColor: string;
  logoUrl: string | null;
  brandName: string;
  themePreset: "light" | "dark" | "neon" | "corporate" | "startup";
  landingPageCopy: {
    headline: string;
    subtitle: string;
    cta: string;
  };
  tenant: WhitelabelTenant | null;
}

const defaultContext: WhitelabelContextType = {
  isWhitelabel: false,
  primaryColor: "#9b87f5", // Default Zion purple
  logoUrl: null,
  brandName: "Zion AI Marketplace",
  themePreset: "light",
  landingPageCopy: {
    headline: "AI Talent Marketplace",
    subtitle: "Find the best AI talent for your projects",
    cta: "Get Started",
  },
  tenant: null,
};

const WhitelabelContext = createContext<WhitelabelContextType | null>(null);

export const useWhitelabel = (): WhitelabelContextType => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error("useWhitelabel must be used within a WhitelabelProvider");
  }
  return context;
};

interface WhitelabelProviderProps {
  children: ReactNode;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ children }) => {
  const [contextValue, setContextValue] = useState<WhitelabelContextType>(defaultContext);

  // Mock tenant data for now - in a real app this would come from an API
  useEffect(() => {
    // For now, use default context
    setContextValue(defaultContext);
  }, []);

  return (
    <WhitelabelContext.Provider value={contextValue}>
      {children}
    </WhitelabelContext.Provider>
  );
=======
import React, { createContext, useContext, useState } from 'react';

interface WhitelabelContextType {
  theme: string;
  setTheme: (theme: string) => void;
  brandName: string;
  setBrandName: (name: string) => void;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export const WhitelabelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const [brandName, setBrandName] = useState('Zion');

  return (
    <WhitelabelContext.Provider value={{ theme, setTheme, brandName, setBrandName }}>
      {children}
    </WhitelabelContext.Provider>
  );
};

export const useWhitelabel = () => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
>>>>>>> origin/main
};