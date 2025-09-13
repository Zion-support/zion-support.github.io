import React, { useState, useEffect } from 'react';

interface SEOData {
  titleScore: number;
  metaDescriptionScore: number;
  headingStructureScore: number;
  imageAltScore: number;
  internalLinksScore: number;
  pageSpeedScore: number;
  mobileFriendlyScore: number;
  overallScore: number;
  suggestions: string[];
}

export default function SEOOptimizer() {
  const [seoData, setSeoData] = useState<SEOData>({
    titleScore: 0,
    metaDescriptionScore: 0,
    headingStructureScore: 0,
    imageAltScore: 0,
    internalLinksScore: 0,
    pageSpeedScore: 0,
    mobileFriendlyScore: 0,
    overallScore: 0,
    suggestions: [],
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate SEO analysis
    const analyzeSEO = () => {
      const scores = {
        titleScore: 85 + Math.random() * 15,
        metaDescriptionScore: 90 + Math.random() * 10,
        headingStructureScore: 88 + Math.random() * 12,
        imageAltScore: 92 + Math.random() * 8,
        internalLinksScore: 87 + Math.random() * 13,
        pageSpeedScore: 89 + Math.random() * 11,
        mobileFriendlyScore: 95 + Math.random() * 5,
      };

      const overallScore = Object.values(scores).reduce((sum, score) => sum + score, 0) / Object.keys(scores).length;

      const suggestions = [
        'Add more internal links to related content',
        'Optimize images for faster loading',
        'Include more long-tail keywords in headings',
        'Add schema markup for better rich snippets',
        'Improve meta descriptions with action words',
        'Add more external authority links',
        'Optimize for featured snippets',
        'Improve Core Web Vitals scores',
      ].slice(0, 3 + Math.floor(Math.random() * 3));

      setSeoData({
        ...scores,
        overallScore,
        suggestions,
      });
    };

    analyzeSEO();
    const interval = setInterval(analyzeSEO, 10000);
    return () => clearInterval(interval);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-50 dark:bg-green-900/20';
    if (score >= 70) return 'bg-yellow-50 dark:bg-yellow-900/20';
    return 'bg-red-50 dark:bg-red-900/20';
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200"
      >
        {isVisible ? 'Hide' : 'Show'} SEO
      </button>

      {isVisible && (
        <div className="absolute top-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            SEO Optimization Score
          </h3>
          
          {/* Overall Score */}
          <div className={`${getScoreBgColor(seoData.overallScore)} p-4 rounded-lg mb-4`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Score</span>
              <span className={`text-2xl font-bold ${getScoreColor(seoData.overallScore)}`}>
                {seoData.overallScore.toFixed(0)}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className={`h-2 rounded-full ${
                  seoData.overallScore >= 90 ? 'bg-green-500' : 
                  seoData.overallScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${seoData.overallScore}%` }}
              ></div>
            </div>
          </div>

          {/* Individual Scores */}
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Title Optimization</span>
              <span className={`text-sm font-medium ${getScoreColor(seoData.titleScore)}`}>
                {seoData.titleScore.toFixed(0)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Meta Description</span>
              <span className={`text-sm font-medium ${getScoreColor(seoData.metaDescriptionScore)}`}>
                {seoData.metaDescriptionScore.toFixed(0)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Heading Structure</span>
              <span className={`text-sm font-medium ${getScoreColor(seoData.headingStructureScore)}`}>
                {seoData.headingStructureScore.toFixed(0)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Image Alt Tags</span>
              <span className={`text-sm font-medium ${getScoreColor(seoData.imageAltScore)}`}>
                {seoData.imageAltScore.toFixed(0)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Internal Links</span>
              <span className={`text-sm font-medium ${getScoreColor(seoData.internalLinksScore)}`}>
                {seoData.internalLinksScore.toFixed(0)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Page Speed</span>
              <span className={`text-sm font-medium ${getScoreColor(seoData.pageSpeedScore)}`}>
                {seoData.pageSpeedScore.toFixed(0)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Mobile Friendly</span>
              <span className={`text-sm font-medium ${getScoreColor(seoData.mobileFriendlyScore)}`}>
                {seoData.mobileFriendlyScore.toFixed(0)}
              </span>
            </div>
          </div>

          {/* Suggestions */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Optimization Suggestions</h4>
            <div className="space-y-2">
              {seoData.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{suggestion}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>SEO Grade: {seoData.overallScore >= 90 ? 'A' : seoData.overallScore >= 70 ? 'B' : 'C'}</span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Optimized
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}