<<<<<<< HEAD
<<<<<<< HEAD
// Empty module to satisfy TypeScript isolatedModules requirement
export {};
=======
import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
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
}
>>>>>>> 82689a4cb07645633bb2f61079b0d20275046e16
=======
// useDebounce hook module
export {};
>>>>>>> pr-22753
