'use client';
import React, { useState, useEffect } from 'react';
import { Zap, Shield, Globe, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });

  useEffect(() => {
    // Simulate performance monitoring
    const updateMetrics = () => {
      setMetrics({
        loadTime: Math.random() * 1000 + 500,
        renderTime: Math.random() * 200 + 100,
        memoryUsage: Math.random() * 50 + 25,
        networkLatency: Math.random() * 100 + 50
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for maximum performance and speed'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security and protection'
    },
    {
      icon: Globe,
      title: 'Global',
      description: 'Worldwide performance optimization'
    }
  ];

  const benefits = [
    'Improved page load times',
    'Better user experience',
    'Reduced bounce rates',
    'Higher conversion rates',
    'Better SEO rankings',
    'Mobile optimization'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Performance Enhancer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Boost your website performance with our advanced optimization solutions.
            </p>
            
            {/* Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {metrics.loadTime.toFixed(0)}ms
                </div>
                <div className="text-sm text-gray-400">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {metrics.renderTime.toFixed(0)}ms
                </div>
                <div className="text-sm text-gray-400">Render Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {metrics.memoryUsage.toFixed(1)}MB
                </div>
                <div className="text-sm text-gray-400">Memory</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {metrics.networkLatency.toFixed(0)}ms
                </div>
                <div className="text-sm text-gray-400">Latency</div>
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
              Discover the powerful features that make our performance enhancer solutions stand out.
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
              Experience the power of our performance enhancer solutions for your business.
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

export default PerformanceEnhancer;
