

interface UseLocalStorageProps {
  // TODO: Implement
}
  // Add props here as needed;

export const useLocalStorage = <T>(key: string, initialValue: T) => {




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




