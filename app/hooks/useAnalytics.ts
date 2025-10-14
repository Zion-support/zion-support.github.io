<<<<<<< HEAD
{ useContext } from 'react
{ AnalyticsContext } from '../contexts/AnalyticsContext
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}
  }
  return context
}
=======
'use client';';';
{ useContext } from 'react';{ AnalyticsContext } from '../contexts/AnalyticsContext';'';';
export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
  if (!context) {throw new Error('useAnalytics must be used within an AnalyticsProvider');}'';';
  }
  return context;
};'';';

>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
