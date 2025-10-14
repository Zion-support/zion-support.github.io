import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextContextType {
  // Add your context properties here
  [key: string]: unknown;
}

const AnalyticsContextContext = createContext<AnalyticsContextContextType | undefined>(undefined);

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContextContext);
  if (!context) {
    throw new Error(`useAnalyticsContext must be used within a AnalyticsContextProvider`);
  }
  return context;
};

interface AnalyticsContextProviderProps {
  children: ReactNode;
}

export const AnalyticsContextProvider: React.FC<AnalyticsContextProviderProps> = ({ children }) => {
  const value = {
    // Add your context values here
  };

  return (
    <AnalyticsContextContext.Provider value={value}>
      {children}
    </AnalyticsContextContext.Provider>
  );
};