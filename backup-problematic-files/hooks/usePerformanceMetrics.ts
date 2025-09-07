:hooks/usePerformanceMetrics.ts
import { useEffect, useState } from "react";
import { PerformanceMetrics } from "../types";

export function usePerformanceMetrics() {;
:backup-problematic-files/hooks/usePerformanceMetrics.ts
import { useEffect, useState } from 'react';
import { PerformanceMetrics } from '../types';
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }
    setIsSupported(true);
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(
        entry => entry.name === 'first-contentful-paint'
      );
      const lcp = performance.getEntriesByType(
        'largest-contentful-paint'
      const cls = performance
        .getEntriesByType('layout-shift')
        .reduce((acc, entry) => {
          return acc + (entry as any).value;
        }, 0);
      const fid = performance.getEntriesByType(
        'first-input'
      )[0] as PerformanceEventTiming;

    if (typeof window === "undefined" |!("performance" in window)) {
      const navigationEntries =
        window.performance.getEntriesByType("navigation");
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType("paint");
        (entry) => entry.name === "first-contentful-paint"
      const lcpEntries = window.performance.getEntriesByType(
        "largest-contentful-paint"
      const lcp = lcpEntries[0] as PerformanceEntry;
      const clsEntries = window.performance.getEntriesByType("layout-shift");
      const cls = clsEntries.reduce((acc, entry) => {
        return acc + (entry as PerformanceEntry & { value: number }).value;
      const fidEntries = window.performance.getEntriesByType("first-input");
      const fid = fidEntries[0] as PerformanceEventTiming;

main:hooks/usePerformanceMetrics.ts
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: cls
        firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
      });
    };
    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
  return { metrics, isSupported };
import { useEffect, useState } from 'react',;
import { PerformanceMetrics } from '../types',;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),;
  const [isSupported, setIsSupported] = useState(false),;
  useEffect(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) {;
  return { metrics, isSupported }
