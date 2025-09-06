
<<<<<<< HEAD
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface UseLocalStorageProps {
  // Add props here as needed
}

export const useLocalStorage = <T>(key: string, initialValue: T) => {
<<<<<<< HEAD

    try {

      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {

=======
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  };

  return [storedValue, setValue] as const;
}
<<<<<<< HEAD

      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
};
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      console.error(`Error setting localStorage key "${key}":`, error)}
};
  return [storedValue, setValue] as const}
};
}
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
