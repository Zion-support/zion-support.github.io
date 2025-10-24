<<<<<<< HEAD
import React from 'react';

interface EnhancedAnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedAnalytics;
=======
'use client'

import React, { useEffect } from 'react'

const EnhancedAnalytics: React.FC = () => {
  useEffect(() => {
    // Analytics initialization
    console.log('Analytics initialized')
  }, [])

  return null
}

export default EnhancedAnalytics
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
