<<<<<<< HEAD
import { useState, useEffect } from "react"; export function useDebounce<T>("value": T, "delay": number) T {, const [debouncedValue, setDebouncedValue] = useState<any>(value); useEffect(() => {; const handler = setTimeout(() => {; setDebouncedValue(value)}, delay); return () => {; clearTimeout(handler)}}, [value, delay]); return debouncedValue};")}
"export default ComponentName;"
import { useState,useEffect } from "react"; export function useDebounce<T>(value: T,delay: number) T {,const [debouncedValue,setDebouncedValue] = useState<any>(value); useEffect(() => {; const handler = setTimeout(() => {; setDebouncedValue(value)},delay); return () => {; clearTimeout(handler)}},[value,delay]); return debouncedValue};"),} "export default ComponentName;"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-76dc
