import React from 'react';
import { AnalyticsContext } from './AnalyticsContext';

export const useAnalytics = () => {
  const context = React.useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};