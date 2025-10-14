import { createContext } from 'react';

export interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  page: (name: string, properties?: Record<string, unknown>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);