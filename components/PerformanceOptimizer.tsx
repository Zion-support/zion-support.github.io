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

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint, 'first-input
  ', 'layout-shift
  '] });'      } catch (e) {
  '        // Fallback for browsers that don&apos;t support all entry types''        console.log('
  'Performance monitoring not fully supported');'      }'
  ''
      // Resource hints for better performance
      const addResourceHint = (href: string, as: string, type?: string) => {;
        const link = document.createElement('link'
  ');'        link.rel =
  'preload';'        link.href = href;'        link.as = as;if (type) link.type = type;document.head.appendChild(link);
      };

      // Preload critical resources
      preloadImages.forEach(image => {
addResourceHint(image, 'image');'      });'
      preloadFonts.forEach(font => {
        addResourceHint(font, 'style');'      });'    }}, [preloadImages, preloadFonts]);return (
    <Head>
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
