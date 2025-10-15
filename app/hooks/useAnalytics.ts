<<<<<<< HEAD
{ useContext } from 'react';
{ AnalyticsContext } from '../contexts/AnalyticsContext';
export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
  if (!context) {;
    throw new Error(useAnalytics must be used within an AnalyticsProvider);}
  }
  return context;
};
';
=======
import { useContext } from 'react'
import { AnalyticsContext } from '../contexts/AnalyticsContext'

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}
>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
