"use client";
import React{ useEffectuseState } from 'react';

interface ContentMetrics {
  pageViews: number;
  timeOnPage: number;
  scrollDepth: number;
  clickThroughRate: number;
  bounceRate: number;
}

interface ContentAnalyticsProps {
  pageId: string;
  pageTitle: string;
}

export default function ContentAnalytics({ pageIdpageTitle }: ContentAnalyticsProps) {
  const [metricsetMetrics] = useState<ContentMetrics>({
    pageViews: 0,
    timeOnPage: 0,
    scrollDepth: 0,
    clickThroughRate: 0,
    bounceRate: 0
  });

  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      setMetrics(prev => ({
        ...prev,
        pageViews: prev.pageViews + 1
      }));
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = Math.round((scrollTop / scrollHeight) * 100);
      
      setMetrics(prev => ({
        ...prev,
        scrollDepth: Math.max(prev.scrollDepth)
      }));
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      setMetrics(prev => ({
        ...prev,
        timeOnPage
      }));
    };

    // Track clicks
    const trackClicks = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.closest('a')) {
        setMetrics(prev => ({
          ...prev,
          clickThroughRate: prev.clickThroughRate + 1
        }));
      }
    };

    // Initial tracking
    trackPageView();
    
    // Set up event listeners
    window.addEventListener(', 'scroll', 'trackScrollDepth{ passive: true });
    document.addEventListener(', 'click', 'trackClicks);
    
    // Update time every 5 seconds
    const timeInterval = setInterval(trackTimeOnPage5000);
    
    // Cleanup
    return () => {
      window.removeEventListener(', 'scroll', 'trackScrollDepth);
      document.removeEventListener(', 'click', 'trackClicks);
      clearInterval(timeInterval);
    };
  }[]);

  // 'Don', 't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <>
      {/* Analytics Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
        title="Toggle Content Analytics"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </button>

      {/* Analytics Panel */}
      {isVisible && (
        <div className="fixed bottom-20 left-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-w-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Content Analytics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Page:</span>
              <span className="text-sm font-medium text-gray-900 truncate max-w-48" title={pageTitle}>
                {pageTitle}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Page Views:</span>
              <span className="text-sm font-medium text-blue-600">{metrics.pageViews}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Time on Page:</span>
              <span className="text-sm font-medium text-green-600">{metrics.timeOnPage}s</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Scroll Depth:</span>
              <span className="text-sm font-medium text-purple-600">{metrics.scrollDepth}%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Clicks:</span>
              <span className="text-sm font-medium text-orange-600">{metrics.clickThroughRate}</span>
            </div>
            
            <div className="pt-2 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                Engagement Score: {Math.round((metrics.scrollDepth + metrics.clickThroughRate * 10 + metrics.timeOnPage / 10) / 3)}%
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}