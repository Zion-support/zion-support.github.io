import React, { useEffect, useState, useCallback } from 'react';
import {
  setMetaTags,
  setOpenGraphTags,
  setTwitterCardTags,
  setStructuredData,
  setCanonicalUrl,
  setPageTitle,
  setMetaDescription,
  setKeywords,
  setRobotsMeta,
  setLanguage,
  setViewport,
  schemaGenerators,
  seoAudit,
} from '../../utils/seoUtils';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  twitterImage?: string;
  structuredData?: Record<string, unknown>;
  robots?: {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
  };
}

interface SEOAuditResult {
  title: { hasTitle: boolean; titleLength: number; isValid: boolean };
  description: {
    hasDescription: boolean;
    descriptionLength: number;
    isValid: boolean;
  };
  headings: { h1Count: number; hasH1: boolean; headingStructure: string[] };
  images: {
    totalImages: number;
    imagesWithoutAlt: number;
    imagesWithoutAltText: string[];
  };
  links: { totalLinks: number; internalLinks: number; externalLinks: number };
}

interface SEOOptimizerProps {
  seoData: SEOData;
  autoOptimize?: boolean;
  showAudit?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  seoData,
  autoOptimize = true,
  showAudit = false,
}) => {
  const [auditResult, setAuditResult] = useState<SEOAuditResult | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [optimizationScore, setOptimizationScore] = useState(0);

  const optimizeSEO = useCallback(() => {
    // Set basic meta tags
    setMetaTags({
      description: seoData.description,
      keywords: seoData.keywords.join(', '),
      author: 'Zion Tech Group',
      robots: seoData.robots
        ? Object.entries(seoData.robots)
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => (value ? key : `no${key}`))
            .join(', ')
        : 'index, follow',
    });

    // Set page title
    setPageTitle(seoData.title, 'Zion Tech Group');

    // Set canonical URL
    setCanonicalUrl(seoData.canonicalUrl);

    // Set Open Graph tags
    setOpenGraphTags({
      title: seoData.title,
      description: seoData.description,
      image: seoData.ogImage,
      url: seoData.canonicalUrl,
      type: 'website',
      siteName: 'Zion Tech Group',
    });

    // Set Twitter Card tags
    setTwitterCardTags({
      card: 'summary_large_image',
      site: '@ZionTechGroup',
      creator: '@ZionTechGroup',
      title: seoData.title,
      description: seoData.description,
      image: seoData.twitterImage || seoData.ogImage,
    });

    // Set structured data
    if (seoData.structuredData) {
      setStructuredData(seoData.structuredData);
    } else {
      // Default organization structured data
      const defaultStructuredData = schemaGenerators.organization({
        name: 'Zion Tech Group',
        url: seoData.canonicalUrl,
        description: seoData.description,
        logo: seoData.ogImage,
      });
      setStructuredData(defaultStructuredData);
    }

    // Set language and viewport
    setLanguage('en');
    setViewport({
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    });
  }, [seoData]);

  const runSEOAudit = useCallback(() => {
    const audit = {
      title: seoAudit.checkTitle(),
      description: seoAudit.checkDescription(),
      headings: seoAudit.checkHeadings(),
      images: seoAudit.checkImages(),
      links: seoAudit.checkLinks(),
    };

    setAuditResult(audit);

    // Calculate optimization score
    let score = 0;
    if (audit.title.hasTitle && audit.title.isValid) score += 20;
    if (audit.description.hasDescription && audit.description.isValid)
      score += 20;
    if (audit.headings.hasH1 && audit.headings.h1Count === 1) score += 20;
    if (audit.images.imagesWithoutAlt === 0) score += 20;
    if (audit.links.internalLinks > audit.links.externalLinks) score += 20;

    setOptimizationScore(score);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return '✅';
    if (score >= 60) return '⚠️';
    return '❌';
  };

  useEffect(() => {
    if (autoOptimize) {
      optimizeSEO();
    }

    if (showAudit) {
      runSEOAudit();
    }
  }, [autoOptimize, optimizeSEO, showAudit, runSEOAudit]);

  // Only show audit panel in development or if explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !showAudit) {
    return null;
  }

  return (
    <div className='fixed top-4 right-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 text-sm font-mono max-w-sm z-50'>
      <div className='flex justify-between items-center mb-3'>
        <div className='font-bold text-gray-800 dark:text-white'>
          SEO Optimizer
        </div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer'
          aria-label={isVisible ? 'Hide SEO audit' : 'Show SEO audit'}
        >
          {isVisible ? '▼' : '▶'}
        </button>
      </div>

      {isVisible && (
        <div className='space-y-3'>
          {/* SEO Score */}
          <div className='border-b border-gray-200 dark:border-gray-600 pb-2'>
            <div className='flex justify-between items-center'>
              <span className='text-gray-700 dark:text-gray-300'>
                SEO Score:
              </span>
              <span className={`font-bold ${getScoreColor(optimizationScore)}`}>
                {getScoreIcon(optimizationScore)} {optimizationScore}/100
              </span>
            </div>
          </div>

          {/* Audit Results */}
          {auditResult && (
            <div className='space-y-2 text-xs'>
              {/* Title */}
              <div className='flex justify-between'>
                <span>Title:</span>
                <span
                  className={
                    auditResult.title.isValid
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {auditResult.title.isValid ? '✅' : '❌'}
                  {auditResult.title.titleLength} chars
                </span>
              </div>

              {/* Description */}
              <div className='flex justify-between'>
                <span>Description:</span>
                <span
                  className={
                    auditResult.description.isValid
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {auditResult.description.isValid ? '✅' : '❌'}
                  {auditResult.description.descriptionLength} chars
                </span>
              </div>

              {/* Headings */}
              <div className='flex justify-between'>
                <span>H1 Count:</span>
                <span
                  className={
                    auditResult.headings.h1Count === 1
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {auditResult.headings.h1Count === 1 ? '✅' : '❌'}
                  {auditResult.headings.h1Count}
                </span>
              </div>

              {/* Images */}
              <div className='flex justify-between'>
                <span>Images:</span>
                <span
                  className={
                    auditResult.images.imagesWithoutAlt === 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {auditResult.images.imagesWithoutAlt === 0 ? '✅' : '❌'}
                  {auditResult.images.imagesWithoutAlt} missing alt
                </span>
              </div>

              {/* Links */}
              <div className='flex justify-between'>
                <span>Links:</span>
                <span
                  className={
                    auditResult.links.internalLinks >
                    auditResult.links.externalLinks
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }
                >
                  {auditResult.links.internalLinks >
                  auditResult.links.externalLinks
                    ? '✅'
                    : '⚠️'}
                  {auditResult.links.internalLinks} internal
                </span>
              </div>

              {/* Heading Structure */}
              {auditResult.headings.headingStructure.length > 0 && (
                <div className='mt-2'>
                  <div className='font-semibold text-gray-700 dark:text-gray-300'>
                    Structure:
                  </div>
                  <div className='text-xs text-gray-600 dark:text-gray-400 max-h-16 overflow-y-auto'>
                    {auditResult.headings.headingStructure
                      .slice(0, 4)
                      .map((heading, index) => (
                        <div key={index} className='truncate'>
                          {heading}
                        </div>
                      ))}
                    {auditResult.headings.headingStructure.length > 4 && (
                      <div className='text-gray-500'>
                        ...and{' '}
                        {auditResult.headings.headingStructure.length - 4} more
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className='border-t border-gray-200 dark:border-gray-600 pt-2 space-y-2'>
            <button
              onClick={optimizeSEO}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded text-xs'
              aria-label='Apply SEO optimizations'
            >
              Apply SEO
            </button>

            <button
              onClick={runSEOAudit}
              className='w-full bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded text-xs'
              aria-label='Run SEO audit'
            >
              Run Audit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOOptimizer;
