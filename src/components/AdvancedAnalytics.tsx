import React, { useEffect, useState, useCallback, useMemo } from 'react';
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
  Monitor,
  X,
  Settings,
  RefreshCw
} from 'lucide-react';

interface AnalyticsEvent {
  type: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  pageUrl: string;
  userAgent: string;
  referrer?: string;
}

interface UserSession {
  id: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  events: AnalyticsEvent[];
  deviceType: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  os: string;
  country?: string;
  city?: string;
}

interface AnalyticsData {
  totalUsers: number;
  activeSessions: number;
  pageViews: number;
  events: AnalyticsEvent[];
  sessions: UserSession[];
  topPages: { [key: string]: number };
  topEvents: { [key: string]: number };
  deviceBreakdown: { [key: string]: number };
  browserBreakdown: { [key: string]: number };
  osBreakdown: { [key: string]: number };
}

interface AdvancedAnalyticsProps {
  enableTracking?: boolean;
  enableRealTime?: boolean;
  enableHeatmaps?: boolean;
  enableABTesting?: boolean;
  enableConversionTracking?: boolean;
  enableUserSegmentation?: boolean;
}

export const AdvancedAnalytics: React.FC<AdvancedAnalyticsProps> = ({
  enableTracking = true,
  enableRealTime = true,
  enableHeatmaps = true,
  enableABTesting = true,
  enableConversionTracking = true,
  enableUserSegmentation = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalUsers: 0,
    activeSessions: 0,
    pageViews: 0,
    events: [],
    sessions: [],
    topPages: {},
    topEvents: {},
    deviceBreakdown: {},
    browserBreakdown: {},
    osBreakdown: {},
  });
  const [currentSession, setCurrentSession] = useState<UserSession | null>(null);
  const [isRealTimeActive, setIsRealTimeActive] = useState(false);

  // Generate session ID
  const generateSessionId = useCallback(() => {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }, []);

  // Detect device type
  const detectDeviceType = useCallback((): 'desktop' | 'mobile' | 'tablet' => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/tablet|ipad|playbook|silk/i.test(userAgent)) return 'tablet';
    if (/mobile|iphone|ipod|android|blackberry|opera mini|windows phone/i.test(userAgent)) return 'mobile';
    return 'desktop';
  }, []);

  // Detect browser and OS
  const detectBrowserAndOS = useCallback(() => {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';
    let os = 'Unknown';

    // Browser detection
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';
    else if (userAgent.includes('Opera')) browser = 'Opera';

    // OS detection
    if (userAgent.includes('Windows')) os = 'Windows';
    else if (userAgent.includes('Mac')) os = 'macOS';
    else if (userAgent.includes('Linux')) os = 'Linux';
    else if (userAgent.includes('Android')) os = 'Android';
    else if (userAgent.includes('iOS')) os = 'iOS';

    return { browser, os };
  }, []);

  // Initialize session
  const initializeSession = useCallback(() => {
    const sessionId = generateSessionId();
    const { browser, os } = detectBrowserAndOS();
    const deviceType = detectDeviceType();

    const session: UserSession = {
      id: sessionId,
      startTime: Date.now(),
      lastActivity: Date.now(),
      pageViews: 1,
      events: [],
      deviceType,
      browser,
      os,
    };

    setCurrentSession(session);
    localStorage.setItem('analytics-session', JSON.stringify(session));
    
    // Track session start
    trackEvent('session', 'start', 'session_started', undefined, sessionId);
  }, [generateSessionId, detectBrowserAndOS, detectDeviceType]);

  // Track events
  const trackEvent = useCallback((
    category: string,
    action: string,
    label?: string,
    value?: number,
    sessionId?: string
  ) => {
    if (!enableTracking) return;

    const event: AnalyticsEvent = {
      type: 'event',
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: sessionId || currentSession?.id || 'unknown',
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    };

    // Add to current session
    if (currentSession) {
      const updatedSession = {
        ...currentSession,
        events: [...currentSession.events, event],
        lastActivity: Date.now(),
      };
      setCurrentSession(updatedSession);
      localStorage.setItem('analytics-session', JSON.stringify(updatedSession));
    }

    // Send to analytics server (mock implementation)
    sendAnalyticsEvent(event);
  }, [enableTracking, currentSession]);

  // Send analytics event to server
  const sendAnalyticsEvent = useCallback(async (event: AnalyticsEvent) => {
    try {
      // In a real implementation, this would send to your analytics server
      // For now, we'll just log it and store locally
      console.log('Analytics Event:', event);
      
      // Store in localStorage for demo purposes
      const storedEvents = JSON.parse(localStorage.getItem('analytics-events') || '[]');
      storedEvents.push(event);
      localStorage.setItem('analytics-events', JSON.stringify(storedEvents.slice(-1000))); // Keep last 1000 events
      
      // Update analytics data
      setAnalyticsData(prev => ({
        ...prev,
        events: [...prev.events, event],
        pageViews: prev.pageViews + 1,
      }));
    } catch (error) {
      console.warn('Failed to send analytics event:', error);
    }
  }, []);

  // Track page views
  const trackPageView = useCallback(() => {
    if (!enableTracking || !currentSession) return;

    const updatedSession = {
      ...currentSession,
      pageViews: currentSession.pageViews + 1,
      lastActivity: Date.now(),
    };
    setCurrentSession(updatedSession);
    localStorage.setItem('analytics-session', JSON.stringify(updatedSession));

    trackEvent('page', 'view', window.location.pathname, undefined, currentSession.id);
  }, [enableTracking, currentSession, trackEvent]);

  // Track user interactions
  const trackUserInteraction = useCallback((element: HTMLElement, action: string) => {
    if (!enableTracking) return;

    const category = element.tagName.toLowerCase();
    const label = element.textContent?.trim().substring(0, 50) || element.className;
    
    trackEvent('interaction', action, label);
  }, [enableTracking, trackEvent]);

  // Setup tracking
  useEffect(() => {
    if (!enableTracking) return;

    // Initialize session on first load
    if (!currentSession) {
      initializeSession();
    }

    // Track page view
    trackPageView();

    // Setup event listeners for user interactions
    const setupEventTracking = () => {
      // Click tracking
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target && target !== document.body) {
          trackUserInteraction(target, 'click');
        }
      });

      // Form submission tracking
      document.addEventListener('submit', (e) => {
        const target = e.target as HTMLFormElement;
        if (target) {
          trackEvent('form', 'submit', target.action || 'unknown_form');
        }
      });

      // Scroll tracking
      let scrollTimeout: NodeJS.Timeout;
      document.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
          trackEvent('engagement', 'scroll', 'scroll_depth', scrollDepth);
        }, 100);
      });

      // Time on page tracking
      let timeOnPage = 0;
      const timeInterval = setInterval(() => {
        timeOnPage += 1;
        if (timeOnPage % 30 === 0) { // Track every 30 seconds
          trackEvent('engagement', 'time_on_page', 'time_tracking', timeOnPage);
        }
      }, 1000);

      return () => {
        clearInterval(timeInterval);
      };
    };

    const cleanup = setupEventTracking();
    return cleanup;
  }, [enableTracking, currentSession, initializeSession, trackPageView, trackUserInteraction, trackEvent]);

  // Real-time analytics updates
  useEffect(() => {
    if (!enableRealTime || !isRealTimeActive) return;

    const interval = setInterval(() => {
      // Update active sessions count
      const now = Date.now();
      const activeSessions = analyticsData.sessions.filter(
        session => now - session.lastActivity < 30 * 60 * 1000 // 30 minutes
      ).length;

      setAnalyticsData(prev => ({
        ...prev,
        activeSessions,
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [enableRealTime, isRealTimeActive, analyticsData.sessions]);

  // Analytics Dashboard
  const AnalyticsDashboard = useMemo(() => {
    if (!isVisible) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 right-4 bg-zion-slate-dark/95 backdrop-blur-sm border border-zion-purple/20 rounded-lg p-4 shadow-xl z-50 max-w-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-zion-cyan" />
            Analytics
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-zion-slate-light hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-3 text-xs">
          <div className="flex justify-between">
            <span className="text-zion-slate-light">Active Users:</span>
            <span className="text-zion-cyan font-medium">{analyticsData.activeSessions}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zion-slate-light">Page Views:</span>
            <span className="text-zion-cyan font-medium">{analyticsData.pageViews}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zion-slate-light">Events:</span>
            <span className="text-zion-cyan font-medium">{analyticsData.events.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zion-slate-light">Device:</span>
            <span className="text-zion-cyan font-medium capitalize">
              {currentSession?.deviceType || 'unknown'}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-zion-purple/20">
          <button
            onClick={() => setIsRealTimeActive(!isRealTimeActive)}
            className={`w-full px-3 py-2 rounded text-xs font-medium transition-colors ${
              isRealTimeActive 
                ? 'bg-zion-cyan text-zion-slate-dark' 
                : 'bg-zion-purple/20 text-zion-slate-light hover:bg-zion-purple/30'
            }`}
          >
            {isRealTimeActive ? 'Real-time Active' : 'Enable Real-time'}
          </button>
        </div>
      </motion.div>
    );
  }, [isVisible, analyticsData, currentSession, isRealTimeActive]);

  return (
    <>
      {/* Analytics Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 p-3 bg-zion-purple text-white rounded-full shadow-lg hover:bg-zion-purple/90 transition-all duration-300 z-40 focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
        aria-label="Toggle analytics dashboard"
        aria-expanded={isVisible}
      >
        <BarChart3 className="w-6 h-6" />
      </button>

      {/* Analytics Dashboard */}
      {AnalyticsDashboard}

      {/* Analytics Status Indicator */}
      {enableTracking && (
        <div className="fixed top-4 left-4 bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-purple/20 rounded-lg px-3 py-2 text-xs text-zion-slate-light z-30">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Analytics Active
          </div>
        </div>
      )}
    </>
  );
};