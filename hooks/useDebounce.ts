<<<<<<< HEAD
import { useState, useEffect } from 'react,
import { useState,useEffect } from 'react', export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value), useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay), return () => { clearTimeout(handler)}},[value,delay]), return debouncedValue};
export default useDebounce,
export const useDebounce = <T>(value: T, delay: number): T => {,
  const [debouncedValue, setDebouncedValue] = useState<T>(value),
  useEffect(() => {,
    const handler = setTimeout(() => {,
      setDebouncedValue(value)}, delay),
    return () => {,
      clearTimeout(handler)}}, [value, delay]),
  return debouncedValue};
export default useDebounce,
,
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
import { useState, useEffect } from 'react';
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
<<<<<<< HEAD
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
=======
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
