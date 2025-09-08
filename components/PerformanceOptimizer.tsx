React, { useEffect } from
  'react';
import Head from
  'next/head';''
  'interface PerformanceOptimizerProps {preloadImages?: string[];'preloadFonts?: string[];
  criticalCSS?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
preloadImages = [], preloadFonts = [,
  https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'  ], criticalCSS,'
  }) => {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !==
  'undefined' &&
  'performance' in window) {
  '      // Monitor Core Web Vitals'      const observer = new PerformanceObserver((list) => {;
        for (const entry of list.getEntries()) {
if (entry.entryType ===
  'largest-contentful-paint') {
  '            console.log('LCP:  , entry.startTime);, }
  '          if (entry.entryType === 'first-input
  ') {'            console.log(
  'FID:  , entry.processingStart - entry.startTime);, '
  }
  '          if (entry.entryType === 'layout-shift
  ') {'            if (!(entry as any).hadRecentInput) {
  '              console.log('CLS:  , (entry as any).value);, }
  '          }}'
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect();
      };    }
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect()
      }
  }, [measurePerformance]);
  const getPerformanceScore = (): number => {
    let score = 100;
    if (metrics.firstContentfulPaint > 1800) score -= 20;
    if (metrics.largestContentfulPaint > 2500) score -= 25;
    if (metrics.loadTime > 3000) score -= 15;
    if (metrics.timeToInteractive > 3500) score -= 20;
    return Math.max(0, score);  }
    return Math.max(0, score)
  }
  const getPerformanceGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';  };    return 'F'
  }
  const performanceScore = getPerformanceScore();
  const performanceGrade = getPerformanceGrade(performanceScore);
    >
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-xl font-bold text-white flex items-center gap-2'>
          <Gauge className='w-5 h-5 text-cyan-400' />          Performance Optimizer
        </h3>
        <button
          onClick={() => setShowMetrics(!showMetrics)}
          className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'        >  return (
    <div className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Gauge className="w-5 h-5 text-cyan-400" />
        </h3>
        <button
          onClick={() => setShowMetrics(!showMetrics)}
          className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300'          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          {showMetrics ? 'Hide' : 'Show'} Metrics
        </button>
      </div>
      {/* Performance Score */}
      <div className='mb-6'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-white/70'>Performance Score</span>
          <span className='text-2xl font-bold text-cyan-400'>
            {performanceGrade}
          </span>
        </div>
        <div className='w-full bg-white/10 rounded-full h-3'>
          <motion.div
            className='h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full'
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
        <div className='text-right mt-1'>
          <span className='text-sm text-white/60'>{performanceScore}/100</span>        </div>        </div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <motion.div
            className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${performanceScore}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="text-right mt-1">
          <span className="text-sm text-white/60">{performanceScore}/100</span>
        </div>
      </div>
      {/* Metrics Display */}
      {showMetrics && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Clock className='w-6 h-6 text-blue-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.loadTime)}ms
            </div>
            <div className='text-xs text-white/60'>Load Time</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Activity className='w-6 h-6 text-green-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.firstContentfulPaint)}ms
            </div>
            <div className='text-xs text-white/60'>FCP</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <TrendingUp className='w-6 h-6 text-purple-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.largestContentfulPaint)}ms
            </div>
            <div className='text-xs text-white/60'>LCP</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Cpu className='w-6 h-6 text-yellow-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.timeToInteractive)}ms
            </div>
            <div className='text-xs text-white/60'>TTI</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Database className='w-6 h-6 text-orange-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </div>
            <div className='text-xs text-white/60'>CLS</div>
          </div>
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <Network className='w-6 h-6 text-red-400 mx-auto mb-2' />
            <div className='text-lg font-bold text-white'>
              {Math.round(metrics.firstInputDelay)}ms
            </div>
            <div className='text-xs text-white/60'>FID</div>          </div>
          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <Network className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="text-lg font-bold text-white">{Math.round(metrics.firstInputDelay)}ms</div>
            <div className="text-xs text-white/60">FID</div>
        </motion.div>
      )}
      {/* Optimization Controls */}
      <div className='space-y-3'>        <button      <div className="space-y-3">
        <button
          onClick={runAllOptimizations}
          disabled={isOptimizing}
          className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
            isOptimizing
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 hover:scale-105'
          } flex items-center justify-center gap-2`}>{isOptimizing ? (
            <>
              <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />              <span>Optimizing...</span>
            </>
          ) : (
            <>
              <Zap className='w-4 h-4' />              <span>Run All Optimizations</span>              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Optimizing...</span>
            </>
          ) : (
            <>
              <Zap className='w-4 h-4' />              <Zap className="w-4 h-4" />
              <span>Run All Optimizations</span>
            </>
          )}
        </button>
        {optimizationStatus !== 'idle' && (
          <div className='text-center p-3 rounded-lg bg-white/5 border border-white/10'>
            <div className='text-sm text-white/80'>{optimizationStatus}</div>          </div>          <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="text-sm text-white/80">{optimizationStatus}</div>
          </div>
        )}
      </div>
      {/* Performance Tips */}
      <div className='mt-6 pt-4 border-t border-white/10'>
        <h4 className='text-sm font-semibold text-white/80 mb-3'>
          Performance Tips
        </h4>
        <ul className='text-xs text-white/60 space-y-1'>          <li>• Use WebP images for better compression</li>      <div className="mt-6 pt-4 border-t border-white/10">
        <h4 className="text-sm font-semibold text-white/80 mb-3">Performance Tips</h4>
        <ul className="text-xs text-white/60 space-y-1">
          <li>• Use WebP images for better compression</li>
          <li>• Implement lazy loading for images</li>
          <li>• Minimize CSS and JavaScript bundles</li>
          <li>• Use CDN for static assets</li>
          <li>• Enable gzip compression</li>
        </ul>
      </div>
    </div>
  );
};export default PerformanceOptimizer;}
      // Preload critical resources;
      preloadImages.forEach(image => {addResourceHint(image, 'image');
'      });';
      preloadFonts.forEach(font => {addResourceHint(font, 'style');
'      });'    }}, [preloadImages, preloadFonts]);
  return (;
    <Head>;
      {/* Critical CSS inlined for above-the-fold content */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}
      
      {/* Preload critical resources */}
      {preloadImages.map((image, index) => (
        <link
key={`preload-image-${index}`}`          rel="preload""          as="image""          href={image}"        />))}"
      
      {preloadFonts.map((font, index) => (
        <link
key={`preload-font-${index}`}`          rel="preload""          as="style""          href={font}"          onLoad={() => {"
            const link = document.querySelector(`link[href="${font}"]`);"            if (link) {"              (link as HTMLLinkElement).rel =, stylesheet';'            }
  '          }}`        />'))}
      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />"      "      {/* Service Worker registration */}
      <script
        dangerouslySetInnerHTML={{
__html: ``            if ('serviceWorker'
  ' in navigator) {'              window.addEventListener(
  'load, function() {, '
  navigator.serviceWorker.register('/sw.js'
  ')'                  .then(function(registration) {
  '                    console.log('SW registered:  , registration);, })
  '                  .catch(function(registrationError) {'
                    console.log('SW registration failed:  , registrationError);'                  });'              });'}
          ``        }}/>
    </Head>
  );
};

export default PerformanceOptimizer;
