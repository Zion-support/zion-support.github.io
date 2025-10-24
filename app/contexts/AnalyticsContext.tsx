import { createContext } from 'react';

export interface AnalyticsContextType {
  track: (_event: string, _properties?: Record<string, unknown>) => void;
  identify: (_userId: string, _traits?: Record<string, unknown>) => void;
  page: (_name: string, _properties?: Record<string, unknown>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);