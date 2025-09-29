import React, { useEffect, useState } from 'react';
import { AppRouter } from './router';
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';
import { seoAnalytics } from './utils/seoEnhanced';
import { accessibilityManager } from './utils/accessibility';
import { analytics } from './utils/analytics';
import { enhancedErrorHandler } from './utils/enhancedErrorHandling';
import { advancedCachingSystem } from './utils/advancedCachingSystem';
import { advancedAnalyticsInsights } from './utils/advancedAnalyticsInsights';
import { advancedSecuritySystem } from './utils/advancedSecuritySystem';
import { advancedAccessibilityEnhancer } from './utils/advancedAccessibilityEnhancer';
import { enhancedPerformanceMonitor } from './utils/enhancedPerformanceMonitor';
import { enhancedSEOOptimizer } from './utils/enhancedSEOOptimizer';
import { ModernLoadingSpinner } from './components/ModernLoadingSpinner';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import './index.css';
import './styles/notifications.css';
import './styles/system-metrics.css';
import './styles/modern-utilities.css';

export default function App(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Initialize error reporting
        initializeErrorReporting();
        
        // Initialize optimizations
        initOptimizations();
        
        // Initialize SEO
        seoAnalytics.trackPageView(window.location.pathname);
        
        // Initialize accessibility
        accessibilityManager.initialize();
        
        // Initialize analytics
        analytics.initialize();
        
        // Initialize enhanced systems
        enhancedErrorHandler.initialize();
        advancedCachingSystem.initialize();
        advancedAnalyticsInsights.initialize();
        advancedSecuritySystem.initialize();
        advancedAccessibilityEnhancer.initialize();
        enhancedPerformanceMonitor.startMonitoring();
        enhancedSEOOptimizer.initialize();
        
        console.log('App initialized successfully');
      } catch (error) {
        console.error('Failed to initialize app:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Show loading screen while initializing
  if (isLoading) {
    return <ModernLoadingSpinner progress={100} />;
  }

  return (
    <EnhancedErrorBoundary>
      <AppRouter />
    </EnhancedErrorBoundary>
  );
}