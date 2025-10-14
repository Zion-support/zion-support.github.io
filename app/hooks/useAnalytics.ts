<<<<<<< HEAD
import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  
  return context;
};
=======
  }
  
  return context;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
