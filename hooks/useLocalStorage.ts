<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
};
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
=======
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
>>>>>>> origin/main
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) :initialValue} catch (error) {console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (valu:e:T | ((va:l:T) => T)) => {try {;
      const valueToStore = value instanceof Function ? value(storedValue) :value;import { useState, useEffect } from 'react';
export function useLocalStorage<T>(key: string, initialValue: T) {
<<<<<<< HEAD
  // Get from local storage then parse stored json or return initialValue
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage;''"
import React from 'react';
<<<<<<< HEAD

interface UseLocalStorageProps {
  // Add props here as needed
}

=======
interface UseLocalStorageProps {
  // Add props here as needed
}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
<<<<<<< HEAD
=======
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
=======
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
// Get from local storage then parse stored json or return initialValue
interface UseLocalStorageProps {
  // Add props here as needed
}
>>>>>>> origin/main
export const useLocalStorage = <T>(key: string, initialValue: T) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  });
  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error setting localStorage key "${key}":`, error);
  }
  return [storedValue, setValue] as const;
}
<<<<<<< HEAD
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
<<<<<<< HEAD
<<<<<<< HEAD
};
};
};
};
=======
=======
};
};
};
<<<<<<< HEAD
=======

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export default useLocalStorage;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;
export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>
  );
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
=======
<<<<<<< HEAD
};
export default useLocalStorage;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}
>>>>>>> origin/main
}
}
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
}
}
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}
}
}
}
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
