import React, { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MousePointer, 
  Zap, 
  TrendingUp, 
  Eye, 
  Clock, 
  Target,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

interface UXMetrics {
  scrollDepth: number;
  timeOnPage: number;
  interactions: number;
  loadTime: number;
  errors: number;
}

interface UserExperienceOptimizerProps {
  enabled?: boolean;
  enableSmoothScrolling?: boolean;
  enableLoadingStates?: boolean;
  enableInteractionTracking?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const UserExperienceOptimizer: React.FC<UserExperienceOptimizerProps> = ({
  enabled = true,
  enableSmoothScrolling = true,
  enableLoadingStates = true,
  enableInteractionTracking = true,
  enablePerformanceMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<UXMetrics>({
    scrollDepth: 0,
    timeOnPage: 0,
    interactions: 0,
    loadTime: 0,
    errors: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const startTime = useRef(Date.now());
  const interactionCount = useRef(0);
  const errorCount = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  // Smooth scrolling enhancement
  const setupSmoothScrolling = useCallback(() => {
    if (!enableSmoothScrolling) return;

    // Add smooth scrolling to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      });
    });

    // Enhanced scroll behavior for the page
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [enableSmoothScrolling]);

  // Loading states management
  const setupLoadingStates = useCallback(() => {
    if (!enableLoadingStates) return;

    // Show loading state for navigation
    const handleBeforeUnload = () => {
      setIsLoading(true);
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    // Add loading states to forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', () => {
        setIsLoading(true);
      });
    });

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, [enableLoadingStates]);

  // Interaction tracking
  const setupInteractionTracking = useCallback(() => {
    if (!enableInteractionTracking) return;

    const trackInteraction = () => {
      interactionCount.current++;
      setMetrics(prev => ({ ...prev, interactions: interactionCount.current }));
    };

    // Track clicks
    document.addEventListener('click', trackInteraction);
    
    // Track form interactions
    document.addEventListener('input', trackInteraction);
    document.addEventListener('change', trackInteraction);
    
    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(Math.min(scrollPercent, 100));
      setMetrics(prev => ({ ...prev, scrollDepth: Math.round(scrollPercent) }));
    };

    // Throttled scroll tracking
    const throttledScrollTrack = () => {
      if (scrollTimeout.current) return;
      
      scrollTimeout.current = setTimeout(() => {
        trackScrollDepth();
        scrollTimeout.current = undefined;
      }, 100);
    };

    window.addEventListener('scroll', throttledScrollTrack);

    return () => {
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('input', trackInteraction);
      document.removeEventListener('change', trackInteraction);
      window.removeEventListener('scroll', throttledScrollTrack);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [enableInteractionTracking]);

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    if (!enablePerformanceMonitoring) return;

    // Monitor page load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }));

    // Monitor errors
    const handleError = (event: ErrorEvent) => {
      errorCount.current++;
      setMetrics(prev => ({ ...prev, errors: errorCount.current }));
      console.warn('UX Error detected:', event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      errorCount.current++;
      setMetrics(prev => ({ ...prev, errors: errorCount.current }));
      console.warn('UX Unhandled rejection:', event.reason);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [enablePerformanceMonitoring]);

  // Time tracking
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      setMetrics(prev => ({ ...prev, timeOnPage: timeSpent }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Setup all UX optimizations
  useEffect(() => {
    if (!enabled) return;

    const cleanupSmooth = setupSmoothScrolling();
    const cleanupLoading = setupLoadingStates();
    const cleanupInteraction = setupInteractionTracking();
    const cleanupPerformance = setupPerformanceMonitoring();

    return () => {
      cleanupSmooth?.();
      cleanupLoading?.();
      cleanupInteraction?.();
      cleanupPerformance?.();
    };
  }, [
    enabled,
    setupSmoothScrolling,
    setupLoadingStates,
    setupInteractionTracking,
    setupPerformanceMonitoring
  ]);

  // Enhanced hover effects
  useEffect(() => {
    if (!enabled) return;

    // Add enhanced hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('enhanced-hover');
      });
      
      element.addEventListener('mouseleave', () => {
        element.classList.remove('enhanced-hover');
      });
    });

    // Add CSS for enhanced hover effects
    const style = document.createElement('style');
    style.textContent = `
      .enhanced-hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
      
      .ux-loading {
        position: relative;
        overflow: hidden;
      }
      
      .ux-loading::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        animation: loading-shimmer 1.5s infinite;
      }
      
      @keyframes loading-shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* UX Metrics Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowMetrics(!showMetrics)}
        className="fixed bottom-4 right-20 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="UX Metrics"
        aria-expanded={showMetrics}
      >
        <TrendingUp className="w-6 h-6" />
      </motion.button>

      {/* UX Metrics Panel */}
      <AnimatePresence>
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-20 right-4 z-40 bg-slate-900/95 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 w-80 max-h-96 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                UX Metrics
              </h3>
              <button
                onClick={() => setShowMetrics(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close UX metrics panel"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {/* Scroll Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Scroll Progress</span>
                  <span className="text-green-400 font-semibold">{Math.round(scrollProgress)}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>
              </div>

              {/* Time on Page */}
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Time on Page</span>
                </div>
                <span className="text-green-400 font-semibold">
                  {Math.floor(metrics.timeOnPage / 60)}:{(metrics.timeOnPage % 60).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Interactions */}
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 text-gray-300">
                  <MousePointer className="w-4 h-4" />
                  <span className="text-sm">Interactions</span>
                </div>
                <span className="text-blue-400 font-semibold">{metrics.interactions}</span>
              </div>

              {/* Load Time */}
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 text-gray-300">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">Load Time</span>
                </div>
                <span className="text-purple-400 font-semibold">{metrics.loadTime}ms</span>
              </div>

              {/* Errors */}
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 text-gray-300">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">Errors</span>
                </div>
                <span className={`font-semibold ${metrics.errors > 0 ? 'text-red-400' : 'text-green-400'}`}>
                  {metrics.errors}
                </span>
              </div>

              {/* Performance Indicators */}
              <div className="pt-4 border-t border-slate-700">
                <h4 className="text-sm font-medium text-white mb-2">Performance</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Scroll Depth</span>
                    <span className={`font-semibold ${
                      metrics.scrollDepth > 80 ? 'text-green-400' : 
                      metrics.scrollDepth > 50 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {metrics.scrollDepth > 80 ? 'Excellent' : 
                       metrics.scrollDepth > 50 ? 'Good' : 'Needs Improvement'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Engagement</span>
                    <span className={`font-semibold ${
                      metrics.interactions > 10 ? 'text-green-400' : 
                      metrics.interactions > 5 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {metrics.interactions > 10 ? 'High' : 
                       metrics.interactions > 5 ? 'Medium' : 'Low'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Loading Indicator */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="bg-slate-900/95 border border-slate-700/50 rounded-2xl p-8 text-center">
              <Loader2 className="w-12 h-12 text-green-400 animate-spin mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Loading...</h3>
              <p className="text-gray-400">Please wait while we process your request</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      {scrollProgress > 20 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-4 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Scroll to top"
        >
          <Target className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};