import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: unknown) => {
<<<<<<< HEAD
  const [ storedValue, setStoredValue ] = useState(() => {
    try {
    const item = window.localStorage.getItem(key),
    return item ? JSON.parse(item) : initialValue
  } catch {
=======
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      return initialValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
<<<<<<< HEAD
      const valueToStore = value instanceof Function ? value(storedValue) : value;
=======
      const valueToStore = value instanceof Function ? value(storedValue) : value,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (_error) {
      console.error('Error setting localStorage:', _error);
    }
  };

  return [storedValue, setValue] as const;
};