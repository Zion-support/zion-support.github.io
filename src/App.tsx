import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AppRouter } from './router';
import { useAppInitialization } from './hooks/useAppInitialization';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import PerformanceTracker from './components/PerformanceTracker';
import AccessibilityEnhancements from './components/AccessibilityEnhancements';
import { seoAnalytics, performanceSEO, seoManager } from './utils/seoEnhanced';
import { analytics } from './utils/analytics';
import { performanceOptimizer } from './utils/performanceOptimizations';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import { seoOptimizer } from './utils/seoOptimizations';
import { initializePerformanceEnhancements } from './utils/performanceEnhancements';
import { AdvancedAutomationSystem } from './utils/advancedAutomationSystem';
import { AccessibilityEnhancer } from './utils/accessibilityEnhancer';
import { SecurityEnhancer } from './utils/securityEnhancer';
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization';
import RealTimeMonitor from './components/RealTimeMonitor';
import EnhancedSystemDashboard from './components/EnhancedSystemDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOOptimizer from './components/SEOOptimizer';
import AIPerformanceDashboard from './components/AIPerformanceDashboard';
import { getComprehensiveEnhancements } from './utils/comprehensiveEnhancements';
import { enhancedAnalytics } from './utils/enhancedAnalytics';
import { advancedCacheSystem } from './utils/advancedCacheSystem';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';
import './styles/accessibility.css';

export default function App(): React.JSX.Element {
  // State for system dashboard and performance optimizer
  const [showSystemDashboard, setShowSystemDashboard] = useState(false);
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [showSEOOptimizer, setShowSEOOptimizer] = useState(false);
  const [showRealTimeMetrics, setShowRealTimeMetrics] = useState(false);
  const [showAccessibilityPanel, setShowAccessibilityPanel] = useState(false);

  // Engagement tracking data
  const engagementData = useMemo(() => ({
    startTime: Date.now(),
    scrollDepth: 0,
    clicks: 0
  }), []);

  // Initialize app with custom configuration
  const { isLoading, loadingProgress, handleScroll, handleClick, trackEngagement } = useAppInitialization({
    enablePerformanceMonitoring: true,
    enableAccessibility: true,
    enableSecurity: true,
    enableAnalytics: true,
    enableNotifications: true,
    enableCaching: true,
  });

  // Performance optimization hook
  const { preloadResource, optimizePerformance } = usePerformanceOptimization({
    enablePreloading: true,
    enableResourceHints: true,
    enableCriticalCSS: true,
    enableImageOptimization: true,
  });

  // SEO data
  const seoData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.',
    keywords: ['AI solutions', 'quantum computing', 'digital transformation', 'cloud services', 'enterprise technology', 'machine learning', 'automation', 'blockchain'],
    canonicalUrl: typeof window !== 'undefined' ? window.location.href : '',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image' as const
  }), []);

  // Initialize SEO analytics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      seoAnalytics.trackPageView(window.location.pathname);
    }
  }, []);

  // Initialize performance enhancements
  useEffect(() => {
    initializePerformanceEnhancements();
  }, []);

  // Initialize comprehensive enhancements
  useEffect(() => {
    const enhancements = getComprehensiveEnhancements();
    enhancements.initialize();
  }, []);

  // Keyboard shortcuts
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key) {
        case 'd':
          event.preventDefault();
          setShowSystemDashboard(prev => !prev);
          break;
        case 'p':
          event.preventDefault();
          setShowPerformanceOptimizer(prev => !prev);
          break;
        case 'm':
          event.preventDefault();
          setShowPerformanceMonitor(prev => !prev);
          break;
        case 'a':
          event.preventDefault();
          setShowAIDashboard(prev => !prev);
          break;
        case 's':
          event.preventDefault();
          setShowSEOOptimizer(prev => !prev);
          break;
        case 'r':
          event.preventDefault();
          setShowRealTimeMetrics(prev => !prev);
          break;
        case 'h':
          event.preventDefault();
          setShowAccessibilityPanel(prev => !prev);
          break;
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Enhanced scroll handler
  const handleEnhancedScroll = useCallback((event: Event) => {
    handleScroll(event);
    trackEngagement('scroll', { depth: window.scrollY });
  }, [handleScroll, trackEngagement]);

  // Enhanced click handler
  const handleEnhancedClick = useCallback((event: Event) => {
    handleClick(event);
    trackEngagement('click', { target: (event.target as Element)?.tagName });
  }, [handleClick, trackEngagement]);

  useEffect(() => {
    document.addEventListener('scroll', handleEnhancedScroll);
    document.addEventListener('click', handleEnhancedClick);
    
    return () => {
      document.removeEventListener('scroll', handleEnhancedScroll);
      document.removeEventListener('click', handleEnhancedClick);
    };
  }, [handleEnhancedScroll, handleEnhancedClick]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="text-center">
          <ModernLoadingSpinner progress={loadingProgress} />
          <p className="mt-4 text-white text-lg">Initializing Zion Tech Group Platform...</p>
        </div>
      </div>
    );
  }

  return (
    <AdvancedErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Main Application */}
        <AppRouter />
        
        {/* System Dashboard */}
        {showSystemDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">System Dashboard</h2>
                  <button
                    onClick={() => setShowSystemDashboard(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <EnhancedSystemDashboard />
              </div>
            </div>
          </div>
        )}

        {/* Performance Optimizer */}
        {showPerformanceOptimizer && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Performance Optimizer</h2>
                  <button
                    onClick={() => setShowPerformanceOptimizer(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <PerformanceOptimizer />
              </div>
            </div>
          </div>
        )}

        {/* Performance Monitor */}
        {showPerformanceMonitor && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Performance Monitor</h2>
                  <button
                    onClick={() => setShowPerformanceMonitor(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <PerformanceMonitor />
              </div>
            </div>
          </div>
        )}

        {/* AI Performance Dashboard */}
        {showAIDashboard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">AI Performance Dashboard</h2>
                  <button
                    onClick={() => setShowAIDashboard(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <AIPerformanceDashboard isVisible={showAIDashboard} onClose={() => setShowAIDashboard(false)} />
              </div>
            </div>
          </div>
        )}

        {/* SEO Optimizer */}
        {showSEOOptimizer && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">SEO Optimizer</h2>
                  <button
                    onClick={() => setShowSEOOptimizer(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                <SEOOptimizer />
              </div>
            </div>
          </div>
        )}

        {/* Real-time Metrics */}
        {showRealTimeMetrics && (
          <div className="fixed top-4 right-4 z-40 bg-white rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Real-time Metrics</h3>
              <button
                onClick={() => setShowRealTimeMetrics(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <RealTimeMonitor />
          </div>
        )}

        {/* Accessibility Panel */}
        {showAccessibilityPanel && (
          <div className="fixed bottom-4 left-4 z-40 bg-white rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-900">Accessibility</h3>
              <button
                onClick={() => setShowAccessibilityPanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <AccessibilityEnhancements />
          </div>
        )}

        {/* Performance Tracker */}
        <PerformanceTracker />
      </div>
    </AdvancedErrorBoundary>
  );
}