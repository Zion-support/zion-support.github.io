import React, { useState, useEffect } from 'react';
interface SEOAnalysis {
  score: number;
  title: string;
  metaDescription: string;
  headings: { h1: number; h2: number; h3: number; h4: number; h5: number; h6: number };
  images: { total: number; withAlt: number; withoutAlt: number };
  links: { total: number; internal: number; external: number; broken: number };
  performance: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
  };
  accessibility: {
    score: number;
    issues: string[];
  };
  recommendations: string[];
const SEOAnalyzer: React.FC = () => {
  const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  useEffect(() => {
    if (isVisible && !analysis) {
      performAnalysis();
    }
  }, [isVisible, analysis]);
  const performAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      const mockAnalysis: SEOAnalysis = {
        score: 87,
        title: 'Revolutionary Tech Breakthrough 2030 - Zion Tech Group',
        metaDescription: 'Experience the convergence of consciousness computing, interdimensional technology, and quantum reality manipulation in our revolutionary tech showcase.',
        headings: { h1: 1, h2: 4, h3: 8, h4: 12, h5: 6, h6: 3 },
        images: { total: 15, withAlt: 12, withAlt: 3 },
        links: { total: 45, internal: 38, external: 7, broken: 0 },
        performance: {
          loadTime: 1.2,
          firstContentfulPaint: 0.8,
          largestContentfulPaint: 1.5,
          cumulativeLayoutShift: 0.05
        },
        accessibility: {
          score: 92,
          issues: ['Missing alt text on 3 images', 'Low contrast on 1 button']
        },
        recommendations: [
          'Add alt text to remaining images',
          'Optimize images for faster loading',
          'Add more internal links',
          'Improve meta description length',
          'Add structured data markup',
          'Optimize for mobile performance'
        ]
      };
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };
  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };
  return (
    <div className="fixed top-20 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 flex items-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span>SEO Analyzer</span>
        {analysis && (
          <div className={`w-2 h-2 rounded-full ${getScoreBg(analysis.score)}`}></div>
        )}
      </button>
      {isVisible && (
        <div className="absolute top-12 right-0 w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">SEO Analysis</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {isAnalyzing ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Analyzing page SEO...</p>
            </div>
          ) : analysis ? (
            <div className="space-y-6">
              {/* Overall Score */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreBg(analysis.score)} mb-2`}>
                  <span className={`text-2xl font-bold ${getScoreColor(analysis.score)}`}>
                    {analysis.score}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Overall SEO Score</p>
              </div>
              {/* Page Info */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Page Information</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Title:</span>
                    <p className="text-gray-600 truncate">{analysis.title}</p>
                  </div>
                  <div>
                    <span className="font-medium">Meta Description:</span>
                    <p className="text-gray-600">{analysis.metaDescription}</p>
                  </div>
                </div>
              </div>
              {/* Headings Structure */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Headings Structure</h4>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  {Object.entries(analysis.headings).map(([level, count]) => (
                    <div key={level} className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-semibold">{count}</div>
                      <div className="text-gray-600">{level.toUpperCase()}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Images */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Images</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold text-green-600">{analysis.images.withAlt}</div>
                    <div className="text-gray-600">With Alt Text</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold text-red-600">{analysis.images.withoutAlt}</div>
                    <div className="text-gray-600">Missing Alt Text</div>
                  </div>
                </div>
              </div>
              {/* Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Links</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold">{analysis.links.internal}</div>
                    <div className="text-gray-600">Internal</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <div className="font-semibold">{analysis.links.external}</div>
                    <div className="text-gray-600">External</div>
                  </div>
                </div>
              </div>
              {/* Performance */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Load Time:</span>
                    <span className="font-medium">{analysis.performance.loadTime}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>First Contentful Paint:</span>
                    <span className="font-medium">{analysis.performance.firstContentfulPaint}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Largest Contentful Paint:</span>
                    <span className="font-medium">{analysis.performance.largestContentfulPaint}s</span>
                  </div>
                </div>
              </div>
              {/* Accessibility */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getScoreBg(analysis.accessibility.score)} ${getScoreColor(analysis.accessibility.score)}`}>
                    {analysis.accessibility.score}/100
                  </span>
                  <span className="text-sm text-gray-600">Score</span>
                </div>
                {analysis.accessibility.issues.length > 0 && (
                  <div className="text-sm text-red-600">
                    <p className="font-medium mb-1">Issues:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {analysis.accessibility.issues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* Recommendations */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Recommendations</h4>
                <ul className="space-y-1 text-sm">
                  {analysis.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span className="text-gray-600">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );

};

export default SEOAnalyzer;
</p></p>
