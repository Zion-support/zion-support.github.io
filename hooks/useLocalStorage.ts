<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
=======

;
    try {}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {try {const item = window.localStorage.getItem(key)return item ? JSON.parse(item) :initialValue} catch (error) {console.error(`Error reading localStorage key "${key}":`, error)return initialValue}
  })const setValue = (valu:e:T | ((va:l:T) => T)) => {try {const valueToStore = value instanceof Function ? value(storedValue) :value;import { useState, useEffect  } from 'react';
import { useState } from &apos;react&apos;export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key)return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} })const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore)window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }return [storedValue,setValue] as const}export default useLocalStorage;
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import React from 'react';
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
    try {;
<<<<<<< HEAD
=======
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;    try {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) :initialValue} catch (error) {console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (valu:e:T | ((va:l:T) => T)) => {try {;
      const valueToStore = value instanceof Function ? value(storedValue) :value;import { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get from local storage then parse stored json or return initialValue
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
=======
  // Get from local storage then parse stored json or return initialValueimport { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get from local storage then parse stored json or return initialValue
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage;''"
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {ursor/automate-test-improve-and-merge-code-646c;
  // Get from local storage then parse stored json or return initialValueimport { useState } from &apos;react&apos;export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key)return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} })const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore)window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }return [storedValue,setValue] as const}export default useLocalStorage;
const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key)return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} })const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore)window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }return [storedValue,setValue] as const}export default useLocalStorage;''";
interface UseLocalStorageProps  {// Add props here as needed;
}try {export const useLocalStorage = <T>(key: string, initialValue: T) => {const [storedValue, setStoredValue] = useState<T>(() => {try {interface UseLocalStorageProps  {// Add props here as needed;
}ursor/fix-website-loading-errors-and-merge-6662;
}export const useLocalStorage = <T>(key: string, initialValue: T) => {const [storedValue, setStoredValue]  = useState<T>(() => {}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {}export const useLocalStorage = <T>(key: string, initialValue: T) => {const [storedValue, setStoredValue] = useState<T>(() => {}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {try {const item = window.localStorage.getItem(key)return item ? JSON.parse(item) :initialValue} catch (error) {console.error(`Error reading localStorage key "${key}":`, error)return initialValue}
  })const setValue = (valu:e:T | ((va:l:T) => T)) => {try {const valueToStore = value instanceof Function ? value(storedValue) :value;import { useState, useEffect  } from 'react';
export function useLocalStorage<T>() {// Get from local storage then parse stored json or return initialValue;
ursor/integrate-build-improve-and-re-verify-8f7d;
const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key)return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} })const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore)window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }return [storedValue,setValue] as const}export default useLocalStorage;''";
export function useLocalStorage<T>() {const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key)return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} })const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore)window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }return [storedValue,setValue] as const}export default useLocalStorage;''";
interface UseLocalStorageProps  {// Add props here as needed;
}interface UseLocalStorageProps  {// Add props here as needed;
}interface UseLocalStorageProps  {// Add props here as needed;
}interface UseLocalStorageProps  {// Add props here as needed;

interface UseLocalStorageProps {
  // Add props here as needed
}
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
import React from 'react';

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
interface UseLocalStorageProps {
  // Add props here as needed
}

interface UseLocalStorageProps {
  // Add props here as needed
}
<<<<<<< HEAD
=======
ursor/add-new-services-and-deploy-updates-0462;
}export const useLocalStorage = <T>(key: string, initialValue: T) => {const [storedValue, setStoredValue]  = useState<T>(() => {}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {}export const useLocalStorage = <T>(key: string, initialValue: T) => {const [storedValue, setStoredValue] = useState<T>(() => {}
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {try {export const useLocalStorage = <T>(key: string, initialValue: T) => {const [storedValue, setStoredValue] = useState<T>(() => {try {ursor/automate-test-improve-and-merge-code-646c;
      const item = window.localStorage.getItem(key)return item ? JSON.parse(item) : initialValue} catch (error) {console.error(`Error reading localStorage key "${key}":`, error)return initialValue}
  })const setValue = (value: T | ((val: T) => T)) => {try {try {try {ursor/automate-test-improve-and-merge-code-646c;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
    try {const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore),window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {console.error(`Error setting localStorage key "${key}":`, error)}
  }return [storedValue, setValue] as const}
}
}
}
}ursor/integrate-build-improve-and-re-verify-8f7d;
ursor/automate-test-improve-and-merge-code-646c;
// Get from local storage then parse stored json or return initialValue;
interface UseLocalStorageProps  {// Add props here as needed;
}ursor/automate-test-improve-and-merge-code-646c;
export const useLocalStorage = <T>(key: string, initialValue: T) => {try {const item = window && window.localStorage.getItem(key)return item ? JSON && JSON.parse(item) : initialValue;
    } catch (error) {console.error(`Error reading localStorage key "${key}":`, error)}
  })// Return a wrapped version of useState's setter function that persists the new value to localStorage;
  const setValue = (value: T | ((val: T) => T)) => {try {// Allow value to be a function so we have the same API as useState;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore)// Save to local storage;
      if (typeof window !== 'undefined') {window && window.localStorage.setItem(key, JSON && JSON.stringify(valueToStore))}
    } catch (error) {// eslint-disable-next-line no-console;
}}}}}}}
}console.error(`Error setting localStorage key "${key}":`, error)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
};
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
    try {;
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue} catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (value: T | ((val: T) => T)) => {
<<<<<<< HEAD
<<<<<<< HEAD
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
=======
    try {;      const valueToStore = value instanceof Function ? value(storedValue) : value;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      setStoredValue(valueToStore),
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)}
  };
  return [storedValue, setValue] as const}
}
}
}
};
// Get from local storage then parse stored json or return initialValue
interface UseLocalStorageProps {
  // Add props here as needed
}
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
      // Save to local storage
      if (typeof window !== 'undefined') {
        window && window.localStorage.setItem(key, JSON && JSON.stringify(valueToStore));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
<<<<<<< HEAD
<<<<<<< HEAD
      console.error(`Error setting localStorage key "${key}":`, error)}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      console.error(`Error setting localStorage key "${key}":`, error)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  }
  return [storedValue, setValue] as const}
}ursor/automate-test-improve-and-merge-code-646c;
      console && console.error(`Error setting localStorage key "${key}":`, error)}return [storedValue, setValue] as const;
}
<<<<<<< HEAD

<<<<<<< HEAD
};
};
};


};



}


}



}
}

      console.error(`Error setting localStorage key "${key}":`, error)}
=======
=======}
};
}
};      console.error(`Error setting localStorage key "${key}":`, error)}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      console && console.error(`Error setting localStorage key "${key}":`, error)}}return [storedValue, setValue] as const}ursor/fix-website-loading-errors-and-merge-6662;
}}}}}}ursor/automate-test-improve-and-merge-code-646c;
}
}import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key)return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error)return initialValue} })const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore)window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }return [storedValue,setValue] as const}export default useLocalStorage;ursor/fix-website-loading-errors-and-merge-6662;
      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}}
}
ursor/add-new-services-and-deploy-updates-0462;;
}console.error(`Error setting localStorage key "${key}":`, error)}}return [storedValue, setValue] as const}}}}}export default useLocalStorage;ursor/fix-website-loading-errors-and-merge-6662;
export const useLocalStorage = <T>(key: string, initialValue: T) => {import { useState  } from 'react';
export function useLocalStorage<T>() {const [storedValue, setStoredValue] = useState<T>(() => {}
}}
}console.error(`Error setting localStorage key "${key}":`, error)}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  }
  return [storedValue, setValue] as const}
}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
      console.error(`Error setting localStorage key "${key}":`, error)}
}return [storedValue, setValue] as const}
}}
}export const useLocalStorage = <T>(key: string, initialValue: T) => {  const [storedValue, setStoredValue] = useState<T>(() => {if (typeof window === 'undefined') {return initialValue;
    }try {const item = window.localStorage.getItem(key)return item ? JSON.parse(item) : initialValue;
    } catch (error) {// Error reading localStorage key;
      return initialValue;
    }
  })const setValue = (value: T | ((val: T) => T)) => {try {const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore)if (typeof window !== 'undefined') {window.localStorage.setItem(key, JSON.stringify(valueToStore))}
    } catch (error) {// Error setting localStorage key;
    }
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {console.error(`Error setting localStorage key "${key}":`, error)}
  }return [storedValue, setValue] as const}export default useLocalStorage;
ursor/automate-test-improve-and-merge-code-646c;
export default function UseLocalStorage() {export default function UseLocalStorage() {export default useLocalStorage;export default function UseLocalStorage() {return (<div>;
      <h1>UseLocalStorage</h1>;
      <p>This component is currently under development.</p>;
    </div>;
  )}}}}
}
}return [storedValue, setValue] as const;
}ursor/automate-test-improve-and-merge-code-646c;
}
}
}}

};
};
};


};



}


}



}
}

      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

;

      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
};
export const useLocalStorage = <T>(key: string, initialValue: T) => {
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
<<<<<<< HEAD
=======
      console.error(`Error setting localStorage key "${key}":`, error)}
};
  return [storedValue, setValue] as const}
};
}
};export const useLocalStorage = <T>(key: string, initialValue: T) => {  const [storedValue, setStoredValue] = useState<T>(() => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)}
  };
  return [storedValue, setValue] as const};
<<<<<<< HEAD
<<<<<<< HEAD
export default useLocalStorage;
import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;
export default function UseLocalStorage({ }: UseLocalStorageProps) {
=======
export default useLocalStorage;export default function UseLocalStorage({ }: UseLocalStorageProps) {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
export default useLocalStorage;
import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;
export default function UseLocalStorage({}: UseLocalStorageProps) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
}
}
=======
}}
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
}
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
