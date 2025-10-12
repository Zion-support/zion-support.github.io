import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, CheckCircle, AlertTriangle, Settings, TrendingUp } from 'lucide-react';

interface SEOEnhancerProps {
  onOptimize?: () => void;
  className?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  onOptimize,
  className = ''
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [seoScore, setSeoScore] = useState(0);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [seoIssues, setSeoIssues] = useState<string[]>([]);

  const optimizeSEO = async () => {
    setIsOptimizing(true);
    setOptimizations([]);
    setSeoIssues([]);
    
    // Simulate SEO optimization process
    const steps = [
      'Analyzing page structure...',
      'Checking meta tags...',
      'Optimizing headings hierarchy...',
      'Improving image alt texts...',
      'Adding structured data...',
      'Optimizing page speed...',
      'Checking mobile responsiveness...',
      'Validating HTML markup...',
      'Optimizing internal linking...',
      'Finalizing SEO improvements...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 400));
      setOptimizations(prev => [...prev, steps[i]]);
      
      // Update SEO score gradually
      const newScore = Math.min(95, 20 + (i + 1) * 7);
      setSeoScore(newScore);
    }

    // Simulate finding some issues
    setSeoIssues([
      'Missing meta description on 3 pages',
      'Images without alt text found',
      'Some headings are not properly structured',
      'Page load time could be improved'
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
        <title>SEO Enhancer - Zion Tech Group</title>
        <meta name="description" content="Advanced SEO optimization tools for your website." />
      </Helmet>
      
      <div className={`p-6 bg-white rounded-lg shadow-md ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Search className="w-6 h-6 mr-2 text-blue-500" />
              SEO Enhancer
            </h2>
            <p className="text-gray-600">Optimize your website for search engines</p>
          </div>
          
          <div className="text-right">
            <div className={`text-3xl font-bold ${getScoreColor(seoScore)}`}>
              {seoScore}
            </div>
            <div className="text-sm text-gray-500">SEO Score</div>
          </div>
        </div>

        {/* SEO Score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall SEO Score</span>
            <div className={`flex items-center ${getScoreColor(seoScore)}`}>
              {getScoreIcon(seoScore)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                seoScore >= 90 ? 'bg-green-500' : 
                seoScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${seoScore}%` }}
            />
          </div>
        </div>

        {/* Optimization Button */}
        <button
          onClick={optimizeSEO}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isOptimizing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Optimizing SEO...</span>
            </>
          ) : (
            <>
              <Settings className="w-4 h-4" />
              <span>Start SEO Optimization</span>
            </>
          )}
        </button>

        {/* SEO Issues */}
        {seoIssues.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
              SEO Issues Found
            </h3>
            <div className="space-y-2">
              {seoIssues.map((issue, index) => (
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

        {/* SEO Tips */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">SEO Best Practices</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Use descriptive and unique meta titles and descriptions</li>
            <li>• Structure your content with proper heading hierarchy (H1, H2, H3)</li>
            <li>• Add alt text to all images</li>
            <li>• Use internal linking to improve page authority</li>
            <li>• Optimize page loading speed</li>
            <li>• Ensure mobile responsiveness</li>
            <li>• Add structured data markup</li>
            <li>• Create high-quality, original content</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SEOEnhancer;