import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  TrendingDown,
  Activity,
  Zap,
  Target,
  MapPin,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Settings,
  X,
  Download,
  Share2,
  Filter,
  Calendar,
  RefreshCw
} from 'lucide-react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  page: string;
  referrer: string;
  userAgent: string;
  screenResolution: string;
  viewport: string;
  language: string;
  timezone: string;
}

interface UserBehavior {
  pageViews: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<any>;
  userAgents: Array<any>;
  locations: Array<any>;
  performance: {
    loadTime: number;
    firstPaint: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
  };
  interactions: {
    clicks: number;
    scrolls: number;
    formSubmissions: number;
    errors: number;
  };
}

interface AdvancedAnalyticsProps extends React.PropsWithChildren<{}> {
  enabled: boolean;
  trackingId?: string;
  enableHeatmap?: boolean;
  enableSessionRecording?: boolean;
  enableAITesting?: boolean;
  enableRealTime?: boolean;
  enableCustomEvents?: boolean;
  enablePerformanceTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  enableConversionTracking?: boolean;
  enableAITesting?: boolean;
  enableHeatmap?: boolean;
  enableSessionRecording?: boolean;
  enableRealTime?: boolean;
  enableCustomEvents?: boolean;
  enablePerformanceTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
  enableConversionTracking?: boolean;
}

export const AdvancedAnalytics: React.FC<AdvancedAnalyticsProps> = ({
  children,
  enabled = true,
  trackingId,
  enableHeatmap = true,
  enableSessionRecording = true,
  enableAITesting = true,
  enableRealTime = true,
  enableCustomEvents = true,
  enablePerformanceTracking = true,
  enableUserBehaviorTracking = true,
  enableConversionTracking = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<UserBehavior | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [showSessionRecording, setShowSessionRecording] = useState(false);
  const [showAITesting, setShowAITesting] = useState(false);
  const [showRealTime, setShowRealTime] = useState(false);
  const [showCustomEvents, setShowCustomEvents] = useState(false);
  const [showPerformanceTracking, setShowPerformanceTracking] = useState(false);
  const [showUserBehaviorTracking, setShowUserBehaviorTracking] = useState(false);
  const [showConversionTracking, setShowConversionTracking] = useState(false);

  // Analytics tracking
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!enabled) return;

    // Send to analytics service
    if (trackingId) {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          custom_parameters: {
            session_id: event.sessionId,
            user_id: event.userId,
            page: event.page,
            referrer: event.referrer,
            user_agent: event.userAgent,
            screen_resolution: event.screenResolution,
            viewport: event.viewport,
            language: event.language,
            timezone: event.timezone
          }
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      }).catch(console.error);
    }

    // Store locally for real-time display
    setAnalyticsData(prev => {
      if (!prev) return null;
      return {
        ...prev,
        interactions: {
          ...prev.interactions,
          clicks: prev.interactions.clicks + 1
        }
      };
    });
  }, [enabled, trackingId]);

  // Performance tracking
  useEffect(() => {
    if (!enabled || !enablePerformanceTracking) return;

    const trackPerformance = () => {
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            trackEvent({
              event: 'performance',
              category: 'web_vitals',
              action: 'first_contentful_paint',
              value: Math.round(fcp.startTime),
              timestamp: Date.now(),
              sessionId: 'session-' + Date.now(),
              page: window.location.pathname,
              referrer: document.referrer,
              userAgent: navigator.userAgent,
              screenResolution: `${screen.width}x${screen.height}`,
              viewport: `${window.innerWidth}x${window.innerHeight}`,
              language: navigator.language,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            });
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            trackEvent({
              event: 'performance',
              category: 'web_vitals',
              action: 'largest_contentful_paint',
              value: Math.round(lcp.startTime),
              timestamp: Date.now(),
              sessionId: 'session-' + Date.now(),
              page: window.location.pathname,
              referrer: document.referrer,
              userAgent: navigator.userAgent,
              screenResolution: `${screen.width}x${screen.height}`,
              viewport: `${window.innerWidth}x${window.innerHeight}`,
              language: navigator.language,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            });
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
        };
      }
    };

    trackPerformance();
  }, [enabled, enablePerformanceTracking, trackEvent]);

  // User behavior tracking
  useEffect(() => {
    if (!enabled || !enableUserBehaviorTracking) return;

    let startTime = Date.now();
    let scrollDepth = 0;
    let clickCount = 0;
    let formSubmissions = 0;
    let errors = 0;

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > scrollDepth) {
        scrollDepth = scrollPercent;
      }
    };

    // Track clicks
    const handleClick = (e: Event) => {
      clickCount++;
      const target = e.target as HTMLElement;
      
      trackEvent({
        event: 'interaction',
        category: 'user_behavior',
        action: 'click',
        label: target.tagName.toLowerCase() + (target.className ? '.' + target.className.split(' ')[0] : ''),
        timestamp: Date.now(),
        sessionId: 'session-' + startTime,
        page: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
    };

    // Track form submissions
    const handleSubmit = (e: Event) => {
      formSubmissions++;
      const form = e.target as HTMLFormElement;
      
      trackEvent({
        event: 'interaction',
        category: 'user_behavior',
        action: 'form_submit',
        label: form.action || form.id || 'unknown_form',
        timestamp: Date.now(),
        sessionId: 'session-' + startTime,
        page: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
    };

    // Track errors
    const handleError = (e: ErrorEvent) => {
      errors++;
      
      trackEvent({
        event: 'error',
        category: 'user_behavior',
        action: 'javascript_error',
        label: e.message,
        timestamp: Date.now(),
        sessionId: 'session-' + startTime,
        page: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
    };

    // Track page visibility
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const sessionDuration = Date.now() - startTime;
        
        trackEvent({
          event: 'session',
          category: 'user_behavior',
          action: 'page_hide',
          value: Math.round(sessionDuration / 1000),
          timestamp: Date.now(),
          sessionId: 'session-' + startTime,
          page: window.location.pathname,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          screenResolution: `${screen.width}x${screen.height}`,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);
    window.addEventListener('error', handleError);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initialize analytics data
    setAnalyticsData({
      pageViews: 1,
      sessionDuration: 0,
      bounceRate: 0,
      conversionRate: 0,
      topPages: [],
      userAgents: [],
      locations: [],
      performance: {
        loadTime: 0,
        firstPaint: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0
      },
      interactions: {
        clicks: 0,
        scrolls: 0,
        formSubmissions: 0,
        errors: 0
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
      window.removeEventListener('error', handleError);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enabled, enableUserBehaviorTracking, trackEvent]);

  // Heatmap functionality
  const toggleHeatmap = useCallback(() => {
    setShowHeatmap(!showHeatmap);
    if (!showHeatmap) {
      // Generate heatmap data
      const elements = document.querySelectorAll('button, a, input, textarea, select');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const heatmapDot = document.createElement('div');
        heatmapDot.style.cssText = `
          position: fixed;
          left: ${rect.left + rect.width / 2}px;
          top: ${rect.top + rect.height / 2}px;
          width: 20px;
          height: 20px;
          background: rgba(255, 0, 0, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          animation: pulse 2s infinite;
        `;
        heatmapDot.id = `heatmap-${index}`;
        document.body.appendChild(heatmapDot);
      });

      // Add heatmap styles
      const style = document.createElement('style');
      style.textContent = `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.6; }
        }
      `;
      document.head.appendChild(style);
    } else {
      // Remove heatmap
      document.querySelectorAll('[id^="heatmap-"]').forEach(dot => dot.remove());
    }
  }, [showHeatmap]);

  // Session recording
  const toggleSessionRecording = useCallback(() => {
    setShowSessionRecording(!showSessionRecording);
    if (!showSessionRecording) {
      // Start recording
      setIsTracking(true);
      console.log('Session recording started');
    } else {
      // Stop recording
      setIsTracking(false);
      console.log('Session recording stopped');
    }
  }, [showSessionRecording]);

  // AI testing
  const toggleAITesting = useCallback(() => {
    setShowAITesting(!showAITesting);
    if (!showAITesting) {
      // Start AI testing
      console.log('AI testing started');
    } else {
      // Stop AI testing
      console.log('AI testing stopped');
    }
  }, [showAITesting]);

  // Real-time analytics
  const toggleRealTime = useCallback(() => {
    setShowRealTime(!showRealTime);
  }, [showRealTime]);

  // Custom events
  const toggleCustomEvents = useCallback(() => {
    setShowCustomEvents(!showCustomEvents);
  }, [showCustomEvents]);

  // Performance tracking
  const togglePerformanceTracking = useCallback(() => {
    setShowPerformanceTracking(!showPerformanceTracking);
  }, [showPerformanceTracking]);

  // User behavior tracking
  const toggleUserBehaviorTracking = useCallback(() => {
    setShowUserBehaviorTracking(!showUserBehaviorTracking);
  }, [showUserBehaviorTracking]);

  // Conversion tracking
  const toggleConversionTracking = useCallback(() => {
    setShowConversionTracking(!showConversionTracking);
  }, [showConversionTracking]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      
      {/* Analytics Control Panel */}
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full shadow-lg border-2 border-white/20 flex items-center justify-center hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BarChart3 className="w-6 h-6" />
        </motion.button>

        {/* Analytics Panel */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 max-h-96 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Analytics
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {isTracking ? 'Tracking active' : 'Tracking inactive'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Quick Stats */}
                {analyticsData && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Clicks</div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">
                        {analyticsData.interactions.clicks}
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Forms</div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">
                        {analyticsData.interactions.formSubmissions}
                      </div>
                    </div>
                  </div>
                )}

                {/* Feature Toggles */}
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={showHeatmap}
                      onChange={toggleHeatmap}
                      className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Heatmap</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={showSessionRecording}
                      onChange={toggleSessionRecording}
                      className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Session Recording</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={showAITesting}
                      onChange={toggleAITesting}
                      className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">AI Testing</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={showRealTime}
                      onChange={toggleRealTime}
                      className="rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Real-time Analytics</span>
                  </label>
                </div>

                {/* Export Data */}
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Export Data</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};