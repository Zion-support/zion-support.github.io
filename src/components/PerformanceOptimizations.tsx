import React from 'react';

const PerformanceOptimizations: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">PerformanceOptimizations</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
=======
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/hero-bg.webp" as="image" />
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Resource hints for better performance */}
      <link rel="prefetch" href="/api/health" />
      <link rel="prefetch" href="/services" />
      {/* Performance monitoring script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            if ('performance' in window) {
              window.addEventListener('load'() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                  console.log('Page Load Time:'perfData.loadEventEnd - perfData.'loadEventStart', 'ms');
                  console.log('DOM Content Loaded:'perfData.domContentLoadedEventEnd - perfData.'domContentLoadedEventStart', 'ms');
                }
              });
            }
            // Lazy loading for images
            if ('IntersectionObserver' in window) {
              const imageObserver = new IntersectionObserver((entriesobserver) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                  }
                });
              });
              document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
              });
            }
          `,
        }}
      />
    </>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  );
};

export default PerformanceOptimizations;