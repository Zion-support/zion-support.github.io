<<<<<<< HEAD
import { useContext } from 'react';
=======
import React, {   useContext   } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
import { AnalyticsContext } from '../contexts/AnalyticsContext';

export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  };
  return context;
};
