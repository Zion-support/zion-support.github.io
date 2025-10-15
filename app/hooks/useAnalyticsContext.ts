import { useState, useEffect } from 'react';

export function useAnalyticsContext() {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Initialize analytics context
    console.log('Analytics context initialized');
  }, []);
  
  return { state, setState };
}
