import React, { useEffect, useState, useCallback } from 'react';
import { Activity, Zap, Clock, Database } from 'lucide-react';
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const measurePerformance = useCallback(() => {
    const loadTime = performance.now();
    const memoryUsage = (performance as any).memory 
    const connection = (navigator as any).connection;
    const connectionSpeed = connection 
    const renderTime = performance.now() - loadTime;
    const timer = setTimeout(measurePerformance, 1000);
    const handleKeyPress = (e: KeyboardEvent) => {
export default PerformanceMonitor;