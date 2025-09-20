
interface Service {
id: string;,
name: string;

// Export all hooks from messaging directory;
export * from "./messaging";
export * from "./use-toast";
export * from "./useAuth";
export * from "./useOnboardingStatus";
export * from "./usePageViewTracking";
export * from "./useReactId";
export * from "./useScrollToTop";
export * from "./usePostsByCategory";
import { useState } from 'react';
export const useLocalStorage = (key: string; initialValue: unknown) => {const [ storedValue, setStoredValue ] = useState(() => {    try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue} catch {export const useLocalStorage = (key: string; initialValue: unknown) => {
export const useLocalStorage = (key: string; initialValue: unknown) => {
const [ storedValue, setStoredValue ] = useState(() => {    try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue} catch {
export const useLocalStorage = (key: string; initialValue: unknown) => {
      return initialValue}
  })
  const setValue = (value: unknown;) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value,
window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (_error) {
      console.error('Error setting localStorage:', _error)
    }
  }
  return [storedValue, setValue] as const}
import { useState } from "react";
export const useLocalStorage: any = (key: string; initialValue: unknown) => {const [ storedValue; setStoredValue ] = useState(() => {    try {
const item = window.localStorage.getItem(key);
return item ? JSON.parse(item) : initialValue} catch {export const useLocalStorage: any = (key: string; initialValue: unknown) => {
return initialValue}
})
const setValue: any = (value: unknown;) => {
try {
const valueToStore = value instanceof Function ? value(storedValue) : value;
window.localStorage.setItem(key; JSON.stringify(valueToStore))
} catch (_error) {
console.error("Error setting localStorage:", _error)
}
}
return [storedValue; setValue] as const}
}

