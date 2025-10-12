'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Brain, Shield, Globe } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  cpuUsage: number;
  networkLatency: number;
}

export default function PerformanceEnhancerPage() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    cpuUsage: 0,
    networkLatency: 0,
  });
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics({
        loadTime: Math.random() * 1000 + 500,
        memoryUsage: Math.random() * 100,
        cpuUsage: Math.random() * 100,
        networkLatency: Math.random() * 200 + 50,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsOptimizing(false);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Advanced AI technology to automatically optimize your application performance',
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring and analysis of your application performance metrics',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and audit capabilities',
    },
    {
      icon: Globe,
      title: 'Global Performance',
      description: 'Worldwide performance optimization and monitoring for global applications',
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Performance Enhancer | Zion Tech Group</title>
        <meta name="description" content="Professional performance enhancement services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="performance enhancement, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Performance
              </span>
              <br />
              <span className="text-white">Enhancer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your application performance with our advanced optimization solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time monitoring and optimization of your application performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                {metrics.loadTime.toFixed(0)}ms
              </div>
              <div className="text-gray-300">Load Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                {metrics.memoryUsage.toFixed(1)}%
              </div>
              <div className="text-gray-300">Memory Usage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                {metrics.cpuUsage.toFixed(1)}%
              </div>
              <div className="text-gray-300">CPU Usage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">
                {metrics.networkLatency.toFixed(0)}ms
              </div>
              <div className="text-gray-300">Network Latency</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={optimizePerformance}
              disabled={isOptimizing}
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
            >
              {isOptimizing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Optimize Performance
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make our performance enhancement solutions stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with our cutting-edge performance enhancement solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-5 h-5 text-white">✓</div>
                </div>
                <p className="text-gray-300 text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our performance enhancement solutions and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}