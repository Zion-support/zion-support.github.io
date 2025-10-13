<<<<<<< HEAD

import { useEffect, useCallback } from react;

export const usePerformanceMonitor = () => {;;;

  const measurePerformance = useCallback(() => {;;;

    // Measure page load time
    if (typeof window !== 'undefined' && 'performance in window) {
      const navigation = performance.getEntriesByType(navigation)[0] as PerformanceNavigationTiming;;

      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;;

        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;;

        // Track performance metrics
        if (typeof window !== 'undefined && window.gtag) {
          window.gtag('event', 'performance_metric, {
            event_category: 'Performance,
            event_label: 'Page Load Time,
  const measureResourceTiming = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window) {'
      const resources = performance.getEntriesByType(resource);;

      resources.forEach((resource: PerformanceResourceTiming) => {
        const loadTime = resource.responseEnd - resource.startTime;;

        // Track slow resources;
        if (loadTime > 1000) {
          if (typeof window !== 'undefined && window.gtag) {
            window.gtag('event', 'slow_resource, {
              event_category: 'Performance,
  const measureMemoryUsage = useCallback(() => {;;

    if (typeof window !== 'undefined' && 'performance in window && (performance as any).memory) {'
      const memory = (performance as any).memory;;

      const memoryUsage = {;;


      if (memoryUsage.used > memoryUsage.limit * 0.8) {
        if (typeof window !== 'undefined && window.gtag) {
          window.gtag('event', 'high_memory_usage, {
            event_category: 'Performance,
            event_label: 'Memory Usage,
  useEffect(() => {
    const handleLoad = () => {;;

    if (document.readyState === 'complete) {
      window.addEventListener(load, handleLoad);

    return () => {
      window.removeEventListener(load, handleLoad);

export const usePerformanceMonitor = () => {useEffect(() => {
      // This is a simplified version - in production you'd use the web-vitals library;'
      if ('performance' in window) {
      if ('performance' in window) {;
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page load time:', loadTime);}}
    // Run monitoring after page load;
    if (document.readyState === 'complete') {monitorWebVitals();}else {window.addEventListener('load', monitorWebVitals);}}return () => {window.removeEventListener('load', monitorWebVitals);}}, []);
=======
'use client';
import React from 'react';

export default function HooksPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Hooks</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
