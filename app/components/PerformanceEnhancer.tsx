import React, { useEffect, useCallback, useMemo } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
const PerformanceEnhancer: React.FC<PerformanceEnhancerProps>= ({
const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({}
const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  const performanceMetrics = useMemo(() => ({</PerformanceEnhancerProps>
  const performanceMetrics = useMemo(() => ({
  const performanceMetrics = useMemo(() => ({}
  const reportError = useCallback((error: any, context?: string) => {
    const errorData = {
  const reportError = useCallback((error: any, context?: string) => {}
    const errorData = {}
    const reportMetric = (metric: any) => {}
          const budget = performanceBudget[metric.name as keyof typeof performanceBudget];,
          const budget = performanceBudget[metric.name as keyof typeof performanceBudget];
          const data = JSON.stringify({
          const data = JSON.stringify({)}
          const data = JSON.stringify({)
    const measureResourceTiming = () => {}
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const slowResources = resources.filter(resource =>)
        const slowResources = resources.filter(resource =>)
    const measureMemory = () => {}
          const memory = (performance as any).memory;
    const memoryInterval = setInterval(measureMemory, 30000);
    const measureNetwork = () => {}
          const connection = (navigator as any).connection;
    const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries();
    const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries();
    const measureUserTiming = () => {}
        const userTiming = performance.getEntriesByType('measure') as PerformanceMeasure[];
    const reportPerformanceSummary = () => {
        const summary = {
    const reportPerformanceSummary = () => {}
        const summary = {}
    const timeout = setTimeout(reportPerformanceSummary, 10000);