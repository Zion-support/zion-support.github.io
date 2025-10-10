import { useState, useEffect } from 'react';

export const useAnalytics = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Analytics logic here
  }, []);
  
  return { data };
};