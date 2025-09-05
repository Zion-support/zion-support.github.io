
export function useLocalStorage<T>(_key: string, _initialValue: T) {_const [storedValue, _setStoredValue] = useState<T>__(() => {
    if (typeof window === 'undefined') {
      return initialValue;}

    try {_const _item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;} catch (error) {_// Error reading localStorage key
      return initialValue;}
  });

  const _setValue = (_value: T | ((val: T) => T)) => {_try {
      const _valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, _JSON.stringify(valueToStore));}
    } catch (error) {_// Error setting localStorage key}
  };

  return [storedValue, setValue] as const;
}
