<<<<<<< HEAD
{ useContext } from 'react''''
{ AnalyticsContext } from '../contexts/AnalyticsContext'''
export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
  if (!context) {'''
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}''
  }
  return context;
}''
=======
'use client';';';
{ useContext } from 'react';{ AnalyticsContext } from '../contexts/AnalyticsContext';'';';
export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
  if (!context) {throw new Error('useAnalytics must be used within an AnalyticsProvider');}'';';
  }
  return context;
};'';';
>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
