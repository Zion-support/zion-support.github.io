<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======

;
import { useState, useEffect  } from 'react';
export const useDebounce = <T>(value: T, delay: number): T => {const [debouncedValue, setDebouncedValue]  = useState<T>(value)useEffect(() => {const handler = setTimeout(() => {setDebouncedValue(value)}, delay)return () => {clearTimeout(handler)}}, [value, delay])return debouncedValue;
}export default useDebounce;
,import { useState, useEffect  } from 'react';
ursor/automate-test-improve-and-merge-code-646c;
,import { useState, useEffect  } from 'react';
export const useDebounce = <T>(value: T, delay: number): T => {const [debouncedValue, setDebouncedValue] = useState<T>(value)useEffect(() => {const handler = setTimeout(() => {setDebouncedValue(value)}, delay)return () => {clearTimeout(handler)}}, [value, delay])return debouncedValue}export default useDebounce;import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: 'T',delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value)useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay)return () => { clearTimeout(handler)}},[value,delay])return debouncedValue}export default useDebounce;
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value)useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay)return () => { clearTimeout(handler)}},[value,delay])return debouncedValue}export default useDebounce;ursor/automate-test-improve-and-merge-code-646c;
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value)useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay)return () => { clearTimeout(handler)}},[value,delay])return debouncedValue}export default useDebounce;import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value)useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay)return () => { clearTimeout(handler)}},[value,delay])return debouncedValue}export default useDebounce;
import { useState, useEffect } from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
,import { useState, useEffect } from 'react';
>>>>>>> origin/merge-pr-12271
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)}, delay);
    return () => {
      clearTimeout(handler)}}, [value, delay]);
  return debouncedValue};
export default useDebounce;
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: 'T',delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
<<<<<<< HEAD
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
=======
>>>>>>> origin/merge-pr-12271
