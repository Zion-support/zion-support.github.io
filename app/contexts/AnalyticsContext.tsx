'use client'
interface AnalyticsContextType { trackEvent: (eventName: string, properties?: Record<string, any>) => void
;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean }
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

{ createContext, useContext, useState, useEffect } from 'react';'
'use client';
interface AnalyticsContextType { trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean; }
