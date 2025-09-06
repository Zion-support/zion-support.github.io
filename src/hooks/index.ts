import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: unknown) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [ storedValue, setStoredValue ] = useState(() => {
    try {
    const item = window.localStorage.getItem(key),
    return item ? JSON.parse(item) : initialValue
  } catch {
<<<<<<< HEAD
=======
=======
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      return initialValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
<<<<<<< HEAD
      const valueToStore = value instanceof Function ? value(storedValue) : value;
=======
<<<<<<< HEAD
      const valueToStore = value instanceof Function ? value(storedValue) : value;
=======
      const valueToStore = value instanceof Function ? value(storedValue) : value,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (_error) {
      console.error('Error setting localStorage:', _error);
    }
  };

  return [storedValue, setValue] as const;
};