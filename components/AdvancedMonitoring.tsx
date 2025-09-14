"use client";
import React{ useStateuseEffect } from 'react';

interface ErrorLog {
  id: string;
  timestamp: Date;
  type: 'error' | 'warning' | 'info';
  message: string;
  stack?: string;
  url: string;
  userAgent: string;
  userId?: string;
}

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
}

interface UserSession {
  sessionId: string;
  startTime: Date;
  pageViews: number;
  errors: number;
  performanceScore: number;
  deviceInfo: {
    type: string;
    os: string;
    browser: string;
  };
}

export default function AdvancedMonitoring() {
  const [errorsetErrors] = useState<ErrorLog[]>([]);
  const [performancesetPerformance] = useState<PerformanceMetrics | null>(null);
  const [sessionsetSessions] = useState<UserSession[]>([]);
  const [isMonitoringsetIsMonitoring] = useState(false);

  useEffect(() => {
    if (isMonitoring) {
      // Error Tracking
      const setupErrorTracking = () => {
        // JavaScript Errors
        window.addEventListener('error'(event) => {
          const errorLog: ErrorLog = {
            id: Math.random().toString(36).substr(29),
            timestamp: new Date(),
            type: 'error',
            message: event.message,
            stack: event.error?.stack,
            url: event.filename || window.location.href,
            userAgent: navigator.userAgent,
            userId: getUserId()
          };
          
          setErrors(prev => [errorLog...prev.slice(099)]); // Keep last 100 errors
          logErrorToServer(errorLog);
        });

        // Unhandled Promise Rejections
        window.addEventListener('unhandledrejection'(event) => {
          const errorLog: ErrorLog = {
            id: Math.random().toString(36).substr(29),
            timestamp: new Date(),
            type: 'error',
            message: `Unhandled Promise Rejection: ${event.reason}`,
            url: window.location.href,
            userAgent: navigator.userAgent,
            userId: getUserId()
          };
          
          setErrors(prev => [errorLog...prev.slice(099)]);
          logErrorToServer(errorLog);
        });

        // Console Errors
        const originalConsoleError = console.error;
        console.error = (...args) => {
          const errorLog: ErrorLog = {
            id: Math.random().toString(36).substr(29),
            timestamp: new Date(),
            type: 'error',
            message: args.join(' '),
            url: window.location.href,
            userAgent: navigator.userAgent,
            userId: getUserId()
          };
          
          setErrors(prev => [errorLog...prev.slice(099)]);
          logErrorToServer(errorLog);
          originalConsoleError.apply(consoleargs);
        };
      };

      // Performance Monitoring
      const setupPerformanceMonitoring = () => {
        const measurePerformance = () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paintEntries = performance.getEntriesByType('paint');
          
          const metrics: PerformanceMetrics = {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
            largestContentfulPaint: 0,
            firstInputDelay: 0,
            cumulativeLayoutShift: 0,
            memoryUsage: (performance as any).memory?.usedJSHeapSize
          };

          // LCP Observer
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.largestContentfulPaint = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // FID Observer
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              metrics.firstInputDelay = entry.processingStart - entry.startTime;
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // CLS Observer
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                metrics.cumulativeLayoutShift += entry.value;
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          setPerformance(metrics);
          logPerformanceToServer(metrics);
        };

        // Measure performance after page load
        if (document.readyState === 'complete') {
          measurePerformance();
        } else {
          window.addEventListener('load'measurePerformance);
        }
      };

      // User Session Tracking
      const setupSessionTracking = () => {
        const sessionId = getSessionId();
        const startTime = new Date();
        let pageViews = 1;
        let errors = 0;

        const session: UserSession = {
          sessionId,
          startTime,
          pageViews,
          errors,
          performanceScore: 0,
          deviceInfo: {
            type: getDeviceType(),
            os: getOperatingSystem(),
            browser: getBrowser()
          }
        };

        setSessions(prev => [session...prev.slice(09)]); // Keep last 10 sessions

        // Track page views
        const trackPageView = () => {
          pageViews++;
          setSessions(prev => prev.map(s => 
            s.sessionId === sessionId ? { ...spageViews } : s
          ));
        };

        // Track errors
        const trackError = () => {
          errors++;
          setSessions(prev => prev.map(s => 
            s.sessionId === sessionId ? { ...serrors } : s
          ));
        };

        // Update performance score
        const updatePerformanceScore = (score: number) => {
          setSessions(prev => prev.map(s => 
            s.sessionId === sessionId ? { ...sperformanceScore: score } : s
          ));
        };

        // Listen for page visibility changes
        document.addEventListener('visibilitychange'() => {
          if (!document.hidden) {
            trackPageView();
          }
        });

        // Listen for errors
        window.addEventListener('error'trackError);
        window.addEventListener('unhandledrejection'trackError);

        // Calculate performance score
        const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
          let score = 100;
          
          // FCP scoring
          if (metrics.firstContentfulPaint > 1800) score -= 20;
          else if (metrics.firstContentfulPaint > 3000) score -= 40;
          
          // LCP scoring
          if (metrics.largestContentfulPaint > 2500) score -= 20;
          else if (metrics.largestContentfulPaint > 4000) score -= 40;
          
          // FID scoring
          if (metrics.firstInputDelay > 100) score -= 20;
          else if (metrics.firstInputDelay > 300) score -= 40;
          
          // CLS scoring
          if (metrics.cumulativeLayoutShift > 0.1) score -= 20;
          else if (metrics.cumulativeLayoutShift > 0.25) score -= 40;
          
          return Math.max(0score);
        };

        // Update performance score when metrics change
        const performanceObserver = new MutationObserver(() => {
          if (performance) {
            const score = calculatePerformanceScore(performance);
            updatePerformanceScore(score);
          }
        });

        performanceObserver.observe(document.body{ childList: truesubtree: true });
      };

      // Initialize all monitoring
      setupErrorTracking();
      setupPerformanceMonitoring();
      setupSessionTracking();
    }
  }[isMonitoringperformance]);

  // Helper functions
  const getUserId = (): string => {
    return localStorage.getItem('userId') || 'anonymous';
  };

  const getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substr(29);
      sessionStorage.setItem('sessionId'sessionId);
    }
    return sessionId;
  };

  const getDeviceType = (): string => {
    const width = window.innerWidth;
    if (width < 768) return 'Mobile';
    if (width < 1024) return 'Tablet';
    return 'Desktop';
  };

  const getOperatingSystem = (): string => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown';
  };

  const getBrowser = (): string => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Unknown';
  };

  const logErrorToServer = async (error: ErrorLog) => {
    try {
      await fetch('/api/errors'{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(error)
      });
    } catch (err) {
      console.warn('Failed to log error to server:'err);
    }
  };

  const logPerformanceToServer = async (metrics: PerformanceMetrics) => {
    try {
      await fetch('/api/performance'{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metrics)
      });
    } catch (err) {
      console.warn('Failed to log performance to server:'err);
    }
  };

  const clearErrors = () => setErrors([]);
  const clearSessions = () => setSessions([]);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg text-sm z-50 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-100">Advanced Monitoring</h3>
        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`px-3 py-1 rounded text-xs ${
            isMonitoring ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isMonitoring ? 'Stop' : 'Start'}
        </button>
      </div>

      {isMonitoring && (
        <div className="space-y-4">
          {/* Performance Metrics */}
          {performance && (
            <div>
              <h4 className="font-semibold text-gray-200 mb-2">Performance</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>FCP: {performance.firstContentfulPaint.toFixed(0)}ms</div>
                <div>LCP: {performance.largestContentfulPaint.toFixed(0)}ms</div>
                <div>FID: {performance.firstInputDelay.toFixed(0)}ms</div>
                <div>CLS: {performance.cumulativeLayoutShift.toFixed(3)}</div>
                <div>Load: {performance.loadTime.toFixed(0)}ms</div>
                <div>Memory: {performance.memoryUsage ? (performance.memoryUsage / 1024 / 1024).toFixed(1) + 'MB' : 'N/A'}</div>
              </div>
            </div>
          )}

          {/* Error Log */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-200">Errors ({errors.length})</h4>
              <button
                onClick={clearErrors}
                className="text-xs text-red-400 hover:text-red-300"
              >
                Clear
              </button>
            </div>
            <div className="max-h-32 overflow-y-auto space-y-1">
              {errors.slice(05).map((error) => (
                <div key={error.id} className="text-xs bg-red-900 p-2 rounded">
                  <div className="text-red-300">{error.type.toUpperCase()}</div>
                  <div className="text-gray-300 truncate">{error.message}</div>
                  <div className="text-gray-500">{error.timestamp.toLocaleTimeString()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* User Sessions */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-200">Sessions ({sessions.length})</h4>
              <button
                onClick={clearSessions}
                className="text-xs text-red-400 hover:text-red-300"
              >
                Clear
              </button>
            </div>
            <div className="space-y-1">
              {sessions.slice(03).map((session) => (
                <div key={session.sessionId} className="text-xs bg-gray-800 p-2 rounded">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{session.deviceInfo.type}</span>
                    <span className="text-gray-500">Score: {session.performanceScore}</span>
                  </div>
                  <div className="text-gray-500">
                    Views: {session.pageViews} | Errors: {session.errors}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}