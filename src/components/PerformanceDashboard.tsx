import React, { useEffect, useState } from 'react';
interface PerformanceMetrics {
  fcp: number | null;,
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}
interface PerformanceProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
'use client';
interface PerformanceMetrics {<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });
  useEffect(() => {
    
}}}})