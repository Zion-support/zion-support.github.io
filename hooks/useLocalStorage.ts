
<<<<<<< HEAD
};
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;

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
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {




=======
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) :initialValue} catch (error) {console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (valu:e:T | ((va:l:T) => T)) => {try {;
      const valueToStore = value instanceof Function ? value(storedValue) :value;import { useState, useEffect } from 'react';
<<<<<<< HEAD

export function useLocalStorage<T>(key: string, initialValue: T) {

import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage;''"
import React from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {

}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;

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

=======
export function useLocalStorage<T>(key: string, initialValue: T) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Get from local storage then parse stored json or return initialValue
interface UseLocalStorageProps {
  // Add props here as needed
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export const useLocalStorage = <T>(key: string, initialValue: T) => {
    try {
      const item = window && window.localStorage.getItem(key);
      return item ? JSON && JSON.parse(item) : initialValue;
    } catch (error) {
      console && console.error(`Error reading localStorage key "${key}":`, error);
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
        window && window.localStorage.setItem(key, JSON && JSON.stringify(valueToStore));
      }
    } catch (error) {
      // eslint-disable-next-line no-console

      console && console.error(`Error setting localStorage key "${key}":`, error);

  };

  return [storedValue, setValue] as const;
}
<<<<<<< HEAD

export default useLocalStorage;

import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;
export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>
  );

      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}
}

<<<<<<< HEAD
      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}
}
}
}
}

=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}
=======

;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};

<<<<<<< HEAD
=======
};
export default useLocalStorage;

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
