import: { useEffect, useState, useCallback, useRef } from;
  'react'  interface: PerformanceMetrics {';
   fcp: number: | null;
   lcp: number: | null;
   fid: number: | null;
   cls: number: | null;
   ttfb: number: | null;
   domLoadTime: number: | null;
   resourceLoadTime: number: | nul,l} interface PerformanceObserver {
   observe: (options: any) => void;
   disconnect: () => voi,d} export: const usePerformanceMonitor = () => { const [metrics, setMetrics] = useState<PerformanceMetrics>({ fcp: nul,l, lcp: nul,l, fid: nul,l, cls: nul,l, ttfb: nul,l, domLoadTime: nul,l, resourceLoadTime: nul,l})  const: [isMonitoring, setIsMonitoring] = useState(false) const observerRef = useRef<PerformanceObserver | null>(null)  const measureCoreWebVitals = useCallback(() => { if(
  'PerformanceObserver' in window) {';
import { useEffect, useState, useCallback, useRef } from;
  'react'  interface PerformanceMetrics {
   fcp: number | null;
   lcp: number | null;
   fid: number | null;
   cls: number | null;
   ttfb: number | null;
   domLoadTim,
    e: number | null;
   resourceLoadTim,
    e: number | null} interface PerformanceObserver {
   observe: (option,
    s: any) => void;
   disconnec,
    t: () => void} export const usePerformanceMonitor = () => { const [metrics, setMetrics] = useState<PerformanceMetrics>({ fcp: null, lcp: null, fid: null, cls: null, ttfb: null, domLoadTime: null, resourceLoadTime: null})  const [isMonitoring, setIsMonitoring] = useState(false) const observerRef = useRef<PerformanceObserver | null>(null)  const measureCoreWebVitals = useCallback(() => { if('
  'PerformanceObserver' in window) {';
