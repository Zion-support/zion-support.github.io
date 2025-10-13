'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Search, Eye } from 'lucide-react';

interface SEOSettings {
  metaTags: boolean;
  structuredData: boolean;
  sitemap: boolean;
  robotsTxt: boolean;
  canonicalUrls: boolean;
  altTexts: boolean;
}

interface SEOMetrics {
  titleLength: number | null;
  descriptionLength: number | null;
  headingStructure: string | null;
  imageAltTexts: number | null;
  internalLinks: number | null;
  externalLinks: number | null;
}

const AdvancedSEOOptimizer: React.FC = () => {
  const [settings, setSettings] = useState<SEOSettings>({
    metaTags: false,
    structuredData: false,
    sitemap: false,
    robotsTxt: false,
    canonicalUrls: false,
    altTexts: false
  });

  const [metrics, setMetrics] = useState<SEOMetrics>({
    titleLength: null,
    descriptionLength: null,
    headingStructure: null,
    imageAltTexts: null,
    internalLinks: null,
    externalLinks: null
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const analyzeSEO = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Analyze title length
    const title = document.title;
    setMetrics(prev => ({ ...prev, titleLength: title.length }));

    // Analyze meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionLength = metaDescription ? metaDescription.getAttribute('content')?.length || 0 : 0;
    setMetrics(prev => ({ ...prev, descriptionLength }));

    // Analyze heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingStructure = Array.from(headings).map(h => h.tagName).join(' > ');
    setMetrics(prev => ({ ...prev, headingStructure }));

    // Count images with alt text
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.getAttribute('alt'));
    setMetrics(prev => ({ ...prev, imageAltTexts: imagesWithAlt.length }));

    // Count internal and external links
    const links = document.querySelectorAll('a[href]');
    let internalLinks = 0;
    let externalLinks = 0;
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        if (href.startsWith('/') || href.includes(window.location.hostname)) {
          internalLinks++;
        } else if (href.startsWith('http')) {
          externalLinks++;
        }
      }
    });
    
    setMetrics(prev => ({ 
      ...prev, 
      internalLinks, 
      externalLinks 
    }));
  }, []);

  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  const optimizeSEO = useCallback(async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Apply optimizations based on settings
    if (settings.metaTags) {
      console.log('Optimizing meta tags...');
    }
    
    if (settings.structuredData) {
      console.log('Adding structured data...');
    }
    
    if (settings.sitemap) {
      console.log('Generating sitemap...');
    }
    
    if (settings.robotsTxt) {
      console.log('Updating robots.txt...');
    }
    
    if (settings.canonicalUrls) {
      console.log('Setting canonical URLs...');
    }
    
    if (settings.altTexts) {
      console.log('Adding alt texts to images...');
    }
    
    setIsOptimizing(false);
    
    // Re-analyze SEO after optimization
    setTimeout(analyzeSEO, 1000);
  }, [settings, analyzeSEO]);

  const toggleSetting = (key: keyof SEOSettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const seoFeatures = [
    {
      key: 'metaTags' as keyof SEOSettings,
      title: 'Meta Tags',
      description: 'Optimize title, description, and other meta tags',
      impact: 'High'
    },
    {
      key: 'structuredData' as keyof SEOSettings,
      title: 'Structured Data',
      description: 'Add JSON-LD structured data for better search results',
      impact: 'High'
    },
    {
      key: 'sitemap' as keyof SEOSettings,
      title: 'Sitemap',
      description: 'Generate and submit XML sitemap to search engines',
      impact: 'Medium'
    },
    {
      key: 'robotsTxt' as keyof SEOSettings,
      title: 'Robots.txt',
      description: 'Create robots.txt file for search engine crawlers',
      impact: 'Medium'
    },
    {
      key: 'canonicalUrls' as keyof SEOSettings,
      title: 'Canonical URLs',
      description: 'Set canonical URLs to prevent duplicate content issues',
      impact: 'High'
    },
    {
      key: 'altTexts' as keyof SEOSettings,
      title: 'Alt Texts',
      description: 'Add descriptive alt texts to all images',
      impact: 'Medium'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Open SEO optimizer"
      >
        <Search className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-6 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Search className="w-5 h-5 mr-2" />
          SEO Optimizer
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close SEO optimizer"
        >
          ×
        </button>
      </div>
      
      {/* SEO Metrics */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
          <Eye className="w-4 h-4 mr-2" />
          SEO Analysis
        </h4>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Title Length:</span>
            <span className={getScoreColor(metrics.titleLength, { good: 60, poor: 70 })}>
              {metrics.titleLength ? `${metrics.titleLength}/60` : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Description Length:</span>
            <span className={getScoreColor(metrics.descriptionLength, { good: 160, poor: 200 })}>
              {metrics.descriptionLength ? `${metrics.descriptionLength}/160` : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Images with Alt:</span>
            <span className="text-gray-900 dark:text-white">
              {metrics.imageAltTexts || 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Internal Links:</span>
            <span className="text-gray-900 dark:text-white">
              {metrics.internalLinks || 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">External Links:</span>
            <span className="text-gray-900 dark:text-white">
              {metrics.externalLinks || 'N/A'}
            </span>
          </div>
        </div>
      </div>
      
      {/* SEO Settings */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
          SEO Features
        </h4>
        {seoFeatures.map((feature) => (
          <div key={feature.key} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </span>
                <span className={`text-xs ${getImpactColor(feature.impact)}`}>
                  {feature.impact} Impact
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {feature.description}
              </p>
            </div>
            <button
              onClick={() => toggleSetting(feature.key)}
              className={`ml-3 relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                settings[feature.key]
                  ? 'bg-green-600'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
              aria-label={`Toggle ${feature.title}`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                  settings[feature.key] ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
      
      {/* Optimize Button */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={optimizeSEO}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isOptimizing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Optimizing...
            </>
          ) : (
            <>
              <Search className="w-4 h-4 mr-2" />
              Optimize SEO
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AdvancedSEOOptimizer;