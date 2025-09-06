import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: unknown) => {
      return initialValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (_error) {
      console.error('Error setting localStorage:', _error);
    }
  };

  return [storedValue, setValue] as const;
};