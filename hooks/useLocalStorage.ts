<<<<<<< HEAD


interface UseLocalStorageProps {
  // Add props here as needed

interface UseLocalStorageProps {
  // Add props here as needed
}



=======


=======}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
};
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage;''"
import React from 'react';
=======
};
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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
interface UseLocalStorageProps {
  // Add props here as needed
}
=======
>>>>>>> origin/main
<<<<<<< HEAD
  // Get from local storage then parse stored json or return initialValue

interface UseLocalStorageProps {
  // Add props here as needed
}

<<<<<<< HEAD
=======
interface UseLocalStorageProps {
  // Add props here as needed
}
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
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
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
    const item = window.localStorage.getItem(key),
    return item ? JSON.parse(item) : initialValue
  } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
export const useLocalStorage = <T>(key: string, initialValue: T) => {
    try {
      const item = window && window.localStorage.getItem(key);
      return item ? JSON && JSON.parse(item) : initialValue;
    } catch (error) {
<<<<<<< HEAD
      console && console.error(`Error reading localStorage key "${key}":`, error);
=======
      console.error(`Error reading localStorage key "${key}":`, error);
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
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
<<<<<<< HEAD
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

;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
};
};
};
};

export default useLocalStorage;
ursor/integrate-build-improve-and-re-verify-8f7d
import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;
export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>
  );
origin/automation-improvements-final
};
};
export default useLocalStorage;

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
};

export default useLocalStorage;
<<<<<<< HEAD
import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;
export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
}
}
}
      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
};
}

}



}
}

=======      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
};
};
export default useLocalStorage;
ursor/fix-lint-push-and-merge-to-main-ae4e
=======

};
export default useLocalStorage;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};
export default useLocalStorage;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
