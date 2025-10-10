'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const EnhancedAnalyticsPage: React.FC;

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    analyticsService.init();
  }, []);

  return <>{children}</>;
};
;
export default EnhancedAnalyticsPage;

export const useAnalytics = () => {
  ;

return {
    trackEvent: analyticsService.trackEvent.bind(analyticsService)
  };
};

export default AnalyticsService;
