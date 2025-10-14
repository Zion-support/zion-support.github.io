import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (even,
    t: string, properties?: Record<string, any>) => void;
  identify: (userI,
    d: string, traits?: Record<string, any>) => void;
  page: (nam,
    e: string, properties?: Record<string, any>) => void;
</string></string></string></AnalyticsContextType></string></string></string></AnalyticsContextType>}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);


