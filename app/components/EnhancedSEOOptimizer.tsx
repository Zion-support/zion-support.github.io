'use client';

import React, { useState } from 'react';
import { Search, TrendingUp, Target, BarChart, CheckCircle, AlertCircle } from 'lucide-react';

interface SEOAnalysis {
  score: number;
  issues: string[];
  suggestions: string[];
  keywords: string[];
  readability: number;
}

interface EnhancedSEOOptimizerProps {
  className?: string;
  onAnalysisComplete?: (_analysis: SEOAnalysis) => void;
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({
  className = '',
  onAnalysisComplete
}) => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeSEO = async () => {
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      // Simulate SEO analysis
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockAnalysis: SEOAnalysis = {
        score: Math.floor(Math.random() * 40) + 60, // 60-100
        issues: [
          'Missing meta description',
          'Images without alt text',
          'Slow page load speed',
          'Missing heading structure'
        ],
        suggestions: [
          'Add a compelling meta description (150-160 characters)',
          'Include alt text for all images',
          'Optimize images and enable compression',
          'Use proper heading hierarchy (H1, H2, H3)'
        ],
        keywords: ['AI', 'technology', 'automation', 'digital transformation'],
        readability: Math.floor(Math.random() * 30) + 70 // 70-100
      };

      setAnalysis(mockAnalysis);
      onAnalysisComplete?.(mockAnalysis);
    } catch (_err) {
      setError('Failed to analyze SEO. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500/20';
    if (score >= 70) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <Search className="h-6 w-6 text-emerald-400" />
        <h3 className="text-xl font-semibold text-white">SEO Optimizer</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="seo-url" className="block text-sm font-medium text-gray-300 mb-2">
            Website URL
          </label>
          <div className="flex gap-2">
            <input
              id="seo-url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              onClick={analyzeSEO}
              disabled={isAnalyzing}
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <TrendingUp className="w-4 h-4" />
                  Analyze
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-300">{error}</span>
          </div>
        )}

        {analysis && (
          <div className="space-y-6">
            {/* Score Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg ${getScoreBg(analysis.score)}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">SEO Score</span>
                  <BarChart className="w-5 h-5 text-emerald-400" />
                </div>
                <div className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
                  {analysis.score}/100
                </div>
              </div>
              
              <div className="p-4 bg-blue-500/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Readability</span>
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {analysis.readability}/100
                </div>
              </div>
              
              <div className="p-4 bg-purple-500/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Keywords</span>
                  <Search className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {analysis.keywords.length}
                </div>
              </div>
            </div>

            {/* Issues */}
            {analysis.issues.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  Issues Found
                </h4>
                <div className="space-y-2">
                  {analysis.issues.map((issue, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-red-300">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {analysis.suggestions.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  Recommendations
                </h4>
                <div className="space-y-2">
                  {analysis.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-emerald-300">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Keywords */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Detected Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedSEOOptimizer;