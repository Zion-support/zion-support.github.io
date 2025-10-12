'use client';

import React, {useState} from 'react';
import {ArrowRight, Zap} from 'lucide-react';
import {Helmet} from 'react-helmet-async';

const PerformanceEnhancer: React.FC = () => {const [isOptimizing, setIsOptimizing] = useState(false);
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    performanceScore: 0,
    optimizationLevel: 0});

  const features = [{title: "Real-time Monitoring",
      description: "Monitor your application performance in real-time with advanced analytics"},
    {title: "Automatic Optimization",
      description: "AI-powered optimization that automatically improves your app's performance"},
    {title: "Performance Analytics",
      description: "Detailed insights and reports on your application's performance metrics"}];

  const benefits = ['Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'];

  const optimizePerformance = async () => {setIsOptimizing(true);
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setMetrics({
      loadTime: Math.random() * 1000 + 500,
      performanceScore: Math.random() * 40 + 60,
      optimizationLevel: Math.random() * 30 + 70});
    setIsOptimizing(false);
  };

  return (
    <>
      <Helmet>
        <title>Performance Enhancer | Zion Tech Group</title>
        <meta name="description" content="Professional Performance Enhancer services by Zion Tech Group. Advanced AI and IT solutions for your business."   />
        <meta name="keywords" content="Performance Enhancer, AI solutions, IT services, Zion Tech Group, performance optimization"   />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Performance Enhancer
              </span>
              <br   />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced performance enhancer solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2"   />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Performance Enhancer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our performance enhancer solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid md: grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
  ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{metrics.loadTime.toFixed(0)}ms</div>
                <div className="text-gray-300">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{metrics.performanceScore.toFixed(0)}%</div>
                <div className="text-gray-300">Performance Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{metrics.optimizationLevel.toFixed(0)}%</div>
                <div className="text-gray-300">Optimization Level</div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={optimizePerformance}
                disabled={isOptimizing}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
              >
                {isOptimizing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Optimizing...</span>
                  <  />
                ) : (
                  <>
                    <Zap className="w-5 h-5"   />
                    <span>Optimize Performance</span>
                  <  />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our performance enhancer solutions for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
  ))}
          </div>
        </div>
      </section>
    <  />
  );
};

export default PerformanceEnhancer;