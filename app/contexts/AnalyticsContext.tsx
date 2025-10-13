'use client';
import React, { createContext, useContext } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: any) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export { AnalyticsContext };
export default AnalyticsContext;
