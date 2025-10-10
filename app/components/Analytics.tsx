'use client';

import React, { useEffect, useState } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize analytics
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <>{children}</>;
  }

  return <>{children}</>;
};

export default Analytics;