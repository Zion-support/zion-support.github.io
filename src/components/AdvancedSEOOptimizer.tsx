import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  category: 'meta' | 'content' | 'performance' | 'accessibility' | 'technical';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  fix: string;
  resolved: boolean;
}

interface SEOOptimizerProps {
  isVisible: boolean;
  onClose: () => void;
}

const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({ isVisible, onClose }) => {
  const [issues, setIssues] = useState<SEOIssue[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImpact, setSelectedImpact] = useState<string>('all');

  const categories = ['all', 'meta', 'content', 'performance', 'accessibility', 'technical'];
  const impacts = ['all', 'high', 'medium', 'low'];

  const analyzeSEO = useCallback(async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setIssues([]);

    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => Math.min(prev + 10, 90));
    }, 200);

    // Analyze various SEO aspects
    const newIssues: SEOIssue[] = [];

    // Meta tags analysis
    await new Promise(resolve => setTimeout(resolve, 500));
    setAnalysisProgress(20);

    const title = document.title;
    if (!title || title.length < 30) {
      newIssues.push({
        id: 'title-length',
        type: 'warning',
        category: 'meta',
        title: 'Title Tag Too Short',
        description: `Current title length is ${title.length} characters. Recommended: 30-60 characters.`,
        impact: 'medium',
        fix: 'Add more descriptive keywords to your title tag while keeping it under 60 characters.',
        resolved: false
      });
    }

    if (title && title.length > 60) {
      newIssues.push({
        id: 'title-long',
        type: 'warning',
        category: 'meta',
        title: 'Title Tag Too Long',
        description: `Current title length is ${title.length} characters. Recommended: 30-60 characters.`,
        impact: 'medium',
        fix: 'Shorten your title tag to under 60 characters to avoid truncation in search results.',
        resolved: false
      });
    }

    // Meta description analysis
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');
    if (!metaDescription) {
      newIssues.push({
        id: 'meta-description-missing',
        type: 'error',
        category: 'meta',
        title: 'Missing Meta Description',
        description: 'No meta description found. This is crucial for search engine snippets.',
        impact: 'high',
        fix: 'Add a meta description tag with 120-160 characters describing your page content.',
        resolved: false
      });
    } else if (metaDescription.length < 120 || metaDescription.length > 160) {
      newIssues.push({
        id: 'meta-description-length',
        type: 'warning',
        category: 'meta',
        title: 'Meta Description Length Issue',
        description: `Meta description is ${metaDescription.length} characters. Recommended: 120-160 characters.`,
        impact: 'medium',
        fix: 'Adjust meta description length to be between 120-160 characters.',
        resolved: false
      });
    }

    // Heading structure analysis
    await new Promise(resolve => setTimeout(resolve, 500));
    setAnalysisProgress(40);

    const h1Count = document.querySelectorAll('h1').length;
    
    if (h1Count === 0) {
      newIssues.push({
        id: 'no-h1',
        type: 'error',
        category: 'content',
        title: 'Missing H1 Tag',
        description: 'No H1 heading found. Each page should have exactly one H1 tag.',
        impact: 'high',
        fix: 'Add a single H1 tag that describes the main topic of the page.',
        resolved: false
      });
    } else if (h1Count > 1) {
      newIssues.push({
        id: 'multiple-h1',
        type: 'warning',
        category: 'content',
        title: 'Multiple H1 Tags',
        description: `Found ${h1Count} H1 tags. Each page should have exactly one H1 tag.`,
        impact: 'medium',
        fix: 'Use only one H1 tag per page. Use H2-H6 for other headings.',
        resolved: false
      });
    }

    // Image alt text analysis
    await new Promise(resolve => setTimeout(resolve, 500));
    setAnalysisProgress(60);

    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    
    if (imagesWithoutAlt.length > 0) {
      newIssues.push({
        id: 'images-no-alt',
        type: 'warning',
        category: 'accessibility',
        title: 'Images Missing Alt Text',
        description: `${imagesWithoutAlt.length} images are missing alt text attributes.`,
        impact: 'medium',
        fix: 'Add descriptive alt text to all images for accessibility and SEO.',
        resolved: false
      });
    }

    // Link analysis
    await new Promise(resolve => setTimeout(resolve, 500));
    setAnalysisProgress(80);

    const links = document.querySelectorAll('a');
    const linksWithoutText = Array.from(links).filter(link => !link.textContent?.trim());
    
    if (linksWithoutText.length > 0) {
      newIssues.push({
        id: 'links-no-text',
        type: 'warning',
        category: 'content',
        title: 'Links Without Text',
        description: `${linksWithoutText.length} links are missing descriptive text.`,
        impact: 'low',
        fix: 'Add descriptive text to all links for better user experience and SEO.',
        resolved: false
      });
    }

    // Performance analysis
    await new Promise(resolve => setTimeout(resolve, 500));
    setAnalysisProgress(90);

    // Check for large images
    const largeImages = Array.from(images).filter(img => {
      const rect = img.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && (rect.width > 1920 || rect.height > 1080);
    });

    if (largeImages.length > 0) {
      newIssues.push({
        id: 'large-images',
        type: 'info',
        category: 'performance',
        title: 'Large Images Detected',
        description: `${largeImages.length} images appear to be larger than recommended dimensions.`,
        impact: 'medium',
        fix: 'Optimize images for web by resizing and compressing them appropriately.',
        resolved: false
      });
    }

    // Complete analysis
    clearInterval(progressInterval);
    setAnalysisProgress(100);
    setIssues(newIssues);
    setIsAnalyzing(false);
  }, []);

  const resolveIssue = useCallback((issueId: string) => {
    setIssues(prev => prev.map(issue => 
      issue.id === issueId ? { ...issue, resolved: true } : issue
    ));
  }, []);

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return '🔴';
      case 'warning': return '🟡';
      case 'info': return '🔵';
      default: return '⚪';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'meta': return '🏷️';
      case 'content': return '📝';
      case 'performance': return '⚡';
      case 'accessibility': return '♿';
      case 'technical': return '🔧';
      default: return '📋';
    }
  };

  const filteredIssues = issues.filter(issue => {
    const matchesCategory = selectedCategory === 'all' || issue.category === selectedCategory;
    const matchesImpact = selectedImpact === 'all' || issue.impact === selectedImpact;
    return matchesCategory && matchesImpact && !issue.resolved;
  });

  const issueStats = {
    total: issues.length,
    resolved: issues.filter(i => i.resolved).length,
    errors: issues.filter(i => i.type === 'error' && !i.resolved).length,
    warnings: issues.filter(i => i.type === 'warning' && !i.resolved).length,
    info: issues.filter(i => i.type === 'info' && !i.resolved).length
  };

  useEffect(() => {
    if (isVisible) {
      analyzeSEO();
    }
  }, [isVisible, analyzeSEO]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Advanced SEO Optimizer</h2>
                  <p className="text-gray-600 mt-1">
                    {issueStats.resolved} of {issueStats.total} issues resolved
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{issueStats.errors}</div>
                  <div className="text-sm text-red-600">Errors</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{issueStats.warnings}</div>
                  <div className="text-sm text-yellow-600">Warnings</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{issueStats.info}</div>
                  <div className="text-sm text-blue-600">Info</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{issueStats.resolved}</div>
                  <div className="text-sm text-green-600">Resolved</div>
                </div>
              </div>

              {/* Filters */}
              <div className="flex gap-4 mb-6">
                <div className="flex gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  {impacts.map(impact => (
                    <button
                      key={impact}
                      onClick={() => setSelectedImpact(impact)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedImpact === impact
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {impact === 'all' ? 'All' : impact.charAt(0).toUpperCase() + impact.slice(1)}
                    </button>
                  ))}
                </div>
                <button
                  onClick={analyzeSEO}
                  disabled={isAnalyzing}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors text-sm font-medium"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Re-analyze'}
                </button>
              </div>

              {/* Progress Bar */}
              {isAnalyzing && (
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${analysisProgress}%` }}
                  ></div>
                </div>
              )}
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-300px)] p-6">
              {filteredIssues.length === 0 && !isAnalyzing ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Great job!</h3>
                  <p className="text-gray-600">No SEO issues found in the selected category and impact level.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredIssues.map((issue) => (
                    <motion.div
                      key={issue.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">{getIssueIcon(issue.type)}</span>
                            <span className="text-xl">{getCategoryIcon(issue.category)}</span>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {issue.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(issue.impact)}`}>
                              {issue.impact} impact
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{issue.description}</p>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="text-sm font-medium text-blue-900 mb-1">How to fix:</div>
                            <div className="text-sm text-blue-800">{issue.fix}</div>
                          </div>
                        </div>
                        <button
                          onClick={() => resolveIssue(issue.id)}
                          className="ml-4 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
                        >
                          Mark as Resolved
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdvancedSEOOptimizer;