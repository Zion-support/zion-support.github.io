import { useState, useEffect } from 'react';

export function useAnalytics() {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    /// Comment
  }, []);
  
  return { state, setState };
}
