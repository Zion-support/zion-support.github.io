'use client';
import React, {createContext, useContext, useEffect, ReactNode}from 'react';

interface AnalyticsContextType {
    trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  }


