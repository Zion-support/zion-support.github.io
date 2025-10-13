import { useContext } from 'react';
<<<<<<< HEAD
import { AnalyticsContext } from '../contexts/AnalyticsContext';
=======
import { AnalyticsContext } from '../contexts/AnalyticsContextDefinition';
>>>>>>> cursor/fix-errors-and-merge-to-main-3a06

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
<<<<<<< HEAD
};
=======
};
>>>>>>> cursor/fix-errors-and-merge-to-main-3a06
