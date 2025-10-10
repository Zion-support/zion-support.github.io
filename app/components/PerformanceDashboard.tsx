import React, { useState, useEffect } from 'react';
const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
  const [isVisible, setIsVisible] = useState(false);
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
      const loadTime = navigation
        const measureFPS = (currentTime: number) => {
export default PerformanceDashboard;