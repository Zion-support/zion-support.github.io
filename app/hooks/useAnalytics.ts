import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

export const useAnalytics = () => {
  const context = useContext(Analytics Context);
  if (!context) {
    throw newError('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};