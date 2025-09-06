import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
};
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/hooks/useLocalStorage.ts
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
