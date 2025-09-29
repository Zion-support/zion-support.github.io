import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { AppRouter } from './router';

// import { resourcePreloader } from './utils/resourcePreloader';
// import { criticalCSSManager } from './utils/criticalCSSManager';
// import { sriUtility } from './security/sriUtility';
// import { csrfProtection } from './security/csrfProtection';
// import { structuredDataManager } from './seo/structuredDataManager';
// import { keyboardNavigationManager } from './accessibility/keyboardNavigationManager';
// import { screenReaderSupport } from './accessibility/screenReaderSupport';
import './index.css';
import { performanceMonitor } from './utils/performanceMonitor';
import { securityManager as enhancedSecurityManager } from './utils/securityHeaders';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';
import SEOOptimizer from './components/SEOOptimizer';
import type { Notification as UILibraryNotification } from './components/NotificationSystem';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';

// Local stub to avoid type errors when optional performance init is not present
const initializePerformanceEnhancements = (): void => {};

// Temporary fallbacks for referenced components not present in repo
const Placeholder: React.FC<{ name: string }> = ({ name }) => (
  <div role="note" aria-label={`${name} placeholder`} />
);
const EnhancedSystemDashboard = () => <Placeholder name="EnhancedSystemDashboard" />;
const KeyboardShortcutsHelp = (props: any) => <Placeholder name="KeyboardShortcutsHelp" />;
const PerformanceWidget = (props: any) => <Placeholder name="PerformanceWidget" />;
const PerformanceDashboard = () => <Placeholder name="PerformanceDashboard" />;
const CommandPalette = (props: any) => <Placeholder name="CommandPalette" />;
const AdvancedMonitoringDashboard = (props: any) => <Placeholder name="AdvancedMonitoringDashboard" />;
const RealTimePerformanceMonitor = (props: any) => <Placeholder name="RealTimePerformanceMonitor" />;
const EnhancedCommandPalette = (props: any) => <Placeholder name="EnhancedCommandPalette" />;
const ComprehensivePerformanceDashboard = () => <Placeholder name="ComprehensivePerformanceDashboard" />;
const ComprehensiveMonitoringDashboard = () => <Placeholder name="ComprehensiveMonitoringDashboard" />;
const PerformanceOptimizationPanel = () => <Placeholder name="PerformanceOptimizationPanel" />;
const ErrorRecoveryDashboard = () => <Placeholder name="ErrorRecoveryDashboard" />;
const SystemStatusIndicator = (props: any) => <Placeholder name="SystemStatusIndicator" />;
const EnhancedNotificationSystem = (props: any) => <Placeholder name="EnhancedNotificationSystem" />;
const KeyboardShortcutsManager = (props: any) => <Placeholder name="KeyboardShortcutsManager" />;
const SystemHealthDashboard = (props: any) => <Placeholder name="SystemHealthDashboard" />;
const AIPerformanceDashboard = (props: any) => <Placeholder name="AIPerformanceDashboard" />;
const WebsiteEnhancements = (props: any) => <Placeholder name="WebsiteEnhancements" />;

export default function App(): React.JSX.Element {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<UILibraryNotification[]>([]);

  const seoDataForOptimizer = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonicalUrl: typeof window !== 'undefined' ? window.location.pathname : '/',
  }), []);

  // Simple hotkeys for demo toggles
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
      try {
        if (enhancedSecurityManager && typeof (enhancedSecurityManager as any).initialize === 'function') {
          (enhancedSecurityManager as any).initialize();
        }
      
      // Initialize new performance and accessibility enhancements
      initializePerformanceEnhancements();
      accessibilityEnhancer.initialize();
      
      // Initialize advanced optimizers
      // Guard optional advanced systems if present in global scope
      const advancedPerformanceOptimizer = (window as any).advancedPerformanceOptimizer;
      const advancedSEOOptimizer = (window as any).advancedSEOOptimizer;
      const advancedSecurityManager = (window as any).advancedSecurityManager;
      const advancedAnalytics = (window as any).advancedAnalytics;
      const advancedErrorHandler = (window as any).advancedErrorHandler;
      const advancedCachingSystem = (window as any).advancedCachingSystem;
      const advancedUXOptimizer = (window as any).advancedUXOptimizer;
      const advancedTestingFramework = (window as any).advancedTestingFramework;
      const advancedI18n = (window as any).advancedI18n;

      advancedPerformanceOptimizer?.initialize?.();
      advancedSEOOptimizer?.initialize?.();
      accessibilityEnhancer.initialize();
      advancedSecurityManager?.initialize?.();
      advancedAnalytics?.initialize?.();
      // advancedErrorHandler is initialized in constructor
      advancedCachingSystem?.initialize?.();
      advancedUXOptimizer?.initialize?.();
      advancedTestingFramework?.initialize?.();
      advancedI18n?.initialize?.();
      // Store enhancements globally for debugging
      (window as unknown as Record<string, unknown>).enhancements = {
        performanceOptimizer: advancedPerformanceOptimizer,
        seoOptimizer: advancedSEOOptimizer,
        accessibilityEnhancer: accessibilityEnhancer,
        securityManager: advancedSecurityManager,
        analytics: advancedAnalytics,
        errorHandler: advancedErrorHandler,
        cachingSystem: advancedCachingSystem,
        uxOptimizer: advancedUXOptimizer
      };
      (window as unknown as Record<string, unknown>).performanceOptimizer = advancedPerformanceOptimizer;
      (window as unknown as Record<string, unknown>).seoOptimizer = advancedSEOOptimizer;
      (window as unknown as Record<string, unknown>).accessibilityEnhancer = accessibilityEnhancer;
      (window as unknown as Record<string, unknown>).securityManager = advancedSecurityManager;
      (window as unknown as Record<string, unknown>).analytics = advancedAnalytics;
      (window as unknown as Record<string, unknown>).errorHandler = advancedErrorHandler;
      (window as unknown as Record<string, unknown>).cachingSystem = advancedCachingSystem;
      (window as unknown as Record<string, unknown>).uxOptimizer = advancedUXOptimizer;
      (window as unknown as Record<string, unknown>).testingFramework = advancedTestingFramework;
      (window as unknown as Record<string, unknown>).i18n = advancedI18n;
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleRemoveNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer title={seoDataForOptimizer.title} description={seoDataForOptimizer.description} canonicalUrl={seoDataForOptimizer.canonicalUrl} />
      <AdvancedAnalytics enableConversionTracking enablePerformanceTracking enableErrorTracking />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AppRouter />

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
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Performance Monitor</h2>
                <button onClick={() => setShowPerformanceMonitor(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
              </div>
              <PerformanceMonitor showDashboard={true} />
            </div>
          </div>
        )}

        <NotificationSystem notifications={notifications} onRemove={handleRemoveNotification} />
      </div>
    </EnhancedErrorBoundary>
  );
}
