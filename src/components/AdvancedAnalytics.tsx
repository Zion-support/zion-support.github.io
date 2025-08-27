import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  X,
  Activity,
  Zap,
  Target,
  Award,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

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
}

export function AdvancedAnalytics({ enabled = true }: Props): JSX.Element | null {
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
    if (!enabled) return () => {};

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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-4 right-4 z-50 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-indigo-500" />
            Analytics Dashboard
          </h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close analytics dashboard"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Real-time Metrics */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-500" />
              Real-time Metrics
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Eye className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600">Page Views</span>
                </div>
                <span className="text-lg font-bold text-green-700">{analyticsData.pageViews}</span>
              </div>
              
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-xs text-blue-600">Unique Visitors</span>
                </div>
                <span className="text-lg font-bold text-blue-700">{analyticsData.uniqueVisitors || 1}</span>
              </div>
              
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span className="text-xs text-purple-600">Session Duration</span>
                </div>
                <span className="text-lg font-bold text-purple-700">{Math.floor(analyticsData.sessionDuration / 60)}m {analyticsData.sessionDuration % 60}s</span>
              </div>
              
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <MousePointer className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-orange-600">Clicks</span>
                </div>
                <span className="text-lg font-bold text-orange-700">{analyticsData.clickEvents}</span>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              Performance Metrics
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Scroll Depth</span>
                <span className="text-sm font-medium text-gray-800">{analyticsData.scrollDepth}%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Time on Page</span>
                <span className="text-sm font-medium text-gray-800">{Math.floor(analyticsData.timeOnPage / 60)}m {analyticsData.timeOnPage % 60}s</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Form Submissions</span>
                <span className="text-sm font-medium text-gray-800">{analyticsData.formSubmissions}</span>
              </div>
            </div>
          </div>

          {/* Conversion Metrics */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-red-500" />
              Conversion Metrics
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-red-50 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-red-700">{analyticsData.bounceRate}%</div>
                  <div className="text-xs text-red-600">Bounce Rate</div>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-700">{analyticsData.conversionRate}%</div>
                  <div className="text-xs text-green-600">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500" />
              Top Pages
            </h4>
            
            <div className="space-y-2">
              {analyticsData.topPages.slice(0, 3).map((page, index) => (
                <div key={page.path} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500">#{index + 1}</span>
                    <span className="text-sm text-gray-700">{page.path}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{page.views}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Device Distribution */}
          <div>
            <h4 className="text-lg font-medium text-gray-700 mb-3 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-purple-500" />
              Device Distribution
            </h4>
            
            <div className="space-y-2">
              {analyticsData.userAgents.map((device, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    {device.device === 'Mobile' && <Smartphone className="w-4 h-4 text-blue-500" />}
                    {device.device === 'Tablet' && <Tablet className="w-4 h-4 text-green-500" />}
                    {device.device === 'Desktop' && <Monitor className="w-4 h-4 text-purple-500" />}
                    <span className="text-sm text-gray-700">{device.device}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{device.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Session Status */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Session Status</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isTracking ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-xs text-gray-600">{isTracking ? 'Active' : 'Paused'}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}