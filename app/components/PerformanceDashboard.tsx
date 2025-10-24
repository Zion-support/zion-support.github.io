<<<<<<< HEAD
'use client';

import React, { useState, useEffect } from 'react';
import { usePerformanceMonitor } from '../utils/performance';
import { useAnalytics } from '../utils/analytics';

interface PerformanceDashboardProps {
  show?: boolean;
}

export default function PerformanceDashboard({ show = false }: PerformanceDashboardProps) {
  const [isVisible, setIsVisible] = useState(show);
  const [metrics, setMetrics] = useState<Record<string, number>>({});
  const { getAllMetrics } = usePerformanceMonitor();
  // Note: getEvents is not available in the current analytics hook

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(getAllMetrics());
    }, 1000);

    return () => clearInterval(interval);
  }, [getAllMetrics]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50"
        title="Show Performance Dashboard"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto z-50 border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Performance Dashboard
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Performance Metrics
          </h4>
          <div className="space-y-1">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">{key}:</span>
                <span className="text-gray-900 dark:text-white font-mono">
                  {typeof value === 'number' ? `${value.toFixed(2)}ms` : value}
                </span>
              </div>
            ))}
            {Object.keys(metrics).length === 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No metrics available yet
              </p>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            System Info
          </h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Memory:</span>
              <span className="text-gray-900 dark:text-white font-mono">
                {typeof window !== 'undefined' && 'memory' in performance
                  ? `${Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)}MB`
                  : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Connection:</span>
              <span className="text-gray-900 dark:text-white font-mono">
                {typeof window !== 'undefined' && 'connection' in navigator
                  ? (navigator as any).connection?.effectiveType || 'Unknown'
                  : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
const PerformanceDashboard: React.FC = () => {;
return(<div>
      <Helmet  />;
        <title>PerformanceDashboard</title>
        <meta name="description" content="Advanced PerformanceDashboard solution for modern businesses." / />"
        <meta name="keywords" content="AI,artificial, intelligence, PerformanceDashboard, AI, solutions, intelligent automation" /  />
      </Helmet>;
    </div>
      <Navigation/ />,"
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"  />"
        {/* Hero Section */}"
        <section className="relative py-20 px-4 overflow-hidden" />,"
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20" />,"
    <div className="relative max-w-7 xl mx-auto text-center" />,"
    <h1 className="text-5 xl md: text-7 xl font-bold text-white mb-6 leading-tight" /  />
PerformanceDashboard</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed" /  />"
Advanced PerformanceDashboard solution for modern businesses.</p>
            </p>,<div className="flex flex-col sm: flex-row gap-4 justify-center" />"
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"  />
Get Started</button>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: "bg-emerald-400 hove",""
r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"  />
Learn More</button>
              </button>
        </section>,{/* Features Section */}"
<section className="py-20 px-4" />,"
    <div className="max-w-7 xl mx-auto" />,"
    <div className="text-center mb-16" />,"
    <h1 className="text-4 xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto" /  />
Discover the powerful features that make PerformanceDashboard the perfect solution for your business.</p>
              </>"
    <div className="grid md: "grid-cols-2 l",""
g: grid-cols-4 gap-8" />,<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" />,"
    <h1 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</>"
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" / />,"
    <h1 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
                </>"
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" / />,"
    <h1 className="text-xl font-semibold text-white mb-3">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
                </>"
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" / />,"
    <h1 className="text-xl font-semibold text-white mb-3">Efficient</h3>
"
                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
                </div>
              </div>
            </div>
        </section>,{/* CTA Section */}"
<section className="py-20 px-4" />,"
    <div className="max-w-4 xl mx-auto text-center" / />,"
    <h1 className="text-4 xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8" /  />
Join thousands of businesses already using PerformanceDashboard to transform their operations.</p>
            </p>
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"  />
Start Your Free Trial</button>
            </button>
            </div>
        </section>
        </div>
      </Footer>);
    </div>);
  )}  )}"
export default PerformanceDashboard}"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
