import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Search, 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Smartphone,
  Globe,
  Target,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  X,
  RefreshCw,
  Download,
  Share2
} from 'lucide-react';

interface SEOAnalysis {

  title: string;
  description: string;
  keywords: string[];
  headings: { level: number; text: string; id: string }[];
  images: { src: string; alt: string; hasAlt: boolean }[];
  links: { href: string; text: string; isInternal: boolean }[];
  metaTags: { name: string; content: string }[];
}

interface AccessibilityAnalysis {

  contrastRatio: number;
  hasSkipLinks: boolean;
  hasProperHeadings: boolean;
  hasAltText: boolean;
  hasFocusIndicators: boolean;
  hasKeyboardNavigation: boolean;
  hasScreenReaderSupport: boolean;
  issues: string[];
}

export const EnhancedSEOAccessibility: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [seoAnalysis, setSeoAnalysis] = useState<SEOAnalysis | null>(null);
  const [accessibilityAnalysis, setAccessibilityAnalysis] = useState<AccessibilityAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentTab, setCurrentTab] = useState<'seo' | 'accessibility'>('seo');

  // Analyze SEO
  const analyzeSEO = useCallback(async () => {

    setIsAnalyzing(true);
    
    try {

      // Get page title
      const title = document.title;
      
      // Get meta description
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      
      // Get meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
      const keywords = metaKeywords ? metaKeywords.split(',').map(k => k.trim()) : [];
      
      // Get headings
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((heading, index) => ({

        level: parseInt(heading.tagName.charAt(1)),
        text: heading.textContent || '',
        id: heading.id || `heading-${index}`
      }));
      
      // Get images
      const images = Array.from(document.querySelectorAll('img')).map(img => ({

        src: img.src,
        alt: img.alt,
        hasAlt: !!img.alt
      }));
      
      // Get links
      const links = Array.from(document.querySelectorAll('a')).map(link => ({

        href: link.href,
        text: link.textContent || '',
        isInternal: link.href.startsWith(window.location.origin) || link.href.startsWith('/')
      }));
      
      // Get meta tags
      const metaTags = Array.from(document.querySelectorAll('meta')).map(meta => ({

        name: meta.getAttribute('name') || meta.getAttribute('property') || '',
        content: meta.getAttribute('content') || ''
      }));
      
      const analysis: SEOAnalysis = {

        title,
        description: metaDescription,
        keywords,
        headings,
        images,
        links,
        metaTags
      };
      
      setSeoAnalysis(analysis);
      
    } catch (error) {

      // // // console.error('Error analyzing SEO:', error);
    } finally {

      setIsAnalyzing(false);
    }
  }, []);

  // Analyze accessibility
  const analyzeAccessibility = useCallback(async () => {

    setIsAnalyzing(true);
    
    try {

      const issues: string[] = [];
      
      // Check contrast ratio (simplified)
      const contrastRatio = 4.5; // This would need a proper contrast calculation library
      
      // Check for skip links
      const hasSkipLinks = !!document.querySelector('a[href^="#main"], a[href^="#content"]');
      
      // Check heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let hasProperHeadings = true;
      let currentLevel = 0;
      
      for (let i = 0; i < headings.length; i++) {

        const level = parseInt(headings[i].tagName.charAt(1));
        if (level > currentLevel + 1) {

          hasProperHeadings = false;
          issues.push(`Heading level ${level} follows level ${currentLevel} (should be level ${currentLevel + 1})`);
        }
        currentLevel = level;
      }
      
      // Check alt text
      const images = document.querySelectorAll('img');
      let hasAltText = true;
      for (let i = 0; i < images.length; i++) {

        if (!images[i].alt) {

          hasAltText = false;
          issues.push(`Image at ${images[i].src} is missing alt text`);
        }
      }
      
      // Check focus indicators
      const hasFocusIndicators = document.querySelectorAll('*:focus').length > 0;
      
      // Check keyboard navigation
      const hasKeyboardNavigation = !!document.querySelector('a[tabindex], button[tabindex], input[tabindex]');
      
      // Check screen reader support
      const hasScreenReaderSupport = !!document.querySelector('[aria-label], [aria-labelledby], [role]');
      
      const analysis: AccessibilityAnalysis = {

        contrastRatio,
        hasSkipLinks,
        hasProperHeadings,
        hasAltText,
        hasFocusIndicators,
        hasKeyboardNavigation,
        hasScreenReaderSupport,
        issues
      };
      
      setAccessibilityAnalysis(analysis);
      
    } catch (error) {

      // // // console.error('Error analyzing accessibility:', error);
    } finally {

      setIsAnalyzing(false);
    }
  }, []);

  // Run full analysis
  const runFullAnalysis = useCallback(async () => {

    await Promise.all([analyzeSEO(), analyzeAccessibility()]);
  }, [analyzeSEO, analyzeAccessibility]);

  // Generate SEO report
  const generateSEOReport = useCallback(() => {

    if (!seoAnalysis) return;
    
    const report = `
SEO Analysis Report - ${new Date().toLocaleDateString()}

Page Title: ${seoAnalysis.title}
Meta Description: ${seoAnalysis.description}
Keywords: ${seoAnalysis.keywords.join(', ')}

Headings (${seoAnalysis.headings.length}):
${seoAnalysis.headings.map(h => `  ${'#'.repeat(h.level)} ${h.text}`).join('\n')}

Images (${seoAnalysis.images.length}):
${seoAnalysis.images.map(img => `  ${img.src} - Alt: ${img.alt || 'MISSING'}`).join('\n')}

Internal Links: ${seoAnalysis.links.filter(l => l.isInternal).length}
External Links: ${seoAnalysis.links.filter(l => !l.isInternal).length}
    `;
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seo-analysis-report.txt';
    a.click();
    URL.revokeObjectURL(url);
  }, [seoAnalysis]);

  // Toggle visibility
  const toggleVisibility = useCallback(() => {

    setIsVisible(!isVisible);
  }, [isVisible]);

  // Get SEO score
  const getSEOScore = useCallback(() => {

    if (!seoAnalysis) return 0;
    
    let score = 100;
    
    if (!seoAnalysis.title) score -= 20;
    if (!seoAnalysis.description) score -= 15;
    if (seoAnalysis.keywords.length === 0) score -= 10;
    if (seoAnalysis.headings.length === 0) score -= 15;
    if (seoAnalysis.images.some(img => !img.hasAlt)) score -= 10;
    if (seoAnalysis.links.length === 0) score -= 10;
    
    return Math.max(0, score);
  }, [seoAnalysis]);

  // Get accessibility score
  const getAccessibilityScore = useCallback(() => {

    if (!accessibilityAnalysis) return 0;
    
    let score = 100;
    
    if (!accessibilityAnalysis.hasSkipLinks) score -= 15;
    if (!accessibilityAnalysis.hasProperHeadings) score -= 20;
    if (!accessibilityAnalysis.hasAltText) score -= 20;
    if (!accessibilityAnalysis.hasFocusIndicators) score -= 15;
    if (!accessibilityAnalysis.hasKeyboardNavigation) score -= 15;
    if (!accessibilityAnalysis.hasScreenReaderSupport) score -= 15;
    
    return Math.max(0, score);
  }, [accessibilityAnalysis]);

  useEffect(() => {

    if (isVisible) {

      runFullAnalysis();
    }
  }, [isVisible, runFullAnalysis]);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={toggleVisibility}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="SEO & Accessibility Monitor"
      >
        <Search className="w-6 h-6" />
      </motion.button>

      {/* Analysis Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 left-6 z-40 w-96 max-h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <h3 className="font-semibold">SEO & Accessibility</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={runFullAnalysis}
                    disabled={isAnalyzing}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
                  </button>
                  <button
                    onClick={toggleVisibility}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 max-h-[calc(80vh-80px)] overflow-y-auto">
              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setCurrentTab('seo')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${

                    currentTab === 'seo'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  SEO
                </button>
                <button
                  onClick={() => setCurrentTab('accessibility')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${

                    currentTab === 'accessibility'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Accessibility
                </button>
              </div>

              {/* SEO Tab */}
              {currentTab === 'seo' && (
                <div className="space-y-4">
                  {seoAnalysis ? (
                    <>
                      {/* SEO Score */}
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-blue-900 dark:text-blue-100">SEO Score</span>
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {getSEOScore()}
                          </span>
                        </div>
                        <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                          {getSEOScore() >= 90 ? 'Excellent' : 
                           getSEOScore() >= 70 ? 'Good' : 
                           getSEOScore() >= 50 ? 'Fair' : 'Poor'}
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-sm text-gray-600 dark:text-gray-400">Title Length</div>
                          <div className="text-lg font-semibold mt-1">
                            {seoAnalysis.title.length} chars
                          </div>
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-sm text-gray-600 dark:text-gray-400">Description</div>
                          <div className="text-lg font-semibold mt-1">
                            {seoAnalysis.description.length} chars
                          </div>
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-sm text-gray-600 dark:text-gray-400">Headings</div>
                          <div className="text-lg font-semibold mt-1">
                            {seoAnalysis.headings.length}
                          </div>
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-sm text-gray-600 dark:text-gray-400">Images</div>
                          <div className="text-lg font-semibold mt-1">
                            {seoAnalysis.images.length}
                          </div>
                        </div>
                      </div>

                      {/* Issues */}
                      {seoAnalysis.images.some(img => !img.hasAlt) && (
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                          <div className="flex items-start space-x-2">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                            <div>
                              <h5 className="font-medium text-red-900 dark:text-red-100">
                                Missing Alt Text
                              </h5>
                              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                                {seoAnalysis.images.filter(img => !img.hasAlt).length} images are missing alt text
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Export Button */}
                      <button
                        onClick={generateSEOReport}
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Export SEO Report</span>
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      {isAnalyzing ? (
                        <div className="flex items-center justify-center space-x-2">
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Analyzing SEO...</span>
                        </div>
                      ) : (
                        <span>Click refresh to analyze SEO</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Accessibility Tab */}
              {currentTab === 'accessibility' && (
                <div className="space-y-4">
                  {accessibilityAnalysis ? (
                    <>
                      {/* Accessibility Score */}
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-green-900 dark:text-green-100">Accessibility Score</span>
                          <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {getAccessibilityScore()}
                          </span>
                        </div>
                        <div className="text-sm text-green-700 dark:text-green-300 mt-1">
                          {getAccessibilityScore() >= 90 ? 'Excellent' : 
                           getAccessibilityScore() >= 70 ? 'Good' : 
                           getAccessibilityScore() >= 50 ? 'Fair' : 'Poor'}
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className={`p-3 rounded-lg ${

                          accessibilityAnalysis.hasSkipLinks ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
                        }`}>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Skip Links</div>
                          <div className="text-lg font-semibold mt-1">
                            {accessibilityAnalysis.hasSkipLinks ? '✓' : '✗'}
                          </div>
                        </div>
                        <div className={`p-3 rounded-lg ${

                          accessibilityAnalysis.hasProperHeadings ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
                        }`}>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Heading Structure</div>
                          <div className="text-lg font-semibold mt-1">
                            {accessibilityAnalysis.hasProperHeadings ? '✓' : '✗'}
                          </div>
                        </div>
                        <div className={`p-3 rounded-lg ${

                          accessibilityAnalysis.hasAltText ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
                        }`}>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Alt Text</div>
                          <div className="text-lg font-semibold mt-1">
                            {accessibilityAnalysis.hasAltText ? '✓' : '✗'}
                          </div>
                        </div>
                        <div className={`p-3 rounded-lg ${

                          accessibilityAnalysis.hasFocusIndicators ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
                        }`}>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Focus Indicators</div>
                          <div className="text-lg font-semibold mt-1">
                            {accessibilityAnalysis.hasFocusIndicators ? '✓' : '✗'}
                          </div>
                        </div>
                      </div>

                      {/* Issues */}
                      {accessibilityAnalysis.issues.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">Issues Found</h4>
                          {accessibilityAnalysis.issues.map((issue, index) => (
                            <div key={index} className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                              <div className="flex items-start space-x-2">
                                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-red-700 dark:text-red-300">{issue}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      {isAnalyzing ? (
                        <div className="flex items-center justify-center space-x-2">
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Analyzing accessibility...</span>
                        </div>
                      ) : (
                        <span>Click refresh to analyze accessibility</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedSEOAccessibility;