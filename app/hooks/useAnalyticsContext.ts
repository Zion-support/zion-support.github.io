import { useAnalyticsContext } from '../contexts/AnalyticsContext';

export const useAnalyticsContextHook = () => {
  const analyticsContext = useAnalyticsContext();
  
  return {
    trackEvent: analyticsContext.trackEvent,
    trackPageView: analyticsContext.trackPageView,
  };
};