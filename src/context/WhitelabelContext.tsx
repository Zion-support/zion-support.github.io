import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WhitelabelTenant {
  id: string;
  name: string;
  domain: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  customCSS?: string;
  features: string[];
}

export interface WhitelabelContextType {
  tenant: WhitelabelTenant | null;
  setTenant: (tenant: WhitelabelTenant | null) => void;
  isWhitelabeled: boolean;
  applyCustomStyles: () => void;
  resetToDefault: () => void;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export const useWhitelabel = (): WhitelabelContextType => {
  const context = useContext(WhitelabelContext);
  if (!context) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};

interface WhitelabelProviderProps {
  children: ReactNode;
}

export const WhitelabelProvider: React.FC<WhitelabelProviderProps> = ({ children }) => {
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);

  const isWhitelabeled = tenant !== null;

  const applyCustomStyles = () => {
    if (!tenant) return;

    const root = document.documentElement;
    root.style.setProperty('--primary-color', tenant.primaryColor);
    root.style.setProperty('--secondary-color', tenant.secondaryColor);

    if (tenant.customCSS) {
      let styleElement = document.getElementById('whitelabel-custom-css');
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'whitelabel-custom-css';
        document.head.appendChild(styleElement);
      }
      styleElement.textContent = tenant.customCSS;
    }
  };

  const resetToDefault = () => {
    const root = document.documentElement;
    root.style.removeProperty('--primary-color');
    root.style.removeProperty('--secondary-color');

    const styleElement = document.getElementById('whitelabel-custom-css');
    if (styleElement) {
      styleElement.remove();
    }

    setTenant(null);
  };

  useEffect(() => {
    if (tenant) {
      applyCustomStyles();
    }
  }, [tenant]);

  return (
    <WhitelabelContext.Provider
      value={{
        tenant,
        setTenant,
        isWhitelabeled,
        applyCustomStyles,
        resetToDefault,
      }}
    >
      {children}
    </WhitelabelContext.Provider>
  );
};