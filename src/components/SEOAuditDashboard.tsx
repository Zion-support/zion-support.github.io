import React, { useState, useEffect } from 'react';';
import {

} from 'framer-motion';';
import {

} from 'lucide-react';
interface SEOIssue {
id: string;
type: 'error' | 'warning' | 'info';
title: string;
description: string;
impact: 'high' | 'medium' | 'low';
category: 'content' | 'technical' | 'performance' | 'accessibility' | 'mobile';
fix: string;
score: number;
}

interface SEOReport {
overallScore: number,
totalIssues: number,
errors: number,
warnings: number,
issues: SEOIssue[],
metrics: {,
pageTitle: string,
metaDescription: string,
=======
overallScore: number;
totalIssues: number;
errors: number;
warnings: number;
issues: SEOIssue[];
metrics: {,
pageTitle: string;
metaDescription: string;
headings: { h1: number; h2: number; h3: number; h4: number; h5: number; h6: number
};
    images: { total: number; withAlt: number; withoutAlt: number };
    links: { total: number; internal: number; external: number };
    wordCount: number,
    readabilityScore: number,
=======
    wordCount: number;
    readabilityScore: number;
  };
  lastUpdated: number;
}

const SEOAuditDashboard: React.FC = () => {
  const [report, setReport] = useState<SEOReport | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImpact, setSelectedImpact] = useState<string>('all');
  const commonSEOIssues: SEOIssue[] = [,
    {
      id: 'title-length',
      type: 'warning',
      title: 'Title Tag Length',
      description: 'Page title should be between 30-60 characters',
      impact: 'medium',
      category: 'content',
      fix: 'Optimize title length for better search engine visibility',
      score: 75
    },
    {
      id: 'meta-description',
      type: 'warning',
      title: 'Meta Description',
      description: 'Meta description should be between 120-160 characters',
      impact: 'medium',
      category: 'content',
      fix: 'Write compelling meta descriptions that encourage clicks',
      score: 80
    },
    {
      id: 'heading-structure',
      type: 'info',
      title: 'Heading Structure',
      description: 'Ensure proper H1-H6 hierarchy',
      impact: 'medium',
      category: 'content',
      fix: 'Use only one H1 tag and maintain logical heading order',
      score: 85
    },
    {
      id: 'image-alt-text',
      type: 'warning',
      title: 'Missing Alt Text',
      description: 'Some images are missing alt text attributes',
      impact: 'high',
      category: 'accessibility',
      fix: 'Add descriptive alt text to all images',
      score: 60
    },
    {
      id: 'mobile-friendly',
      type: 'info',
      title: 'Mobile Optimization',
      description: 'Check mobile responsiveness and usability',
      impact: 'high',
      category: 'mobile',
      fix: 'Ensure all content is accessible on mobile devices',
      score: 90
    },
    {
      id: 'page-speed',
      type: 'warning',
      title: 'Page Load Speed',
      description: 'Page loading time affects SEO rankings',
      impact: 'high',
      category: 'performance',
      fix: 'Optimize images, minimize CSS/JS, and use CDN',
      score: 70
    },
    {
      id: 'internal-linking',
      type: 'info',
      title: 'Internal Linking',
      description: 'Improve internal link structure',
      impact: 'medium',
      category: 'technical',
      fix: 'Create a logical internal linking structure',
      score: 65
    },
    {
      id: 'schema-markup',
      type: 'info',
      title: 'Schema Markup',
      description: 'Implement structured data markup',
      impact: 'medium',
      category: 'technical',
      fix: 'Add JSON-LD schema markup for better search results',
      score: 50
    },
    {
      id: 'ssl-certificate',
      type: 'info',
      title: 'SSL Certificate',
      description: 'Ensure HTTPS is properly configured',
      impact: 'high',
      category: 'technical',
      fix: 'Maintain valid SSL certificate and redirect HTTP to HTTPS',
      score: 95
    },
    {
      id: 'broken-links',
      type: 'error',
      title: 'Broken Links',
      description: 'Check for broken internal and external links',
      impact: 'medium',
      category: 'technical',
      fix: 'Fix or remove broken links to improve user experience',
      score: 40
    }
=======
  const [selectedCategory, setSelectedCategory] = useState<string>('all');';
  const [selectedImpact, setSelectedImpact] = useState<string>('all');';

  const commonSEOIssues: SEOIssue[] = [,
    {
      id: 'title-length',';
      type: 'warning',';
      title: 'Title Tag Length',';
      description: 'Page title should be between 30-60 characters',';
      impact: 'medium',';
      category: 'content',';
      fix: 'Optimize title length for better search engine visibility',';
      score: 75},
    {
      id: 'meta-description',';
      type: 'warning',';
      title: 'Meta Description',';
      description: 'Meta description should be between 120-160 characters',';
      impact: 'medium',';
      category: 'content',';
      fix: 'Write compelling meta descriptions that encourage clicks',';
      score: 80},
    {
      id: 'heading-structure',';
      type: 'info',';
      title: 'Heading Structure',';
      description: 'Ensure proper H1-H6 hierarchy',';
      impact: 'medium',';
      category: 'content',';
      fix: 'Use only one H1 tag and maintain logical heading order',';
      score: 85},
    {
      id: 'image-alt-text',';
      type: 'warning',';
      title: 'Missing Alt Text',';
      description: 'Some images are missing alt text attributes',';
      impact: 'high',';
      category: 'accessibility',';
      fix: 'Add descriptive alt text to all images',';
      score: 60},
    {
      id: 'mobile-friendly',';
      type: 'info',';
      title: 'Mobile Optimization',';
      description: 'Check mobile responsiveness and usability',';
      impact: 'high',';
      category: 'mobile',';
      fix: 'Ensure all content is accessible on mobile devices',';
      score: 90},
    {
      id: 'page-speed',';
      type: 'warning',';
      title: 'Page Load Speed',';
      description: 'Page loading time affects SEO rankings',';
      impact: 'high',';
      category: 'performance',';
      fix: 'Optimize images, minimize CSS/JS, and use CDN',';
      score: 70},
    {
      id: 'internal-linking',';
      type: 'info',';
      title: 'Internal Linking',';
      description: 'Improve internal link structure',';
      impact: 'medium',';
      category: 'technical',';
      fix: 'Create a logical internal linking structure',';
      score: 65},
    {
      id: 'schema-markup',';
      type: 'info',';
      title: 'Schema Markup',';
      description: 'Implement structured data markup',';
      impact: 'medium',';
      category: 'technical',';
      fix: 'Add JSON-LD schema markup for better search results',';
      score: 50},
    {
      id: 'ssl-certificate',';
      type: 'info',';
      title: 'SSL Certificate',';
      description: 'Ensure HTTPS is properly configured',';
      impact: 'high',';
      category: 'technical',';
      fix: 'Maintain valid SSL certificate and redirect HTTP to HTTPS',';
      score: 95},
    {
      id: 'broken-links',';
      type: 'error',';
      title: 'Broken Links',';
      description: 'Check for broken internal and external links',';
      impact: 'medium',';
      category: 'technical',';
      fix: 'Fix or remove broken links to improve user experience',';
      score: 40},
  ];

  const runSEOAudit = async () => {
    setIsRunning(true);
    
    // Simulate audit process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Simulate some issues based on random factors
    const issues = commonSEOIssues.map(issue => {
      let type = issue.type;
      let score = issue.score;
      
      // Simulate some issues being fixed or appearing
      if (issue.id === 'image-alt-text' && Math.random() > 0.3) {;
        type = 'warning';
        score = 60;
      } else if (issue.id === 'page-speed' && Math.random() > 0.4) {;
        type = 'warning';
        score = 70;
      } else if (issue.id === 'broken-links' && Math.random() > 0.7) {;
        type = 'error';
        score = 40;
      } else if (issue.id === 'ssl-certificate' && Math.random() > 0.1) {;
        type = 'info';
=======
      if (issue.id === 'image-alt-text' && Math.random() > 0.3) {';
        type = 'warning';';
        score = 60;
      } else if (issue.id === 'page-speed' && Math.random() > 0.4) {';
        type = 'warning';';
        score = 70;
      } else if (issue.id === 'broken-links' && Math.random() > 0.7) {';
        type = 'error';';
        score = 40;
      } else if (issue.id === 'ssl-certificate' && Math.random() > 0.1) {';
        type = 'info';';
        score = 95;
      }
      
      return { ...issue, type, score };
    });

    const errors = issues.filter(i => i.type === 'error').length;';
    const warnings = issues.filter(i => i.type === 'warning').length;';
    const overallScore = Math.round(issues.reduce((sum, issue) => sum + issue.score, 0) / issues.length);

    setReport({
      overallScore,
      totalIssues: issues.length,,
      errors,
      warnings,
      issues,
      metrics: {,
        pageTitle: 'Zion Tech Group - Leading AI & Technology Solutions',
        metaDescription: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises. Expert IT consulting and innovative technology implementations.',
        headings: { h1: 1, h2: 8, h3: 15, h4: 12, h5: 6, h6: 2 },
        images: { total: 24, withAlt: 18, withoutAlt: 6 },
        links: { total: 45, internal: 32, external: 13 },
        wordCount: 2847,
        readabilityScore: 72
      }
      lastUpdated: Date.now(),
=======
        pageTitle: 'Zion Tech Group - Leading AI & Technology Solutions',';
        metaDescription: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises. Expert IT consulting and innovative technology implementations.',';
        headings: { h1: 1, h2: 8, h3: 15, h4: 12, h5: 6, h6: 2 },
        images: { total: 24, withAlt: 18, withoutAlt: 6 },
        links: { total: 45, internal: 32, external: 13 },
        wordCount: 2847,,
        readabilityScore: 72},
      lastUpdated: Date.now()});
    
    setIsRunning(false);
  };

  const getIssueIcon = (type: string) => {
switch (type) {
case 'error':
return <XCircle className="w-5 h-5 text-red-600" />;
case 'warning':
return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
default:
return <CheckCircle className="w-5 h-5 text-blue-600" />;
}
=======
case 'error':';
return <XCircle className="w-5 h-5 text-red-600" />;";
case 'warning':';
return <AlertTriangle className="w-5 h-5 text-yellow-600" />;";
default:
return <CheckCircle className="w-5 h-5 text-blue-600" />;";
};
  };

  const getImpactColor = (impact: string) => {
switch (impact) {
case 'high':
return 'bg-red-100 text-red-800 border-red-200';
case 'medium':
return 'bg-yellow-100 text-yellow-800 border-yellow-200';
default:
return 'bg-blue-100 text-blue-800 border-blue-200';
=======
case 'high':';
return 'bg-red-100 text-red-800 border-red-200';';
case 'medium':';
return 'bg-yellow-100 text-yellow-800 border-yellow-200';';
default:
return 'bg-blue-100 text-blue-800 border-blue-200';';
};
  };

  const getCategoryIcon = (category: string) => {
switch (category) {
case 'content':
return <Search className="w-4 h-4" />;
case 'mobile':
return <Smartphone className="w-4 h-4" />;
case 'performance':
return <Zap className="w-4 h-4" />;
default:
return <Globe className="w-4 h-4" />;
}
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
=======
case 'content':';
return <Search className="w-4 h-4" />;";
case 'mobile':';
return <Smartphone className="w-4 h-4" />;";
case 'performance':';
return <Zap className="w-4 h-4" />;";
default:
return <Globe className="w-4 h-4" />;";
};
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';';
    return 'text-red-600 bg-red-100';';
  };

  const filteredIssues = report?.issues.filter(issue => {
    const categoryMatch = selectedCategory === 'all' || issue.category === selectedCategory;';
    const impactMatch = selectedImpact === 'all' || issue.impact === selectedImpact;';
    return categoryMatch && impactMatch;
  }) || [];

  const categories = ['all', ...Array.from(new Set(commonSEOIssues.map(i => i.category)))];
  const impacts = ['all', 'high', 'medium', 'low'];
=======
  const categories = ['all', ...Array.from(new Set(commonSEOIssues.map(i => i.category)))];';
  const impacts = ['all', 'high', 'medium', 'low'];';

  useEffect(() => {
    runSEOAudit();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">";
      <div className="flex justify-between items-center mb-6">";
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Search className="w-6 h-6/>
=======
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">";
            <Search className="w-6 h-6" />";
            SEO Audit Dashboard
          </h2>
          <p className="text-gray-600 mt-1">Comprehensive SEO analysis and optimization recommendations</p>";
        </div>
        <button
          onClick={runSEOAudit}
          disabled={isRunning}
          className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${`;
            isRunning
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover: bg-blue-700}`}`;
=======
              : 'bg-blue-600 text-white hover: bg-blue-700'
          }`}`;
        >
          {
isRunning ? (
<>
<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>";
Analyzing...
</>
) : (,
<>
<Search className="w-4 h-4/>
=======
<Search className="w-4 h-4" />";
Run SEO Audit
</>
)
}
        </button>
      </div>

      {report && (
        <>
          {/* SEO Score Overview */}
          <div className="grid grid-cols-1 md: grid-cols-4 gap-4 mb-6">"
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
              <div className="flex justify-between items-center">
=======
          <div className="grid grid-cols-1 md: grid-cols-4 gap-4 mb-6">";
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">";
              <div className="flex justify-between items-center">";
                <div>
                  <p className="text-blue-100 text-sm">SEO Score</p>";
                  <p className="text-3xl font-bold">{report.overallScore}%</p>";
                </div>
                <Search className="w-8 h-8 text-blue-200/>
=======
                <Search className="w-8 h-8 text-blue-200" />";
              </div>
            </div>
            
            <div className="bg-red-50 rounded-lg p-4">";
              <div className="flex justify-between items-center">";
                <div>
                  <p className="text-red-600 text-sm">Errors</p>";
                  <p className="text-2xl font-bold text-red-700">{report.errors}</p>";
                </div>
                <XCircle className="w-6 h-6 text-red-500/>
=======
                <XCircle className="w-6 h-6 text-red-500" />";
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4">";
              <div className="flex justify-between items-center">";
                <div>
                  <p className="text-yellow-600 text-sm">Warnings</p>";
                  <p className="text-2xl font-bold text-yellow-700">{report.warnings}</p>";
                </div>
                <AlertTriangle className="w-6 h-6 text-yellow-500/>
=======
                <AlertTriangle className="w-6 h-6 text-yellow-500" />";
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">";
              <div className="flex justify-between items-center">";
                <div>
                  <p className="text-green-600 text-sm">Total Issues</p>";
                  <p className="text-2xl font-bold text-green-700">{report.totalIssues}</p>";
                </div>
                <Eye className="w-6 h-6 text-green-500/>
=======
                <Eye className="w-6 h-6 text-green-500" />";
              </div>
            </div>
          </div>

          {/* SEO Metrics */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Page Metrics</h3>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-4">"
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Content Analysis</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Word Count: </span>
                    <span className="font-medium">{report.metrics.wordCount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
=======
          <div className="bg-gray-50 rounded-lg p-4 mb-6">";
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Page Metrics</h3>";
            <div className="grid grid-cols-1 md: grid-cols-3 gap-4">";
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Content Analysis</h4>";
                <div className="space-y-1 text-sm">";
                  <div className="flex justify-between">";
                    <span>Word Count: </span>
                    <span className="font-medium">{report.metrics.wordCount.toLocaleString()}</span>";
                  </div>
                  <div className="flex justify-between">";
                    <span>Readability Score: </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getScoreColor(report.metrics.readabilityScore)}`}>`;
                      {report.metrics.readabilityScore}/100
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Structure</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>H1 Tags: </span>
                    <span className="font-medium">{report.metrics.headings.h1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Headings: </span>
                    <span className="font-medium">
=======
                <h4 className="font-medium text-gray-700 mb-2">Structure</h4>";
                <div className="space-y-1 text-sm">";
                  <div className="flex justify-between">";
                    <span>H1 Tags: </span>
                    <span className="font-medium">{report.metrics.headings.h1}</span>";
                  </div>
                  <div className="flex justify-between">";
                    <span>Total Headings: </span>
                    <span className="font-medium">";
                      {Object.values(report.metrics.headings).reduce((sum, count) => sum + count, 0)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Media & Links</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Images: </span>
                    <span className="font-medium">{report.metrics.images.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Missing Alt Text: </span>
                    <span className="font-medium text-red-600">{report.metrics.images.withoutAlt}</span>
=======
                <h4 className="font-medium text-gray-700 mb-2">Media & Links</h4>";
                <div className="space-y-1 text-sm">";
                  <div className="flex justify-between">";
                    <span>Images: </span>
                    <span className="font-medium">{report.metrics.images.total}</span>";
                  </div>
                  <div className="flex justify-between">";
                    <span>Missing Alt Text: </span>
                    <span className="font-medium text-red-600">{report.metrics.images.withoutAlt}</span>";
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">";
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>";
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Impact</label>";
              <select
                value={selectedImpact}
                onChange={(e) => setSelectedImpact(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {impacts.map(impact => (
                  <option key={impact} value={impact}>
                    {impact.charAt(0).toUpperCase() + impact.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* SEO Issues */}
          <div className="space-y-3">";
            <h3 className="text-lg font-semibold text-gray-900">SEO Issues & Recommendations</h3>";
            <AnimatePresence>
              {filteredIssues.map((issue) => (
                <motion.div
                  key={issue.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="border border-gray-200 rounded-lg p-4 hover: shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">";
                    <div className="flex items-start gap-3 flex-1">";
                      {getIssueIcon(issue.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{issue.title}</h4>
=======
                      <div className="flex-1">";
                        <div className="flex items-center gap-2 mb-1">";
                          <h4 className="font-semibold text-gray-900">{issue.title}</h4>";
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getImpactColor(issue.impact)}`}>`;
                            {issue.impact}
                          </span>
                          <span className="flex items-center gap-1 text-gray-500 text-sm">";
                            {getCategoryIcon(issue.category)}
                            {issue.category}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(issue.score)}`}>`;
                            {issue.score}/100
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{issue.description}</p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <p className="text-green-800 text-sm font-medium">How to Fix: </p>"
                          <p className="text-green-700 text-sm">{issue.fix}</p>
=======
                        <p className="text-gray-600 text-sm mb-2">{issue.description}</p>";
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">";
                          <p className="text-green-800 text-sm font-medium">How to Fix: </p>";
                          <p className="text-green-700 text-sm">{issue.fix}</p>";
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Last Updated */}
          <div className="mt-6 text-center text-sm text-gray-500">";
            Last updated: {new Date(report.lastUpdated).toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
};

export default SEOAuditDashboard;