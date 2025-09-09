import React, { createContext, useContext } from 'react';

const WhitelabelContext = createContext();

export function WhitelabelProvider({ children, config }) {
  return (
    <WhitelabelContext.Provider value={config}>
      {children}
    </WhitelabelContext.Provider>
  );
}

export function useWhitelabel() {
  const context = useContext(WhitelabelContext);
  if (context === undefined) {
    throw new Error('useWhitelabel must be used within a WhitelabelProvider');
  }
  return context;
}