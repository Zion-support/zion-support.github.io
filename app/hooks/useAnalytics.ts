<<<<<<< HEAD
{ useContext } from 'react';
{ AnalyticsContext } from '../contexts/AnalyticsContext";
export const useAnalytics = () => {const context = useContext(AnalyticsContext)
  if (!context) {''
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}'
=======
import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
>>>>>>> origin/main
  }
  
  return context;
<<<<<<< HEAD
}
''
=======
};
>>>>>>> origin/main
