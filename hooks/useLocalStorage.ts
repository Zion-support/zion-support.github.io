<<<<<<< HEAD
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> pr-11935
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
<<<<<<< HEAD
>>>>>>> pr-11914
=======
const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage;''"
>>>>>>> pr-11913
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> pr-11935

interface UseLocalStorageProps {
  // Add props here as needed
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> pr-11935
<<<<<<< HEAD
=======
interface UseLocalStorageProps {
  // Add props here as needed
}
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
interface UseLocalStorageProps {
  // Add props here as needed
}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> pr-11913
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
<<<<<<< HEAD
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
<<<<<<< HEAD
>>>>>>> pr-11914
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> pr-11935
import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;
=======
>>>>>>> pr-11913
export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
=======
>>>>>>> pr-11935
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
}
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
<<<<<<< HEAD
>>>>>>> pr-11914
=======
>>>>>>> pr-11913
=======
=======
}
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> pr-11935
