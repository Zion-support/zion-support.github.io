export const useScrollToTop = () => {
  // Scroll to top functionality
;
const [ storedValue, setStoredValue ] = useState() => {    try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
import {useState} from 'react';
export const useLocalStorage = (key: string, initial_value: unknown) =>: any {
const [ stored_value, setStoredValue ] = useState () => {    try {
    const item = window.local_storage.get_item (key),
    return item ? JSON.parse (item) : initial_value;
  } catch {
export const useLocalStorage = (key: string, initial_value: unknown) =>: any {
      return initial_value;
    });
  const set_value = (value: unknown, ) =>: any {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      window.localStorage.setItem(key, JSON.stringify(valueToStore)
    } catch (_error) {
      console.error('Error setting localStorage:', _error)
    }
  return [storedValue, setValue] as const

      const valueToStore = value instanceof Function ? value (stored_value) : value;
      window.local_storage.set_item (key, JSON.stringify (valueToStore);
    } catch (_error) {
      console.error ('Error setting local_storage:', _error);
    }
  return [stored_value, set_value] as const;
