<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
import React from 'react';
=======
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
=======



interface UseLocalStorageProps {
  // Add props here as needed
}


interface UseLocalStorageProps {
  // Add props here as needed
}

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {




=======
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
>>>>>>> origin/main
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) :initialValue} catch (error) {console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (valu:e:T | ((va:l:T) => T)) => {try {;
      const valueToStore = value instanceof Function ? value(storedValue) :value;import { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
interface UseLocalStorageProps {
  // Add props here as needed
}
=======
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
import React from 'react';
<<<<<<< HEAD
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68

interface UseLocalStorageProps {
  // Add props here as needed
}

<<<<<<< HEAD
>>>>>>> main
interface UseLocalStorageProps {
  // Add props here as needed
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
<<<<<<< HEAD
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
<<<<<<< HEAD
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
=======
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    try {;
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
>>>>>>> main
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue} catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (value: T | ((val: T) => T)) => {
<<<<<<< HEAD
    try {;
=======
    try {
>>>>>>> main
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
// Get from local storage then parse stored json or return initialValue
interface UseLocalStorageProps {
  // Add props here as needed
}
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export const useLocalStorage = <T>(key: string, initialValue: T) => {
    try {
      const item = window && window.localStorage.getItem(key);
      return item ? JSON && JSON.parse(item) : initialValue;
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
<<<<<<< HEAD
      // Save to local storage
      if (typeof window !== 'undefined') {
        window && window.localStorage.setItem(key, JSON && JSON.stringify(valueToStore));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
<<<<<<< HEAD
      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}
}

=======

      console && console.error(`Error setting localStorage key "${key}":`, error);

  };

  return [storedValue, setValue] as const;
}
      console && console.error(`Error setting localStorage key "${key}":`, error)};

  };
  return [storedValue, setValue] as const};
=======

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
};
};


};
=======



=======
}


=======
}

=======


}
}

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
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

;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======

};
export default useLocalStorage;

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
export const useLocalStorage = <T>(key: string, initialValue: T) => {
=======
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Error reading localStorage key
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Error setting localStorage key
    }
=======
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)}
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
  };
<<<<<<< HEAD
  return [storedValue, setValue] as const};
export default useLocalStorage;
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======

  return [storedValue, setValue] as const;
}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
