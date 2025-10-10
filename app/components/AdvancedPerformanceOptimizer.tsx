'use client';
import React, { useState, useEffect } from 'react';
import { Zap, Settings, CheckCircle, AlertTriangle, TrendingUp, Activity } from 'lucide-react';

interface OptimizationRule {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  impact: 'high' | 'medium' | 'low';
  category: 'images' | 'scripts' | 'css' | 'caching' | 'compression';
}

const AdvancedPerformanceOptimizer: React.FC = () => {
  const [rules, setRules] = useState<OptimizationRule[]>([
    {
      id: 'image-optimization',
      name: 'Image Optimization',
      description: 'Automatically optimize and compress images for web delivery',
      enabled: false,
      impact: 'high',
      category: 'images'
    },
    {
      id: 'script-minification',
      name: 'Script Minification',
      description: 'Minify JavaScript files to reduce file size',
      enabled: false,
      impact: 'high',
      category: 'scripts'
    },
    {
      id: 'css-optimization',
      name: 'CSS Optimization',
      description: 'Optimize and minify CSS files',
      enabled: false,
      impact: 'medium',
      category: 'css'
    },
    {
      id: 'browser-caching',
      name: 'Browser Caching',
      description: 'Enable browser caching for static assets',
      enabled: false,
      impact: 'high',
      category: 'caching'
    },
    {
      id: 'gzip-compression',
      name: 'Gzip Compression',
      description: 'Enable gzip compression for text-based files',
      enabled: false,
      impact: 'high',
      category: 'compression'
    },
    {
      id: 'lazy-loading',
      name: 'Lazy Loading',
      description: 'Implement lazy loading for images and non-critical content',
      enabled: false,
      impact: 'medium',
      category: 'images'
    },
    {
      id: 'critical-css',
      name: 'Critical CSS',
      description: 'Inline critical CSS for above-the-fold content',
      enabled: false,
      impact: 'medium',
      category: 'css'
    },
    {
      id: 'resource-hints',
      name: 'Resource Hints',
      description: 'Add preload, prefetch, and preconnect hints',
      enabled: false,
      impact: 'low',
      category: 'scripts'
    }
  ]);

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResults, setOptimizationResults] = useState<{
    totalSavings: number;
    rulesApplied: number;
    estimatedImprovement: number;
  }>({
    totalSavings: 0,
    rulesApplied: 0,
    estimatedImprovement: 0
  });

  useEffect(() => {
    // Load saved rules from localStorage
    const savedRules = localStorage.getItem('performance-optimization-rules');
    if (savedRules) {
      setRules(JSON.parse(savedRules));
    }
  }, []);

  const toggleRule = (ruleId: string) => {
    const updatedRules = rules.map(rule =>
      rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
    );
    setRules(updatedRules);
    localStorage.setItem('performance-optimization-rules', JSON.stringify(updatedRules));
  };

  const enableAllRules = () => {
    const updatedRules = rules.map(rule => ({ ...rule, enabled: true }));
    setRules(updatedRules);
    localStorage.setItem('performance-optimization-rules', JSON.stringify(updatedRules));
  };

  const disableAllRules = () => {
    const updatedRules = rules.map(rule => ({ ...rule, enabled: false }));
    setRules(updatedRules);
    localStorage.setItem('performance-optimization-rules', JSON.stringify(updatedRules));
  };

  const runOptimization = async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const enabledRules = rules.filter(rule => rule.enabled);
    const totalSavings = enabledRules.reduce((acc, rule) => {
      const savings = rule.impact === 'high' ? 25 : rule.impact === 'medium' ? 15 : 5;
      return acc + savings;
    }, 0);
    
    setOptimizationResults({
      totalSavings,
      rulesApplied: enabledRules.length,
      estimatedImprovement: Math.min(totalSavings, 80)
    });
    
    setIsOptimizing(false);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'images': return '🖼️';
      case 'scripts': return '📜';
      case 'css': return '🎨';
      case 'caching': return '💾';
      case 'compression': return '🗜️';
      default: return '⚙️';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Performance Optimizer
        </h3>
        <div className="flex gap-2">
          <button
            onClick={enableAllRules}
            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-colors duration-300"
          >
            Enable All
          </button>
          <button
            onClick={disableAllRules}
            className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-lg text-sm font-medium hover:bg-gray-500/30 transition-colors duration-300"
          >
            Disable All
          </button>
        </div>
      </div>

      {/* Optimization Rules */}
      <div className="space-y-3 mb-6">
        {rules.map((rule) => (
          <div
            key={rule.id}
            className={`p-4 rounded-lg border transition-all duration-300 ${
              rule.enabled
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getCategoryIcon(rule.category)}</span>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(rule.impact)}`}>
                  {rule.impact.toUpperCase()}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-white font-medium">{rule.name}</h4>
                  <button
                    onClick={() => toggleRule(rule.id)}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                      rule.enabled
                        ? 'border-green-400 bg-green-400'
                        : 'border-gray-400 hover:border-gray-300'
                    }`}
                  >
                    {rule.enabled && <CheckCircle className="h-3 w-3 text-white" />}
                  </button>
                </div>
                <p className="text-sm text-gray-300">{rule.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optimization Actions */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={runOptimization}
          disabled={isOptimizing || rules.filter(r => r.enabled).length === 0}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isOptimizing ? (
            <>
              <Activity className="h-4 w-4 animate-spin" />
              Optimizing...
            </>
          ) : (
            <>
              <Settings className="h-4 w-4" />
              Run Optimization
            </>
          )}
        </button>
      </div>

      {/* Optimization Results */}
      {optimizationResults.rulesApplied > 0 && (
        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Optimization Results
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {optimizationResults.rulesApplied}
              </div>
              <div className="text-sm text-gray-300">Rules Applied</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {optimizationResults.totalSavings}%
              </div>
              <div className="text-sm text-gray-300">Estimated Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">
                {optimizationResults.estimatedImprovement}%
              </div>
              <div className="text-sm text-gray-300">Performance Improvement</div>
            </div>
          </div>
        </div>
      )}

      {/* Status */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            rules.filter(r => r.enabled).length > 0 ? 'bg-green-400' : 'bg-gray-400'
          }`} />
          <span className="text-gray-300">
            {rules.filter(r => r.enabled).length} of {rules.length} rules enabled
          </span>
        </div>
        <div className="text-gray-400">
          {rules.filter(r => r.enabled).length === 0 && 'Enable rules to start optimizing'}
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceOptimizer;