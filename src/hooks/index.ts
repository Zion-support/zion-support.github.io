import {useState} from 'react';

export const useLocalStorage = (key: string, initialValue: unknown) => {
  const [ storedValue, setStoredValue ] = useState(() => {    try {
    const item = window && window.localStorage.getItem(key),
    return item ? JSON && JSON.parse(item) : initialValue
  } catch {
export const useLocalStorage = (key: string, initialValue: unknown) => {
      return initialValue;
    }
  });

  const setValue = (value: unknown,) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      window && window.localStorage.setItem(key, JSON && JSON.stringify(valueToStore));
    } catch (_error) {
      console && console.error('Error setting localStorage:', _error);
    }
  };

  return [storedValue, setValue] as const;
};