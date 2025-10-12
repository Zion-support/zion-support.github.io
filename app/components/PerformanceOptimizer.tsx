import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, CheckCircle, AlertTriangle, Settings, TrendingUp } from 'lucide-react';

interface PerformanceOptimizerProps {
  onOptimize?: () => void;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onOptimize,
  className = ''
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState(0);
  const [optimizationHistory, setOptimizationHistory] = useState<number[]>([]);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    setOptimizations([]);
    
    // Simulate optimization process
    const steps = [
      'Analyzing current performance...',
      'Identifying bottlenecks...',
      'Optimizing images and assets...',
      'Minifying CSS and JavaScript...',
      'Enabling compression...',
      'Setting up caching strategies...',
      'Optimizing database queries...',
      'Configuring CDN settings...',
      'Implementing lazy loading...',
      'Finalizing optimizations...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setOptimizations(prev => [...prev, steps[i]]);
      
      // Update performance score gradually
      const newScore = Math.min(95, 30 + (i + 1) * 6);
      setPerformanceScore(newScore);
    }

    setOptimizationHistory(prev => [...prev, performanceScore]);
    setIsOptimizing(false);
    onOptimize?.();
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-6 h-6" />;
    if (score >= 70) return <AlertTriangle className="w-6 h-6" />;
    return <AlertTriangle className="w-6 h-6" />;
  };

  return (
    <>
      <Helmet>
        <title>Performance Optimizer - Zion Tech Group</title>
        <meta name="description" content="Advanced performance optimization tools for your application." />
      </Helmet>
      
      <div className={`p-6 bg-white rounded-lg shadow-md ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-500" />
              Performance Optimizer
            </h2>
            <p className="text-gray-600">Advanced performance optimization tools</p>
          </div>
          
          <div className="text-right">
            <div className={`text-3xl font-bold ${getScoreColor(performanceScore)}`}>
              {performanceScore}
            </div>
            <div className="text-sm text-gray-500">Performance Score</div>
          </div>
        </div>

        {/* Performance Score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Performance</span>
            <div className={`flex items-center ${getScoreColor(performanceScore)}`}>
              {getScoreIcon(performanceScore)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                performanceScore >= 90 ? 'bg-green-500' : 
                performanceScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${performanceScore}%` }}
            />
          </div>
        </div>

        {/* Optimization Button */}
        <button
          onClick={optimizePerformance}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isOptimizing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Optimizing...</span>
            </>
          ) : (
            <>
              <Settings className="w-4 h-4" />
              <span>Start Optimization</span>
            </>
          )}
        </button>

        {/* Optimization Steps */}
        {optimizations.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimization Progress</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {optimizations.map((step, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance History */}
        {optimizationHistory.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Optimization History
            </h3>
            <div className="flex space-x-2">
              {optimizationHistory.map((score, index) => (
                <div key={index} className="flex-1 bg-gray-100 rounded-lg p-2 text-center">
                  <div className="text-sm font-medium text-gray-700">Run {index + 1}</div>
                  <div className={`text-lg font-bold ${getScoreColor(score)}`}>{score}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Tips */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Optimization Tips</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Enable gzip compression for better loading times</li>
            <li>• Optimize images and use modern formats like WebP</li>
            <li>• Minify CSS and JavaScript files</li>
            <li>• Use a Content Delivery Network (CDN)</li>
            <li>• Implement lazy loading for images and components</li>
            <li>• Use browser caching effectively</li>
            <li>• Optimize database queries and API calls</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PerformanceOptimizer;