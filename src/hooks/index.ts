=======
import {useState} from 'react';
export const useLocalStorage = (key: string, initial_value: unknown) =>: any {
const [ stored_value, setStoredValue ] = useState (() => {    try {
    const item = window.local_storage.get_item (key),
    return item ? JSON.parse (item) : initial_value;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch {
export const useLocalStorage = (key: string, initial_value: unknown) =>: any {
      return initial_value;
    }
  });
  const set_value = (value: unknown, ) =>: any {
    try {
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
