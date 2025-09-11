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


interface UseLocalStorageProps {
  // Add props here as needed
}

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    try {
:backup-problematic-files/hooks/useLocalStorage.ts
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
main:hooks/useLocalStorage.ts
=======

      // eslint-disable-next-line no-console
      console.error(`Error setting localStorage key "${key}":`, error);

  };

  return [storedValue, setValue] as const;
}
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
