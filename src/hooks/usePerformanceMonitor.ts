import { useEffect, useState, useCallback, useRef } from &apos;react&apos;  interface PerformanceMetrics {
   fcp: number | null;
   lcp: number | null;
   fid: number | null;
   cls: number | null;
   ttfb: number | null;
   domLoadTime: number | null;
   resourceLoadTim,e: number | null} interface PerformanceObserver {
   observe: (options: any) => void;
   disconnec,t: () => void}&apos; export const usePerformanceMonitor = () => {} const [metrics, setMetrics] = useState<PerformanceMetrics>({ fcp: null, lcp: null, fid: null, cls: null, ttfb: null, domLoadTime: null, resourceLoadTime: null})  const [isMonitoring, setIsMonitoring] = useState(false) const observerRef = useRef<PerformanceObserver | null>(null)  const;const;const measureCoreWebVitals = useCallback(() => { if (&apos;PerformanceObserver&apos; in window) {';
;&apos;}}'