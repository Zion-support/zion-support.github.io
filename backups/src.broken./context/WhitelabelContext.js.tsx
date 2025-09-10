import React, { createContext, useContext } from 'react';

type WhitelabelConfig = Record<string, unknown>;

const WhitelabelContext = createContext<WhitelabelConfig | undefined>(undefined);

export function WhitelabelProvider({ children, config }: { children: React.ReactNode; config: WhitelabelConfig }) {
  return <WhitelabelContext.Provider value={config}>{children}</WhitelabelContext.Provider>;
}

export function useWhitelabel(): WhitelabelConfig {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
}

