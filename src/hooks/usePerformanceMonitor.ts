import { useEffect, useState, useCallback, useRef } from 'react'  interface PerformanceMetrics {
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


   fcp: number | null;
   lcp: number | null;
   fid: number | null;
   cls: number | null;
   ttfb: number | null;
   domLoadTime: number | null;
   resourceLoadTime: number | null} interface PerformanceObserver {
   observe: (options: unknown) => void;
   disconnect: () => void} export const usePerformanceMonitor = () => { const [metrics, setMetrics] = useState<PerformanceMetrics>({ fcp: null, lcp: null, fid: null, cls: null, ttfb: null, domLoadTime: null, resourceLoadTime: null})  const [isMonitoring, setIsMonitoring] = useState(false) const observerRef = useRef<PerformanceObserver | null>(null)  const measureCoreWebVitals = useCallback(() => { if ('PerformanceObserver' in window) {';
;