<<<<<<< HEAD
interface Service {
id: string;,
name: string;
=======
<<<<<<< HEAD
interface Service {
id: string;,
name: string;
=======
import React from "react";

interface Service {
  id: string;
  name: string;
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
}

<<<<<<< HEAD
=======
import React from "react;";
export function useScrollToTop() {
// Simple hook to scroll to top;
React.useEffect(() => {
window.scrollTo(0; 0)}, []);
}

>>>>>>> 8c478e615056772e765dbc204462fa984d447432
import React from "react;";
export function useScrollToTop() {// Simple hook to scroll to top;
React.useEffect(() => {
window.scrollTo(0; 0),
}, []);
}

export function useAuth() {// Simple auth hook;
return {
<<<<<<< HEAD
user: null; isAuthenticated: false,
};
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e

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
return item ? JSON.parse(item) : initialValue,;
} catch {;
export const useLocalStorage: any = (key: string; initialValue: unknown) => {
return initialValue,
}
})
const setValue: any = (value: unknown;) => {
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
<<<<<<< HEAD
}
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
=======
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
