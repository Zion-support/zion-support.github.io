import React, { useState, useEffect } from 'react';
import { AppRouter } from './router';
import { LoadingSpinner } from './components/LoadingStates';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { NotificationProvider } from './components/NotificationSystem';
import AnalyticsTracker from './components/AnalyticsTracker';
import SystemDashboard from './components/SystemDashboard';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simple SEO manager
  const seoManager = {
    updateMetaTags: (data: typeof seoData) => {
      if (typeof document !== 'undefined') {
        document.title = data.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', data.description);
        }
      }
    },
    updateSEO: (data: typeof seoData) => {
      // Use updateMetaTags as the implementation
      seoManager.updateMetaTags(data);
    }
  };

  useEffect(() => {
    // Simulate app initialization
    const initializeApp = async () => {
      try {
        // Simulate loading steps
        const steps = [
          { progress: 20, task: 'Loading core modules' },
          { progress: 40, task: 'Initializing performance monitoring' },
          { progress: 60, task: 'Setting up accessibility features' },
          { progress: 80, task: 'Configuring security settings' },
          { progress: 100, task: 'App ready' }
        ];

        for (const step of steps) {
          setLoadingProgress(step.progress);
          await new Promise(resolve => setTimeout(resolve, 200));
        }

        // Initialize basic systems
        analytics.initialize();
        
        // Initialize SEO analytics
        seoAnalytics.trackPageView(window.location.pathname);
        
        // Initialize performance SEO optimizations
        performanceSEO.optimizeImages();
        performanceSEO.optimizeFonts();
        // Note: optimizeCSS method doesn't exist in PerformanceSEO class

        // Set default SEO data using the correct method
        seoManager.updateMetaTags(seoData);

        // Basic performance monitoring
        if (typeof window !== 'undefined') {
          console.log('🚀 Zion Tech Group App initialized');
        }

        // Mark app as fully initialized
        if (typeof window !== 'undefined' && window.performance && 
            typeof performance.mark === 'function' && 
            typeof performance.measure === 'function') {
          performance.mark('app-init-complete');
          performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
        }

        // Set loading to false after initialization
        setIsLoading(false);
      } catch (error) {
        console.error('App initialization failed:', error);
        setIsLoading(false);
      }
    };

    // Cleanup function
    const cleanup = () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };

    initializeApp();
    
    return cleanup;
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="relative">
          {/* Spinner */}
          <div className="w-12 h-12 text-blue-500">
            <svg
              className="animate-spin w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>

          {/* Progress Ring */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="opacity-20"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - loadingProgress / 100)}`}
                className="transition-all duration-300 ease-in-out"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Progress Text */}
        <div className="mt-4 text-center">
          <div className="text-white text-lg font-semibold mb-2">
            Loading Zion AI Platform...
          </div>
          <div className="text-gray-300 text-sm">
            {Math.round(loadingProgress)}%
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    );
  }

  return (
    <EnhancedErrorBoundary>
      <AnalyticsTracker>
        <NotificationProvider>
          <div className="App">
            <AppRouter />
            <PerformanceMonitor />
            <SystemDashboard />
          </div>
        </NotificationProvider>
      </AnalyticsTracker>
    </EnhancedErrorBoundary>
  );
};

export default App;