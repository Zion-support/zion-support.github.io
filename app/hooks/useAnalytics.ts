import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContextDefinition';
>>>>>>> cursor/fix-errors-and-merge-to-main-3a06

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
>>>>>>> cursor/fix-errors-and-merge-to-main-3a06
