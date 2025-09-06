<<<<<<< HEAD
:hooks/useLocalStorage.ts
};
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) :initialValue} catch (error) {;
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue};
  });
  const setValue = (valu:e:T | ((va:l:T) => T)) => {;
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) :value;import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
// Get from local storage then parse stored json or return initialValue
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
:backup-problematic-files/hooks/useLocalStorage.ts
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

  // Get from local storage then parse stored json or return initialValue
:backup-problematic-files/hooks/useLocalStorage.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

interface UseLocalStorageProps {
  // Add props here as needed
}

export const useLocalStorage = <T>(key: string, initialValue: T) => {
<<<<<<< HEAD
:hooks/useLocalStorage.ts
    try {;
main:hooks/useLocalStorage.ts
    try {
:backup-problematic-files/hooks/useLocalStorage.ts
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
:backup-problematic-files/hooks/useLocalStorage.ts
      // Error reading localStorage key
      return initialValue;
      console.error(`Error reading localStorage key "${key}":`, error);
main:hooks/useLocalStorage.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
:backup-problematic-files/hooks/useLocalStorage.ts
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
      // eslint-disable-next-line no-console
      console.error(`Error setting localStorage key "${key}":`, error);

main:hooks/useLocalStorage.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  };

  return [storedValue, setValue] as const;
}
<<<<<<< HEAD
:hooks/useLocalStorage.ts
:backup-problematic-files/hooks/useLocalStorage.ts
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
:backup-problematic-files/hooks/useLocalStorage.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
};
<<<<<<< HEAD
main:hooks/useLocalStorage.ts
:hooks/useLocalStorage.ts
main:hooks/useLocalStorage.ts
:backup-problematic-files/hooks/useLocalStorage.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
