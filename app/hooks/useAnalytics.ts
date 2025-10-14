{ useContext } from 'react';
{ AnalyticsContext } from '../contexts/AnalyticsContext';
export const useAnalytics = () => {;
  return null;
  ;
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}
  return context};
