<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react';

<<<<<<< HEAD
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
=======

export function useLocalStorage<T>(_key: string, _initialValue: T) {_const [storedValue, _setStoredValue] = useState<T>__(() => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (typeof window === 'undefined') {
      return initialValue;}

    try {_const _item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;} catch (error) {_// Error reading localStorage key
      return initialValue;}
  });

  const _setValue = (_value: T | ((val: T) => T)) => {_try {
      const _valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
<<<<<<< HEAD
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Error setting localStorage key
    }
=======
};
export const useLocalStorage = <T>(ke: y: string, initialValu: e: T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue} catch (error) {;
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue};
  });
  const setValue = (valu: e: T | ((va: l: T) => T)) => {;
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {;
      console.error(`Error setting localStorage key "${key}":`, error)};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
export const useLocalStorage = <T>(key: string, initialValue: T) => {,
  const [storedValue, setStoredValue] = useState<T>(() => {,
    try {,
      const item = window.localStorage.getItem(key),
      return item ? JSON.parse(item) : initialValue} catch (error) {,
      console.error(`Error reading localStorage key &quot;${key}&quot;:`, error),
      return initialValue};
  }),
  const setValue = (value: T | ((val: T) => T)) => {,
    try {,
      const valueToStore = value instanceof Function ? value(storedValue) : value,
      setStoredValue(valueToStore),
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {,
      console.error(`Error setting localStorage key &quot;${key}&quot;:`, error)};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        window.localStorage.setItem(key, _JSON.stringify(valueToStore));}
    } catch (error) {_// Error setting localStorage key}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };

  return [storedValue, setValue] as const;
}
