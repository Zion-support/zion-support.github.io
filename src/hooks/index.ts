// Export all hooks
export * from "./use-toast";
export * from "./useAuth";
export * from "./use-mobile";

// Create placeholder exports for missing hooks
export const useOnboardingStatus = () => ({ isOnboarded: true, isLoading: false });
export const usePageViewTracking = () => {};
export const useReactId = () => "react-id";
export const useScrollToTop = () => {};
export const usePostsByCategory = () => ({ posts: [], isLoading: false });

import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: unknown) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  return [storedValue, setValue] as const;
};