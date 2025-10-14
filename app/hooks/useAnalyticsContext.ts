import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';
import { AnalyticsContextType } from '../contexts/AnalyticsContextDefinition';

export const useAnalyticsContext = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  
  return context;
};