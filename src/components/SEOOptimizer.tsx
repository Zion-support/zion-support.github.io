import React, { useState, useEffect, useCallback } from 'react';
import { 
  Search, 
  TrendingUp, 
  Target, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  RefreshCw,
  Download,
  Eye,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  FileText,
  Link,
  Image,
  Code
} from 'lucide-react';

interface SEOAnalysis {
  pageUrl: string;
  title: string;
  metaDescription: string;
  headings: string[];
  images: string[];
  links: string[];
  keywords: string[];
  score: number;
  issues: string[];
  recommendations: string[];
}

interface SEOReport {
  totalPages: number;
  averageScore: number;
  pagesWithIssues: number;
  topIssues: string[];
  pageAnalyses: SEOAnalysis[];
  summary: string;
}

const SEOOptimizer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [report, setReport] = useState<SEOReport | null>(null);
  const [selectedPage, setSelectedPage] = useState<SEOAnalysis | null>(null);

  const analyzeSEO = useCallback(async () => {
    setIsAnalyzing(true);
    try {
      // Simulate analyzing all pages for SEO
      const samplePages = [
        {
          url: '/',
          title: 'Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services',
          metaDescription: 'Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.',
          headings: ['AI-Powered Business Solutions', 'Comprehensive IT Services', 'Micro-SaaS Solutions'],
          images: ['/images/hero-ai-solutions.jpg', '/images/hero-it-services.jpg'],
          links: ['/services', '/ai-solutions', '/about', '/contact'],
          keywords: ['AI solutions', 'quantum computing', 'cybersecurity', 'digital transformation']
        },
        {
          url: '/services',
          title: 'Our Services - Comprehensive Technology Solutions',
          metaDescription: 'Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation.',
          headings: ['AI Solutions', 'Cloud & DevOps', 'Cybersecurity', 'Digital Transformation'],
          images: ['/images/services-overview.jpg'],
          links: ['/ai-solutions', '/cloud-devops', '/cybersecurity', '/about'],
          keywords: ['technology services', 'AI solutions', 'cloud infrastructure', 'cybersecurity']
        },
        {
          url: '/ai-solutions',
          title: 'AI Solutions - Artificial Intelligence Services',
          metaDescription: 'Cutting-edge artificial intelligence solutions including machine learning, predictive analytics, and AI automation.',
          headings: ['Machine Learning', 'Predictive Analytics', 'AI Automation', 'Business Intelligence'],
          images: ['/images/ai-solutions.jpg'],
          links: ['/services', '/about', '/contact'],
          keywords: ['artificial intelligence', 'machine learning', 'predictive analytics', 'AI automation']
        }
      ];

      const pageAnalyses: SEOAnalysis[] = samplePages.map(page => {
        const score = calculateSEOScore(page);
        const issues = identifySEOIssues(page);
        const recommendations = generateSEORecommendations(issues);

        return {
          pageUrl: page.url,
          title: page.title,
          metaDescription: page.metaDescription,
          headings: page.headings,
          images: page.images,
          links: page.links,
          keywords: page.keywords,
          score,
          issues,
          recommendations
        };
      });

      const totalPages = pageAnalyses.length;
      const averageScore = Math.round(
        pageAnalyses.reduce((sum, page) => sum + page.score, 0) / totalPages
      );
      const pagesWithIssues = pageAnalyses.filter(page => page.issues.length > 0).length;

      // Collect all issues and count frequency
      const issueCounts: Record<string, number> = {};
      pageAnalyses.forEach(page => {
        page.issues.forEach(issue => {
          issueCounts[issue] = (issueCounts[issue] || 0) + 1;
        });
      });

      const topIssues = Object.entries(issueCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([issue]) => issue);

      const summary = generateSummary(pageAnalyses, topIssues);

      setReport({
        totalPages,
        averageScore,
        pagesWithIssues,
        topIssues,
        pageAnalyses,
        summary
      });
    } catch (error) {
      console.error('Error analyzing SEO:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  useEffect(() => {
    // Auto-analyze SEO when component mounts
    analyzeSEO();
  }, [analyzeSEO]);

  const calculateSEOScore = (page: any): number => {
    let score = 0;
    let maxScore = 0;

    // Title optimization (0-20 points)
    maxScore += 20;
    if (page.title.length >= 30 && page.title.length <= 60) {
      score += 20;
    } else if (page.title.length > 0) {
      score += 10;
    }

    // Meta description (0-15 points)
    maxScore += 15;
    if (page.metaDescription.length >= 120 && page.metaDescription.length <= 160) {
      score += 15;
    } else if (page.metaDescription.length > 0) {
      score += 8;
    }

    // Headings (0-15 points)
    maxScore += 15;
    if (page.headings.length >= 3) {
      score += 15;
    } else if (page.headings.length >= 1) {
      score += 10;
    }

    // Images (0-10 points)
    maxScore += 10;
    if (page.images.length >= 2) {
      score += 10;
    } else if (page.images.length >= 1) {
      score += 5;
    }

    // Internal links (0-15 points)
    maxScore += 15;
    if (page.links.length >= 3) {
      score += 15;
    } else if (page.links.length >= 1) {
      score += 10;
    }

    // Keywords (0-10 points)
    maxScore += 10;
    if (page.keywords.length >= 3) {
      score += 10;
    } else if (page.keywords.length >= 1) {
      score += 5;
    }

    // URL structure (0-15 points)
    maxScore += 15;
    if (page.url === '/' || page.url.includes('-')) {
      score += 15;
    } else if (page.url.length > 0) {
      score += 8;
    }

    return Math.round((score / maxScore) * 100);
  };

  const identifySEOIssues = (page: any): string[] => {
    const issues: string[] = [];

    if (!page.title || page.title.length < 30) {
      issues.push('Title is too short (should be 30-60 characters)');
    } else if (page.title.length > 60) {
      issues.push('Title is too long (should be 30-60 characters)');
    }

    if (!page.metaDescription || page.metaDescription.length < 120) {
      issues.push('Meta description is too short (should be 120-160 characters)');
    } else if (page.metaDescription.length > 160) {
      issues.push('Meta description is too long (should be 120-160 characters)');
    }

    if (page.headings.length < 2) {
      issues.push('Insufficient heading structure (should have at least 2 headings)');
    }

    if (page.images.length === 0) {
      issues.push('No images found (consider adding relevant images with alt text)');
    }

    if (page.links.length < 2) {
      issues.push('Insufficient internal linking (should have at least 2 internal links)');
    }

    if (page.keywords.length < 2) {
      issues.push('Insufficient keyword targeting (should have at least 2 relevant keywords)');
    }

    if (page.url !== '/' && !page.url.includes('-')) {
      issues.push('URL could be more SEO-friendly (consider using hyphens)');
    }

    return issues;
  };

  const generateSEORecommendations = (issues: string[]): string[] => {
    const recommendations: string[] = [];

    if (issues.some(issue => issue.includes('Title'))) {
      recommendations.push('Optimize page titles with relevant keywords and compelling copy');
    }

    if (issues.some(issue => issue.includes('Meta description'))) {
      recommendations.push('Write compelling meta descriptions that accurately describe the page content');
    }

    if (issues.some(issue => issue.includes('heading structure'))) {
      recommendations.push('Add H1, H2, and H3 headings to improve content structure and SEO');
    }

    if (issues.some(issue => issue.includes('No images'))) {
      recommendations.push('Add relevant images with descriptive alt text for better accessibility and SEO');
    }

    if (issues.some(issue => issue.includes('internal linking'))) {
      recommendations.push('Add internal links to related pages to improve navigation and SEO');
    }

    if (issues.some(issue => issue.includes('keyword targeting'))) {
      recommendations.push('Research and include relevant keywords naturally throughout the content');
    }

    if (issues.some(issue => issue.includes('URL'))) {
      recommendations.push('Use SEO-friendly URLs with hyphens and descriptive terms');
    }

    recommendations.push('Ensure content is unique, valuable, and addresses user intent');
    recommendations.push('Implement structured data markup for better search engine understanding');
    recommendations.push('Optimize page loading speed for better user experience and SEO');

    return recommendations;
  };

  const generateSummary = (pageAnalyses: SEOAnalysis[], topIssues: string[]): string => {
    const totalPages = pageAnalyses.length;
    const excellentPages = pageAnalyses.filter(page => page.score >= 80).length;
    const goodPages = pageAnalyses.filter(page => page.score >= 60).length;
    const poorPages = pageAnalyses.filter(page => page.score < 40).length;

    let summary = `Analyzed ${totalPages} pages for SEO. `;
    
    if (excellentPages > 0) {
      summary += `${excellentPages} pages have excellent SEO. `;
    }
    
    if (goodPages > 0) {
      summary += `${goodPages} pages have good SEO. `;
    }
    
    if (poorPages > 0) {
      summary += `${poorPages} pages need significant SEO improvement. `;
    }

    if (topIssues.length > 0) {
      summary += `Top SEO issues to address: ${topIssues.slice(0, 3).join(', ')}.`;
    }

    return summary;
  };

  const exportSEOReport = () => {
    if (!report) return;
    
    const csvContent = [
      ['Page URL', 'Title', 'SEO Score', 'Issues', 'Recommendations'],
      ...report.pageAnalyses.map(page => [
        page.pageUrl,
        page.title,
        page.score.toString(),
        page.issues.join('; '),
        page.recommendations.join('; ')
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seo-optimization-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (score >= 40) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getScoreText = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="fixed bottom-6 right-24 z-50">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Toggle SEO Optimizer"
      >
        <Search className="w-6 h-6" />
      </button>

      {/* SEO Optimizer Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[700px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                SEO Optimizer
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Summary Stats */}
            {report && (
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.totalPages}</div>
                  <div className="text-sm text-purple-100">Pages Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.averageScore}%</div>
                  <div className="text-sm text-purple-100">Avg SEO Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{report.pagesWithIssues}</div>
                  <div className="text-sm text-pink-100">Need Optimization</div>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 max-h-[500px] overflow-y-auto">
            {isAnalyzing ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="w-6 h-6 animate-spin text-purple-600" />
                <span className="ml-2 text-gray-600">Analyzing SEO...</span>
              </div>
            ) : report ? (
              <div className="space-y-4">
                {/* Top Issues */}
                {report.topIssues.length > 0 && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Top SEO Issues to Address
                    </h4>
                    <div className="space-y-1">
                      {report.topIssues.slice(0, 3).map((issue, index) => (
                        <div key={index} className="text-sm text-yellow-700 dark:text-yellow-300">
                          • {issue}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pages Analysis */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Page
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            SEO Score
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Issues
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {report.pageAnalyses.map((page, index) => (
                          <tr 
                            key={index} 
                            className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => setSelectedPage(page)}
                          >
                            <td className="px-4 py-3">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {page.title}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {page.pageUrl}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              {page.score}%
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getScoreColor(page.score)}`}>
                                {getScoreText(page.score)}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                              {page.issues.length} issues
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Page Details Modal */}
                {selectedPage && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          SEO Analysis: {selectedPage.title}
                        </h3>
                        <button
                          onClick={() => setSelectedPage(null)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">SEO Score</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.score}%</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Headings</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.headings.length}</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Images</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.images.length}</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400">Links</div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPage.links.length}</div>
                          </div>
                        </div>

                        {selectedPage.issues.length > 0 && (
                          <div>
                            <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">SEO Issues Found</h4>
                            <div className="space-y-2">
                              {selectedPage.issues.map((issue, index) => (
                                <div key={index} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
                                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  <span>{issue}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {selectedPage.recommendations.length > 0 && (
                          <div>
                            <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">SEO Recommendations</h4>
                            <div className="space-y-2">
                              {selectedPage.recommendations.map((rec, index) => (
                                <div key={index} className="flex items-start gap-2 text-sm text-green-600 dark:text-green-400">
                                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  <span>{rec}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No SEO analysis data available
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 dark:bg-gray-800 p-3 flex gap-2">
            <button
              onClick={analyzeSEO}
              disabled={isAnalyzing}
              className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
              {isAnalyzing ? 'Analyzing...' : 'Analyze SEO'}
            </button>
            <button
              onClick={exportSEOReport}
              className="px-3 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOOptimizer;