<<<<<<< HEAD
import { useState, useEffect } from 'react'; ; export function useDebounce<T>(value: T, delay: number): T {; const [debouncedValue, setDebouncedValue] = useState<any>(value); ; useEffect(() => {; const handler = setTimeout(() => {; setDebouncedValue(value)}, delay); ; return () => {; clearTimeout(handler)}}, [value, delay]); ; return debouncedValue};''
=======
import { useState, useEffect } from 'react'; ; export function useDebounce<T>(value: T, delay: number): T {; const [debouncedValue, setDebouncedValue] = useState<any>(value); ; useEffect(() => {; const handler = setTimeout(() => {; setDebouncedValue(value)}, delay); ; return () => {; clearTimeout(handler)}}, [value, delay]); ; return debouncedValue};
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
