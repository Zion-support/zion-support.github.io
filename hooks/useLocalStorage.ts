const { useState } from "react", export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key), return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }), const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value, setStoredValue(valueToStore), window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage,''"
interface UseLocalStorageProps {
  // Add props here as needed
};
interface UseLocalStorageProps {
  // Add props here as needed
};
interface UseLocalStorageProps {
  // Add props here as needed
};
export const useLocalStorage = <T>(key: string, initialValue: T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue} catch (error) {;
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue};
  });
  const setValue = (value: T | ((val: T) => T)) => {;
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {;
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
export default useLocalStorage
import { useState,useEffect } from 'react', export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key), return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error), return initialValue} }), const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value, setStoredValue(valueToStore), window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage
export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>)
};
};
export default useLocalStorage;
ursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (_error) {
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Error reading localStorage key
      return initialValue;
    }
  });

  const setValue = (value: T | ((_val: T) => T)) => {
<<<<<<< HEAD


=======
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (_error) {
      // Error reading localStorage key
      return initialValue;
    }
  });

  const setValue = (value: T | ((_val: T) => T)) => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (_error) {
      // Error setting localStorage key
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  };

  return [storedValue, setValue] as const;

<<<<<<< HEAD






=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
