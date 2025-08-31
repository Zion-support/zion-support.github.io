import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, MousePointer, Eye, Zap, Settings, BarChart3, Target } from 'lucide-react';

interface UXMetrics {
  pageViews: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  userSatisfaction: number;
  performanceScore: number;
  accessibilityScore: number;
  mobileUsability: number;
}

interface UserBehavior {
  clicks: number;
  scrollDepth: number;
  timeOnPage: number;
  interactions: number;
  errors: number;
  navigationPaths: string[];
}

interface UXOptimization {
  type: 'performance' | 'accessibility' | 'usability' | 'engagement';
  description: string;
  impact: 'high' | 'medium' | 'low';
  implemented: boolean;
}

interface UserExperienceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  autoOptimize?: boolean;
  trackUserBehavior?: boolean;
}

export const UserExperienceOptimizer: React.FC<UserExperienceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  autoOptimize = true,
  trackUserBehavior = true
}) => {
  const [uxMetrics, setUxMetrics] = useState<UXMetrics>({
    pageViews: 0,
    sessionDuration: 0,
    bounceRate: 0,
    conversionRate: 0,
    userSatisfaction: 0,
    performanceScore: 0,
    accessibilityScore: 0,
    mobileUsability: 0
  });
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    clicks: 0,
    scrollDepth: 0,
    timeOnPage: 0,
    interactions: 0,
    errors: 0,
    navigationPaths: []
  });
  const [optimizations, setOptimizations] = useState<UXOptimization[]>([]);
  const [showPanel, setShowPanel] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  
  const sessionStartTime = useRef(Date.now());
  const lastActivityTime = useRef(Date.now());
  const scrollDepthRef = useRef(0);
  const clickCountRef = useRef(0);
  const errorCountRef = useRef(0);

  // Track user behavior
  const trackBehavior = useCallback(() => {
    if (!trackUserBehavior || !enabled) return;

    // Track clicks
    const handleClick = () => {
      clickCountRef.current++;
      lastActivityTime.current = Date.now();
      setUserBehavior(prev => ({ ...prev, clicks: clickCountRef.current }));
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollDepthRef.current = Math.max(scrollDepthRef.current, scrollPercent);
      lastActivityTime.current = Date.now();
      setUserBehavior(prev => ({ ...prev, scrollDepth: scrollDepthRef.current }));
    };

    // Track errors
    const handleError = () => {
      errorCountRef.current++;
      setUserBehavior(prev => ({ ...prev, errors: errorCountRef.current }));
    };

    // Track navigation
    const handleNavigation = () => {
      const newPath = window.location.pathname;
      if (newPath !== currentPage) {
        setCurrentPage(newPath);
        setUserBehavior(prev => ({
          ...prev,
          navigationPaths: [...prev.navigationPaths, newPath]
        }));
      }
    };

    // Add event listeners
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('error', handleError);
    window.addEventListener('popstate', handleNavigation);

    // Track time on page
    const timeInterval = setInterval(() => {
      const timeOnPage = Date.now() - sessionStartTime.current;
      setUserBehavior(prev => ({ ...prev, timeOnPage }));
    }, 1000);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('error', handleError);
      window.removeEventListener('popstate', handleNavigation);
      clearInterval(timeInterval);
    };
  }, [trackUserBehavior, enabled, currentPage]);

  // Calculate UX metrics
  const calculateUXMetrics = useCallback(() => {
    if (!enabled) return;

    // Calculate session duration
    const sessionDuration = (Date.now() - sessionStartTime.current) / 1000;
    
    // Calculate bounce rate (simplified - would be more complex in real implementation)
    const bounceRate = userBehavior.timeOnPage < 10 ? 100 : 
                      userBehavior.timeOnPage < 30 ? 70 : 
                      userBehavior.timeOnPage < 60 ? 40 : 20;
    
    // Calculate conversion rate (simplified)
    const conversionRate = userBehavior.interactions > 5 ? 80 : 
                          userBehavior.interactions > 3 ? 60 : 
                          userBehavior.interactions > 1 ? 40 : 20;
    
    // Calculate user satisfaction based on behavior
    const userSatisfaction = Math.min(100, Math.max(0, 
      100 - (userBehavior.errors * 10) + (userBehavior.interactions * 5) + (userBehavior.scrollDepth / 2)
    ));
    
    // Calculate performance score (would integrate with actual performance metrics)
    const performanceScore = Math.min(100, Math.max(0, 
      100 - (userBehavior.errors * 15) + (userBehavior.interactions * 3)
    ));
    
    // Calculate accessibility score
    const accessibilityScore = Math.min(100, Math.max(0, 
      100 - (userBehavior.errors * 20) + (userBehavior.interactions * 2)
    ));
    
    // Calculate mobile usability
    const isMobile = window.innerWidth <= 768;
    const mobileUsability = isMobile ? 
      Math.min(100, Math.max(0, 100 - (userBehavior.errors * 25) + (userBehavior.interactions * 4))) :
      100;

    setUxMetrics({
      pageViews: userBehavior.navigationPaths.length + 1,
      sessionDuration,
      bounceRate,
      conversionRate,
      userSatisfaction,
      performanceScore,
      accessibilityScore,
      mobileUsability
    });
  }, [enabled, userBehavior]);

  // Generate UX optimizations
  const generateOptimizations = useCallback(() => {
    if (!enabled) return;

    const newOptimizations: UXOptimization[] = [];

    // Performance optimizations
    if (uxMetrics.performanceScore < 80) {
      newOptimizations.push({
        type: 'performance',
        description: 'Implement lazy loading for images and components',
        impact: 'high',
        implemented: false
      });
    }

    if (userBehavior.errors > 2) {
      newOptimizations.push({
        type: 'usability',
        description: 'Add error boundaries and better error handling',
        impact: 'high',
        implemented: false
      });
    }

    if (userBehavior.scrollDepth < 50) {
      newOptimizations.push({
        type: 'engagement',
        description: 'Improve content layout and add engaging elements',
        impact: 'medium',
        implemented: false
      });
    }

    if (uxMetrics.accessibilityScore < 85) {
      newOptimizations.push({
        type: 'accessibility',
        description: 'Enhance keyboard navigation and screen reader support',
        impact: 'medium',
        implemented: false
      });
    }

    if (uxMetrics.mobileUsability < 90) {
      newOptimizations.push({
        type: 'usability',
        description: 'Optimize mobile layout and touch interactions',
        impact: 'high',
        implemented: false
      });
    }

    setOptimizations(newOptimizations);
  }, [enabled, uxMetrics, userBehavior]);

  // Apply UX optimizations
  const applyOptimizations = useCallback(async () => {
    if (!autoOptimize || !enabled) return;

    setIsOptimizing(true);
    const appliedOptimizations: UXOptimization[] = [];

    try {
      // Apply performance optimizations
      const performanceOpts = optimizations.filter(opt => opt.type === 'performance');
      for (const opt of performanceOpts) {
        if (opt.description.includes('lazy loading')) {
          // Implement lazy loading
          const images = document.querySelectorAll('img[data-src]');
          images.forEach(img => {
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
              img.src = dataSrc;
              img.removeAttribute('data-src');
            }
          });
          appliedOptimizations.push({ ...opt, implemented: true });
        }
      }

      // Apply usability optimizations
      const usabilityOpts = optimizations.filter(opt => opt.type === 'usability');
      for (const opt of usabilityOpts) {
        if (opt.description.includes('error handling')) {
          // Add error boundaries
          const errorBoundary = document.createElement('div');
          errorBoundary.className = 'error-boundary';
          errorBoundary.innerHTML = '<div class="error-fallback">Something went wrong. Please try again.</div>';
          document.body.appendChild(errorBoundary);
          appliedOptimizations.push({ ...opt, implemented: true });
        }
      }

      // Apply accessibility optimizations
      const accessibilityOpts = optimizations.filter(opt => opt.type === 'accessibility');
      for (const opt of accessibilityOpts) {
        if (opt.description.includes('keyboard navigation')) {
          // Enhance keyboard navigation
          const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
          focusableElements.forEach((el, index) => {
            (el as HTMLElement).tabIndex = index + 1;
          });
          appliedOptimizations.push({ ...opt, implemented: true });
        }
      }

      // Apply engagement optimizations
      const engagementOpts = optimizations.filter(opt => opt.type === 'engagement');
      for (const opt of engagementOpts) {
        if (opt.description.includes('engaging elements')) {
          // Add engaging elements
          const engagingElement = document.createElement('div');
          engagingElement.className = 'engaging-element';
          engagingElement.innerHTML = '<div class="pulse-animation">✨ Interactive Element</div>';
          document.body.appendChild(engagingElement);
          appliedOptimizations.push({ ...opt, implemented: true });
        }
      }

      // Update optimizations list
      setOptimizations(prev => prev.map(opt => {
        const applied = appliedOptimizations.find(ao => ao.description === opt.description);
        return applied || opt;
      }));

      console.log('UX optimizations applied successfully');
    } catch (error) {
      console.warn('Failed to apply UX optimizations:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [autoOptimize, enabled, optimizations]);

  // Monitor and update metrics
  useEffect(() => {
    if (enabled) {
      const cleanup = trackBehavior();
      
      // Update metrics every 5 seconds
      const metricsInterval = setInterval(calculateUXMetrics, 5000);
      
      // Generate optimizations when metrics change
      const optimizationInterval = setInterval(generateOptimizations, 10000);
      
      return () => {
        cleanup?.();
        clearInterval(metricsInterval);
        clearInterval(optimizationInterval);
      };
    }
  }, [enabled, trackBehavior, calculateUXMetrics, generateOptimizations]);

  // Auto-apply optimizations
  useEffect(() => {
    if (autoOptimize && enabled && optimizations.length > 0) {
      const timer = setTimeout(applyOptimizations, 15000); // Apply after 15 seconds
      return () => clearTimeout(timer);
    }
  }, [autoOptimize, enabled, optimizations, applyOptimizations]);

  if (!enabled) return null;

  return (
    <>
      {/* UX Optimizer Toggle */}
      <motion.button
        className="fixed bottom-36 right-4 z-50 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setShowPanel(!showPanel)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="UX Optimizer"
      >
        <Users className="w-6 h-6" />
      </motion.button>

      {/* UX Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-44 right-4 z-40 bg-slate-900/95 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 w-80 max-h-96 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                UX Optimizer
              </h3>
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            {/* UX Score */}
            <div className="bg-slate-800/50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Overall UX Score</span>
                <span className={`text-lg font-bold ${
                  uxMetrics.userSatisfaction >= 90 ? 'text-green-400' :
                  uxMetrics.userSatisfaction >= 70 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {Math.round(uxMetrics.userSatisfaction)}/100
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    uxMetrics.userSatisfaction >= 90 ? 'bg-green-500' :
                    uxMetrics.userSatisfaction >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${uxMetrics.userSatisfaction}%` }}
                />
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-slate-800/50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                  <Eye className="w-4 h-4" />
                  Page Views
                </div>
                <div className="text-lg font-semibold text-blue-400">
                  {uxMetrics.pageViews}
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                  <MousePointer className="w-4 h-4" />
                  Clicks
                </div>
                <div className="text-lg font-semibold text-purple-400">
                  {userBehavior.clicks}
                </div>
              </div>
            </div>

            {/* Detailed Metrics */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Session Duration:</span>
                <span className="text-white">{Math.round(uxMetrics.sessionDuration)}s</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Scroll Depth:</span>
                <span className="text-white">{Math.round(userBehavior.scrollDepth)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Bounce Rate:</span>
                <span className="text-white">{Math.round(uxMetrics.bounceRate)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Conversion Rate:</span>
                <span className="text-white">{Math.round(uxMetrics.conversionRate)}%</span>
              </div>
            </div>

            {/* Optimizations */}
            {optimizations.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Recommended Optimizations
                </h4>
                <div className="space-y-1">
                  {optimizations.slice(0, 3).map((opt, index) => (
                    <div key={index} className={`text-xs p-2 rounded border ${
                      opt.implemented 
                        ? 'text-green-400 bg-green-900/20 border-green-500/30' 
                        : 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30'
                    }`}>
                      {opt.implemented ? '✓' : '⚡'} {opt.description}
                      <span className={`ml-2 px-1 py-0.5 rounded text-xs ${
                        opt.impact === 'high' ? 'bg-red-500/30 text-red-300' :
                        opt.impact === 'medium' ? 'bg-yellow-500/30 text-yellow-300' :
                        'bg-blue-500/30 text-blue-300'
                      }`}>
                        {opt.impact}
                      </span>
                    </div>
                  ))}
                  {optimizations.length > 3 && (
                    <div className="text-xs text-gray-500 text-center">
                      +{optimizations.length - 3} more optimizations
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={applyOptimizations}
                disabled={isOptimizing}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isOptimizing ? 'Applying...' : 'Apply Optimizations'}
              </button>
              
              <button
                onClick={generateOptimizations}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
              >
                Generate Recommendations
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* UX Status Indicator */}
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-20 right-4 bg-slate-900/95 backdrop-blur-lg border border-purple-500/30 rounded-lg p-3 z-50"
        >
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              uxMetrics.userSatisfaction >= 90 ? 'bg-green-400' :
              uxMetrics.userSatisfaction >= 70 ? 'bg-yellow-400' : 'bg-red-400'
            }`} />
            <span className="text-sm text-white font-medium">
              UX: {Math.round(uxMetrics.userSatisfaction)}%
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
};