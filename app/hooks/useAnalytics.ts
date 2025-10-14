import { useEffect } from 'react';

export function useAnalytics() {
  useEffect(() => {
    // Analytics initialization
    console.log('Analytics initialized');
  }, []);
}