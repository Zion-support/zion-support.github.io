import { useState, useEffect } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: number;
}

export function useErrorMonitoring() {
  const [errors, setErrors] = useState<ErrorInfo[]>([]);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setErrors(prev => [...prev, {
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now()
      }]);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  const clearErrors = () => setErrors([]);

  return { errors, clearErrors };
}
