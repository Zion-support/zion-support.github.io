
,
import { useState,useEffect } from 'react', export const useDebounce = <T>(value: T,delay: number): T => { const [debouncedValue,setDebouncedValue] = useState<T>(value), useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)},delay), return () => { clearTimeout(handler)}},[value,delay]), return debouncedValue};
export default useDebounce,;
export const useDebounce = <T>(value: T, delay: number): T => {,;
  const [debouncedValue, setDebouncedValue] = useState<T>(value),;
  useEffect(() => {,;
    const handler = setTimeout(() => {,;
      setDebouncedValue(value)}, delay),;
    return () => {,;
      clearTimeout(handler)}}, [value, delay]),;
  return debouncedValue};
export default useDebounce,;
ursor/integrate-build-improve-and-re-verify-8f7d,
origin/automation-improvements-final, ursor/add-new-services-and-deploy-updates-0o462,
origin/cursor/integrate-build-improve-and-re-verify-c7b5,
ursor/integrate-build-improve-and-re-verify-8f7d,
origin/automation-improvements-final,