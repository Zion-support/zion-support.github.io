import { useState, useEffect } from 'react';

/**
 * Hook that debounces a value
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
 * Hook that debounces a callback function
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
  const [debouncedCallback, setDebouncedCallback] = useState<T>(() => callback);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCallback(() => callback);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay, ...deps]);

  return debouncedCallback;
}

/**
 * Hook that provides both immediate and debounced values
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds
 * @returns Object with immediate and debounced values
 */
export function useDebounceState<T>(value: T, delay: number) {
  const [immediateValue, setImmediateValue] = useState<T>(value);
  const debouncedValue = useDebounce(immediateValue, delay);

  const setValue = (newValue: T) => {
    setImmediateValue(newValue);
  };

  return {
    immediateValue,
    debouncedValue,
    setValue,
  };
}

/**
 * Hook that debounces a value with a leading edge
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds
 * @returns The debounced value that updates immediately on first change
 */
export function useDebounceLeading<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [isFirstChange, setIsFirstChange] = useState(true);

  useEffect(() => {
    if (isFirstChange) {
      setDebouncedValue(value);
      setIsFirstChange(false);
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, isFirstChange]);

  return debouncedValue;
}

/**
 * Hook that debounces a value with both leading and trailing edges
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds
 * @returns The debounced value that updates immediately and after delay
 */
export function useDebounceBoth<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [isFirstChange, setIsFirstChange] = useState(true);

  useEffect(() => {
    if (isFirstChange) {
      setDebouncedValue(value);
      setIsFirstChange(false);
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, isFirstChange]);

  return debouncedValue;
}