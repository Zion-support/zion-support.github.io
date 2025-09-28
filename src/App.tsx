import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import PerformanceDashboard from './components/PerformanceDashboard';
import RealTimeMonitor from './components/RealTimeMonitor';
import SystemMetricsDashboard from './components/SystemMetricsDashboard';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import EnhancedNotificationSystem from './components/EnhancedNotificationSystem';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';

export default function App(): React.JSX.Element {
  // State for system metrics dashboard
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  
  // State for performance optimizer
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSecurity: true,
    enableAnalytics: true,
    enableNotifications: true,
    enableCaching: true,
  });

  // Optimized keyboard handler for system dashboard toggle
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
      event.preventDefault();
      setShowSystemDashboard(prev => !prev);
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'P') {
      event.preventDefault();
      setShowPerformanceOptimizer(prev => !prev);
    }
  }, []);

  // Memoize the SEO data to prevent unnecessary re-renders
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    ogType: 'website',
    ogUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const,
    structuredData: []
  }), []);

  useEffect(() => {
    // Add performance marks for better monitoring
    if (typeof window !== 'undefined' && window.performance && typeof performance.mark === 'function') {
      performance.mark('app-init-start');
    }
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Show loading screen while initializing
  if (isLoading) {
    return (
      <EnhancedErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <ModernLoadingSpinner size="xl" />
            <div className="mt-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Initializing Zion Tech Group</h2>
              <p className="text-lg opacity-80">Loading advanced technology solutions...</p>
              <div className="mt-4 w-64 bg-gray-700 rounded-full h-2 mx-auto">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="mt-2 text-sm opacity-60">{Math.round(loadingProgress)}% Complete</p>
            </div>
          </div>
        </div>
      </EnhancedErrorBoundary>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Main Application Router */}
        <AppRouter />
        
        {/* System Metrics Dashboard - Toggle with Ctrl+Shift+D */}
        {showSystemDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">System Metrics Dashboard</h2>
                <button
                  onClick={() => setShowSystemDashboard(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  aria-label="Close dashboard"
                >
                  ×
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
                <EnhancedSystemDashboard />
              </div>
            </div>
          </div>
        )}

        {/* Performance Optimizer - Toggle with Ctrl+Shift+P */}
        {showPerformanceOptimizer && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">Performance Optimizer</h2>
                <button
                  onClick={() => setShowPerformanceOptimizer(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  aria-label="Close optimizer"
                >
                  ×
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
                <PerformanceOptimizer />
              </div>
            </div>
          </div>
        )}

        {/* Performance Dashboard - Always visible in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 z-40">
            <PerformanceDashboard />
          </div>
        )}

        {/* Real-time Monitor - Always visible in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed top-4 right-4 z-40">
            <RealTimeMonitor />
          </div>
        )}

        {/* Enhanced Notification System */}
        <EnhancedNotificationSystem />
      </div>
    </EnhancedErrorBoundary>
  );
}