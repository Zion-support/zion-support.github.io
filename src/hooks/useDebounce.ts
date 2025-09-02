import { useState, useEffect } from 'react'  export function useDebounce<T>(value: T, delay: number): T { const [debouncedValue, setDebouncedValue] = useState<unknown>(value)  useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value)}, delay)  return () => { clearTimeout(handler)}}, [value, delay])  return debouncedValue
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

}