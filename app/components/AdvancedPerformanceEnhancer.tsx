import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';


  // Performance optimizations
  const applyOptimizations = useCallback(() => {
    if (typeof window === 'undefined' || !enableOptimizations) return;

    try {
      // Preload critical resources
      const criticalResources = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/images/hero-bg.jpg', as: 'image' },
        { href: '/images/logo.png', as: 'image' },
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        });

      // Optimize fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preconnect';
      fontLink.href = 'https://fonts.googleapis.com';
      document.head.appendChild(fontLink);

      const fontLink2 = document.createElement('link');
      fontLink2.rel = 'preconnect';
      fontLink2.href = 'https://fonts.gstatic.com';
      fontLink2.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink2);

      // Enable service worker caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker registration failed, continue without it
        });
      }

      setIsOptimized(true);

  // Apply optimizations on mount
  useEffect(() => {
    applyOptimizations();
  }, [applyOptimizations]);

  // Start performance monitoring
  useEffect(() => {
    if (enableMonitoring) {
      measurePerformance();
    }, [measurePerformance, enableMonitoring]);

  // Log performance metrics for debugging
  useEffect(() => {
    if (enableMonitoring && Object.values(metrics).some(value => value !== null)) {

  return (
    <div className="min-h-screen bg-white">
        {children}
      {enableMonitoring && (
        <div className="container mx-auto px-4">
          
        </div>
      </div></div>
      </div></div><div>
          LCP: {metrics.lcp?.toFixed(2)}ms
        </div></div>
          <div>FID: {metrics.fid?.toFixed(2)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(4)}</div>
          <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
          <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
          <div>Memory: {metrics.memoryUsage?.toFixed(2)}MB</div>
          <div>Connection: {metrics.connectionSpeed}</div>
          <div>Optimized: {isOptimized ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
};

export default function AdvancedPerformanceEnhancerPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedPerformanceEnhancer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedperformanceenhancer services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our AdvancedPerformanceEnhancer Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive advancedperformanceenhancer solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your advancedperformanceenhancer needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored advancedperformanceenhancer solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your advancedperformanceenhancer services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}