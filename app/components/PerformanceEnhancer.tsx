import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, CheckCircle, AlertTriangle, Settings } from 'lucide-react';

interface PerformanceEnhancerProps {
  onOptimize?: () => void;
  className?: string;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  onOptimize,
  className = ''
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState(0);

  const optimizePerformance = async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    const steps = [
      'Analyzing performance metrics...',
      'Optimizing images and assets...',
      'Minifying CSS and JavaScript...',
      'Enabling compression...',
      'Setting up caching...',
      'Optimizing database queries...',
      'Configuring CDN...',
      'Finalizing optimizations...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setOptimizations(prev => [...prev, steps[i]]);
    }

    setPerformanceScore(95);
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
        <title>Performance Enhancer - Zion Tech Group</title>
        <meta name="description" content="Optimize your application's performance with our advanced tools." />
      </Helmet>
      
      <div className={`p-6 bg-white rounded-lg shadow-md ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-500" />
              Performance Enhancer
            </h2>
            <p className="text-gray-600">Monitor and optimize your app's performance</p>
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
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
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
              <span>Optimize Performance</span>
            </>
          )}
        </button>

        {/* Optimization Steps */}
        {optimizations.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimization Progress</h3>
            <div className="space-y-2">
              {optimizations.map((step, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Tips */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Performance Tips</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Enable gzip compression</li>
            <li>• Optimize images and use WebP format</li>
            <li>• Minify CSS and JavaScript files</li>
            <li>• Use a Content Delivery Network (CDN)</li>
            <li>• Implement lazy loading for images</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PerformanceEnhancer;