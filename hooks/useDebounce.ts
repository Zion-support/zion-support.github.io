<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======

>>>>>>> pr-11913
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
<<<<<<< HEAD
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: 'T',delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
=======
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
>>>>>>> pr-11913
