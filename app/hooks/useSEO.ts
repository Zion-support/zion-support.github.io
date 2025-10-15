import { useState, useEffect } from 'react';

export function useSEO() {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    /// Comment
  }, []);
  
  return { state, setState };
}
