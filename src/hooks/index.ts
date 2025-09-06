<<<<<<< HEAD
export const useScrollToTop = () => {
  // Scroll to top functionality
};
=======
import {useState} from 'react'
export const useLocalStorage = (key: string, initialValue: unknown) => {
<<<<<<< HEAD
const [ storedValue, setStoredValue ] = useState(() => {    try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
=======
  const [ storedValue, setStoredValue ] = useState(() => {    try {
    const item = window && window.localStorage.getItem(key),
    return item ? JSON && JSON.parse(item) : initialValue
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      window && window.localStorage.setItem(key, JSON && JSON.stringify(valueToStore));
    } catch (_error) {
      console && console.error('Error setting localStorage:', _error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  return [storedValue, setValue] as const
}
>>>>>>> 2fc87795dcf7cb742c24a257dd9040071acce941
