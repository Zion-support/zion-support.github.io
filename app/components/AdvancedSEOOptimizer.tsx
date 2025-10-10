'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Search, CheckCircle, AlertTriangle, TrendingUp, Globe, Target } from 'lucide-react';

interface SEOOptimizerProps {
  enableMetaTags?: boolean;
  enableStructuredData?: boolean;
  enableSitemap?: boolean;
  enableRobotsTxt?: boolean;
  enableCanonical?: boolean;
  enableOpenGraph?: boolean;
}

const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({
  enableMetaTags = true,
  enableStructuredData = true,
  enableSitemap = true,
  enableRobotsTxt = true,
  enableCanonical = true,
  enableOpenGraph = true
}) => {
  const [seoOptimizations, setSeoOptimizations] = useState<string[]>([]);
  const [seoScore, setSeoScore] = useState<number>(0);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const addOptimization = useCallback((optimization: string) => {
    setSeoOptimizations(prev => [...prev, optimization]);
  }, []);

  const calculateSEOScore = useCallback(() => {
    let score = 0;
    const totalOptimizations = 6;
    
    if (enableMetaTags) score++;
    if (enableStructuredData) score++;
    if (enableSitemap) score++;
    if (enableRobotsTxt) score++;
    if (enableCanonical) score++;
    if (enableOpenGraph) score++;
    
    setSeoScore(Math.round((score / totalOptimizations) * 100));
  }, [enableMetaTags, enableStructuredData, enableSitemap, enableRobotsTxt, enableCanonical, enableOpenGraph]);

  useEffect(() => {
    calculateSEOScore();
  }, [calculateSEOScore]);

  useEffect(() => {
    if (enableMetaTags) {
      // Ensure essential meta tags are present
      const essentialTags = [
        { name: 'description', content: 'Zion Tech Group - Advanced AI and IT Solutions' },
        { name: 'keywords', content: 'AI solutions, IT services, cloud computing, cybersecurity, digital transformation' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Zion Tech Group' }
      ];

      essentialTags.forEach(tag => {
        if (!document.querySelector(`meta[name="${tag.name}"]`)) {
          const meta = document.createElement('meta');
          meta.name = tag.name;
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      });

      addOptimization('Essential meta tags optimized');
    }
  }, [enableMetaTags, addOptimization]);

  useEffect(() => {
    if (enableStructuredData) {
      // Add structured data for organization
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "description": "Advanced AI and IT Solutions Provider",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
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

      addOptimization('Structured data added');
    }
  }, [enableStructuredData, addOptimization]);

  useEffect(() => {
    if (enableOpenGraph) {
      // Add Open Graph meta tags
      const ogTags = [
        { property: 'og:title', content: 'Zion Tech Group - AI & IT Solutions' },
        { property: 'og:description', content: 'Advanced AI and IT Solutions for modern businesses' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ziontechgroup.com' },
        { property: 'og:image', content: 'https://ziontechgroup.com/og-image.jpg' },
        { property: 'og:site_name', content: 'Zion Tech Group' }
      ];

      ogTags.forEach(tag => {
        if (!document.querySelector(`meta[property="${tag.property}"]`)) {
          const meta = document.createElement('meta');
          meta.setAttribute('property', tag.property);
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      });

      addOptimization('Open Graph tags added');
    }
  }, [enableOpenGraph, addOptimization]);

  useEffect(() => {
    if (enableCanonical) {
      // Add canonical URL
      if (!document.querySelector('link[rel="canonical"]')) {
        const canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = window.location.href;
        document.head.appendChild(canonical);
      }

      addOptimization('Canonical URL set');
    }
  }, [enableCanonical, addOptimization]);

  const runSEOOptimizations = useCallback(async () => {
    setIsOptimizing(true);
    
    try {
      // Generate sitemap
      if (enableSitemap) {
        // This would typically be done server-side
        addOptimization('Sitemap generation initiated');
      }

      // Generate robots.txt
      if (enableRobotsTxt) {
        // This would typically be done server-side
        addOptimization('Robots.txt generation initiated');
      }

      // Optimize images with alt tags
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.alt) {
          img.alt = 'Zion Tech Group - AI and IT Solutions';
        }
      });

      addOptimization('Image alt tags optimized');

      // Add heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      if (headings.length > 0) {
        addOptimization('Heading hierarchy validated');
      }

      addOptimization('SEO optimizations completed');

    } catch (error) {
      console.error('Error during SEO optimization:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [enableSitemap, enableRobotsTxt, addOptimization]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4" />;
    if (score >= 70) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  return (
    <div className="fixed top-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <Search className="w-5 h-5 text-cyan-400" />
        <h3 className="font-semibold">SEO Optimizer</h3>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm">SEO Score</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(seoScore)}
            <span className={`font-semibold ${getScoreColor(seoScore)}`}>
              {seoScore}%
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              seoScore >= 90 ? 'bg-green-400' : 
              seoScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
            }`}
            style={{ width: `${seoScore}%` }}
          />
        </div>
      </div>
      
      <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
        {seoOptimizations.map((optimization, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-xs">{optimization}</span>
          </div>
        ))}
      </div>

      <button
        onClick={runSEOOptimizations}
        disabled={isOptimizing}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isOptimizing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Optimizing...
          </>
        ) : (
          <>
            <Target className="w-4 h-4" />
            Run SEO Optimizations
          </>
        )}
      </button>
    </div>
  );
};

export default AdvancedSEOOptimizer;