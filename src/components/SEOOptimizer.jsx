import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  X,
  BarChart3,
  FileText,
  Image,
  Link,
  Tag,
  Eye,
  Zap,
  Settings,
  RefreshCw,
  Download,
  Share2
} from 'lucide-react';

const SEOOptimizer = () => {
  const [report, setReport] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const analyzeSEO = useCallback(async () => {
    setIsAnalyzing(true);
    try {
      // Sample page data for demonstration
      const samplePages = [
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

      const pageAnalyses = samplePages.map(page => {
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
      const averageScore = Math.round(pageAnalyses.reduce((sum, page) => sum + page.score, 0) / totalPages);
      const pagesWithIssues = pageAnalyses.filter(page => page.issues.length > 0).length;

      // Collect all issues and count frequency
      const issueCounts = {};
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

  const calculateSEOScore = (page) => {
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
    if (page.url.includes('-') && page.url.length <= 50) {
      score += 15;
    } else if (page.url.length <= 100) {
      score += 10;
    }

    return Math.round((score / maxScore) * 100);
  };

  const identifySEOIssues = (page) => {
    const issues = [];

    if (!page.title || page.title.length < 30 || page.title.length > 60) {
      issues.push('Title length should be between 30-60 characters');
    }

    if (!page.metaDescription || page.metaDescription.length < 120 || page.metaDescription.length > 160) {
      issues.push('Meta description should be between 120-160 characters');
    }

    if (!page.headings || page.headings.length < 3) {
      issues.push('Should have at least 3 heading tags (H1, H2, H3)');
    }

    if (!page.images || page.images.length < 2) {
      issues.push('Should have at least 2 images for better engagement');
    }

    if (!page.links || page.links.length < 3) {
      issues.push('Should have at least 3 internal links');
    }

    if (!page.keywords || page.keywords.length < 3) {
      issues.push('Should have at least 3 relevant keywords');
    }

    if (page.url.length > 100) {
      issues.push('URL should be shorter than 100 characters');
    }

    return issues;
  };

  const generateSEORecommendations = (issues) => {
    const recommendations = [];

    issues.forEach(issue => {
      if (issue.includes('Title length')) {
        recommendations.push('Optimize title length for better click-through rates');
      } else if (issue.includes('Meta description')) {
        recommendations.push('Write compelling meta descriptions that encourage clicks');
      } else if (issue.includes('heading tags')) {
        recommendations.push('Use proper heading hierarchy (H1 > H2 > H3)');
      } else if (issue.includes('images')) {
        recommendations.push('Add relevant images with descriptive alt text');
      } else if (issue.includes('internal links')) {
        recommendations.push('Create internal linking structure for better navigation');
      } else if (issue.includes('keywords')) {
        recommendations.push('Research and include relevant long-tail keywords');
      } else if (issue.includes('URL')) {
        recommendations.push('Use descriptive, keyword-rich URLs');
      }
    });

    return recommendations;
  };

  const generateSummary = (pageAnalyses, topIssues) => {
    const totalIssues = pageAnalyses.reduce((sum, page) => sum + page.issues.length, 0);
    const criticalIssues = topIssues.slice(0, 3);

    return {
      overallHealth: report?.averageScore >= 80 ? 'Excellent' : report?.averageScore >= 60 ? 'Good' : 'Needs Improvement',
      criticalIssues,
      totalIssues,
      improvementPotential: Math.round((100 - report?.averageScore) * 0.8)
    };
  };

  const exportReport = () => {
    if (!report) return;

    const reportData = {
      generatedAt: new Date().toISOString(),
      summary: {
        totalPages: report.totalPages,
        averageScore: report.averageScore,
        pagesWithIssues: report.pagesWithIssues,
        topIssues: report.topIssues
      },
      pageAnalyses: report.pageAnalyses
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seo-analysis-report.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!report) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Analyzing SEO...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Search className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">SEO Analysis Report</h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={analyzeSEO}
            disabled={isAnalyzing}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
            <span>{isAnalyzing ? 'Analyzing...' : 'Refresh'}</span>
          </button>
          <button
            onClick={exportReport}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Total Pages</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{report.totalPages}</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Average Score</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{report.averageScore}%</p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <span className="text-sm text-gray-600">Pages with Issues</span>
          </div>
          <p className="text-2xl font-bold text-yellow-600">{report.pagesWithIssues}</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-gray-600">Top Issues</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">{report.topIssues.length}</p>
        </div>
      </div>

      {/* Top Issues */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Top SEO Issues</h3>
        <div className="space-y-2">
          {report.topIssues.map((issue, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-gray-700">{issue}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Page Analysis */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Page Analysis</h3>
        <div className="space-y-4">
          {report.pageAnalyses.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{page.title}</h4>
                  <p className="text-sm text-gray-600">{page.pageUrl}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    page.score >= 80 ? 'bg-green-100 text-green-800' :
                    page.score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {page.score}%
                  </div>
                  <button
                    onClick={() => setSelectedPage(selectedPage === index ? null : index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {selectedPage === index ? 'Hide' : 'Details'}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {selectedPage === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-3"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Issues Found</h5>
                        <div className="space-y-1">
                          {page.issues.map((issue, issueIndex) => (
                            <div key={issueIndex} className="flex items-center space-x-2 text-sm text-red-600">
                              <AlertTriangle className="w-4 h-4" />
                              <span>{issue}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Recommendations</h5>
                        <div className="space-y-1">
                          {page.recommendations.map((rec, recIndex) => (
                            <div key={recIndex} className="flex items-center space-x-2 text-sm text-green-600">
                              <CheckCircle className="w-4 h-4" />
                              <span>{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOOptimizer;