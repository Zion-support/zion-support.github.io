import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
  const [isVisible, setIsVisible] = useState(false);
      const handleKeyPress = (e: KeyboardEvent) => {
  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {</<<<PerformanceMetrics>if</PerformanceMetrics></PerformanceMetrics> (value === null) return 'text-gray-400';</<<<PerformanceMetrics>if</PerformanceMetrics></PerformanceMetrics> (value <= thresholds.good) return 'text-green-400';
  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
export default EnhancedPerformanceMonitor;