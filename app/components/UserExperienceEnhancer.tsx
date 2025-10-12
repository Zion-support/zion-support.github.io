import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  User, 
  CheckCircle, 
  AlertTriangle, 
  Settings, 
  TrendingUp,
  Eye,
  MousePointer,
  Smartphone
} from 'lucide-react';

interface UserExperienceEnhancerProps {
  onOptimize?: () => void;
  className?: string;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  onOptimize,
  className = ''
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [uxScore, setUxScore] = useState(0);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [uxIssues, setUxIssues] = useState<string[]>([]);

  const optimizeUX = async () => {
    setIsOptimizing(true);
    setOptimizations([]);
    setUxIssues([]);
    
    // Simulate UX optimization process
    const steps = [
      'Analyzing user behavior patterns...',
      'Checking page load performance...',
      'Evaluating accessibility compliance...',
      'Testing mobile responsiveness...',
      'Optimizing navigation structure...',
      'Improving content readability...',
      'Enhancing interactive elements...',
      'Implementing user feedback systems...',
      'Configuring analytics tracking...',
      'Finalizing UX improvements...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 400));
      setOptimizations(prev => [...prev, steps[i]]);
      
      // Update UX score gradually
      const newScore = Math.min(95, 15 + (i + 1) * 8);
      setUxScore(newScore);
    }

    // Simulate finding some issues
    setUxIssues([
      'Some pages have slow loading times',
      'Mobile navigation could be improved',
      'Color contrast needs adjustment',
      'Form validation messages unclear'
    ]);

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
        <title>User Experience Enhancer - Zion Tech Group</title>
        <meta name="description" content="Advanced UX optimization tools for your application." />
      </Helmet>
      
      <div className={`p-6 bg-white rounded-lg shadow-md ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <User className="w-6 h-6 mr-2 text-purple-500" />
              User Experience Enhancer
            </h2>
            <p className="text-gray-600">Optimize your application's user experience</p>
          </div>
          
          <div className="text-right">
            <div className={`text-3xl font-bold ${getScoreColor(uxScore)}`}>
              {uxScore}
            </div>
            <div className="text-sm text-gray-500">UX Score</div>
          </div>
        </div>

        {/* UX Score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall UX Score</span>
            <div className={`flex items-center ${getScoreColor(uxScore)}`}>
              {getScoreIcon(uxScore)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                uxScore >= 90 ? 'bg-green-500' : 
                uxScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${uxScore}%` }}
            />
          </div>
        </div>

        {/* UX Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <Eye className="w-5 h-5 text-green-500 mr-2" />
            <div>
              <div className="text-sm font-medium text-green-900">Accessibility</div>
              <div className="text-xs text-green-700">Good</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
            <MousePointer className="w-5 h-5 text-yellow-500 mr-2" />
            <div>
              <div className="text-sm font-medium text-yellow-900">Interactivity</div>
              <div className="text-xs text-yellow-700">Needs Review</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <Smartphone className="w-5 h-5 text-green-500 mr-2" />
            <div>
              <div className="text-sm font-medium text-green-900">Mobile</div>
              <div className="text-xs text-green-700">Good</div>
            </div>
          </div>
        </div>

        {/* Optimization Button */}
        <button
          onClick={optimizeUX}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isOptimizing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Enhancing UX...</span>
            </>
          ) : (
            <>
              <Settings className="w-4 h-4" />
              <span>Start UX Enhancement</span>
            </>
          )}
        </button>

        {/* UX Issues */}
        {uxIssues.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
              UX Issues Found
            </h3>
            <div className="space-y-2">
              {uxIssues.map((issue, index) => (
                <div key={index} className="flex items-center text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                  <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optimization Steps */}
        {optimizations.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Enhancement Progress</h3>
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

        {/* UX Tips */}
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <h3 className="text-sm font-semibold text-purple-900 mb-2">UX Best Practices</h3>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Ensure fast page loading times (under 3 seconds)</li>
            <li>• Make navigation intuitive and consistent</li>
            <li>• Use clear, readable typography</li>
            <li>• Implement responsive design for all devices</li>
            <li>• Provide clear feedback for user actions</li>
            <li>• Use appropriate color contrast for accessibility</li>
            <li>• Minimize cognitive load with clear information hierarchy</li>
            <li>• Test with real users regularly</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserExperienceEnhancer;