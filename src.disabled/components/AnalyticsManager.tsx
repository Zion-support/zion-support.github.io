import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  TrendingUp, 
  Activity,
  Zap,
  Target,
  Globe,
  Smartphone,
  Monitor
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ path: string; views: number }>;
  userAgents: Array<{ device: string; count: number }>;
  performance: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
  events: Array<{ name: string; count: number; timestamp: string }>;
}

interface UserSession {
  id: string;
  startTime: number;
  lastActivity: number;
  pageViews: string[];
  events: Array<{ name: string; timestamp: number; data?: unknown }>;
  userAgent: string;
  referrer: string;
}

export function AnalyticsManager() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [currentSession, setCurrentSession] = useState<UserSession | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  // Initialize analytics tracking
  useEffect(() => {
    initializeAnalytics();
    return () => cleanupAnalytics();
  }, []);

  const initializeAnalytics = useCallback(() => {
    setIsTracking(true);
    
    // Create or retrieve session
    const sessionId = localStorage.getItem('zion_session_id') || generateSessionId();
    localStorage.setItem('zion_session_id', sessionId);
    
    const session: UserSession = {
      id: sessionId,
      startTime: Date.now(),
      lastActivity: Date.now(),
      pageViews: [window.location.pathname],
      events: [],
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };
    
    setCurrentSession(session);
    
    // Track page view
    trackPageView(window.location.pathname);
    
    // Track user agent
    trackUserAgent(navigator.userAgent);
    
    // Track referrer
    if (document.referrer) {
      trackReferrer(document.referrer);
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up performance monitoring
    setupPerformanceMonitoring();
    
    // Set up session tracking
    setupSessionTracking();
    
    console.log('Analytics initialized for session:', sessionId);
  }, []);

  const cleanupAnalytics = useCallback(() => {
    // Clean up event listeners
    document.removeEventListener('click', handleClick);
    document.removeEventListener('scroll', handleScroll);
    window.removeEventListener('beforeunload', handleBeforeUnload);
    
    // Save session data
    if (currentSession) {
      saveSessionData(currentSession);
    }
  }, [currentSession]);

  const generateSessionId: React.FC = ($2) => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const setupEventListeners = useCallback(() => {
    // Click tracking
    document.addEventListener('click', handleClick, { passive: true });
    
    // Scroll tracking
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    // Page unload tracking
    window.addEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleClick = useCallback((event: Event) => {
    const target = event.target as HTMLElement;
    
    // Track button clicks
    if (target.tagName === 'BUTTON' || target.closest('button')) {
      trackEvent('button_click', {
        text: target.textContent || target.innerText,
        className: target.className,
        id: target.id
      });
    }
    
    // Track link clicks
    if (target.tagName === 'A' || target.closest('a')) {
      const link = target.tagName === 'A' ? target : target.closest('a') as HTMLAnchorElement;
      trackEvent('link_click', {
        href: link.href,
        text: link.textContent || link.innerText
      });
    }
    
    // Track form interactions
    if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
      trackEvent('form_interaction', {
        type: target.tagName.toLowerCase(),
        name: (target as HTMLInputElement).name,
        id: target.id
      });
    }
  }, []);

  const handleScroll = useCallback(() => {
    // Track scroll depth
    const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    
    if (scrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
      trackEvent('scroll_depth', { depth: scrollDepth });
    }
  }, []);

  const handleBeforeUnload = useCallback(() => {
    // Track session end
    if (currentSession) {
      trackEvent('session_end', {
        duration: Date.now() - currentSession.startTime,
        pageViews: currentSession.pageViews.length
      });
    }
  }, [currentSession]);

  const setupPerformanceMonitoring = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          trackPerformance('fcp', fcp.startTime);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          trackPerformance('lcp', lcp.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fid = entries[entries.length - 1];
        if (fid) {
          trackPerformance('fid', fid.processingStart - fid.startTime);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        trackPerformance('cls', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  const setupSessionTracking = useCallback(() => {
    // Update last activity every 30 seconds
    const activityInterval = setInterval(() => {
      if (currentSession) {
        setCurrentSession(prev => prev ? { ...prev, lastActivity: Date.now() } : null);
      }
    }, 30000);

    return () => clearInterval(activityInterval);
  }, [currentSession]);

  const trackPageView = useCallback((path: string) => {
    if (currentSession) {
      setCurrentSession(prev => prev ? {
        ...prev,
        pageViews: [...prev.pageViews, path],
        lastActivity: Date.now()
      } : null);
      
      trackEvent('page_view', { path });
      
      // Send to analytics endpoint
      sendAnalyticsData('page_view', { path, timestamp: Date.now() });
    }
  }, [currentSession]);

  const trackEvent = useCallback((name: string, data?: unknown) => {
    if (currentSession) {
      const event = { name, timestamp: Date.now(), data };
      
      setCurrentSession(prev => prev ? {
        ...prev,
        events: [...prev.events, event],
        lastActivity: Date.now()
      } : null);
      
      // Send to analytics endpoint
      sendAnalyticsData('event', event);
    }
  }, [currentSession]);

  const trackUserAgent = useCallback((userAgent: string) => {
    trackEvent('user_agent', { userAgent });
  }, []);

  const trackReferrer = useCallback((referrer: string) => {
    trackEvent('referrer', { referrer });
  }, []);

  const trackPerformance = useCallback((metric: string, value: number) => {
    trackEvent('performance_metric', { metric, value });
  }, []);

  const sendAnalyticsData = useCallback(async (type: string, data: unknown) => {
    try {
      // In production, send to your analytics endpoint
      // await fetch('/api/analytics', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ type, data, sessionId: currentSession?.id })
      // });
      
      // For now, just log to console
      console.log('Analytics Event:', { type, data, sessionId: currentSession?.id });
    } catch (error) {
      console.error('Failed to send analytics data:', error);
    }
  }, [currentSession]);

  const saveSessionData = useCallback(async (session: UserSession) => {
    try {
      // Save session data to localStorage as backup
      localStorage.setItem('zion_session_backup', JSON.stringify(session));
      
      // Send to analytics endpoint
      await sendAnalyticsData('session_end', session);
    } catch (error) {
      console.error('Failed to save session data:', error);
    }
  }, [sendAnalyticsData]);

  const generateAnalyticsReport = useCallback(() => {
    if (!currentSession) return null;

    const sessionDuration = Date.now() - currentSession.startTime;
    const pageViews = currentSession.pageViews.length;
    const events = currentSession.events.length;
    
    // Calculate bounce rate (single page view sessions)
    const bounceRate = pageViews === 1 ? 100 : 0;
    
    // Calculate conversion rate (sessions with specific events)
    const conversionEvents = currentSession.events.filter(e => 
      ['form_submit', 'button_click', 'link_click'].includes(e.name)
    );
    const conversionRate = (conversionEvents.length / events) * 100;

    return {
      pageViews,
      uniqueVisitors: 1, // Single session
      sessionDuration: Math.round(sessionDuration / 1000), // in seconds
      bounceRate,
      conversionRate: Math.round(conversionRate),
      topPages: currentSession.pageViews.reduce((acc, path) => {
        acc[path] = (acc[path] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      userAgents: [{ device: getDeviceType(currentSession.userAgent), count: 1 }],
      performance: { fcp: 0, lcp: 0, fid: 0, cls: 0 }, // Would be populated from performance tracking
      events: currentSession.events.map(e => ({ name: e.name, count: 1, timestamp: new Date(e.timestamp).toISOString() }))
    };
  }, [currentSession]);

  const getDeviceType: React.FC = ($2) => {
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
      return 'Mobile';
    } else if (/Tablet|iPad/.test(userAgent)) {
      return 'Tablet';
    } else {
      return 'Desktop';
    }
  };

  // Update analytics data when session changes
  useEffect(() => {
    if (currentSession) {
      const report = generateAnalyticsReport();
      setAnalyticsData(report);
    }
  }, [currentSession, generateAnalyticsReport]);

  if (!showAnalytics) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setShowAnalytics(true)}
        className="fixed bottom-4 left-4 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-50"
        title="Show Analytics"
      >
        <BarChart3 className="w-6 h-6" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-white text-sm z-50 max-w-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          <span className="font-medium">Analytics</span>
        </div>
        <button
          onClick={() => setShowAnalytics(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>

      {analyticsData && (
        <div className="space-y-3">
          {/* Session Info */}
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-green-400" />
            <span>Session: {currentSession?.id.slice(-8)}</span>
          </div>

          {/* Page Views */}
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 text-blue-400" />
            <span>Views: {analyticsData.pageViews}</span>
          </div>

          {/* Session Duration */}
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span>Duration: {analyticsData.sessionDuration}s</span>
          </div>

          {/* Bounce Rate */}
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-red-400" />
            <span>Bounce: {analyticsData.bounceRate}%</span>
          </div>

          {/* Conversion Rate */}
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span>Conversion: {analyticsData.conversionRate}%</span>
          </div>

          {/* Device Type */}
          <div className="flex items-center space-x-2">
            {analyticsData.userAgents[0]?.device === 'Mobile' ? (
              <Smartphone className="w-4 h-4 text-purple-400" />
            ) : (
              <Monitor className="w-4 h-4 text-cyan-400" />
            )}
            <span>Device: {analyticsData.userAgents[0]?.device}</span>
          </div>

          {/* Tracking Status */}
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-orange-400" />
            <span>Tracking: {isTracking ? 'Active' : 'Inactive'}</span>
          </div>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-600">
        <button
          onClick={() => {
            if (currentSession) {
              saveSessionData(currentSession);
            }
          }}
          className="w-full px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-xs rounded transition-colors duration-200"
        >
          Save Session Data
        </button>
      </div>
    </motion.div>
  );
}