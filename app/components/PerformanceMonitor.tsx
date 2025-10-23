<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { logger } from '../utils/logger';
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableConsoleLogging?: boolean;
  updateInterval?: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableConsoleLogging = false,
  updateInterval = 1000,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [performanceScore, setPerformanceScore] = useState(100);

  useEffect(() => {
    // const _reportWebVitals = (_metric: { name: string; value: number }) => {
    //   // Log to console in development (only on client side)
    //   if (typeof window !== 'undefined' && enableConsoleLogging) {
    //     logger.info('Web Vital captured', { name: _metric.name, value: _metric.value });
    //   }
    // };

    // Monitor Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;
    const memory = (
      performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }
    ).memory;

    const getPerformanceScore = (): number => {
      let _score = 100;
      if (metrics.renderTime > 1500) score -= 15;
      if (metrics.loadTime > 3000) score -= 20;
      if (metrics.memoryUsage > 50) score -= 10;
      return Math.max(0, score);
    };

    const updateMetrics = () => {
      const currentMetrics = {
        loadTime: navigation?.loadEventEnd ?? 0,
        memoryUsage: memory?.usedJSHeapSize ? memory.usedJSHeapSize / 1024 / 1024 : 0,
        renderTime: performance.now(),
        fps: 60, // Placeholder - would need actual FPS calculation
      };

      setMetrics(currentMetrics);

      const _score = getPerformanceScore();
      setPerformanceScore(score);

      if (enableConsoleLogging) {
        if (typeof console !== 'undefined') {
          logger.debug('Performance Metrics', {
            metrics: currentMetrics,
            score,
          });
        }
      }

      if (onMetricsUpdate) {
        onMetricsUpdate(currentMetrics);
      }
    };

    // Initial update
    updateMetrics();

    // Set up interval for continuous monitoring
    const _interval = setInterval(updateMetrics, updateInterval);

    return () => clearInterval(interval);
  }, [
    onMetricsUpdate,
    enableConsoleLogging,
    updateInterval,
    metrics.renderTime,
    metrics.loadTime,
    metrics.memoryUsage,
  ]);

  // Only show when explicitly enabled via props
  if (!enableConsoleLogging) {
    return null;
  }

  return (
<<<<<<< HEAD
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Performance Monitor</h3>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600">Load Time:</span>
          <span className="font-mono">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Memory:</span>
          <span className="font-mono">{metrics.memoryUsage.toFixed(2)}MB</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">FPS:</span>
          <span className="font-mono">{metrics.fps.toFixed(1)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Score:</span>
          <span
            className={`font-mono ${performanceScore > 80 ? 'text-green-600' : performanceScore > 60 ? 'text-yellow-600' : 'text-red-600'}`}
          >
            {performanceScore}
          </span>
        </div>
=======
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              PerformanceMonitor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced PerformanceMonitor solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
>>>>>>> a84aa0ca73271fd79488f8988ac94dcff4d9fb95
      </div>
    </div>
  );
};

export default PerformanceMonitor;
