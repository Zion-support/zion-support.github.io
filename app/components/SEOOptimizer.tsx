'use client';

import React, { useEffect, useState } from 'react';
import { Search, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';

interface SEOOptimizerProps {
  pageTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  enableStructuredData?: boolean;
  enableSitemap?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  pageTitle = '',
  metaDescription = '',
  keywords = [],
  enableStructuredData = true,
  enableSitemap = true
}) => {
  const [seoScore, setSeoScore] = useState(0);
  const [seoChecks, setSeoChecks] = useState({
    title: false,
    description: false,
    keywords: false,
    headings: false,
    images: false,
    links: false,
    structuredData: false,
    sitemap: false
  });

  useEffect(() => {
    // Check title
    const title = document.title || pageTitle;
    const titleCheck = title.length >= 30 && title.length <= 60;
    setSeoChecks(prev => ({ ...prev, title: titleCheck }));

    // Check meta description
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || metaDescription;
    const descCheck = metaDesc && metaDesc.length >= 120 && metaDesc.length <= 160;
    setSeoChecks(prev => ({ ...prev, description: descCheck }));

    // Check keywords
    const keywordCheck = keywords.length > 0 && keywords.length <= 10;
    setSeoChecks(prev => ({ ...prev, keywords: keywordCheck }));

    // Check headings structure
    const h1Count = document.querySelectorAll('h1').length;
    const h2Count = document.querySelectorAll('h2').length;
    const headingsCheck = h1Count === 1 && h2Count > 0;
    setSeoChecks(prev => ({ ...prev, headings: headingsCheck }));

    // Check images for alt text
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.alt && img.alt.trim() !== '');
    const imagesCheck = images.length === 0 || imagesWithAlt.length === images.length;
    setSeoChecks(prev => ({ ...prev, images: imagesCheck }));

    // Check internal links
    const links = document.querySelectorAll('a[href]');
    const internalLinks = Array.from(links).filter(link => {
      const href = link.getAttribute('href');
      return href && (href.startsWith('/') || href.includes(window.location.hostname));
    });
    const linksCheck = internalLinks.length > 0;
    setSeoChecks(prev => ({ ...prev, links: linksCheck }));

    // Check structured data
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    const structuredDataCheck = enableStructuredData ? !!structuredData : true;
    setSeoChecks(prev => ({ ...prev, structuredData: structuredDataCheck }));

    // Check sitemap
    const sitemapLink = document.querySelector('link[rel="sitemap"]');
    const sitemapCheck = enableSitemap ? !!sitemapLink : true;
    setSeoChecks(prev => ({ ...prev, sitemap: sitemapCheck }));

    // Calculate SEO score
    const checks = Object.values(seoChecks);
    const passedChecks = checks.filter(check => check).length;
    const score = Math.round((passedChecks / checks.length) * 100);
    setSeoScore(score);
  }, [pageTitle, metaDescription, keywords, enableStructuredData, enableSitemap, seoChecks]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
          <Search className="w-5 h-5 mr-2" />
          SEO Optimizer
        </h3>
        <div className={`px-3 py-1 rounded-full ${getScoreBgColor(seoScore)}`}>
          <span className={`text-lg font-bold ${getScoreColor(seoScore)}`}>
            {seoScore}/100
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Page Title (30-60 chars)</span>
          {seoChecks.title ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Meta Description (120-160 chars)</span>
          {seoChecks.description ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Keywords (1-10 keywords)</span>
          {seoChecks.keywords ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Heading Structure (H1, H2)</span>
          {seoChecks.headings ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Image Alt Text</span>
          {seoChecks.images ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Internal Links</span>
          {seoChecks.links ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Structured Data</span>
          {seoChecks.structuredData ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Sitemap</span>
          {seoChecks.sitemap ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-3">SEO Recommendations</h4>
        <div className="space-y-2 text-sm">
          {!seoChecks.title && (
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Optimize page title length (30-60 characters)</span>
            </div>
          )}
          {!seoChecks.description && (
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Add or optimize meta description (120-160 characters)</span>
            </div>
          )}
          {!seoChecks.keywords && (
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Add relevant keywords (1-10 keywords)</span>
            </div>
          )}
          {!seoChecks.headings && (
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Improve heading structure (use H1, H2, H3 hierarchy)</span>
            </div>
          )}
          {!seoChecks.images && (
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Add alt text to all images</span>
            </div>
          )}
          {!seoChecks.links && (
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Add internal links to improve site structure</span>
            </div>
          )}
          {!seoChecks.structuredData && (
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Add structured data markup</span>
            </div>
          )}
          {!seoChecks.sitemap && (
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Create and submit XML sitemap</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Need help with SEO?</span>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
            Learn More
            <ExternalLink className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SEOOptimizer;