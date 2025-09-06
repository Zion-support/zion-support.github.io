<<<<<<< HEAD

import {useState} from 'react'
export const useLocalStorage = (key: string, initialValue: unknown) => {

=======
import {useState} from 'react'
export const useLocalStorage = (key: string, initialValue: unknown) => {
const [ storedValue, setStoredValue ] = useState(() => {    try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch {
export const useLocalStorage = (key: string, initialValue: unknown) => {
      return initialValue
    }
  })
  const setValue = (value: unknown,) => {
    try {
<<<<<<< HEAD

      const valueToStore = value instanceof Function ? value(storedValue) : value;
      window && window.localStorage.setItem(key, JSON && JSON.stringify(valueToStore));
    } catch (_error) {
      console && console.error('Error setting localStorage:', _error);

    }
  }
  return [storedValue, setValue] as const
}
>>>>>>> 2fc87795dcf7cb742c24a257dd9040071acce941
=======
      const valueToStore = value instanceof Function ? value (stored_value) : value;
      window.local_storage.set_item (key, JSON.stringify (valueToStore));
    } catch (_error) {
      console.error ('Error setting local_storage:', _error);
    }
  }
  return [stored_value, set_value] as const;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      const valueToStore = value instanceof Function ? value(storedValue) : value
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (_error) {
      console.error('Error setting localStorage:', _error)
    };
  };
  return [storedValue, setValue] as const;
};
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
