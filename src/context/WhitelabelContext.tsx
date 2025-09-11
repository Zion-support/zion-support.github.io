import React, { createContext, useContext, useState, useCallback } from 'react';

interface WhitelabelConfig {
  companyName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  theme: 'light' | 'dark' | 'auto';
}

interface WhitelabelContextType {
  tenant: string;
  setTenant: (tenant: string) => void;
}

const WhitelabelContext = createContext<WhitelabelContextType | undefined>(undefined);

export const WhitelabelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<WhitelabelConfig>(defaultConfig);

  const updateConfig = useCallback((newConfig: Partial<WhitelabelConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  }, []);

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig);
  }, []);

  const value: WhitelabelContextType = {
    config,
    updateConfig,
    resetConfig
  };

  return (
    <WhitelabelContext.Provider value={{ tenant, setTenant }}>
      {children}
    </WhitelabelContext.Provider>
  );
};

export function useWhitelabel() {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
};
