import React, { useEffect } from 'react';

interface EnhancedAnalyticsProps {
  eventName?: string;
  eventProperties?: Record<string, unknown>;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  eventName,
  eventProperties
}) => {
  useEffect(() => {
    if (eventName) {
      // Track the event
      if (process.env.NODE_ENV === 'development') {
        console.log('Enhanced Analytics Event:', eventName, eventProperties);
      }
      // Add your analytics tracking logic here
    }
  }, [eventName, eventProperties]);

  return null;
};

export default EnhancedAnalytics;