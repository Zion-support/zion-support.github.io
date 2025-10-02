import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AppRouter } from './router';
import './index.css';
import ModernHeader from './components/Header';
import ModernFooter from './components/Footer';
import SEOOptimizer from './components/SEOOptimizer';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
// Types and interfaces
interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

interface WindowWithEnhancements extends Window {
  advancedPerformanceOptimizer?: { initialize?: () => void };
  advancedSEOOptimizer?: { initialize?: () => void };
  advancedSecurityManager?: { initialize?: () => void };
  advancedAnalytics?: { initialize?: () => void };
  advancedErrorHandler?: { initialize?: () => void };
  advancedCachingSystem?: { initialize?: () => void };
  advancedUXOptimizer?: { initialize?: () => void };
  advancedTestingFramework?: { initialize?: () => void };
  advancedI18n?: { initialize?: () => void };
  enhancements?: Record<string, unknown>;
  performanceOptimizer?: Record<string, unknown>;
  seoOptimizer?: Record<string, unknown>;
  securityManager?: Record<string, unknown>;
  analytics?: Record<string, unknown>;
  errorHandler?: Record<string, unknown>;
  cachingSystem?: Record<string, unknown>;
  uxOptimizer?: Record<string, unknown>;
  testingFramework?: Record<string, unknown>;
  i18n?: Record<string, unknown>;
}

// Initialize performance enhancements function
const initializePerformanceEnhancements = () => {
  // Performance enhancement initialization logic
  // Performance enhancements initialized
};

// Main App Component
const App: React.FC = () => {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  interface SEOData {
    title: string;
    description: string;
    canonical: string;
  }

  const seoDataForOptimizer: SEOData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonical: typeof window !== 'undefined' ? window.location.href : 'https://zion.app/',
  }), []);

  // Simple hotkeys for demo toggles and initialization
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey || !e.shiftKey) return;
      switch (e.key.toLowerCase()) {
        case 'p':
          e.preventDefault();
          setShowPerformanceOptimizer((v) => !v);
          break;
        case 'm':
          e.preventDefault();
          setShowPerformanceMonitor((v) => !v);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    
    // Initialize performance enhancements
    try {
      initializePerformanceEnhancements();
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleRemoveNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <AccessibilityEnhancer>
      <EnhancedErrorBoundary>
        <EnhancedSEOHead 
          title={seoDataForOptimizer.title} 
          description={seoDataForOptimizer.description} 
          canonical={seoDataForOptimizer.canonical}
          keywords={['AI', 'IT Solutions', 'Enterprise Automation', 'Technology Services', 'Artificial Intelligence']}
          author="Zion Tech Group"
        />
        <SEOOptimizer title={seoDataForOptimizer.title} description={seoDataForOptimizer.description} canonicalUrl={seoDataForOptimizer.canonical} />
        <AdvancedAnalytics enableConversionTracking enablePerformanceTracking enableErrorTracking />
        <PerformanceMonitor enabled={true} showMetrics={process.env.NODE_ENV === 'development'} />
        <div className="min-h-screen bg-white">
          <ModernHeader />
          <main>
            <AppRouter />
          </main>
          <ModernFooter />
        </div>

        {showPerformanceOptimizer && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Optimizer</h2>
                <button onClick={() => setShowPerformanceOptimizer(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceOptimizer isVisible={true} onClose={() => setShowPerformanceOptimizer(false)} />
            </div>
          </div>
        )}

        {showPerformanceMonitor && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Monitor</h2>
                <button onClick={() => setShowPerformanceMonitor(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceMonitor />
            </div>
          </div>
        )}

        <NotificationSystem notifications={notifications} onRemove={handleRemoveNotification} />
      </EnhancedErrorBoundary>
    </AccessibilityEnhancer>
  );
};

export default App;
