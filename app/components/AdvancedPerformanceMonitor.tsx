<<<<<<< HEAD
interface AdvancedPerformanceMonitorProps {
  className?: string;
}

export default function AdvancedPerformanceMonitor({ className = '' }: AdvancedPerformanceMonitorProps) {
=======
'use client';
import React from 'react';

export default function ComponentsPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Components</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
<<<<<<< HEAD
  );
  );
}
  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const cleanup = measureWebVitals();
    measureResourceTiming();
    measureCoreWebVitals();

    // Monitor performance every 5 seconds
    const interval = setInterval(() => {
      measureResourceTiming();
    }, 5000);

export default AdvancedPerformanceMonitor;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
