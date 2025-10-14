import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

export constuseAnalytics= () => {
  const context= use Context(Analytics Context);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};