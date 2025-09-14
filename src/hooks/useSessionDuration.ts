import { useEffect } from 'react';

export const useSessionDuration = () => {
  useEffect(() => {
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const duration = Date.now() - startTime;
      console.log('Session duration:', duration, 'ms');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};