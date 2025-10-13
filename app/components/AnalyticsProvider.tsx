import React, { useEffect } from 'react';
import logger from '../../utils/logger';

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    logger.debug('Analytics initialized');
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;