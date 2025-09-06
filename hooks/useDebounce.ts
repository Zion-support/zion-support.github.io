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
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
,

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
import { useState, useEffect } from 'react';
=======
,import { useState, useEffect } from 'react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)}, delay);
    return () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
      clearTimeout(handler)}}, [value, delay]);
  return debouncedValue};
export default useDebounce;
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: 'T',delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
<<<<<<< HEAD
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
=======
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
