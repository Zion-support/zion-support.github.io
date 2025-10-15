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

  // Analyze current page SEO
  const analyzeSEO = useCallback(() => {
    // Analyze title length
    const title = document.querySelector('title')?.textContent || '';
    setMetrics(prev => ({ ...prev, titleLength: title.length }));

    // Analyze meta description
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    setMetrics(prev => ({ ...prev, descriptionLength: metaDescription.length }));

    // Analyze heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingStructure = Array.from(headings).map(h => h.tagName).join(' > ');
    setMetrics(prev => ({ ...prev, headingStructure }));

    // Analyze image alt texts
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.hasAttribute('alt') && img.getAttribute('alt') !== '');
    setMetrics(prev => ({ ...prev, imageAltTexts: imagesWithAlt.length }));

    // Analyze internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
    setMetrics(prev => ({ ...prev, internalLinks: internalLinks.length }));

    // Analyze external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    setMetrics(prev => ({ ...prev, externalLinks: externalLinks.length }));
  }, []);

  // Apply SEO optimizations
  const applySEOOptimizations = useCallback(() => {
    if (settings.metaTags) {
      // Ensure proper meta tags
      const title = document.querySelector('title');
      if (!title) {
        const titleElement = document.createElement('title');
        titleElement.textContent = 'Zion Tech Group - AI & IT Solutions';
        document.head.appendChild(titleElement);
      }

      const metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        const metaElement = document.createElement('meta');
        metaElement.name = 'description';
        metaElement.content = 'Leading provider of AI and IT solutions for modern businesses';
        document.head.appendChild(metaElement);
      }
    }

    if (settings.canonicalUrls) {
      // Add canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        const canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';
        canonicalElement.href = window.location.href;
        document.head.appendChild(canonicalElement);
      }
    }

    if (settings.altTexts) {
      // Add alt text to images without it
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('alt')) {
          img.setAttribute('alt', '');
        }
      });
    }
  }, [settings]);

  // Generate structured data
  const generateStructuredData = useCallback(() => {
    if (!settings.structuredData) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "description": "Leading provider of AI and IT solutions for modern businesses",
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
  }, [settings.structuredData]);

  useEffect(() => {
    analyzeSEO();
    applySEOOptimizations();
    generateStructuredData();
  }, [analyzeSEO, applySEOOptimizations, generateStructuredData]);

  const toggleSetting = (key: keyof SEOSettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-500';
    if (value >= thresholds.good) return 'text-green-500';
    if (value >= thresholds.poor) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Toggle SEO optimizer"
      >
        <Search className="w-6 h-6" />
      </button>

      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            SEO Optimizer
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Settings</h4>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.metaTags}
                    onChange={() => toggleSetting('metaTags')}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Meta Tags</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.structuredData}
                    onChange={() => toggleSetting('structuredData')}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Structured Data</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.canonicalUrls}
                    onChange={() => toggleSetting('canonicalUrls')}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Canonical URLs</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.altTexts}
                    onChange={() => toggleSetting('altTexts')}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Alt Texts</span>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Metrics</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Title Length</span>
                  <span className={`text-sm font-mono ${getScoreColor(metrics.titleLength, { good: 50, poor: 30 })}`}>
                    {metrics.titleLength || 'N/A'} / 60
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Description Length</span>
                  <span className={`text-sm font-mono ${getScoreColor(metrics.descriptionLength, { good: 120, poor: 80 })}`}>
                    {metrics.descriptionLength || 'N/A'} / 160
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Images with Alt</span>
                  <span className="text-sm font-mono text-blue-500">
                    {metrics.imageAltTexts || 'N/A'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Internal Links</span>
                  <span className="text-sm font-mono text-blue-500">
                    {metrics.internalLinks || 'N/A'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">External Links</span>
                  <span className="text-sm font-mono text-blue-500">
                    {metrics.externalLinks || 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>Green: Good | Yellow: Needs Improvement | Red: Poor</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSEOOptimizer;
