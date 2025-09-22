


interface UseLocalStorageProps {
  // Add props here as needed
}

export const useLocalStorage = <T>(key: string, initialValue: T) => {


    try {
:backup-problematic-files/hooks/useLocalStorage.ts
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
<<<<<<< HEAD
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
<<<<<<< HEAD
=======



>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
