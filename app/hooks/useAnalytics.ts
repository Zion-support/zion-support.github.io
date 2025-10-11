import { useContext } from 'react-helmet-async';
import { AnalyticsContext } from 'react-helmet-async';
export const useAnalytics = () => {
  return (
    <div>

    <div>
  
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};