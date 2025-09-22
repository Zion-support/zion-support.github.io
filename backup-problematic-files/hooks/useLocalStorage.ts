
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
interface UseLocalStorageProps {
  // TODO: Implement
}
  // Add props here as needed;

export const useLocalStorage = <T>(key: string, initialValue: T) => {
try {

      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
