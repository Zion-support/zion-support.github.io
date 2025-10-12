'use client';
import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap  } from 'lucide-react';
interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}
const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };
    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };
    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
  }, []);
  const features = [
    {
      title: "Image Optimization",
      description: "Automatic image compression and lazy loading"
    },
    {
      title: "Resource Preloading",
      description: "Critical resource preloading for faster initial load"
    },
    {
      title: "Code Splitting",
      description: "Automatic code splitting for optimal bundle sizes"
    },
    {
      title: "Caching Strategy",
      description: "Intelligent caching for improved performance"
    }
  ];
  r etu rn (
    <d iv c las sNa me="m in-h-scre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900">
      {/* H ero S ection */}
      <s ection c las sNa me="r e lat ive py-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t e xt-c enter">
            <h1 c las sNa me="t e xt-4xl md:t ext-6xl font-b old t ext-w hit-e mb-6">
              <s pan c las sNa me="b g-g rad ient-to-r from-purple-400 to-b lue-400 bg-clip-t ext t ext-transparen-t">
                Performance Optimizer
              </s pan>
            </h1>
            <p c las sNa me="t e xt-xl t ext-g ra-y-300 mb-8 m ax-w-3xl mx-a uto">
              Optimize your application's performance with our advanced optimization tools and techniques.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              <b utt on c las sNa me="b g-g rad ient-to-r from-purple-500 to-b lue-600 t ext-w hit-e px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-b lue-700 transition-all duration-300 f lex items-c enter">
                G et Star ted
                <ArrowRight c las sNa me="m l-2 h-5 w-5" />
              </b utt on>
              <b utt on c las sNa me="b o rder b ord er-w hite t ext-w hit-e px-8 py-3 rounded-lg font-semibold hover:bg-w hite hover:t ext-g ra-y-900 transition-all duration-300">
                Learn More
              </b utt on>
            </d iv>
          </d iv>
        </d iv>
      </s ection>
      {/* F eatures S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t e xt-c enter mb-16">
            <h2 c las sNa me="t e xt-3xl md:t ext-4xl font-b old t ext-w hit-e mb-4">
              Our F eatures
            </h2>
            <p c las sNa me="t e xt-xl t ext-g ra-y-300 m ax-w-3xl mx-a uto">
              Discover the powerful features that make our performance optimizer solutions stand out.
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2 lg:g rid-c ols-4 g ap-8">
            {features.map((feature, index) => (
              <d iv k ey={index} c las sNa me="b g-g ray-800/50 b ack drop-b lur-xl rounded-xl p-6 b ord er b ord er-g ray-700 hover:b ord er-purple-500 transition-all duration-300">
                <d iv c las sNa me="f l ex items-c enter j ust ify-c enter w-12 h-12 bg-g rad ient-to-r from-purple-500 to-b lue-600 rounded-lg mb-4">
                  <Zap c las sNa me="h-6 w-6 t e xt-w hite" />
                </d iv>
                <h3 c las sNa me="t e xt-xl font-b old t ext-w hit-e mb-2">{feature.title}</h3>
                <p c las sNa me="t e xt-g ray-300">{feature.description}</p>
              </d iv>
            ))}
          </d iv>
        </d iv>
      </s ection>
    </d iv>
  );
};
export default PerformanceOptimizer;
      cleanupScroll()
    }
  }, [])
  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && Object.valu es(metrics).some(val => val !== null)) {
      console.log('Performance Metrics:', metrics)
    }
  }, [metrics])
  r etu rn null
}
export default PerformanceOptimizer