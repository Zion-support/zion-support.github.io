<<<<<<< HEAD

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
import { useState,useEffect } from 'react'; export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay); return () => { clearTimeout(handler)}},[value,delay]); return debouncedValue}; export default useDebounce;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-76dc
