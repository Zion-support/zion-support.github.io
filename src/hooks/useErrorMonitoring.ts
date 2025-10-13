import { useState, useEffect } from 'react';

export function useErrorMonitoring() {
  const [errors, setErrors] = useState<Error[]>([]);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setErrors(prev => [...prev, new Error(event.message)]);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return { errors, clearErrors: () => setErrors([]) };
}