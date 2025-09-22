<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
import React from 'react';
=======
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;

interface UseLocalStorageProps {
  // Add props here as needed
}

interface UseLocalStorageProps {
  // Add props here as needed
}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;

    try {;
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) :initialValue} catch (error) {console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (valu:e:T | ((va:l:T) => T)) => {try {;
      const valueToStore = value instanceof Function ? value(storedValue) :value;import { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

export function useLocalStorage<T>(key: string, initialValue: T) {

export function useLocalStorage<T>(key: string, initialValue: T) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  // Get from local storage then parse stored json or return initialValue
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
=======
  // Get from local storage then parse stored json or return initialValueimport { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export function useLocalStorage<T>(key: string, initialValue: T) {

import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage;''"
import React from 'react';
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
import React from 'react';

  // Get from local storage then parse stored json or return initialValueimport { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage;''"
import React from 'react';

interface UseLocalStorageProps {
  // Add props here as needed
}

};
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {

}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;

    try {;

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {

interface UseLocalStorageProps {
  // Add props here as needed
}

interface UseLocalStorageProps {
  // Add props here as needed
}
}
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;
    try {;
export const useLocalStorage = <T>(key: string, initialValue: T) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Error reading localStorage key
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Error setting localStorage key
    }
export const useLocalStorage = <T>(key: string, initialValue: T) => {,
  const [storedValue, setStoredValue] = useState<T>(() => {,
    try {,
      const item = window.localStorage.getItem(key),
      return item ? JSON.parse(item) : initialValue} catch (error) {,
      console.error(`Error reading localStorage key "${key}":`, error),
      return initialValue};
  }),
  const setValue = (value: T | ((val: T) => T)) => {,
    try {,
      const valueToStore = value instanceof Function ? value(storedValue) : value,
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    try {;      const valueToStore = value instanceof Function ? value(storedValue) : value;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    try {;      const valueToStore = value instanceof Function ? value(storedValue) : value;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
    try {;      const valueToStore = value instanceof Function ? value(storedValue) : value;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      setStoredValue(valueToStore),
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)}
  };
  return [storedValue, setValue] as const}
}
}
}
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Get from local storage then parse stored json or return initialValue
interface UseLocalStorageProps {
  // Add props here as needed
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
console && console.error(`Error setting localStorage key "${key}":`, error);

  };

  return [storedValue, setValue] as const;
}
      console && console.error(`Error setting localStorage key "${key}":`, error)};

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

      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}

}
}
;

      console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Save to local storage
      if (typeof window !== 'undefined') {
        window && window.localStorage.setItem(key, JSON && JSON.stringify(valueToStore));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
  }
  return [storedValue, setValue] as const}
}

<<<<<<< HEAD
<<<<<<< HEAD

interface UseLocalStorageProps {
  // Add props here as needed
}

interface UseLocalStorageProps {
  // Add props here as needed
}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
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
=======
=======}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
}

>>>>>>> origin/automation-improvements-final
=======
      console.error(`Error setting localStorage key "${key}":`, error)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
};      console.error(`Error setting localStorage key "${key}":`, error)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
};
};

};

}
};      console.error(`Error setting localStorage key "${key}":`, error)}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
};
}
};      console.error(`Error setting localStorage key "${key}":`, error)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
  return [storedValue, setValue] as const}
}
}
      console.error(`Error setting localStorage key "${key}":`, error)}
};
  return [storedValue, setValue] as const}
};
};

};
export default useLocalStorage;

console.error(`Error setting localStorage key "${key}":`, error)};
  };
  return [storedValue, setValue] as const};
};
};
<<<<<<< HEAD
<<<<<<< HEAD
};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)}
  };
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
export const useLocalStorage = <T>(key: string, initialValue: T) => {
=======
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
  const [storedValue, setStoredValue] = useState<T>(() => {
=======
}
};export const useLocalStorage = <T>(key: string, initialValue: T) => {  const [storedValue, setStoredValue] = useState<T>(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
};export const useLocalStorage = <T>(key: string, initialValue: T) => {  const [storedValue, setStoredValue] = useState<T>(() => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
};
export const useLocalStorage = <T>(key: string, initialValue: T) => {
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

}
};export const useLocalStorage = <T>(key: string, initialValue: T) => {  const [storedValue, setStoredValue] = useState<T>(() => {
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

  return [storedValue, setValue] as const;
}
};
export const useLocalStorage = <T>(ke: y: string, initialValu: e: T) => {;
  const [storedValue, setStoredValue] = useState<T>(() => {;
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue} catch (error) {;
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue}
  });
  const setValue = (valu: e: T | ((va: l: T) => T)) => {;
    try {;
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {;
      console.error(`Error setting localStorage key "${key}":`, error)}
  };
  return [storedValue, setValue] as const}
}
}
}
};
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;
import React from 'react';

interface UseLocalStorageProps {
  // Add props here as needed
}

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

import { useState,useEffect } from 'react'; export const useLocalStorage = <T>(key: 'string',initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { console.error(`Error reading localStorage key "${key}":`,error); return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { console.error(`Error setting localStorage key "${key}":`,error)} }; return [storedValue,setValue] as const}; export default useLocalStorage;

export default function UseLocalStorage({ }: UseLocalStorageProps) {
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)}
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  return [storedValue, setValue] as const};
export default useLocalStorage;export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}}
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

}
}}
import { useState } from &apos;react&apos;; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) { } }; return [storedValue,setValue] as const}; export default useLocalStorage;

export const useLocalStorage = <T>(key: string, initialValue: T) => {

  const [storedValue, setStoredValue] = useState<T>(() => {

export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {const [storedValue, setStoredValue] = useState<T>(() => {;

export function useLocalStorage<T>(key: string, initialValue: T) {

const { useState } from "react"; export const useLocalStorage = <T>(key: string,initialValue: T) => { const [storedValue,setStoredValue] = useState<T>(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue} catch (error) { return initialValue} }); const setValue = (value: T | ((val: T) => T)) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key,JSON.stringify(valueToStore))} catch (error) {} }; return [storedValue,setValue] as const}; export default useLocalStorage;""

return [storedValue, setValue] as const;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
