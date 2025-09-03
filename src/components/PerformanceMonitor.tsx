import React from 'react';

type PerformanceMonitorProps = {
  enabled?: boolean;
};

export default function PerformanceMonitor({ enabled = false }: PerformanceMonitorProps) {
  if (!enabled) return null;
  return <div className="text-xs text-gray-400">Performance monitor active</div>;
}
