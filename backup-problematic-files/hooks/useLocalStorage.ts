<<<<<<< HEAD
=======
<<<<<<< HEAD:hooks/useLocalStorage.ts
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
<<<<<<< HEAD:backup-problematic-files/hooks/useLocalStorage.ts
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

=======
  // Get from local storage then parse stored json or return initialValue
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useLocalStorage.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

interface UseLocalStorageProps {
  // Add props here as needed
}

export const useLocalStorage = <T>(key: string, initialValue: T) => {


    try {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useLocalStorage.ts
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {

      console.error(`Error reading localStorage key "${key}":`, error);

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

      // eslint-disable-next-line no-console
      console.error(`Error setting localStorage key "${key}":`, error);


  };

  return [storedValue, setValue] as const;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD:hooks/useLocalStorage.ts
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD:backup-problematic-files/hooks/useLocalStorage.ts
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
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useLocalStorage.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
};
<<<<<<< HEAD
>>>>>>> main:hooks/useLocalStorage.ts
=======
<<<<<<< HEAD:hooks/useLocalStorage.ts
=======
>>>>>>> main:hooks/useLocalStorage.ts
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useLocalStorage.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
