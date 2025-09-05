<<<<<<< HEAD
<<<<<<< HEAD
};
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) :initialValue} catch (error) {;
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue};
  });
  const setValue = (valu:e:T | ((va:l:T) => T)) => {;
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) :value;
=======
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {    if (typeof window === 'undefined') {
      return initialValue;}

    try {_const _item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;} catch (error) {_// Error reading localStorage key
      return initialValue;}
  });

  const _setValue = (_value: T | ((val: T) => T)) => {_try {
      const _valueToStore =
        value instanceof Function ? value(storedValue) : value;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      setStoredValue(valueToStore);
      
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
<<<<<<< HEAD
      // Error setting localStorage key
    }export const useLocalStorage = <T>(key: string, initialValue: T) => {,
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
        window.localStorage.setItem(key, _JSON.stringify(valueToStore));}
    } catch (error) {_// Error setting localStorage key}
=======
      console.error(`Error setting localStorage key "${key}":`, error);
    }
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
  };

  return [storedValue, setValue] as const;
}