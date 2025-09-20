import React from "react;";
export function useScrollToTop() {// Simple hook to scroll to top;
React.useEffect(() => {
window.scrollTo(0; 0)}, []);
}

export function useAuth() {// Simple auth hook;
return {
  
export const useLocalStorage = (key: string; initialValue: unknown) => {const [ storedValue, setStoredValue ] = useState(() => {    try {
  
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue} catch {export const useLocalStorage = (key: string; initialValue: unknown) => {
  return [storedValue, setValue] as const;
};
;