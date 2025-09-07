},
export const useLocalStorage = <T>(ke: string, initialValu: T) => {,
  const [storedValue, setStoredValue] = useState<T>(() => {,
    try {,
      const item = window.localStorage.getItem($2);
      return item ? JSON.parse(item) : initialValue} catch (error) {,
      console.error($2);
      return initialValue}
  }),
  const setValue = $2;
    try {,
      const valueToStore = $2;
      setStoredValue($2);
      window.localStorage.setItem(key, JSON.stringify(valueToStore))} catch (error) {,
      console.error(`Error setting localStorage key "${key}":`, error)}
  },
  return [storedValue, setValue] as const}
}
}
}
},