import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    renderTime: 0,
  });

  useEffect(() => {
    // Performance monitoring
    const updateMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
        
        const memoryUsage = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory 
          ? Math.round((performance as Performance & { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize / 1024 / 1024)
          : 0;

        setMetrics({
          loadTime: Math.round(loadTime),
          memoryUsage,
          renderTime: performance.now(),
        });
      }
=======
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMetrics = () => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation
        ? navigation.loadEventEnd - navigation.loadEventStart
        : 0;

      const memory = (
        performance as Performance & { memory?: { usedJSHeapSize: number } }
      ).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;

      setMetrics(prev => ({
        ...prev,
        loadTime,
        memoryUsage,
      }));
>>>>>>> cursor/fix-errors-and-merge-to-main-2ff1
    };

    // Update metrics on load
    updateMetrics();

    // Update metrics periodically
<<<<<<< HEAD
    const interval = setInterval(updateMetrics, 5000);
=======
    const interval = setInterval(updateMetrics, 1000);
>>>>>>> cursor/fix-errors-and-merge-to-main-2ff1

    return () => clearInterval(interval);
  }, []);

  // Only show in development
<<<<<<< HEAD
  if (process.env['NODE_ENV'] === 'production') {
=======
  if (process.env.NODE_ENV !== 'development') {
>>>>>>> cursor/fix-errors-and-merge-to-main-2ff1
    return null;
  }

  return (
<<<<<<< HEAD
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>Load Time: {metrics.loadTime}ms</div>
      <div>Memory: {metrics.memoryUsage}MB</div>
      <div>Render: {Math.round(metrics.renderTime)}ms</div>
=======
    <div className='fixed bottom-4 right-4 z-50'>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className='bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors'
        aria-label='Toggle performance dashboard'
      >
        Perf
      </button>

      {isVisible && (
        <div className='absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64'>
          <h3 className='text-sm font-semibold text-gray-900 mb-3'>
            Performance Metrics
          </h3>
          <div className='space-y-2 text-xs'>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Load Time:</span>
              <span className='font-mono'>{metrics.loadTime.toFixed(2)}ms</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Memory:</span>
              <span className='font-mono'>
                {metrics.memoryUsage.toFixed(2)}MB
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>FPS:</span>
              <span className='font-mono'>{metrics.fps.toFixed(1)}</span>
            </div>
          </div>
        </div>
      )}
>>>>>>> cursor/fix-errors-and-merge-to-main-2ff1
    </div>
  );
};

export default PerformanceDashboard;