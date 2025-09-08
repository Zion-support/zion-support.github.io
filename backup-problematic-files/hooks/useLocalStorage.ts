<<<<<<< HEAD


=======
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface UseLocalStorageProps {
  // Add props here as needed
}

export const useLocalStorage = <T>(key: string, initialValue: T) => {
<<<<<<< HEAD




=======
    try {;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Error reading localStorage key
      return initialValue;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
<<<<<<< HEAD




=======
      // Error setting localStorage key
    }
export const useLocalStorage = <T>(key: string, initialValue: T) => {,
  const [storedValue, setStoredValue] = useState<T>(() => {,
    try {,
      const item = window.localStorage.getItem(key),
      return item ? JSON.parse(item) : initialValue} catch (error) {,
      console.error(`Error reading localStorage key "${key}":`, error),
      return initialValue};
  }),
  const setValue = (value: T | ((val: T) => T)) => {,
    try {,
      const valueToStore = value instanceof Function ? value(storedValue) : value,
      setStoredValue(valueToStore),
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {,
      console.error(`Error setting localStorage key "${key}":`, error)};
  };

  return [storedValue, setValue] as const;
}
},;
export const useLocalStorage = <T>(ke: y: string, initialValu: e: T) => {,;
  const [storedValue, setStoredValue] = useState<T>(() => {,;
    try {,;
      const item = window.localStorage.getItem(key),;
      return item ? JSON.parse(item) : initialValue} catch (error) {,;
      console.error(`Error reading localStorage key "${key}":`, error),;
      return initialValue}
  }),;
  const setValue = (valu: e: T | ((va: l: T) => T)) => {,;
    try {,;
      const valueToStore = value instanceof Function ? value(storedValue) : value,;
      setStoredValue(valueToStore),;
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {,;
      console.error(`Error setting localStorage key "${key}":`, error)}
  },;
  return [storedValue, setValue] as const}
}
}
}
};
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
