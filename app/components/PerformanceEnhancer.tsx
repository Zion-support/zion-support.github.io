'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Brain } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  lcp: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

const PerformanceEnhancer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    lcp: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
  });

  useEffect(() => {
    // Simulate performance metrics
    const loadTime = performance.now();
    setMetrics({
      loadTime,
      lcp: 1200,
      cls: 0.1,
      fcp: 800,
      ttfb: 200,
    });
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Speed Optimization',
      description: 'Advanced techniques to improve page load times and user experience',
    },
    {
      icon: Shield,
      title: 'Security Enhancement',
      description: 'Robust security measures to protect your application and data',
    },
    {
      icon: Globe,
      title: 'Global Performance',
      description: 'Worldwide optimization for consistent performance across regions',
    },
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Intelligent monitoring and optimization using machine learning',
    },
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Performance Enhancer | Zion Tech Group</title>
        <meta name="description" content="Professional Performance Enhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="Performance Enhancer, AI solutions, IT services, Zion Tech Group, performance optimization" />
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
              Transform your application's performance with our advanced optimization solutions.
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

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time performance monitoring and optimization insights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {metrics.loadTime.toFixed(0)}ms
              </div>
              <div className="text-sm text-gray-400">Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {metrics.lcp}ms
              </div>
              <div className="text-sm text-gray-400">LCP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {metrics.cls}
              </div>
              <div className="text-sm text-gray-400">CLS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {metrics.fcp}ms
              </div>
              <div className="text-sm text-gray-400">FCP</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
            <p className="text-gray-300text-sm">Monitor and optimize your app's performance</p>
          </div>
        <button
          onClick={optimizePerformance}
          disabled="{isOptimizing}"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2" />
          {isOptimizing ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparentrounded-fullanimate-spin" />
              <span  >Optimizing...</span>

          ) : (
              <Zap className="w-4 h-4" />
              <span  >Optimize</span>

          )}
        </button>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4gap-4mb-6">
        <div className="text-center">
          <div className="text-2 xl font-bold text-white mb-1"  />{metrics.loadTime.toFixed(0)}ms
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
            {features.map((feature, index) => (
              {features.map((feature, index) => (
                <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
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
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              Key Benefits
  </
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Experience the power of our performanceenhancer solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              {features.map((feature, index) => (

                <div key="{index}" className="flex items-startspace-x-3" />
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
            ))}
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
        <title>PerformanceEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional PerformanceEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." / / />
        <meta name="keywords" content="PerformanceEnhancer, AI solutions, IT services, Zion Tech Group, performanceenhancer" / / />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4sm:px-6lg:px-8" /></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent"  />PerformanceEnhancer
              </span>
              <br / />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Transform your business with our advanced performanceenhancer solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300">Learn More
              </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceEnhancer;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Our performanceenhancer solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"></div>
            {features.map((feature, index) => (}
              {features.map((feature, index) => (
                <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" /></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4"></div>
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5" /></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Experience the power of our performanceenhancer solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6"></div>
            {benefits.map((benefit, index) => (}
              {features.map((feature, index) => (

                <div key="{index}" className="flex items-startspace-x-3" /></div>
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
};
