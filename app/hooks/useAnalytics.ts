import { useContext } from 'react';
import { useAnalytics as useAnalyticsContext } from '../contexts/AnalyticsContext';

export const useAnalytics = () => {
  return useAnalyticsContext();
};
