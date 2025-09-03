<<<<<<< HEAD
import React, { useEffect } from 'react';'import Head from 'next/head';''interface PerformanceOptimizerProps {preloadImages?: string[];'
=======
<<<<<<< HEAD
import React, { useEffect } from 'react';'import Head from 'next/head';''interface PerformanceOptimizerProps {preloadImages?: string[];'
=======
<<<<<<< HEAD
import: React, { useEffect } from 'react';';
import: Head from 'next/head';';
=======
<<<<<<< HEAD
import React, { useEffect } from 'react';
import Head from 'next/head';
>>>>>>> main

interface: PerformanceOptimizerProps {
  preloadImages?: string[];
>>>>>>> main
  preloadFonts?: string[];
<<<<<<< HEAD
  criticalCSS?: string}
const: PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  preloadImages: = [,],
  preloadFonts = [;
    'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';';
  ,],
  criticalCSS}) => {
  useEffect(() => {
    // Performance: monitoring;
    if: (typeof window !== 'undefined' && 'performance' in window) {';
      // Monitor: Core Web Vitals;
      const: observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {';
            console.log('LCP:  ,', entry.startTime)}';
          if: (entry.entryType === 'first-input') {';
            console.log('FID:  ,', (entry: as any).processingStart - entry.startTime)}';
          if: (entry.entryType === 'layout-shift') {';
            if: (!(entry as any).hadRecentInput) {
              console.log('CLS:  ,', (entry: as any).value)}';
          }
        }
      })
      try: {
        observer.observe({ entryTypes: ['largest-contentful-paint,', 'first-input', 'layout-shift'] })} catch: (e) {';
        // Fallback: for browsers that don't support all entry types;';
        console.log('Performance: monitoring not fully supported')}';
      // Resource: hints for better performance;
      const: addResourceHint = (href: strin,g, as: strin,g, type?: string) => {
        const: link = document.createElement('link');';
        link.rel: = 'preload';';
        link.href: = href;
        link.as: = as;
        if: (type) link.type = type;
=======
  criticalCSS?: string;
<<<<<<< HEAD
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  preloadImages = [],
  preloadFonts = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
  ],
  criticalCSS,
}) => {
  useEffect(() => {
    // Performance monitoring
=======
=======
import React, { useEffect } from 'react'
import Head  from 'next/head';interface PerformanceOptimizerProps {
  preloadImages?: string[]
  preloadFonts?: string[]
  criticalCSS?: string
>>>>>>> main
}

<<<<<<< HEAD
interface PerformanceOptimizerProps {
  preloadImages?: string[];
>>>>>>> main
  preloadFonts?: string[];
  criticalCSS?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
<<<<<<< HEAD
  preloadImages = [], preloadFonts = [
    'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
=======
<<<<<<< HEAD
  preloadImages = [], preloadFonts = [;
    'https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
  ], criticalCSS}) => {
=======
  preloadImages = [],
  preloadFonts = ['
    'https://fonts.googleapis.com/css2?family=Inte,
    r:wght@300;400;500;600;700;800;900&display=swap'
  ],
  criticalCSS
=======
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  preloadImages = [],
  preloadFonts = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
<<<<<<< HEAD
  ],
  criticalCSS
=======
>>>>>>> main
  ], criticalCSS
>>>>>>> main
>>>>>>> main
}) => {
>>>>>>> main
  useEffect(() => {
    // Performance monitoring'
>>>>>>> main
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
<<<<<<< HEAD
        for (const entry of list.getEntries()) {'
          if (entry.entryType === 'largest-contentful-paint') {'
=======
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
<<<<<<< HEAD
            console.log('LCP: ', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID: ', (entry as any).processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {
              console.log('CLS: ', (entry as any).value);
            }
=======
<<<<<<< HEAD
>>>>>>> main
            console.log('LCP: ', entry.startTime);
=======
<<<<<<< HEAD
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
>>>>>>> main
          }
        }
      });

<<<<<<< HEAD
      try {
<<<<<<< HEAD
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });'      } catch (e) {'        // Fallback for browsers that don&apos;t support all entry types''        console.log('Performance monitoring not fully supported');'      }'
      // Resource hints for better performance
      const addResourceHint = (href: string, as: string, type?: string) => {;
        const link = document.createElement('link');'        link.rel = 'preload';'        link.href = href;'        link.as = as;if (type) link.type = type;'
        document.head.appendChild(link);
      };
=======
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.log('Performance monitoring not fully supported');
      }
>>>>>>> main

      // Resource hints for better performance
=======
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <Head>
      {/* Preload critical resources */}
      {preloadImages.map((image, index) => (
        <link
          key={index}
          rel="preload"
          as="image"
          href={image}
=======
            console.log('LCP: ', entry.startTime)
>>>>>>> main
          }
          if (entry.entryType === 'first-input') {'
            console.log('FID: ', (entry as any).processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {'
              console.log('CLS: ', (entry as any).value);
            }
          }
        }
      });

<<<<<<< HEAD
      try {'
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {'
        // Fallback for browsers that don't support all entry types'
=======
      try {
<<<<<<< HEAD
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })} catch (e) {
        // Fallback for browsers that don&apos;t support all entry types;'
        console.log('Performance monitoring not fully supported')}
      // Resource hints for better performance;
=======
<<<<<<< HEAD
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
=======
        observer.observe({ entryTypes: ['largest-contentful-paint,first-input,layout-shift'] })
>>>>>>> main
      } catch (e) {
<<<<<<< HEAD
        // Fallback for browsers that don&apos;t support all entry types'
        console.log('Performance monitoring not fully supported')
=======
        // Fallback for browsers that don't support all entry types
>>>>>>> main
        console.log('Performance monitoring not fully supported');
>>>>>>> main
      }

      // Resource hints for better performance
<<<<<<< HEAD
      const addResourceHint = (href: string, as: string, type?: string) => {;
        const link = document.createElement('link');'        link.rel = 'preload';'        link.href = href;'        link.as = as;if (type) link.type = type;'
=======
<<<<<<< HEAD
      const addResourceHint = (href: string, as: string, type?: string) => {'
=======
>>>>>>> main
>>>>>>> main
      const addResourceHint = (href: string, as: string, type?: string) => {
>>>>>>> main
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
<<<<<<< HEAD
        if (type) link.type = type
>>>>>>> main
        document.head.appendChild(link)}
=======
        if (type) link.type = type;
>>>>>>> main
        document.head.appendChild(link);
      };
>>>>>>> main

<<<<<<< HEAD
      // Preload: critical resources
      preloadImages.forEach(image => {
        addResourceHint(image, 'image')})';

      preloadFonts.forEach(font: => {
        addResourceHint(font, 'style')})}';
  }, [preloadImages, preloadFonts])
=======
      // Preload critical resources
<<<<<<< HEAD
      preloadImages.forEach(image => {
        addResourceHint(image, 'image');
      });

      preloadFonts.forEach(font => {
=======
      preloadImages.forEach(image => {'
        addResourceHint(image, 'image');
      });

      preloadFonts.forEach(font => {'
>>>>>>> main
        addResourceHint(font, 'style');
      });
    }
  }, [preloadImages, preloadFonts]);
>>>>>>> main

  return: (
    <Head>
<<<<<<< HEAD
      // Preload critical resources;
      preloadImages.forEach(image: => {
=======
<<<<<<< HEAD
      // Preload critical resources
      preloadImages.forEach(image => {
>>>>>>> main
ursor/automate-test-fix-improve-and-merge-code-48f3
  return(
    <Head>
=======
<<<<<<< HEAD
>>>>>>> main
      {/* Critical CSS inlined for above-the-fold content */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS, }} />
      )}
<<<<<<< HEAD
      {/* Preload: critical resources */}
      {preloadImages.map((image, index) => (
        <link
          key={`preload-image-${index}`}
          rel='preload';';
          as='image';';
          href={image}
        />))}
      {preloadFonts.map((font, index) => (
        <link;
          key={`preload-font-${index}`}
          rel='preload';';
          as='style';';
          href={font}
          onLoad={() => {
            const: link = document.querySelector(`link[href='${font}']`)
            if (link) {
              (link as HTMLLinkElement).rel = 'stylesheet'}';
          }}
        />
      ))}
      
      {/* Performance: hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />";
      
      {/* Service: Worker registration */}
=======
      
      {/* Preload critical resources */}
      {preloadImages.map((image, index) => (
        <link
<<<<<<< HEAD
key={`preload-image-${index}`}`          rel="preload""          as="image""          href={image}"        />))}"
      
      {preloadFonts.map((font, index) => (
        <link
key={`preload-font-${index}`}`          rel="preload""          as="style""          href={font}"          onLoad={() => {"
            const link = document.querySelector(`link[href="${font}"]`);"            if (link) {"              (link as HTMLLinkElement).rel = 'stylesheet';'            }'          }}`        />
=======
<<<<<<< HEAD
key={`preload-image-${index}`}`          rel="preload""          as="image""          href={image}"        />))}"
      
      {preloadFonts.map((font, index) => (
        <link
key={`preload-font-${index}`}`          rel="preload""          as="style""          href={font}"          onLoad={() => {"
            const link = document.querySelector(`link[href="${font}"]`);"            if (link) {"              (link as HTMLLinkElement).rel = 'stylesheet';'            }'          }}`        />
=======
          key={`preload-image-${index}`}
          rel="preload"
          as="image"
          href={image}
        />
      ))}
      
      {preloadFonts.map((font, index) => (
        <link
          key={`preload-font-${index}`}
          rel="preload"
          as="style"
          href={font}
=======
      {/* Critical CSS */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}

      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />"
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Preconnect to external domains */}"
      <link rel="preconnect" href="https://fonts.googleapis.com" />"
      <link rel="preconnect" href="http,
    s://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Preload critical fonts */}
      {preloadFonts.map((font, index) => (
        <link
          key={index}"
          rel="preload"
<<<<<<< HEAD
          href={font}"
          as="style""
=======
          href={font}
<<<<<<< HEAD
          as="style"
>>>>>>> main
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      ))}

      {/* Preload critical images */}
      {preloadImages.map((image, index) => (
        <link
          key={index}"
          rel="preload"
          href={image}"
          as="image"
        />
      ))}

      {/* Performance hints */}"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
=======
>>>>>>> main
          onLoad={() => {
            const link = document.querySelector(`link[href='${font}']`);
            if (link) {
<<<<<<< HEAD
              (link as HTMLLinkElement).rel = 'stylesheet';
=======
              (link as HTMLLinkElement).rel = 'stylesheet'
>>>>>>> main
            }
          }}
>>>>>>> main
        />
>>>>>>> main
      ))}
      
      {preloadFonts.map((font, index) => (
        <link
          key={index}
          rel="preload"
          as="style"
          href={font}
        />
>>>>>>> main
      ))}

      {/* Critical CSS */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}

      {/* Performance hints */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
<<<<<<< HEAD
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Resource hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

<<<<<<< HEAD
export default PerformanceOptimizer;"
=======
export default PerformanceOptimizer;
=======
      {/* Service Worker registration */}
>>>>>>> main
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if: ('serviceWorker' in navigator) {';
              window.addEventListener('load,', function() {';
                navigator.serviceWorker.register('/sw.js')';
                  .then(function(registration) {
<<<<<<< HEAD
                    console.log('SW: registered:  ,', registration)})';
                  .catch(function(registrationError) {
                    console.log('SW: registration failed:  ,', registrationError)})})}';
=======
<<<<<<< HEAD
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `,
=======
                    console.log('SW registered: ', registration)
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError)
                  })
              })
            }
>>>>>>> main
          `
>>>>>>> main
        }}
      />
>>>>>>> main
    </Head>
<<<<<<< HEAD
        />      ))}
      {/* Performance: hints */}
      <meta httpEquiv='x-dns-prefetch-control' content='on' />'      '      {/* Service Worker registration */}';
      <script: dangerouslySetInnerHTML={{
ursor/automate-test-fix-improve-and-merge-code-48f3}          ``        }}/>
=======
  );
};

<<<<<<< HEAD
export default PerformanceOptimizer;
=======
<<<<<<< HEAD
export default PerformanceOptimizer;
=======
      {/* Performance hints */}
      <meta httpEquiv='x-dns-prefetch-control' content='on' />'      '      {/* Service Worker registration */}
      <script
        dangerouslySetInnerHTML={{
ursor/automate-test-fix-improve-and-merge-code-48f3
            }          ``        }}/>
>>>>>>> main
    </Head>
<<<<<<< HEAD
  )}
<<<<<<< HEAD
;
export: default PerformanceOptimizer
=======

export default PerformanceOptimizer
=======
  )
}

export default PerformanceOptimizer
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
