import React from 'react';


interface EnhancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedPerformanceMonitor({ className = '', children }: EnhancedPerformanceMonitorProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
export default function EnhancedPerformanceMonitor({ className = '', children, ...props }: EnhancedPerformanceMonitorProps) {
        <div className="component" {...props}>
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';


export default function Enhancedperformancemonitor({ className = '', children, ...props }: EnhancedperformancemonitorProps) {
