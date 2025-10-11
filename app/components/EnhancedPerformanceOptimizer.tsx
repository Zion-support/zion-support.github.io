'use client'
import React, { useEffect } from 'react'
import { Zap, Shield, BarChart, Cpu, CheckCircle } from 'lucide-react'

const EnhancedPerformanceOptimizer: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with advanced caching and compression techniques.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Real-time performance monitoring and detailed analytics.',
    },
    {
      icon: Cpu,
      title: 'Resource Optimization',
      description: 'Intelligent resource allocation and memory management.',
    },
  ];

  const benefits = [
    'Up to 300% faster page load times',
    'Reduced server costs by 40%',
    'Improved user experience and engagement',
    'Better search engine rankings',
    'Enhanced mobile performance',
    'Automatic optimization and scaling',
  ];

  useEffect(() => {
    // Performance optimization logic
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalResources = [
          '/fonts/inter.woff2',
          '/images/hero-bg.jpg',
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

      // Lazy load images
      const lazyLoadImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      };

      // Initialize optimizations
      preloadCriticalResources();
      lazyLoadImages();

      // Service Worker registration for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    }
  }, []);

  return (
    <div className="performance-optimizer">
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Performance Optimization
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our performance optimization solutions deliver unmatched speed, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our performance optimization solutions for your business.
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
    </div>
  );
};

export default EnhancedPerformanceOptimizer;