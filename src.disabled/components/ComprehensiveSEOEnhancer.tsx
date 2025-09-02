import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOAnalysis {
  title: {
    length: number;
    score: number;
    suggestions: string[];
  };
  description: {
    length: number;
    score: number;
    suggestions: string[];
  };
  headings: {
    h1: number;
    h2: number;
    h3: number;
    score: number;
    suggestions: string[];
  };
  images: {
    total: number;
    withAlt: number;
    score: number;
    suggestions: string[];
  };
  links: {
    total: number;
    internal: number;
    external: number;
    score: number;
    suggestions: string[];
  };
  overall: {
    score: number;
    grade: string;
    color: string;
  };
}

interface ComprehensiveSEOEnhancerProps {
  enabled?: boolean;
  showPanel?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  autoOptimize?: boolean;
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string[];
}

export const ComprehensiveSEOEnhancer: React.FC<ComprehensiveSEOEnhancerProps> = ({
  enabled = true,
  showPanel = false,
  position = 'bottom-left',
  autoOptimize = true,
  pageTitle = 'Zion Tech Group - Advanced Technology Solutions',
  pageDescription = 'Leading provider of AI, blockchain, cloud computing, and cybersecurity solutions. Transform your business with cutting-edge technology.',
  pageKeywords = ['AI', 'blockchain', 'cloud computing', 'cybersecurity', 'technology solutions']
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis>({
    title: { length: 0, score: 0, suggestions: [] },
    description: { length: 0, score: 0, suggestions: [] },
    headings: { h1: 0, h2: 0, h3: 0, score: 0, suggestions: [] },
    images: { total: 0, withAlt: 0, score: 0, suggestions: [] },
    links: { total: 0, internal: 0, external: 0, score: 0, suggestions: [] },
    overall: { score: 0, grade: 'F', color: 'text-red-500' }
  });

  const [optimizations, setOptimizations] = useState<string[]>([]);

  // Analyze current page SEO
  const analyzeSEO = useCallback(() => {
    if (!enabled) return;

    const newAnalysis: SEOAnalysis = {
      title: { length: 0, score: 0, suggestions: [] },
      description: { length: 0, score: 0, suggestions: [] },
      headings: { h1: 0, h2: 0, h3: 0, score: 0, suggestions: [] },
      images: { total: 0, withAlt: 0, score: 0, suggestions: [] },
      links: { total: 0, internal: 0, external: 0, score: 0, suggestions: [] },
      overall: { score: 0, grade: 'F', color: 'text-red-500' }
    };

    // Analyze title
    const title = document.title;
    newAnalysis.title.length = title.length;
    if (title.length >= 30 && title.length <= 60) {
      newAnalysis.title.score = 100;
    } else if (title.length >= 20 && title.length <= 70) {
      newAnalysis.title.score = 80;
    } else {
      newAnalysis.title.score = 50;
      newAnalysis.title.suggestions.push('Title should be 30-60 characters');
    }

    // Analyze description
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      const description = metaDescription.content;
      newAnalysis.description.length = description.length;
      if (description.length >= 120 && description.length <= 160) {
        newAnalysis.description.score = 100;
      } else if (description.length >= 100 && description.length <= 180) {
        newAnalysis.description.score = 80;
      } else {
        newAnalysis.description.score = 50;
        newAnalysis.description.suggestions.push('Description should be 120-160 characters');
      }
    } else {
      newAnalysis.description.suggestions.push('Missing meta description');
    }

    // Analyze headings
    const h1Elements = document.querySelectorAll('h1');
    const h2Elements = document.querySelectorAll('h2');
    const h3Elements = document.querySelectorAll('h3');
    
    newAnalysis.headings.h1 = h1Elements.length;
    newAnalysis.headings.h2 = h2Elements.length;
    newAnalysis.headings.h3 = h3Elements.length;
    
    if (h1Elements.length === 1) {
      newAnalysis.headings.score += 50;
    } else if (h1Elements.length === 0) {
      newAnalysis.headings.suggestions.push('Missing H1 tag');
    } else {
      newAnalysis.headings.suggestions.push('Multiple H1 tags found');
    }
    
    if (h2Elements.length > 0) {
      newAnalysis.headings.score += 30;
    } else {
      newAnalysis.headings.suggestions.push('Consider adding H2 tags');
    }
    
    if (h3Elements.length > 0) {
      newAnalysis.headings.score += 20;
    }

    // Analyze images
    const images = document.querySelectorAll('img');
    newAnalysis.images.total = images.length;
    newAnalysis.images.withAlt = Array.from(images).filter(img => img.alt).length;
    
    if (images.length > 0) {
      const altPercentage = (newAnalysis.images.withAlt / newAnalysis.images.total) * 100;
      newAnalysis.images.score = altPercentage;
      if (altPercentage < 100) {
        newAnalysis.images.suggestions.push(`${images.length - newAnalysis.images.withAlt} images missing alt text`);
      }
    }

    // Analyze links
    const links = document.querySelectorAll('a[href]');
    newAnalysis.links.total = links.length;
    newAnalysis.links.internal = Array.from(links).filter(link => {
      const href = link.getAttribute('href');
      return href && (href.startsWith('/') || href.includes(window.location.hostname));
    }).length;
    newAnalysis.links.external = newAnalysis.links.total - newAnalysis.links.internal;
    
    if (newAnalysis.links.internal > 0) {
      newAnalysis.links.score += 50;
    } else {
      newAnalysis.links.suggestions.push('Add internal links');
    }
    
    if (newAnalysis.links.external > 0) {
      newAnalysis.links.score += 30;
    }

    // Calculate overall score
    const totalScore = (
      newAnalysis.title.score +
      newAnalysis.description.score +
      newAnalysis.headings.score +
      newAnalysis.images.score +
      newAnalysis.links.score
    ) / 5;

    newAnalysis.overall.score = totalScore;
    
    if (totalScore >= 90) {
      newAnalysis.overall.grade = 'A';
      newAnalysis.overall.color = 'text-green-500';
    } else if (totalScore >= 80) {
      newAnalysis.overall.grade = 'B';
      newAnalysis.overall.color = 'text-yellow-500';
    } else if (totalScore >= 70) {
      newAnalysis.overall.grade = 'C';
      newAnalysis.overall.color = 'text-orange-500';
    } else {
      newAnalysis.overall.grade = 'D';
      newAnalysis.overall.color = 'text-red-500';
    }

    setAnalysis(newAnalysis);
  }, [enabled]);

  // Apply SEO optimizations
  const applyOptimizations = useCallback(() => {
    if (!autoOptimize) return;

    const newOptimizations: string[] = [];

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": pageDescription,
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    newOptimizations.push('Added structured data (JSON-LD)');

    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
        newOptimizations.push('Added lazy loading to images');
      }
    });

    // Add canonical URL
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
      newOptimizations.push('Added canonical URL');
    }

    setOptimizations(prev => [...prev, ...newOptimizations]);
  }, [autoOptimize, pageDescription]);

  useEffect(() => {
    if (enabled) {
      analyzeSEO();
      applyOptimizations();
    }
  }, [enabled, analyzeSEO, applyOptimizations]);

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  if (!enabled) return null;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords.join(', ')} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className={`fixed ${positionClasses[position]} z-50`}>
        {showPanel && (
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">SEO Analysis</h3>
              <span className={`font-bold ${analysis.overall.color}`}>
                {analysis.overall.grade}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Title:</span>
                  <span className="ml-1 font-mono">{analysis.title.score}%</span>
                </div>
                <div>
                  <span className="text-gray-500">Description:</span>
                  <span className="ml-1 font-mono">{analysis.description.score}%</span>
                </div>
                <div>
                  <span className="text-gray-500">Headings:</span>
                  <span className="ml-1 font-mono">{analysis.headings.score}%</span>
                </div>
                <div>
                  <span className="text-gray-500">Images:</span>
                  <span className="ml-1 font-mono">{analysis.images.score.toFixed(0)}%</span>
                </div>
                <div>
                  <span className="text-gray-500">Links:</span>
                  <span className="ml-1 font-mono">{analysis.links.score}%</span>
                </div>
                <div>
                  <span className="text-gray-500">Overall:</span>
                  <span className="ml-1 font-mono">{analysis.overall.score.toFixed(0)}%</span>
                </div>
              </div>
              
              {optimizations.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Applied Optimizations:</h4>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {optimizations.map((optimization, index) => (
                      <div key={index} className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                        ✓ {optimization}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ComprehensiveSEOEnhancer;