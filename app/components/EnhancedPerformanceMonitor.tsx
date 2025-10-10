'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const EnhancedPerformanceMonitorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;,
    FID: number | null;
  FCP: number | null;,
    LCP: number | null;
  TTFB: number | null;
}

const $1: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null,
    FID: null,
    FCP: null,
    LCP: null,
    TTFB: null,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure Core Web Vitals;
    getCLS((metric) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
    });

    getFID((metric) => {
      setMetrics(prev => ({ ...prev, FID: metric.value }));
    });

    getFCP((metric) => {
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
    });

    getLCP((metric) => {
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
    });

    getTTFB((metric) => {
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
    });

    // Monitor performance in development;
    if (process.env.NODE_ENV === 'development') {
      const handleKeyPress = (e: KeyboardEvent) => {,
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {,
          setIsVisible(prev => !prev);
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
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
        <title>EnhancedPerformanceMonitor | Zion Tech Group</title>
        <meta name="description" content="Professional EnhancedPerformanceMonitor services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="EnhancedPerformanceMonitor, AI solutions, IT services, Zion Tech Group, enhancedperformancemonitor" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                EnhancedPerformanceMonitor
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced enhancedperformancemonitor solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
    <div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3><button
          onClick={() =>setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
        ></button>
          ✕</button>
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS:<span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}>{metrics.CLS ? metrics.CLS.toFixed(3) : '...'} ({getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})</span>
  return(<div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 shadow-lg z-50 max-w-sm">)</div>
      <div className="flex items-center justify-between mb-3">)</div>
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>)
        <button;)
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover: text-white text-xs"
        >
          ✕
        </button>
      </div>,
      ,
      <div className="space-y-2 text-xs">,</div>
        <div className="flex justify-between items-center">,</div>
          <span className="text-gray-300">CLS:</span>,
          <span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}>
            {metrics.CLS ? metrics.CLS.toFixed(3) : '...'} ({getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})
          </span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our EnhancedPerformanceMonitor?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enhancedperformancemonitor solutions deliver unmatched performance, security, and scalability.
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
              Experience the power of our enhancedperformancemonitor solutions for your business.
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your enhancedperformancemonitor needs and get a customized solution.
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
        </div>
      </section>
    </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB:<span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}>{metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'} ({getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})</span>
          <span className="text-gray-300">TTFB: </span>,
          <span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}>
            {metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'} ({getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})
      <div className="space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS:</span><span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}>{metrics.CLS ? metrics.CLS.toFixed(3) : '...'} ({getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID:</span><span className={getScoreColor(metrics.FID, { good: 100, needsImprovement: 300 })}>{metrics.FID ? `${metrics.FID.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FID, { good: 100, needsImprovement: 300 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP:</span><span className={getScoreColor(metrics.FCP, { good: 1800, needsImprovement: 3000 })}>{metrics.FCP ? `${metrics.FCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FCP, { good: 1800, needsImprovement: 3000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP:</span><span className={getScoreColor(metrics.LCP, { good: 2500, needsImprovement: 4000 })}>{metrics.LCP ? `${metrics.LCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.LCP, { good: 2500, needsImprovement: 4000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTFB:</span><span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}>{metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'} ({getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})</span>
          </span>
        </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700">
      <div className="mt-3 pt-2 border-t border-gray-700">
        <p className="text-xs text-gray-400">Press Ctrl+Shift+P to toggle</p>
        <p className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle;
        </p>
      </div>
  );
};

export default EnhancedPerformanceMonitorPage;
