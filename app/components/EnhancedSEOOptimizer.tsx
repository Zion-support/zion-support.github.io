import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  suggestion: string;
  priority: 'high' | 'medium' | 'low';
}

interface SEOOptimizerProps {
  url?: string;
  autoAnalyze?: boolean;
  showDetails?: boolean;
}

const EnhancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  url = '',
  autoAnalyze = true
}) => {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [seoScore, setSeoScore] = useState(0);
  const [issues, setIssues] = useState<SEOIssue[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const analyzeSEO = async () => {
    setIsAnalyzing(true);
    
    // Simulate SEO analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis results
    const mockIssues: SEOIssue[] = [
      {
        id: '1',
        type: 'error',
        title: 'Missing Meta Description',
        description: 'The page is missing a meta description tag.',
        suggestion: 'Add a compelling meta description between 150-160 characters.',
        priority: 'high'
      },
      {
        id: '2',
        type: 'warning',
        title: 'Title Tag Too Long',
        description: 'The title tag is longer than 60 characters.',
        suggestion: 'Shorten the title tag to improve search engine display.',
        priority: 'medium'
      },
      {
        id: '3',
        type: 'info',
        title: 'Missing Alt Text',
        description: 'Some images are missing alt text attributes.',
        suggestion: 'Add descriptive alt text to all images for better accessibility.',
        priority: 'low'
      }
    ];

    const mockSuggestions = [
      'Add structured data markup for better search results',
      'Optimize images for faster loading',
      'Improve internal linking structure',
      'Add a sitemap.xml file',
      'Implement breadcrumb navigation'
    ];

    setIssues(mockIssues);
    setSuggestions(mockSuggestions);
    setSeoScore(75);
    setIsAnalyzing(false);
  };

  useEffect(() => {
    if (autoAnalyze && currentUrl) {
      analyzeSEO();
    }
  }, [currentUrl, autoAnalyze]);

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Search className="w-6 h-6 mr-2 text-blue-600" />
            SEO Optimizer
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-600">SEO Score</div>
              <div className={`text-2xl font-bold ${getScoreColor(seoScore)}`}>
                {seoScore}/100
              </div>
            </div>
          </div>
        </div>

        {/* URL Input */}
        <div className="mb-6">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
            Website URL
          </label>
          <div className="flex space-x-2">
            <input
              type="url"
              id="url"
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
              placeholder="https://example.com"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={analyzeSEO}
              disabled={isAnalyzing || !currentUrl}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Analyze
                </>
              )}
            </button>
          </div>
        </div>

        {/* SEO Issues */}
        {issues.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Issues Found</h3>
            <div className="space-y-4">
              {issues.map((issue) => (
                <div key={issue.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    {getIssueIcon(issue.type)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{issue.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(issue.priority)}`}>
                          {issue.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{issue.description}</p>
                      <p className="text-sm text-blue-600 font-medium">{issue.suggestion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Suggestions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Apply Optimizations
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
            <ExternalLink className="w-5 h-5 mr-2" />
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSEOOptimizer;