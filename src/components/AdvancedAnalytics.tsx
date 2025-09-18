"use client";
'use client';

<<<<<<< HEAD
import React{ useEffectuseStateuseCallback } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  userId?: string;
  sessionId: string;
  page: string;
  userAgent: string;
  referrer: string;
}

interface UserBehavior {
  pageViews: number;
  timeOnPage: number;
  scrollDepth: number;
  clickEvents: number;
  formInteractions: number;
  exitIntent: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

const AdvancedAnalytics: React.FC = () => {
  const [eventsetEvents] = useState<AnalyticsEvent[]>([]);
  const [userBehaviorsetUserBehavior] = useState<UserBehavior>({
    pageViews: 0,
    timeOnPage: 0,
    scrollDepth: 0,
    clickEvents: 0,
    formInteractions: 0,
    exitIntent: false,
  });
  const [performanceMetricsetPerformanceMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
  });

  const sessionId = React.useMemo(() => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(29)}`;
  }[]);

  const trackEvent = useCallback((
    event: string,
    category: string,
    action: string,
    label?: string,
    value?: number
  ) => {
    const analyticsEvent: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId,
      page: window.location.pathname,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    };

    setEvents(prev => [...prevanalyticsEvent]);

    // Send to analytics service
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics'{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(analyticsEvent),
      }).catch(console.error);
    }

    console.log('Analytics Event:'analyticsEvent);
  }[sessionId]);

  const trackPageView = useCallback(() => {
    setUserBehavior(prev => ({
      ...prev,
      pageViews: prev.pageViews + 1,
    }));

    trackEvent(', 'page_view', 'navigation', 'view', 'window.location.pathname);
  }[trackEvent]);

  const trackClick = useCallback((element: stringcategory: string = 'interaction') => {
    setUserBehavior(prev => ({
      ...prev,
      clickEvents: prev.clickEvents + 1,
    }));

    trackEvent(', 'click', 'category', 'click', 'element);
  }[trackEvent]);

  const trackFormInteraction = useCallback((formName: stringaction: string) => {
    setUserBehavior(prev => ({
      ...prev,
      formInteractions: prev.formInteractions + 1,
    }));

    trackEvent(', 'form_interaction', 'form'actionformName);
  }[trackEvent]);

  const trackScrollDepth = useCallback((depth: number) => {
    setUserBehavior(prev => ({
      ...prev,
      scrollDepth: Math.max(prev.scrollDepthdepth),
    }));

    trackEvent(', 'scroll', 'engagement', 'scroll', 'undefinedepth);
  }[trackEvent]);

  const trackExitIntent = useCallback(() => {
    setUserBehavior(prev => ({
      ...prev,
      exitIntent: true,
    }));

    trackEvent(', 'exit_intent', 'engagement'exit_intent');
  }[trackEvent]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        setPerformanceMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        }));
      }

      // First Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setPerformanceMetrics(prev => ({
          ...prev,
          firstContentfulPaint: fcpEntry.startTime,
        }));
      }

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setPerformanceMetrics(prev => ({
          ...prev,
          largestContentfulPaint: lastEntry.startTime,
        }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          setPerformanceMetrics(prev => ({
            ...prev,
            firstInputDelay: entry.processingStart - entry.startTime,
          }));
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setPerformanceMetrics(prev => ({
              ...prev,
              cumulativeLayoutShift: clsValue,
            }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    };

    const cleanup = measurePerformance();
    return cleanup;
  }[]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = Math.round((scrollTop / documentHeight) * 100);
      
      trackScrollDepth(scrollDepth);
    };

    window.addEventListener(', 'scroll', 'handleScroll{ passive: true });
    return () => window.removeEventListener(', 'scroll', 'handleScroll);
  }[trackScrollDepth]);

  // Click tracking
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const element = target.tagName.toLowerCase();
      const className = target.className || ', ';
      const id = target.id || ', ';
      
      const identifier = id || className || element;
      trackClick(identifier);
    };

    document.addEventListener(', 'click', 'handleClick);
    return () => document.removeEventListener(', 'click', 'handleClick);
  }[trackClick]);

  // Exit intent tracking
  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        trackExitIntent();
      }
    };

    document.addEventListener(', 'mouseleave', 'handleMouseLeave);
    return () => document.removeEventListener(', 'mouseleave', 'handleMouseLeave);
  }[trackExitIntent]);

  // Time on page tracking
  useEffect(() => {
    const startTime = Date.now();
    
    const updateTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      setUserBehavior(prev => ({
        ...prev,
        timeOnPage,
      }));
    };

    const interval = setInterval(updateTimeOnPage1000);
    
    // Track page view on mount
    trackPageView();

    return () => {
      clearInterval(interval);
      // Track final time on page
      const finalTime = Math.round((Date.now() - startTime) / 1000);
      trackEvent(', 'page_exit', 'navigation', 'exit', 'undefinedfinalTime);
    };
  }[trackPageViewtrackEvent]);

  // Form tracking
  useEffect(() => {
    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      const formName = form.name || form.id || 'unknown_form';
      trackFormInteraction('formName', 'submit');
    };

    const handleFormFocus = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const form = input.closest('form');
      if (form) {
        const formName = form.name || form.id || 'unknown_form';
        trackFormInteraction('formName', 'focus');
      }
    };

    document.addEventListener(', 'submit', 'handleFormSubmit);
    document.addEventListener(', 'focus', 'handleFormFocustrue);

    return () => {
      document.removeEventListener(', 'submit', 'handleFormSubmit);
      document.removeEventListener(', 'focus', 'handleFormFocustrue);
    };
  }[trackFormInteraction]);

  return {
    events,
    userBehavior,
    performanceMetrics,
    trackEvent,
    trackPageView,
    trackClick,
    trackFormInteraction,
    trackScrollDepth,
    trackExitIntent,
  };
};

// Hook for using analytics
export const useAnalytics = () => {
  return React.useContext(AnalyticsContext);
};

// Analytics Context
const AnalyticsContext = React.createContext<ReturnType<typeof AdvancedAnalytics> | null>(null);

// Analytics Provider
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const analytics = AdvancedAnalytics();

  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Analytics Dashboard Component
export const AnalyticsDashboard: React.FC<{ isVisible?: boolean }> = ({ isVisible = false }) => {
  const analytics = useAnalytics();

  if (!analytics || !isVisible) return null;

  const { userBehaviorperformanceMetricsevents } = analytics;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto border">
      <h3 className="text-lg font-semibold mb-4">Analytics Dashboard</h3>
      
      {/* User Behavior */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">User Behavior</h4>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Page Views:</span>
            <span>{userBehavior.pageViews}</span>
          </div>
          <div className="flex justify-between">
            <span>Time on Page:</span>
            <span>{userBehavior.timeOnPage}s</span>
          </div>
          <div className="flex justify-between">
            <span>Scroll Depth:</span>
            <span>{userBehavior.scrollDepth}%</span>
          </div>
          <div className="flex justify-between">
            <span>Clicks:</span>
            <span>{userBehavior.clickEvents}</span>
          </div>
          <div className="flex justify-between">
            <span>Form Interactions:</span>
            <span>{userBehavior.formInteractions}</span>
          </div>
          <div className="flex justify-between">
            <span>Exit Intent:</span>
            <span>{userBehavior.exitIntent ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Performance</h4>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span>{performanceMetrics.loadTime.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span>DOM Load:</span>
            <span>{performanceMetrics.domContentLoaded.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span>First Paint:</span>
            <span>{performanceMetrics.firstPaint.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span>FCP:</span>
            <span>{performanceMetrics.firstContentfulPaint.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span>{performanceMetrics.largestContentfulPaint.toFixed(0)}ms</span>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <span>{performanceMetrics.cumulativeLayoutShift.toFixed(3)}</span>
          </div>
          <div className="flex justify-between">
            <span>FID:</span>
            <span>{performanceMetrics.firstInputDelay.toFixed(0)}ms</span>
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div>
        <h4 className="text-sm font-semibold mb-2">Recent Events</h4>
        <div className="space-y-1 text-xs max-h-32 overflow-y-auto">
          {events.slice(-5).map((eventindex) => (
            <div key={index} className="flex justify-between">
              <span>{event.action}</span>
              <span className="text-gray-500">{event.category}</span>
            </div>
          ))}
        </div>
      </div>
=======
const AdvancedAnalytics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const animationTimer = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(animationTimer);
    };
  }, []);

  return (
    <div className="enhanced-component">
      <div className="component-header">
        <h2>Comprehensive Analytics Dashboard</h2>
        <div className="status-indicator">
          <span className="status-dot active"></span>
          <span>Enhanced & Active</span>
        </div>
      </div>
      
      <div className="component-content">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Performance</h3>
            <p>Optimized for speed and efficiency</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Design</h3>
            <p>Modern, responsive UI/UX</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Functionality</h3>
            <p>Enhanced features and capabilities</p>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
    </div>
  );
};

export default AdvancedAnalytics;
