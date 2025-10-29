'use client';
import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle, Clock, Check } from 'lucide-react';;

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

const EnhancedPerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  useEffect(() => {
    // Simulate performance monitoring
    const simulateMetrics = () => {
      setMetrics({
        loadTime: Math.random() * 3000 + 1000,
        firstContentfulPaint: Math.random() * 2000 + 500,
        largestContentfulPaint: Math.random() * 3000 + 1000,
        cumulativeLayoutShift: Math.random() * 0.1,
        firstInputDelay: Math.random() * 100 + 10
      });
    };

    simulateMetrics();
    const interval = setInterval(simulateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  const runOptimizations = async () => {
    setIsOptimizing(true);
    setOptimizations([]);

    const optimizationSteps = [
      'Analyzing bundle size...',
      'Optimizing images...',
      'Minifying CSS and JavaScript...',
      'Enabling compression...',
      'Setting up caching...',
      'Optimizing database queries...',
      'Implementing lazy loading...',
      'Configuring CDN...'
    ];

    for (let i = 0; i < optimizationSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOptimizations(prev => [...prev, optimizationSteps[i]]);
    }

    setIsOptimizing(false);
  };

  const getPerformanceScore = (): number => {
    if (!metrics) return 0;
    
    let score = 100;
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1800) score -= 15;
    if (metrics.largestContentfulPaint > 2500) score -= 15;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    if (metrics.firstInputDelay > 100) score -= 10;
    
    return Math.max(0, score);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const score = getPerformanceScore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Performance Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced performance optimization tools for modern web applications
          </p>
        </div>

        {/* Performance Score */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Performance Score</h2>
            <div className={`text-4xl font-bold ${getScoreColor(score)}`}>
              {score}/100
            </div>
          </div>
          
          <div className="w-full bg-slate-700 rounded-full h-4 mb-6">
            <div 
              className={`h-4 rounded-full transition-all duration-1000 ${
                score >= 90 ? 'bg-green-500' : score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${score}%` }}
            ></div>
          </div>

          <button
            onClick={runOptimizations}
            disabled={isOptimizing}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto disabled:opacity-50"
          >
            {isOptimizing ? (
              <>
                <Clock className="w-5 h-5 mr-2 animate-spin" />
                Optimizing...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 mr-2" />
                Run Optimizations
              </>
            )}
          </button>
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Load Time</h3>
              <p className="text-3xl font-bold text-cyan-400">
                {metrics.loadTime.toFixed(0)}ms
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">First Contentful Paint</h3>
              <p className="text-3xl font-bold text-cyan-400">
                {metrics.firstContentfulPaint.toFixed(0)}ms
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Largest Contentful Paint</h3>
              <p className="text-3xl font-bold text-cyan-400">
                {metrics.largestContentfulPaint.toFixed(0)}ms
              </p>
            </div>
          </div>
        )}

        {/* Optimizations */}
        {optimizations.length > 0 && (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Optimization Progress</h2>
            <div className="space-y-3">
              {optimizations.map((optimization, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{optimization}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedPerformanceOptimizer;