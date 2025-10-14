'use client';
import React, { useState } from 'react';
import { Search, Zap, CheckCircle } from 'lucide-react';

interface SEOOptimizerProps {
  url?: string;
  onOptimize?: (results: SEOResults) => void;
}

interface SEOResults {
  score: number;
  issues: SEOIssue[];
  suggestions: SEOSuggestion[];
  metrics: SEOMetrics;
}

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  suggestion?: string;
}

interface SEOSuggestion {
  category: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  headingCount: number;
  imageCount: number;
  linkCount: number;
  wordCount: number;
}

const EnhancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  url = '',
  onOptimize
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SEOResults | null>(null);
  const [currentUrl, setCurrentUrl] = useState(url);

  const analyzeSEO = async () => {
    if (!currentUrl) return;

    setIsAnalyzing(true);
    
    // Simulate SEO analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResults: SEOResults = {
      score: 85,
      issues: [
        {
          type: 'warning',
          message: 'Meta description is too long',
          element: 'meta[name="description"]',
          suggestion: 'Keep meta descriptions between 150-160 characters'
        },
        {
          type: 'error',
          message: 'Missing alt text on images',
          element: 'img',
          suggestion: 'Add descriptive alt text to all images'
        },
        {
          type: 'info',
          message: 'Consider adding more internal links',
          element: 'body',
          suggestion: 'Add more internal links to improve site structure'
        }
      ],
      suggestions: [
        {
          category: 'Content',
          title: 'Improve Title Tag',
          description: 'Make your title tag more compelling and include target keywords',
          priority: 'high'
        },
        {
          category: 'Technical',
          title: 'Optimize Page Speed',
          description: 'Improve loading times by optimizing images and scripts',
          priority: 'medium'
        },
        {
          category: 'Content',
          title: 'Add More Headings',
          description: 'Use more H2 and H3 tags to structure your content better',
          priority: 'low'
        }
      ],
      metrics: {
        titleLength: 65,
        descriptionLength: 155,
        headingCount: 8,
        imageCount: 12,
        linkCount: 25,
        wordCount: 850
      }
    };

    setResults(mockResults);
    setIsAnalyzing(false);
    
    if (onOptimize) {
      onOptimize(mockResults);
    }
  };

  // const getScoreColor = (score: number) => {
  //   if (score >= 90) return 'text-green-400';
  //   if (score >= 70) return 'text-yellow-400';
  //   return 'text-red-400';
  // };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <Search className="w-8 h-8 mr-3 text-cyan-400" />
          SEO Optimizer
        </h2>

        <div className="mb-6">
          <label className="block text-white font-medium mb-2">
            Website URL
          </label>
          <div className="flex space-x-4">
            <input
              type="url"
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
              placeholder="https://example.com"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button
              onClick={analyzeSEO}
              disabled={!currentUrl || isAnalyzing}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Analyze
                </>
              )}
            </button>
          </div>
        </div>

        {results && (
          <div className="space-y-6">
            {/* Score */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">SEO Score</h3>
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-cyan-400">
                  {results.score}/100
                </div>
                <div className="flex-1">
                  <div className="w-full bg-gray-600 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${results.score}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400">{results.metrics.titleLength}</div>
                <div className="text-gray-300 text-sm">Title Length</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400">{results.metrics.descriptionLength}</div>
                <div className="text-gray-300 text-sm">Description Length</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400">{results.metrics.headingCount}</div>
                <div className="text-gray-300 text-sm">Headings</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400">{results.metrics.imageCount}</div>
                <div className="text-gray-300 text-sm">Images</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400">{results.metrics.linkCount}</div>
                <div className="text-gray-300 text-sm">Links</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400">{results.metrics.wordCount}</div>
                <div className="text-gray-300 text-sm">Words</div>
              </div>
            </div>

            {/* Issues */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Issues Found</h3>
              <div className="space-y-3">
                {results.issues.map((issue, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-600 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      issue.type === 'error' ? 'bg-red-400' :
                      issue.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                    }`}></div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{issue.message}</div>
                      {issue.element && (
                        <div className="text-gray-400 text-sm">Element: {issue.element}</div>
                      )}
                      {issue.suggestion && (
                        <div className="text-cyan-400 text-sm mt-1">{issue.suggestion}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Suggestions</h3>
              <div className="space-y-4">
                {results.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-600 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-white font-medium">{suggestion.title}</span>
                        <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(suggestion.priority)} bg-gray-700`}>
                          {suggestion.priority}
                        </span>
                      </div>
                      <div className="text-gray-300 text-sm">{suggestion.description}</div>
                      <div className="text-cyan-400 text-xs mt-1">{suggestion.category}</div>
                    </div>
                  </div>
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