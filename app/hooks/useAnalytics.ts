import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

export const Useanalytics=() => { constContext = useContext(Analytics Context);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};