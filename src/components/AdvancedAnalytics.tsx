<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Target } from 'lucide-react';
const services = [];


  "};    pageViews: number;    clicks: number;
    scrolls: number;
    formSubmissions: number;
    errors: number;
    startTime: number}>({
    pageViews: 1,
    clicks: 0,
    scrolls: 0,
    formSubmissions: 0,
    errors: 0,
    startTime: Dat e.now () }
    );
  // Generate unique session ID
  useEffect(() => {
  // TODO: Add dependencies if needed
  return () => {
    // Cleanup function
  };
}, []);, []);
    ;
    setUserSession(sessionId);
    localStorage.setItem('analytics_session_id', sessionId)}, []);
;
  // Track page views;
  ;
    setCurrentPage(path) ;
    trackingRef.current.pageViews++;
;
    const _pageViewData = {;
      "sessionId": "userSessio n",;
      path,;
      "timestamp": "new Date () .toISOString () ",;
      "referrer": "documen t.referrer",;
      "userAgent": "navigato r.userAgent",;
      "screenResolution": "`${screen.width"}x${screen.height}`,;
      "viewport": "`${window.innerWidth"}x${window.innerHeight}`,;
      "language": "navigato r.language",;
      "timezone": "Int l.DateTimeFormat () .resolvedOptions () .timeZone;
    "};
;
    // Send to analytics service;
    this.sendAnalyticsData('pageview', pageViewData) ;
    // Update local state;
    setAnalyticsData(prev => ({;
      ...prev,;
      "pageViews": "pre v.pageViews + 1;
    "}) ) }, [enabled, userSession]) ;
;
  // Track user interactions';
    // Update tracking ref;
    switch(type) {;
      case 'click': ";
        trackingRef.current.clicks++;
        break;
      case 'scroll':;
        trackingRef.current.scrolls++;
        break;
      case 'form':;
        trackingRef.current.formSubmissions++;
        break;
      case 'error':;
        trackingRef.current.errors++;
        break"}
;
    // Send to analytics service';
    this.sendAnalyticsData('interaction', interactionData);
;
    // Update local state;
    setAnalyticsData(prev => ({;
      ...prev,;
      "interactions": "{;
        ...prev.interactions",;
        [type === 'form' ? 'formSubmissions' : "type === 'error' ? 'errors' : `${type"}s`]: "prev.interactions[type === 'form' ? 'formSubmissions' : type === 'error' ? 'errors' : `${type"}s`] + 1;
      }
    }) ) }, [enabled, userSession, currentPage]) ;
;
  // Track performance metrics;
  ;
    // Use Performance API to get metrics';
    if('performance' in window) {;
      const _navigation = performance.getEntriesByType('navigation') [0] as PerformanceNavigationTiming;
      const _paint = performance.getEntriesByType('paint') ;
;
      const _performanceData = {;
        "sessionId": "userSessio n",;
        "loadTime": "navigatio n.loadEventEnd - navigation.loadEventStart",;
        "firstPaint": "pain t.find(entry => entry.name === 'first - paint') ?.startTime || 0",;
        "firstContentfulPaint": "pain t.find(entry => entry.name === 'first - contentful - paint') ?.startTime || 0",;
        "largestContentfulPaint": "0", // Will be updated by observer;
"timestamp": "new Date () .toISOString () "};
// Add to heatmap data;
"timestamp": "new Date () .toISOString () "};      // Add to heatmap data;
if(enableHeatmap) {;
        setHeatmapData(prev => [...prev, { "x": "positio n.x", "y": "positio n.y", "type": 'click' }])}    };
;
    // Setup scroll tracking;
    let "scrollTimeout": "NodeJ S.Timeout;
    const _handleScroll = ("props": any) => {;
      clearTimeout(scrollTimeout) ;
      scrollTimeout = setTimeout(() => {;
        trackInteraction('scroll'", {;
          "scrollY": "windo w.scrollY",;
          "scrollHeight": "documen t.documentElement.scrollHeight;
        "}) ;      }
    );
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] }
    );
      return () => lcpObserver.disconnect () } catch(error) {

      // }
  }, [enabled]) ;
;
  // Send analytics data to service;
  ;
    try {;
      ;
      // Send to analytics endpoint';
      await fetch('/api/analytics', {;
        "method": 'POST',;
        "headers": "{;
          'Content-Type': 'application/json'"},;
        "body": "JSO N.stringify(analyticsPayload)"})} catch(error) {;
      // }
  }, [trackingId, userSession]) ;
  // Generate mock data for demonstration;
  useEffect(() => {;
  // "TODO": "Add dependencies if needed;
  return () => {;
    // Cleanup function;
  "};
}, []);, []);
    if(!enabled) return;
;
    // Simulate data collection;
    const "mockData": "AnalyticsDat a = {;
      "pageViews": Mat h.floor(Math.random() * 1000) + 500",;
      "uniqueVisitors": "Mat h.floor(Math.random() * 500) + 200",;
      "sessionDuration": "Mat h.floor(Math.random() * 300) + 120",;
      "bounceRate": "Mat h.random() * 40 + 20",;
      "conversionRate": "Mat h.random() * 5 + 1",;
      "topPages": "[';
        { "path": '/'", "views": "Mat h.floor(Math.random() * 500) + 200 "},;
        { "path": '/services', "views": "Mat h.floor(Math.random() * 300) + 150 "},;
        { "path": '/about', "views": "Mat h.floor(Math.random() * 200) + 100 "},;
        { "path": '/contact', "views": "Mat h.floor(Math.random() * 150) + 80 "}
      ],;
      "userAgents": "[';
        { "device": 'Desktop'", "count": "Mat h.floor(Math.random() * 400) + 200 "},;
        { "device": 'Mobile', "count": "Mat h.floor(Math.random() * 300) + 150 "},;
        { "device": 'Tablet', "count": "Mat h.floor(Math.random() * 100) + 50 "}
      ],;
      "locations": "[';
        { "country": 'United States'", "count": "Mat h.floor(Math.random() * 300) + 150 "},;
        { "country": 'United Kingdom', "count": "Mat h.floor(Math.random() * 150) + 80 "},;
        { "country": 'Canada', "count": "Mat h.floor(Math.random() * 100) + 50 "},;
        { "country": 'Germany', "count": "Mat h.floor(Math.random() * 80) + 40 "}
      ],;
      "performance": "{;
        "loadTime": Mat h.random() * 2000 + 500",;
        "firstPaint": "Mat h.random() * 1000 + 200",;
        "firstContentfulPaint": "Mat h.random() * 1500 + 300",;
        "largestContentfulPaint": "Mat h.random() * 2000 + 500;
      "},;
      "interactions": "{;
        "clicks": Mat h.floor(Math.random() * 500) + 200",;
        "scrolls": "Mat h.floor(Math.random() * 1000) + 500",;
        "formSubmissions": "Mat h.floor(Math.random() * 50) + 20",;
        "errors": "Mat h.floor(Math.random() * 10) + 2;
      "}
    };
;
    setAnalyticsData(mockData) }, [enabled]) ;
  if(!enabled) return null;
;
  return ();
    <>;
      {/* Analytics Toggle Button */}
      <motion.button;
        onClick={ () => setIsOpen(!isOpen) }
        className="fixed bottom - 20 left - 4 z - 50 p - 3 bg-gradient - to - r from - blue - 500 to - purple - 500 rounded-full shadow-lg "hover": "shado w-xl transition - all duration - 300 text-white";
        whileHover={{ "scale": 1.1 "}}
        whileTap={{ "scale": "0.9 "}}";
        ;
        aria-expanded={isOpen}";
        aria-controls="analytics-panel";
      >";
        <BarChart3 className="w-6 h-6"  />;
      </motion.button>;
      {/* Analytics Panel */}
      <AnimatePresence>;
        {isOpen && (<motion.div;
            initial={{ "opacity": "0", "x": "-100 "}}
            animate={{ "opacity": "1", "x": "0 "}}
            exit={{ "opacity": "0", "x": "-100 "}}";
            className="fixed left-4 bottom-32 z-50 w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 max-h-[80vh] overflow-y-auto";
            id="analytics-panel";
            role="dialog";
            aria-labelledby="analytics-title";
          >";
            <div className="flex items-center justify-between mb-4">";
              <h2 id="analytics-title" className="text-lg font-semibold text-gray-800 flex items-center gap-2">";
                <BarChart3 className="w-5 h-5 text-blue-500"  />;
                Analytics Dashboard;
              </h2>;
              <button;
                onClick={() => setIsOpen(false)}";
                className="text-gray-400 "hover": "tex t-gray-600 transition-colors";
                ;
              >";
                <X className="w-5 h-5"   />;
              </button>;
            </div>;
            {/* Key Metrics */"}";
            <div className="grid grid-cols-2 gap-4 mb-6">";
              <div className="bg-blue-50 p-3 rounded-lg">";
                <div className="flex items-center gap-2 mb-1">";
                  <Eye className="w-4 h-4 text-blue-500"   />"                  <span className="text-xs text-blue-600">Page Views</span>;
                </div>";
                <div className="text-lg font-bold text-blue-700">{analyticsData.pageViews.toLocaleString()}</div>;
              </div>;
              <div className="bg-green - 50 p - 3 rounded-lg">;
                <div className="flex items - center gap-2 mb-1">;
                  <Users className="w-4 h-4 text-green -500"  />;
                  <span className="text-xs text-green -600">Visitors</span>;
                </div>;
                <div className="text-lg font - bold text-green -700">{analyticsData.uniqueVisitors.toLocaleString () }</div>;
              </div>;
              <div className="bg-purple - 50 p - 3 rounded-lg">;
                <div className="flex items - center gap-2 mb-1">;
                  <Clock className="w-4 h-4 text-purple -500"  />;
                  <span className="text-xs text-purple -600">Session</span>;
                </div>;
                <div className="text-lg font - bold text-purple -700">{Math.round(analyticsData.sessionDuration) }s</div>;
              </div>;
              <div className="bg-orange - 50 p - 3 rounded-lg">;
                <div className="flex items - center gap-2 mb-1">;
                  <Target className="w-4 h-4 text-orange -500"  />;
                  <span className="text-xs text-orange -600">Conversion</span>;
                </div>;
                <div className="text-lg font - bold text-orange -700">{analyticsData.conversionRate.toFixed(1) }%</div>              </div>;
            </div>;
            {/* Performance Metrics */}";
            <div className="mb-6">";
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">";
                <Zap className="w-4 h-4 text-yellow-500"   />                Performance;
              </h3>";
              <div className="space-y-2 text-xs">";
                <div className="flex justify-between">;
                  <span>Load "Time": "</span>";
                  <span className="font-mono">{Math.round(analyticsData.performance.loadTime)"}ms</span>;
                </div>";
                <div className="flex justify-between">;
                  <span>First "Paint": "</span>";
                  <span className="font-mono">{Math.round(analyticsData.performance.firstPaint)"}ms</span>;
                </div>";
                <div className="flex justify-between">;
                  <span>"FCP": "</span>";
                  <span className="font-mono">{Math.round(analyticsData.performance.firstContentfulPaint)"}ms</span>;
                </div>";
                <div className="flex justify-between">;
                  <span>"LCP": "</span>";
                  <span className="font-mono">{Math.round(analyticsData.performance.largestContentfulPaint)"}ms</span>;
                </div>;
              </div>;
            </div>;
            {/* Top Pages */}";
            <div className="mb-6">";
              <h3 className="text-sm font-medium text-gray-700 mb-3">Top Pages</h3>";
              <div className="space-y-2">;
                {analyticsData.topPages.map((page, index) => (";
                  <div key={index} className="flex justify-between items-center text-xs">";
                    <span className="truncate flex-1">{page.path}</span>";
                    <span className="font-mono text-gray-600">{page.views}</span>;
                  </div>;            {/* Performance Metrics */}"
            <div className="mb-6">"
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">"
                <Zap className="w-4 h-4 text-yellow-500"   />                Performance
              "
              <div className="space-y-2 text-xs">"
                <div className="flex justify-between">
                  <span>Load Time:</span>"
                  <span className="font-mono">{Math.round(analyticsData.performance.loadTime)}ms</span>
                </div>"
                <div className="flex justify-between">
                  <span>First Paint:</span>"
                  <span className="font-mono">{Math.round(analyticsData.performance.firstPaint)}ms</span>
                </div>"
                <div className="flex justify-between">
                  <span>FCP:</span>"
                  <span className="font-mono">{Math.round(analyticsData.performance.firstContentfulPaint)}ms</span>
                </div>"
                <div className="flex justify-between">
                  <span>LCP:</span>"
                  <span className="font-mono">{Math.round(analyticsData.performance.largestContentfulPaint)}ms</span>
                </div>
              </div>
            </div>
            {/* Top Pages */}"
            <div className="mb-6">"
              <h3 className="text-sm font-medium text-gray-700 mb-3">Top Pages"
              <div className="space-y-2">
                {analyticsData.topPages.map((page, index) => ("
                  <div key={index} className="flex justify-between items-center text-xs">"
                    <span className="truncate flex-1">{page.path}</span>"
                    <span className="font-mono text-gray-600">{page.views}</span>
                  </div>
                ))}
              </div>;
            </div>;
            {/* Device Distribution */}";
            <div className="mb-6">";
              <h3 className="text-sm font-medium text-gray-700 mb-3">Device Distribution</h3>";
              <div className="space-y-2">;
                {analyticsData.userAgents.map((device, index) => (";
                  <div key={index} className="flex items-center gap-2 text-xs">'";
                    {device.device === 'Desktop' && <Monitor className="w-3 h-3 text-blue-500"   />}'";
                    {device.device === 'Mobile' && <Smartphone className="w-3 h-3 text-green-500"   />}'";
                    {device.device === 'Tablet' && <Tablet className="w-3 h-3 text-purple-500"   />}";
                    <span className="flex-1">{device.device}</span>"                    <span className="font-mono text-gray-600">{device.count}</span>;
                  </div>;            {/* Device Distribution */}"
            <div className="mb-6">"
              <h3 className="text-sm font-medium text-gray-700 mb-3">Device Distribution"
              <div className="space-y-2">
                {analyticsData.userAgents.map((device, index) => ("
                  <div key={index} className="flex items-center gap-2 text-xs">'"
                    {device.device === 'Desktop' && <Monitor className="w-3 h-3 text-blue-500"   />}'"
                    {device.device === 'Mobile' && <Smartphone className="w-3 h-3 text-green-500"   />}'"
                    {device.device === 'Tablet' && <Tablet className="w-3 h-3 text-purple-500"   />}"
                    <span className="flex-1">{device.device}</span>"                    <span className="font-mono text-gray-600">{device.count}</span>
                  </div>
                ))}
              </div>;
            </div>;
            {/* Status Indicators */}";
            <div className="pt-4 border-t border-gray-200">";
              <div className="flex items-center justify-between text-xs text-gray-500">";
                <div className="flex items-center gap-2">'`;
                  <div className={`w-2 h-2 rounded-full ${isTracking ? 'bg-green-500' : 'bg-red-500'}`}  />;
                  <span>{isTracking ? 'Tracking Active' : 'Tracking Inactive'}</span>;
                </div>;
                <button;
                  onClick={() => window.location.reload()}";
                  className="text-blue-500 "hover": "tex t-blue-600";
                >";
                  <RefreshCw className="w-3 h-3"   />                </button>;
              </div>;
            </div>;
          </motion.div>) "}
      </AnimatePresence>;
    </>;
  )}}}}}}}}}}}}}'"`;
;,"});})";
;
</motion>;            {/* Status Indicators */}"
            <div className="pt-4 border-t border-gray-200">"
              <div className="flex items-center justify-between text-xs text-gray-500">"
                <div className="flex items-center gap-2">'`
                  <div className={`w-2 h-2 rounded-full ${isTracking ? 'bg-green-500' : 'bg-red-500'}`}  />
                  <span>{isTracking ? 'Tracking Active' : 'Tracking Inactive'}</span>
                </div>
                <button
                  onClick={() => window.location.reload()}"
                  className="text-blue-500 hover: tex t-blue-600"
                >"
                  <RefreshCw className="w-3 h-3"   />                </button>
              </div>
            </div>
          </motion.div>) }
      </AnimatePresence>
    </>
  )}}}}}}}}}}}}}'"`
;,"}
    );,})";
</motion>
</motion>

=======
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
export function AdvancedAnalytics() {
    const [analyticsData, setAnalyticsData] = useState({
        visitors: 0,
        conversions: 0,
        revenue: 0,
        bounceRate: 0,
        avgSessionDuration: 0,
        topPages[],
        trafficSources[],
        deviceTypes[]
    });
    const [timeRange, setTimeRange] = useState('7d');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate API call
        const fetchData = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setAnalyticsData({
                visitors: Math.floor(Math.random() * 10000) + 5000,
                conversions: Math.floor(Math.random() * 500) + 100,
                revenue: Math.floor(Math.random() * 50000) + 10000,
                bounceRate: Math.random() * 30 + 20,
                avgSessionDuration: Math.floor(Math.random() * 300) + 120,
                topPages[
                    { page: '/', views: Math.floor(Math.random() * 5000) + 2000 },
                    { page: '/services', views: Math.floor(Math.random() * 3000) + 1500 },
                    { page: '/contact', views: Math.floor(Math.random() * 2000) + 1000 },
                    { page: '/about', views: Math.floor(Math.random() * 1500) + 800 },
                    { page: '/pricing', views: Math.floor(Math.random() * 1000) + 500 }
                ],
                trafficSources[
                    { source: 'Organic Search', percentage: 45 },
                    { source: 'Direct', percentage: 25 },
                    { source: 'Social Media', percentage: 20 },
                    { source: 'Referral', percentage: 10 }
                ],
                deviceTypes[
                    { device: 'Desktop', percentage: 60 },
                    { device: 'Mobile', percentage: 35 },
                    { device: 'Tablet', percentage: 5 }
                ]
            });
            setIsLoading(false)};
        fetchData()}, [timeRange]);
    const formatNumber = (num) => {
        if (num >= 1000000)
            return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000)
            return (num / 1000).toFixed(1) + 'K';
        return num.toString()};
    const formatCurrency = (num) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(num)};
    if (isLoading) {
        return (<div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan"></div>
      </div>)}
    return (<div className="space-y-6 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zion-blue mb-4">
          Advanced Analytics Dashboard
        </h2>
        <p className="text-zion-slate-light text-lg">
          Real-time insights and performance metrics
        </p>
        
        {/* Time Range Selector */}
        <div className="flex justify-center mt-4 space-x-2">
          {['1d', '7d', '30d', '90d'].map((range) => (<button key={range} onClick={() => setTimeRange(range)} className={`px-4 py-2 rounded-lg transition-colors ${timeRange === range
                ? 'bg-zion-cyan text-white'
                : 'bg-zion-slate/10 text-zion-slate-light hover:bg-zion-slate/20'}`}>
              {range}
            </button>))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ delay: 0.1 }} className="p-6 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 border border-zion-blue/30 rounded-xl">
          <div className="text-2xl font-bold text-zion-blue">
            {formatNumber(analyticsData.visitors)}
          </div>
          <div className="text-zion-slate-light text-sm">Total Visitors</div>
          <div className="text-zion-cyan text-xs mt-2">+12.5% vs last period</div>
        </motion.div>

        <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ delay: 0.2 }} className="p-6 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-xl">
          <div className="text-2xl font-bold text-zion-purple">
            {formatNumber(analyticsData.conversions)}
          </div>
          <div className="text-zion-slate-light text-sm">Conversions</div>
          <div className="text-zion-cyan text-xs mt-2">+8.3% vs last period</div>
        </motion.div>

        <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ delay: 0.3 }} className="p-6 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-xl">
          <div className="text-2xl font-bold text-zion-cyan">
            {formatCurrency(analyticsData.revenue)}
          </div>
          <div className="text-zion-slate-light text-sm">Revenue</div>
          <div className="text-zion-cyan text-xs mt-2">+15.7% vs last period</div>
        </motion.div>

        <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ delay: 0.4 }} className="p-6 bg-gradient-to-br from-zion-slate/20 to-zion-blue/20 border border-zion-slate/30 rounded-xl">
          <div className="text-2xl font-bold text-zion-slate-light">
            {analyticsData.bounceRate.toFixed(1)}%
          </div>
          <div className="text-zion-slate-light text-sm">Bounce Rate</div>
          <div className="text-red-400 text-xs mt-2">-2.1% vs last period</div>
        </motion.div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <motion.div initial = {
  { opacity: 0,
  x: -20 

}} animate = {
  { opacity: 1,
  x: 0 

}} transition={{ delay: 0.5 }} className="p-6 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl">
          <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
            Top Pages
          </h3>
          <div className="space-y-3">
            {analyticsData.topPages.map((page, index) => (<div key={page.page} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${index === 0 ? 'bg-yellow-500 text-black' :
                index === 1 ? 'bg-gray-400 text-black' :
                    index === 2 ? 'bg-amber-600 text-white' : 'bg-zion-slate/20 text-zion-slate-light'}`}>
                    {index + 1}
                  </div>
                  <span className="text-zion-slate-light">{page.page}</span>
                </div>
                <span className="text-zion-cyan font-semibold">
                  {formatNumber(page.views)}
                </span>
              </div>))}
          </div>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div initial = {
  { opacity: 0,
  x: 20 

}} animate = {
  { opacity: 1,
  x: 0 

}} transition={{ delay: 0.6 }} className="p-6 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl">
          <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
            Traffic Sources
          </h3>
          <div className="space-y-4">
            {analyticsData.trafficSources.map((source) => (<div key={source.source}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zion-slate-light">{source.source}</span>
                  <span className="text-zion-cyan font-semibold">{source.percentage}%</span>
                </div>
                <div className="w-full bg-zion-slate/20 rounded-full h-2">
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-1000" style={{ width: `${source.percentage}%` }}></div>
                </div>
              </div>))}
          </div>
        </motion.div>
      </div>

      {/* Device Types */}
      <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ delay: 0.7 }} className="p-6 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl">
        <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
          Device Types
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analyticsData.deviceTypes.map((device) => (<div key={device.device} className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {device.percentage}%
              </div>
              <div className="text-zion-slate-light">{device.device}</div>
              <div className="mt-2">
                <div className="w-full bg-zion-slate/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-zion-blue to-zion-purple h-3 rounded-full transition-all duration-1000" style={{ width: `${device.percentage}%` }}></div>
                </div>
              </div>
            </div>))}
        </div>
      </motion.div>

      {/* Performance Insights */}
      <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ delay: 0.8 }} className="p-6 bg-gradient-to-r from-zion-blue/10 to-zion-purple/10 border border-zion-blue/20 rounded-xl">
        <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
          Performance Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-zion-cyan font-semibold mb-2">Optimization Opportunities</h4>
            <ul className="text-zion-slate text-sm space-y-1">
              <li>• Mobile conversion rate can be improved by 15%</li>
              <li>• Page load speed optimization needed for /services</li>
              <li>• A/B testing recommended for pricing page</li>
            </ul>
          </div>
          <div>
            <h4 className="text-zion-purple font-semibold mb-2">Key Achievements</h4>
            <ul className="text-zion-slate text-sm space-y-1">
              <li>• 25% increase in organic traffic</li>
              <li>• 18% improvement in session duration</li>
              <li>• 12% reduction in bounce rate</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>)}
>>>>>>> origin/clean-error-fixing-automation
