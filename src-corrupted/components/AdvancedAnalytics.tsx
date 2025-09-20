<<<<<<< HEAD
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">AdvancedAnalytics</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
=======
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  Award,
  BarChart3,
  Clock,
  Eye,
  Monitor,
  MousePointer,
  Smartphone,
  Tablet,
  Target,
  Users,
  X,
  Zap
} from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ path: string; views: number }>;
  userAgents: Array<{ device: string; count: number }>;
  referrers: Array<{ source: string; count: number }>;
  timeOnPage: number;
  scrollDepth: number;
  clickEvents: number;
  formSubmissions: number;
}

interface Props {
  enabled?: boolean;
  showMetrics?: boolean;
}

export function AdvancedAnalytics({ enabled = true, showMetrics = true }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    sessionDuration: 0,
    bounceRate: 0,
    conversionRate: 0,
    topPages: [],
    userAgents: [],
    referrers: [],
    timeOnPage: 0,
    scrollDepth: 0,
    clickEvents: 0,
    formSubmissions: 0
  });
  const [sessionStart, setSessionStart] = useState<number>(Date.now());
  const [isTracking, setIsTracking] = useState(false);

  // Initialize analytics tracking
  const initializeTracking = useCallback(() => {
    if (!enabled) return;

    setIsTracking(true);
    setSessionStart(Date.now());

    // Track page view
    const trackPageView = () => {
      setAnalyticsData(prev => ({
        ...prev,
        pageViews: prev.pageViews + 1
      }));
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      setAnalyticsData(prev => ({
        ...prev,
        scrollDepth: Math.max(prev.scrollDepth, scrollPercent)
      }));
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - sessionStart) / 1000);
      setAnalyticsData(prev => ({
        ...prev,
        timeOnPage: timeSpent
      }));
    };

    // Track click events
    const trackClickEvents = () => {
      setAnalyticsData(prev => ({
        ...prev,
        clickEvents: prev.clickEvents + 1
      }));
    };

    // Track form submissions
    const trackFormSubmissions = (e: Event) => {
      if (e.target instanceof HTMLFormElement) {
        setAnalyticsData(prev => ({
          ...prev,
          formSubmissions: prev.formSubmissions + 1
        }));
      }
    };

    // Track user agent
    const trackUserAgent = () => {
      const userAgent = navigator.userAgent;
      let device = 'Desktop';
      
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        device = /iPad/i.test(userAgent) ? 'Tablet' : 'Mobile';
      }
      
      setAnalyticsData(prev => {
        const existingDevice = prev.userAgents.find(d => d.device === device);
        if (existingDevice) {
          existingDevice.count++;
        } else {
          prev.userAgents.push({ device, count: 1 });
        }
        return { ...prev };
      });
    };

    // Track referrer
    const trackReferrer = () => {
      if (document.referrer) {
        const referrer = new URL(document.referrer);
        const source = referrer.hostname;
        
        setAnalyticsData(prev => {
          const existingSource = prev.referrers.find(r => r.source === source);
          if (existingSource) {
            existingSource.count++;
          } else {
            prev.referrers.push({ source, count: 1 });
          }
          return { ...prev };
        });
      }
    };

    // Initialize tracking
    trackPageView();
    trackUserAgent();
    trackReferrer();

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    document.addEventListener('click', trackClickEvents);
    document.addEventListener('submit', trackFormSubmissions);
    
    // Update time on page every second
    const timeInterval = setInterval(trackTimeOnPage, 1000);

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, pause tracking
        setIsTracking(false);
      } else {
        // Page is visible, resume tracking
        setIsTracking(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      document.removeEventListener('click', trackClickEvents);
      document.removeEventListener('submit', trackFormSubmissions);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(timeInterval);
    };
  }, [enabled, sessionStart]);

  // Initialize tracking on mount
  useEffect(() => {
    const cleanup = initializeTracking();
    return cleanup;
  }, [initializeTracking]);

  // Calculate session duration
  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        const duration = Math.round((Date.now() - sessionStart) / 1000);
        setAnalyticsData(prev => ({
          ...prev,
          sessionDuration: duration
        }));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isTracking, sessionStart]);

  // Simulate some analytics data for demonstration
  useEffect(() => {
    if (enabled) {
      // Simulate top pages
      setAnalyticsData(prev => ({
        ...prev,
        topPages: [
          { path: '/', views: 1250 },
          { path: '/services', views: 890 },
          { path: '/about', views: 456 },
          { path: '/contact', views: 234 },
          { path: '/blog', views: 189 }
        ],
        bounceRate: 35.2,
        conversionRate: 8.7
      }));
    }
  }, [enabled]);

  if (!enabled) return null;

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-44 right-4 z-50 p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Analytics Dashboard"
        aria-label="Open analytics dashboard"
      >
        <BarChart3 className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AdvancedAnalytics</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default AdvancedAnalytics;