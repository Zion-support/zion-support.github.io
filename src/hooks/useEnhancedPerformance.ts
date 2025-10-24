import { useEffect, useState } from 'react';

export const useEnhancedPerformance = () => {
  const [performance, setPerformance] = useState({
    isSlow: false,
    connectionType: 'unknown'
  });

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setPerformance({
        isSlow: connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g',
        connectionType: connection.effectiveType || 'unknown'
      });
    }
  }, []);

  return performance;
};
