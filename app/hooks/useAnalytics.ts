{ useContext } from 'react';''
{ AnalyticsContext } from '../contexts/AnalyticsContext';''
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
<<<<<<< HEAD
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
=======
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}''
  return context};
>>>>>>> main
