<<<<<<< HEAD
'use client'
interface AnalyticsContextType { trackEvent: (eventName: string, properties?: Record<string, any>) => void

  trackPageView: (pageName: string) => void
  setUser: (userId: string, properties?: Record<string, any>) => void
  isEnabled: boolean }
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

{ createContext, useContext, useState, useEffect } from 'react';'
'use client';
interface AnalyticsContextType { trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean; }
=======
import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextContextType {
  // Add your context properties here
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
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
