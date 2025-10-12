'use client';
import React, { useEffect, useState } from 'react';
import { Zap, Shield, Globe, CheckCircle } from 'lucide-react';

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
    // Simulate performance monitoring
    const updateMetrics = () => {
      setMetrics({
        lcp: Math.random() * 2000 + 1000,
        fid: Math.random() * 100 + 50,
        cls: Math.random() * 0.1 + 0.05,
        fcp: Math.random() * 1000 + 500,
        ttfb: Math.random() * 200 + 100
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Core Web Vitals',
      description: 'Monitor and optimize your Core Web Vitals for better SEO'
    },
    {
      icon: Shield,
      title: 'Performance Monitoring',
      description: 'Real-time performance monitoring and alerts'
    },
    {
      icon: Globe,
      title: 'Global Optimization',
      description: 'Worldwide performance optimization and CDN'
    }
  ];

  const benefits = [
    'Improved Core Web Vitals scores',
    'Better search engine rankings',
    'Enhanced user experience',
    'Real-time performance monitoring',
    'Automated optimization',
    'Mobile performance optimization'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Performance Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your website performance with our advanced monitoring and optimization solutions.
            </p>
            
            {/* Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : '--'}
                </div>
                <div className="text-sm text-gray-400">LCP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : '--'}
                </div>
                <div className="text-sm text-gray-400">FID</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {metrics.cls ? metrics.cls.toFixed(3) : '--'}
                </div>
                <div className="text-sm text-gray-400">CLS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : '--'}
                </div>
                <div className="text-sm text-gray-400">FCP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : '--'}
                </div>
                <div className="text-sm text-gray-400">TTFB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make our performance optimizer solutions stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Experience the power of our performance optimizer solutions for your business.
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

export default PerformanceOptimizer;
