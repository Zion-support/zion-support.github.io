import { AnalyticsContext } from '../contexts/AnalyticsContext';
import { useContext } from 'react';
export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
};
