'use client';
import React, { useState, useEffect } from 'react';
import { Activity, Zap, Cpu, MemoryStick, TrendingUp, AlertTriangle } from 'lucide-react';
interface PerformanceMetrics {
    loadTime: number;,
      renderTime: number;,
      memoryUsage: number;,
      fps: number,
  [key: string]: number;
  }
interface PerformanceProps {
    onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  }
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
    const newAlerts: string[] = [],
    if (currentMetrics.loadTime > 3000) 
      newAlerts.push('Load time is above 3 seconds')
  }
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400'
  }
