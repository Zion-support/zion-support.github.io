import {useState} from 'react';

export const useLocalStorage = (key: string, initialValue: unknown) => {
  const [ storedValue, setStoredValue ] = useState(() => {    try {
    const item = window.localStorage.getItem(key),
    return item ? JSON.parse(item) : initialValue
  } catch {
export const useLocalStorage = (key: string, initialValue: unknown) => {
      return initialValue;
    }
  });

  const setValue = (value: unknown,) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (_error) {
      console.error('Error setting localStorage:', _error);
    }
  };

  return [storedValue, setValue] as const;
};