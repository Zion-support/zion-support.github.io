<<<<<<< HEAD
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

interface UseLocalStorageProps {
  // Add props here as needed
=======
 if (typeof window === 'undefined') {
  return initialValue;
}try {
  const item = window.localStorage.getItem (key);
return item ? JSON.parse (item) : initialValue;
}catch (error) {
  //Error reading localStorage key return initialValue;
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
}
});
const setValue = (value: T | ( (val: T) => T) ) => {
  try {
  const valueToStore = value instanceof Function ? value (storedValue) : value;
setStoredValue (valueToStore);
if (typeof window !== 'undefined') {
  
}
<<<<<<< HEAD
=======
interface UseLocalStorageProps {
  // Add props here as needed
}
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue} catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)}
  };
  return [storedValue, setValue] as const};
export default useLocalStorage;
=======
=======
import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;
export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
=======
}
=======
}
=======
}
=======
}catch (error) {
  //Error setting localStorage key 
}>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13 
};
return [storedValue, setValue] as const;
}
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
