import React, { useMemo, useState } from 'react';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import './index.css';
import { AppRouter } from './router';

export default function App(): React.JSX.Element {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<Array<{ id: string }>>([]);

  const seoDataForOptimizer = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonical: typeof window !== 'undefined' ? window.location.href : 'https://zion.app/',
  }), []);

  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer seoData={seoDataForOptimizer} />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />

        {showPerformanceOptimizer && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="performance-optimizer-title"
          >
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Optimizer</h2>
                <button
                  onClick={() => setShowPerformanceOptimizer(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <PerformanceOptimizer isVisible={true} onClose={() => setShowPerformanceOptimizer(false)} />
            </div>
          </div>
        )}

        {showPerformanceMonitor && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Monitor</h2>
                <button
                  onClick={() => setShowPerformanceMonitor(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
              <PerformanceMonitor showDashboard={true} />
            </div>
          </div>
        )}

        <NotificationSystem
          notifications={notifications as any}
          onRemove={(id) => setNotifications(prev => prev.filter(n => n.id !== id))}
        />

        {/* Minimal toggle buttons for demo */}
        <div className="fixed bottom-4 right-4 z-40 flex gap-3">
          <button
            onClick={() => setShowPerformanceOptimizer(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg"
            title="Open Performance Optimizer"
          >
            Optimizer
          </button>
          <button
            onClick={() => setShowPerformanceMonitor(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg"
            title="Open Performance Monitor"
          >
            Monitor
          </button>
        </div>
      </div>
    </EnhancedErrorBoundary>
  );
}