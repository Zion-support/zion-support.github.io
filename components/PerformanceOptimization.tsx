import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceOptimizationProps {
  className?: string;
}

const PerformanceOptimization = ({
  className = ''
}: PerformanceOptimizationProps) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  const getPerformanceMetrics = async () => {
    try {
      // In a real implementation, you would use the Performance API
      // For demo purposes, we'll simulate metrics
      const mockMetrics: PerformanceMetrics = {
        loadTime: Math.floor(Math.random() * 2000) + 800,
        firstContentfulPaint: Math.floor(Math.random() * 1500) + 500,
        largestContentfulPaint: Math.floor(Math.random() * 2500) + 1000,
        cumulativeLayoutShift: Math.random() * 0.3,
        firstInputDelay: Math.floor(Math.random() * 200) + 50,
        timeToInteractive: Math.floor(Math.random() * 3000) + 1500
      };
      
      setMetrics(mockMetrics);
      generateOptimizations(mockMetrics);
    } catch (error) {
      console.error('Error getting performance metrics:', error);
    }
  };

  const generateOptimizations = (metrics: PerformanceMetrics) => {
    const suggestions: string[] = [];
    
    if (metrics.loadTime > 2000) {
      suggestions.push('Enable compression and minification for faster loading');
    }
    
    if (metrics.firstContentfulPaint > 1500) {
      suggestions.push('Optimize critical CSS and reduce render-blocking resources');
    }
    
    if (metrics.largestContentfulPaint > 2500) {
      suggestions.push('Optimize images and implement lazy loading');
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      suggestions.push('Add dimensions to images and reserve space for dynamic content');
    }
    
    if (metrics.firstInputDelay > 100) {
      suggestions.push('Reduce JavaScript execution time and optimize third-party scripts');
    }
    
    if (metrics.timeToInteractive > 3000) {
      suggestions.push('Implement code splitting and reduce bundle size');
    }
    
    setOptimizations(suggestions);
  };

  const runOptimizations = async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Simulate improved metrics
    if (metrics) {
      const optimizedMetrics: PerformanceMetrics = {
        loadTime: Math.max(metrics.loadTime * 0.6, 800),
        firstContentfulPaint: Math.max(metrics.firstContentfulPaint * 0.7, 500),
        largestContentfulPaint: Math.max(metrics.largestContentfulPaint * 0.8, 1000),
        cumulativeLayoutShift: Math.max(metrics.cumulativeLayoutShift * 0.5, 0.05),
        firstInputDelay: Math.max(metrics.firstInputDelay * 0.6, 50),
        timeToInteractive: Math.max(metrics.timeToInteractive * 0.7, 1500)
      };
      
      setMetrics(optimizedMetrics);
    }
    
    setIsOptimizing(false);
  };

  const getScoreColor = (score: number, thresholds: [number, number]) => {
    if (score <= thresholds[0]) return 'text-green-600 bg-green-100';
    if (score <= thresholds[1]) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreLabel = (score: number, thresholds: [number, number]) => {
    if (score <= thresholds[0]) return 'Good';
    if (score <= thresholds[1]) return 'Needs Improvement';
    return 'Poor';
  };

  useEffect(() => {
    getPerformanceMetrics();
  }, []);

  return (
    <section className={`py-16 bg-gradient-to-br from-blue-50 to-indigo-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">⚡ PERFORMANCE OPTIMIZATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real-Time Performance Monitoring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Monitor and optimize your application's performance with real-time metrics and 
            automated optimization suggestions.
          </p>
        </div>

        {metrics && (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Performance Metrics */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">Load Time</div>
                    <div className="text-sm text-gray-600">Page load completion</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(metrics.loadTime, [1000, 2000])}`}>
                    {metrics.loadTime}ms - {getScoreLabel(metrics.loadTime, [1000, 2000])}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">First Contentful Paint</div>
                    <div className="text-sm text-gray-600">Time to first content</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(metrics.firstContentfulPaint, [800, 1500])}`}>
                    {metrics.firstContentfulPaint}ms - {getScoreLabel(metrics.firstContentfulPaint, [800, 1500])}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">Largest Contentful Paint</div>
                    <div className="text-sm text-gray-600">Main content load time</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(metrics.largestContentfulPaint, [1500, 2500])}`}>
                    {metrics.largestContentfulPaint}ms - {getScoreLabel(metrics.largestContentfulPaint, [1500, 2500])}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">Cumulative Layout Shift</div>
                    <div className="text-sm text-gray-600">Visual stability</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(metrics.cumulativeLayoutShift, [0.05, 0.1])}`}>
                    {metrics.cumulativeLayoutShift.toFixed(3)} - {getScoreLabel(metrics.cumulativeLayoutShift, [0.05, 0.1])}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">First Input Delay</div>
                    <div className="text-sm text-gray-600">Interactivity responsiveness</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(metrics.firstInputDelay, [50, 100])}`}>
                    {metrics.firstInputDelay}ms - {getScoreLabel(metrics.firstInputDelay, [50, 100])}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">Time to Interactive</div>
                    <div className="text-sm text-gray-600">Full interactivity</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(metrics.timeToInteractive, [2000, 3000])}`}>
                    {metrics.timeToInteractive}ms - {getScoreLabel(metrics.timeToInteractive, [2000, 3000])}
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Suggestions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Optimization Suggestions</h3>
              
              {optimizations.length > 0 ? (
                <div className="space-y-4">
                  {optimizations.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="text-yellow-600 text-lg">💡</div>
                      <div className="text-gray-800">{suggestion}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-green-600 text-lg">✅</div>
                  <div className="text-gray-800">Your performance metrics look great! No immediate optimizations needed.</div>
                </div>
              )}

              <div className="mt-6">
                <button
                  onClick={runOptimizations}
                  disabled={isOptimizing}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isOptimizing
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {isOptimizing ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Optimizing...
                    </div>
                  ) : (
                    '🚀 Run Optimizations'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Performance Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Performance Best Practices</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-4xl mb-4">📦</div>
              <h4 className="font-bold text-gray-900 mb-2">Bundle Optimization</h4>
              <p className="text-gray-600 text-sm">Implement code splitting and tree shaking to reduce bundle size</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-4xl mb-4">🖼️</div>
              <h4 className="font-bold text-gray-900 mb-2">Image Optimization</h4>
              <p className="text-gray-600 text-sm">Use modern formats and lazy loading for faster image delivery</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Caching Strategy</h4>
              <p className="text-gray-600 text-sm">Implement effective caching to reduce server load and improve speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceOptimization;