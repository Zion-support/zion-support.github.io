'use client';
import React, { useEffect, useCallback } from 'react';
import { CheckCircle, Phone, Mail, Zap, Shield, Cpu, BarChart } from 'lucide-react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  const benefits = [
    'Faster page load times with advanced optimization techniques',
    'Improved Core Web Vitals scores for better SEO rankings',
    'Reduced bandwidth usage and server costs',
    'Enhanced user experience with smooth interactions',
    'Automatic image compression and format optimization',
    'Intelligent code splitting for optimal bundle sizes'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Image Optimization',
      description: 'Automatic compression and format conversion for optimal loading speeds'
    },
    {
      icon: Cpu,
      title: 'Code Splitting',
      description: 'Intelligent bundling to load only what users need'
    },
    {
      icon: Shield,
      title: 'Lazy Loading',
      description: 'Defer non-critical resources until they are needed'
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Real-time tracking of performance metrics and optimization opportunities'
    }
  ];

  // Performance optimization effects
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Preload critical resources
      if (enablePreloading) {
        const criticalResources = [
          '/fonts/inter.woff2',
          '/images/hero-bg.jpg'
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
      }

      // Enable lazy loading for images
      if (enableLazyLoading) {
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
      }
    }
  }, [enablePreloading, enableLazyLoading]);

  const handleOptimization = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Trigger performance optimization
      console.log('Performance optimization enabled');
      
      // Dispatch custom event for other components
      window.dispatchEvent(new CustomEvent('performanceOptimized', {
        detail: {
          imageOptimization: enableImageOptimization,
          lazyLoading: enableLazyLoading,
          preloading: enablePreloading,
          codeSplitting: enableCodeSplitting
        }
      }));
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return (
    <div className="performance-optimizer">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enhanced Performance Optimizer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Boost your website's performance with our advanced optimization techniques. 
            Faster loading, better user experience, and improved SEO rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleOptimization}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Zap className="mr-2 h-5 w-5" />
              Optimize Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Optimization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive performance optimization tools designed to maximize your website's speed and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Performance?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get started with our performance optimization services today and see immediate improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedPerformanceOptimizer;