import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for debouncing values
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook for debouncing callback functions
 * @param callback - The callback function to debounce
 * @param delay - The delay in milliseconds
 * @param deps - Dependencies array for the callback
 * @returns The debounced callback function
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
  deps: React.DependencyList = []
): T {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = ((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
  }) as T;

  return debouncedCallback;
}

/**
 * Custom hook for debouncing async operations
 * @param asyncCallback - The async callback function to debounce
 * @param delay - The delay in milliseconds
 * @param deps - Dependencies array for the callback
 * @returns Object with debounced callback and loading state
 */
export function useDebouncedAsyncCallback<T extends (...args: any[]) => Promise<any>>(
  asyncCallback: T,
  delay: number,
  deps: React.DependencyList = []
) {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const callbackRef = useRef(asyncCallback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = asyncCallback;
  }, [asyncCallback]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = async (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    return new Promise((resolve, reject) => {
      timeoutRef.current = setTimeout(async () => {
        try {
          setIsLoading(true);
          const result = await callbackRef.current(...args);
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          setIsLoading(false);
        }
      }, delay);
    });
  };

  return {
    debouncedCallback: debouncedCallback as T,
    isLoading
  };
}