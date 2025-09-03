<<<<<<< HEAD
import { useEffect, useState, useCallback, useRef } from 'react'  interface PerformanceMetrics { fcp: number | null;
=======
<<<<<<< HEAD
import { useEffect, useState, useCallback, useRef } from 'react'  interface PerformanceMetrics {;
=======
<<<<<<< HEAD
import {useEffect, useState, useCallback, useRef } from 'react'  interface PerformanceMetrics {;
=======
<<<<<<< HEAD
import { useEffect, useState, useCallback, useRef } from &apos;react&apos;  interface PerformanceMetrics {
=======
<<<<<<< HEAD
import { useEffect, useState, useCallback, useRef } from 'react'  interface PerformanceMetrics {;
""
}
=======
<<<<<<< HEAD
import { useEffect, useState, useCallback, useRef } from 'react'  interface PerformanceMetrics {
>>>>>>> main
>>>>>>> main
   fcp: number | null;
>>>>>>> main
   lcp: number | null;
   fid: number | null;
   cls: number | null;
   ttfb: number | null;
   domLoadTime: number | null;
<<<<<<< HEAD
   resourceLoadTime: number | null  } interface PerformanceObserver { observe: (options: any) => void;
   disconnect: () => void  } export const usePerformanceMonitor = () => { const [metrics, setMetrics] = useState<PerformanceMetrics>({ fcp: null, lcp: null, fid: null, cls: null, ttfb: null, domLoadTime: null, resourceLoadTime: null})  const [isMonitoring, setIsMonitoring] = useState(false) const observerRef = useRef<PerformanceObserver | null>(null)  const measureCoreWebVitals = useCallback(() => { if ('PerformanceObserver' in window) {';'
;
=======
<<<<<<< HEAD
   resourceLoadTime: number | null} interface PerformanceObserver {;
=======
   resourceLoadTim,e: number | null} interface PerformanceObserver {
>>>>>>> main
   observe: (options: any) => void;
<<<<<<< HEAD
   disconnect: () => void;
} export const usePerformanceMonitor = () => { const [metrics, setMetrics] = useState<PerformanceMetrics>({ fcp: null, lcp: null, fid: null, cls: null, ttfb: null, domLoadTime: null, resourceLoadTime: null})  const [isMonitoring, setIsMonitoring] = useState(false) const observerRef = useRef<PerformanceObserver | null>(null)  const measureCoreWebVitals = useCallback(() => { if ('PerformanceObserver' in window) {';;
=======
<<<<<<< HEAD
   disconnec,t: () => void}&apos; export const usePerformanceMonitor = () => {} const [metrics, setMetrics] = useState<PerformanceMetrics>({ fcp: null, lcp: null, fid: null, cls: null, ttfb: null, domLoadTime: null, resourceLoadTime: null})  const [isMonitoring, setIsMonitoring] = useState(false) const observerRef = useRef<PerformanceObserver | null>(null)  const;const;const measureCoreWebVitals = useCallback(() => { if (&apos;PerformanceObserver&apos; in window) {';
;&apos;}}'
=======
   disconnect: () => void} export const usePerformanceMonitor = () => { const [metrics, setMetrics] = useState<PerformanceMetrics>({ fcp: null, lcp: null, fid: null, cls: null, ttfb: null, domLoadTime: null, resourceLoadTime: null})  const [isMonitoring, setIsMonitoring] = useState(false) const observerRef = useRef<PerformanceObserver | null>(null)  const measureCoreWebVitals = useCallback(() => { if ('PerformanceObserver' in window) {';'
;
=======
import { useEffect, useState, useCallback, useRef }  from 'react';interface PerformanceMetrics {;
"
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
