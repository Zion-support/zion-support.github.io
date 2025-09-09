import { useState, useEffect } from 'react';

export const useDelayedError = (delay: number = 1000) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const triggerError = (message: string) => {
    setIsLoading(true);
    setError(null);
    
    setTimeout(() => {
      setError(message);
      setIsLoading(false);
    }, delay);
  };

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  };

  return {
    error,
    isLoading,
    triggerError,
    clearError
  };
};