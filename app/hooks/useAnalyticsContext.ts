import { useState, useEffect } from 'react';

export function useAnalyticsContext() {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    /// Comment
  }, []);
  
  return { state, setState };
}