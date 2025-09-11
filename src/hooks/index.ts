<<<<<<< HEAD
import {useState} from 'react'
export const useLocalStorage = (key: string, initialValue: unknown) => {

<<<<<<< HEAD
import {useState} from 'react'
export const useLocalStorage = (key: string, initialValue: unknown) => {
const [ storedValue, setStoredValue ] = useState(() => {    try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch {
export const useLocalStorage = (key: string, initialValue: unknown) => {
      return initialValue
    }
  })
  const setValue = (value: unknown,) => {
    try {
<<<<<<< HEAD
      const valueToStore = value instanceof Function ? value(storedValue) : value
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (_error) {
      console.error('Error setting localStorage:', _error)
    };
  };
  return [storedValue, setValue] as const;
};
}
}
=======

      const valueToStore = value instanceof Function ? value(storedValue) : value;
      window && window.localStorage.setItem(key, JSON && JSON.stringify(valueToStore));
    } catch (_error) {
      console && console.error('Error setting localStorage:', _error);

    }
  }
  return [storedValue, setValue] as const
}
      const valueToStore = value instanceof Function ? value (stored_value) : value;
      window.local_storage.set_item (key, JSON.stringify (valueToStore));
    } catch (_error) {
      console.error ('Error setting local_storage:', _error);
    }
  }
  return [stored_value, set_value] as const;
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
