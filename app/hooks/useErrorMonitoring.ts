import { useEffect } from 'react';

export const useErrorMonitoring = () => {
  useEffect(() => {
<<<<<<< HEAD
    // Error monitoring logic
=======
    const handleError = (error: ErrorEvent) => {
      console.error('Error caught:', error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
  }, []);
};