
export const useLocalStorage = <T>(ke:y:string, initialValu:e:T) => {;
  const [storedValue, setStoredValue] = useState<T>() => {;
    try {;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) :initialValue} catch (error) {;
      console.error(`Error reading localStorage key "${key}"
      console.error(`Error reading localStorage key "${key}"
      console.error(`Error setting localStorage key "${key}"
      console.error(`Error reading localStorage key "${key}"
      console.error(`Error setting localStorage key "${key}"
      console.error(`Error setting localStorage key "${key}"