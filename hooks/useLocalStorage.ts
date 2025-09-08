import { useState } from 'react';

=======}
};
}
};      console.error(`Error setting localStorage key "${key}":`, error)}
  }
  return [storedValue, setValue] as const}
}
}
      console.error(`Error setting localStorage key "${key}":`, error)}
};
  return [storedValue, setValue] as const}
};
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
  };
  return [storedValue, setValue] as const};
export default useLocalStorage;export default function UseLocalStorage({ }: UseLocalStorageProps) {
  return (
    <div>
      <h1>UseLocalStorage</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
}}
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440