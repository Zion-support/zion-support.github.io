import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  BarChart3,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  Clock,  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Download,
  Upload,
  Activity,
  Zap,
  AlertTriangle,
  CheckCircle,
  Info} from 'lucide-react';

interface AnalyticsData {

  pageViews: number;
  uniqueVisitors: number;
  sessionDuration: number;
  bounceRate: number;
  deviceTypes: {

    desktop: number;
    mobile: number;
    tablet: number};
  topPages: Array<{

    path: string;
    views: number;
    title: string;
  }[];  userEngagement: {

    scrollDepth: number;
    timeOnPage: number;
    interactions: number};
  performance: {

    loadTime: number;
    coreWebVitals: {

      fcp: number;
      lcp: number;
      fid: number;
      cls: number}}}

interface EnhancedAnalyticsProps {
  // Add your props here


  enabled?: boolean;
  showDashboard?: boolean;
  trackingId?: string;
export const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({

  enabled = true,
  showDashboard = false,
  trackingId = 'G-XXXXXXXXXX'}) => {

  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [sessionStart, setSessionStart] = useState(Date.now());
  const [userInteractions, setUserInteractions] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [timeOnPage, setTimeOnPage] = useState(0);

  const sessionRef = useRef<NodeJS.Timeout>();
  const scrollRef = useRef<NodeJS.Timeout>();
  // Initialize analytics
  useEffect ( () => {
    if (!enabled) return;

    // Initialize Google Analytics (if tracking ID provided)
    if (trackingId && trackingId !== 'G-XXXXXXXXXX') {

      // Google Analytics 4 initialization'
      const script = document.createElement('script');      script.async = true;
      script.src = `https://www.googletagmanager.com / gtag / js?id=${trackingId}`;
      document.head.appendChild (script) ;

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {

        window.dataLayer.push(args);
<<<<<<< HEAD
      }
      gtag('js', new Date());
      gtag('config', trackingId, {
=======
      }'
      gtag('js', new Date());'      gtag('config', trackingId, {
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

        page_title: document.title,
        page_location: window.location.href,
        custom_map: {

          custom_parameter_1: 'user_type',
          custom_parameter_2: 'page_category'}});

      // Track page view'
      gtag('event',page_view', {

        page_title: document.title,
        page_location: window.location.href,
        page_referrer: document.referrer});
    }
    // Initialize session tracking
    setSessionStart(Date.now());

    // Track session start'
    trackEvent('session_start', {

      timestamp: Date.now(),
      user_agent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone});

    return : unknown {
      if (script) {

        document.head.removeChild(script);
      }
    };
  }, [enabled, trackingId]) ;
  // Track page changes
  useEffect ( () => {
    if (!enabled) return;

    const handleRouteChange = (...args: unknown[]): unknown => {
      const newPage = window.location.pathname;      if (newPage !== currentPage) {

        // Track page view'
        trackEvent('page_view', {

          page_path: newPage,
          page_title: document.title,
          previous_page: currentPage,
          time_on_previous_page: timeOnPage});

        setCurrentPage (newPage) ;
        setTimeOnPage (0) ;
        setScrollDepth (0) ;
        setUserInteractions (0) ;
      }    };

    // Listen for route changes (for SPA)
    window.addEventListener('popstate', handleRouteChange);

    // Track initial page'
    trackEvent('page_view', {

      page_path: currentPage,
      page_title: document.title,
      is_initial_page: true});

    return () => {

      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [enabled, currentPage, timeOnPage]) ;
  // Track user interactions
  useEffect ( () => {
    if (!enabled) return;

    const trackInteraction = () => {
<<<<<<< HEAD
      setUserInteractions(prev => prev + 1);
      trackEvent('user_interaction', {

=======
      setUserInteractions(prev => prev + 1);'      trackEvent('user_interaction', {
'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
        interaction_type: 'click',
        page_path: currentPage,
        timestamp: Date.now()});
    };

    const trackScroll = (...args: unknown[]): unknown => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      if (scrollPercent > scrollDepth) {

        setScrollDepth(scrollPercent);

        // Track scroll milestones
        if (scrollPercent >= 25 && scrollDepth < 25) {

          trackEvent('scroll_milestone', {

            milestone: 25,
            page_path: currentPage});
        } else if (scrollPercent >= 50 && scrollDepth < 50) {

          trackEvent('scroll_milestone', {

            milestone: 50,
            page_path: currentPage});
        } else if (scrollPercent >= 75 && scrollDepth < 75) {

          trackEvent('scroll_milestone', {

            milestone: 75,
            page_path: currentPage});
        } else if (scrollPercent >= 90 && scrollDepth < 90) {

          trackEvent('scroll_milestone', {

            milestone: 90,
            page_path: currentPage});
        }
      }
    };

    const trackTimeOnPage = () => {
      setTimeOnPage (prev => prev + 1) ;
    };
    // Set up event listeners'
    document.addEventListener('click', trackInteraction);
    window.addEventListener('scroll', trackScroll);

    // Update time on page every second
    sessionRef.current = setInterval (trackTimeOnPage, 1000) ;

    return () => {

      document.removeEventListener('click', trackInteraction);
      window.removeEventListener('scroll', trackScroll);
      if (sessionRef.current) {

        clearInterval(sessionRef.current);
      }
    };
  }, [enabled, currentPage, scrollDepth]) ;
  // Track performance metrics
  useEffect ( () => {
    if (!enabled) return;

    const trackPerformance = () => {

      if ('performance' in window) {

        const navigation = performance.getEntriesByType('
          'navigation'
        )[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');

        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const fcp ='
          paint.find(entry => entry.name === 'first-contentful-paint')
            ?.startTime || 0;
        const lcp ='
          paint.find(entry => entry.name === 'largest-contentful-paint')
            ?.startTime || 0;
<<<<<<< HEAD

        trackEvent('performance_metrics', {
=======
'        trackEvent('performance_metrics', {
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

          load_time: loadTime,
          fcp: fcp,
          lcp: lcp,
          page_path: currentPage});
      }    };

    // Track performance after page load'
    if (document.readyState === 'complete') {

      trackPerformance();
    } else {

      window.addEventListener('load', trackPerformance);
      return () => window.removeEventListener('load', trackPerformance);
    }
  }, [enabled, currentPage]) ;
  // Track session end
  useEffect ( () => {
    if (!enabled) return;

    const handleBeforeUnload = () => {
      const sessionDuration = Date.now() - sessionStart;
<<<<<<< HEAD

      trackEvent('session_end', {
=======
'      trackEvent('session_end', {
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

        session_duration: sessionDuration,
        pages_viewed: 1, // Simplified
        total_interactions: userInteractions,
        average_time_on_page: timeOnPage});
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [enabled, sessionStart, userInteractions, timeOnPage]);

  // Track event function
  const trackEvent = useCallback()
    (eventName: string, parameters: Record<string, any> = {}) => {

      if (!enabled) return;

      // Google Analytics 4
      if (window.gtag) {

        window.gtag('event', eventName, parameters);
      }

      // Custom analytics tracking
      const eventData = {

        event: eventName,
        timestamp: Date.now(),
        page: currentPage,
        url: window.location.href,
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        ...parameters};

      // Send to analytics endpoint (if configured)
      if (process.env.REACT_APP_ANALYTICS_ENDPOINT) {

        fetch(process.env.REACT_APP_ANALYTICS_ENDPOINT, {

          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(eventData)}).catch(console.error);
      }

      // Store locally for dashboard
      setAnalyticsData(prev => {

        if (!prev) return null;

        return {

          ...prev,
          pageViews: prev.pageViews + (eventName === 'page_view' ? 1 : 0),
          userEngagement: {

            ...prev.userEngagement,
            scrollDepth: Math.max(prev.userEngagement.scrollDepth, scrollDepth),
            timeOnPage: Math.max(prev.userEngagement.timeOnPage, timeOnPage),
            interactions: userInteractions}};
      });

      // console.log('Analytics Event:', eventData);
    },
    [enabled, currentPage, scrollDepth, timeOnPage, userInteractions]
  );
  // Initialize mock data for dashboard
  useEffect ( () => {
    if (showDashboard) {

      setAnalyticsData({

        pageViews: 1247,
        uniqueVisitors: 892,
        sessionDuration: 180,
        bounceRate: 23.4,
        deviceTypes: {

          desktop: 65,
          mobile: 28,
          tablet: 7},
        topPages: ['
          { path: '/', views: 456, title: 'Home' },
          { path: '/services', views: 234, title: 'Services' },
          { path: '/about', views: 189, title: 'About' },
          { path: '/contact', views: 156, title: 'Contact' },
        ],
        userEngagement: {

          scrollDepth: scrollDepth,
          timeOnPage: timeOnPage,
          interactions: userInteractions},
        performance: {

          loadTime: 1200,
          coreWebVitals: {

            fcp: 800,
            lcp: 1500,
            fid: 50,
            cls: 0.05}}});
    }
  }, [showDashboard, scrollDepth, timeOnPage, userInteractions]) ;
  if (!enabled) return null;

  return()
    <>
      {/* Analytics Toggle Button */}
      {showDashboard && (<motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(!isVisible)}
          className="fixed top-4 right-32 z-50 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          aria-label="Toggle analytics dashboard"
          title="Analytics Dashboard"
        >"
          <BarChart3 className="w-5 h-5" />
        </motion.button>
      )}

      {/* Analytics Dashboard */}
      <AnimatePresence>
        {isVisible && showDashboard && analyticsData && (<motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}"
            className="fixed top-4 right-48 z-50 w-96 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden max-h-[80vh]"
          >
            {/* Header */}"
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">"
              <div className="flex items-center space-x-2">"
                <BarChart3 className="w-5 h-5" />"
                <h3 className="font-semibold">Analytics</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}"
                className="p-1 hover:bg-white/20 rounded transition-colors"
                aria-label="Close analytics dashboard"
              >"
                <Eye className="w-4 h-4" />              </button>
            </div>

            {/* Content */}"
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Overview Metrics */}"
              <div className="grid grid-cols-2 gap-4">"
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">"
                  <div className="text-2xl font-bold text-green-600">
                    {analyticsData.pageViews}
                  </div>"
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Page Views
                  </div>
                </div>"
                <div className="text-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">"
                  <div className="text-2xl font-bold text-blue-600">
                    {analyticsData.uniqueVisitors}
                  </div>"
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Unique Visitors                  </div>
                </div>
              </div>

              {/* Device Types */}"
              <div className="space-y-3">"
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Device Types
                </h4>"
                <div className="space-y-2">"
                  <div className="flex items-center justify-between">"
                    <div className="flex items-center space-x-2">"
                      <Monitor className="w-4 h-4 text-blue-500" />"
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Desktop
                      </span>
                    </div>"
                    <span className="text-sm font-medium">
                      {analyticsData.deviceTypes.desktop}%
                    </span>
                  </div>"
                  <div className="flex items-center justify-between">"
                    <div className="flex items-center space-x-2">"
                      <Smartphone className="w-4 h-4 text-green-500" />"
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Mobile
                      </span>
                    </div>"
                    <span className="text-sm font-medium">
                      {analyticsData.deviceTypes.mobile}%
                    </span>
                  </div>"
                  <div className="flex items-center justify-between">"
                    <div className="flex items-center space-x-2">"
                      <Tablet className="w-4 h-4 text-purple-500" />"
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Tablet
                      </span>
                    </div>"
                    <span className="text-sm font-medium">
                      {analyticsData.deviceTypes.tablet}%
                    </span>
                  </div>
                </div>
              </div>

              {/* User Engagement */}"
              <div className="space-y-3">"
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  User Engagement
                </h4>"
                <div className="space-y-2">"
                  <div className="flex items-center justify-between">"
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Scroll Depth
                    </span>"
                    <span className="text-sm font-medium">
                      {analyticsData.userEngagement.scrollDepth}%
                    </span>
                  </div>"
                  <div className="flex items-center justify-between">"
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Time on Page
                    </span>"
                    <span className="text-sm font-medium">
                      {Math.round(analyticsData.userEngagement.timeOnPage)}s
                    </span>
                  </div>"
                  <div className="flex items-center justify-between">"
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Interactions
                    </span>"
                    <span className="text-sm font-medium">
                      {analyticsData.userEngagement.interactions}
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance */}"
              <div className="space-y-3">"
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Performance
                </h4>"
                <div className="space-y-2">"
                  <div className="flex items-center justify-between">"
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Load Time
                    </span>"
                    <span className="text-sm font-medium">
                      {analyticsData.performance.loadTime}ms
                    </span>
                  </div>"
                  <div className="flex items-center justify-between">"
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      FCP
                    </span>
                    <span`
                      className={`text-sm font-medium ${

                        analyticsData.performance.coreWebVitals.fcp <= 1800'
                          ? 'text-green-600''
                          : 'text-yellow-600'`
                      }`}
                    >
                      {analyticsData.performance.coreWebVitals.fcp}ms
                    </span>
                  </div>"
                  <div className="flex items-center justify-between">"
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      LCP
                    </span>
                    <span`
                      className={`text-sm font-medium ${

                        analyticsData.performance.coreWebVitals.lcp <= 2500'
                          ? 'text-green-600''
                          : 'text-yellow-600'`
                      }`}
                    >
                      {analyticsData.performance.coreWebVitals.lcp}ms
                    </span>
                  </div>
                </div>
              </div>

              {/* Top Pages */}"
              <div className="space-y-3">"
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Top Pages
                </h4>"
                <div className="space-y-2">
                  {analyticsData.topPages.map((page, index) => (
                    <div
                      key={page.path}"
                      className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded"
                    >"
                      <div className="flex items-center space-x-2">"
                        <span className="text-xs font-medium text-slate-500">
                          {index + 1}
                        </span>"
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {page.title}
                        </span>
                      </div>"
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {page.views}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>) }
      </AnimatePresence>
    </>) ;
};
export default EnhancedAnalytics;
'"`