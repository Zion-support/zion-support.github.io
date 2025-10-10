'use client';
import React, { useEffect, useState } from 'react';
import { CheckCircle, Zap, Shield, Globe, Phone, Mail } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  children?: React.ReactNode;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  children
}) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Image optimization
    if (enableImageOptimization) {
      optimizeImages();
    }

    // Lazy loading
    if (enableLazyLoading) {
      setupLazyLoading();
    }

    // Preloading
    if (enablePreloading) {
      preloadCriticalResources();
    }

    // Code splitting
    if (enableCodeSplitting) {
      setupCodeSplitting();
    }

    setIsOptimized(true);
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  };

  const setupLazyLoading = () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  };

  const preloadCriticalResources = () => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/styles/critical.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const criticalFont = document.createElement('link');
    criticalFont.rel = 'preload';
    criticalFont.href = '/fonts/inter.woff2';
    criticalFont.as = 'font';
    criticalFont.type = 'font/woff2';
    criticalFont.crossOrigin = 'anonymous';
    document.head.appendChild(criticalFont);
  };

  const setupCodeSplitting = () => {
    // Preload critical components
    const preloadComponents = () => {
      // These will be loaded when needed
      import('../components/ContentCarousel').catch(() => {});
      import('../components/DynamicContentShowcase').catch(() => {});
      import('../components/ContentStatistics').catch(() => {});
    };

    // Delay preloading to not block initial render
    setTimeout(preloadComponents, 1000);
  };

  const benefits = [
    'Faster page load times with optimized assets',
    'Improved Core Web Vitals scores',
    'Better user experience and engagement',
    'Reduced bounce rates and increased conversions',
    'Enhanced SEO performance',
    'Lower bandwidth usage and costs'
  ];

  if (!children) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Optimized</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience lightning-fast performance with our advanced optimization techniques.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Fast Loading</h3>
              <p className="text-gray-300 text-sm">Optimized assets and lazy loading for instant page loads</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Secure</h3>
              <p className="text-gray-300 text-sm">Enterprise-grade security with performance optimization</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Global CDN</h3>
              <p className="text-gray-300 text-sm">Worldwide content delivery for optimal performance</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Optimized</h3>
              <p className="text-gray-300 text-sm">Code splitting and resource optimization</p>
            </div>
          </div>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Key Benefits
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the power of our enhanced performance optimizer solutions for your business.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Optimize Your Performance?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let our performance experts help you achieve lightning-fast load times and optimal user experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default EnhancedPerformanceOptimizer;