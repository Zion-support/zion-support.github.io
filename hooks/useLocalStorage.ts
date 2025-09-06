<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue} catch (error) {;
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (value: T | ((val: T) => T)) => {
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore),
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)}
  };
  return [storedValue, setValue] as const}
}
}
}
};
export const useLocalStorage = <T>(key: string, initialValue: T) => {
<<<<<<< HEAD
=======
=======
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const item = window.localStorage.getItem(key),
    return item ? JSON.parse(item) : initialValue
  } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
<<<<<<< HEAD
=======
=======
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (_error) {
      // Error reading localStorage key
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      return initialValue;
    }
  });

  const setValue = (value: T | ((_val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error setting localStorage key "${key}":`, error);

<<<<<<< HEAD
=======
=======
    } catch (_error) {
      // Error setting localStorage key
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
  };

  return [storedValue, setValue] as const;
<<<<<<< HEAD
};

export default useLocalStorage;
=======
<<<<<<< HEAD
};

export default useLocalStorage;
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
