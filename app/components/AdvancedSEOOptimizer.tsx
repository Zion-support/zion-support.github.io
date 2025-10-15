'use client';
import React, { useState, useEffect, useCallback } from 'react';

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

  const analyzeSEO = useCallback(() => {
    // Analyze title length
    const title = document.querySelector('title')?.textContent || '';
    setMetrics(prev => ({ ...prev, titleLength: title.length }));

    // Analyze meta description
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    setMetrics(prev => ({ ...prev, descriptionLength: metaDescription.length }));

    // Analyze heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingStructure = Array.from(headings).map(h => h.tagName).join(', ');
    setMetrics(prev => ({ ...prev, headingStructure }));

    // Analyze image alt texts
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.alt).length;
    setMetrics(prev => ({ ...prev, imageAltTexts: imagesWithAlt }));

    // Analyze internal links
    const links = document.querySelectorAll('a[href]');
    const internalLinks = Array.from(links).filter(link => {
      const href = link.getAttribute('href') || '';
      return href.startsWith('/') || href.includes(window.location.hostname);
    }).length;
    setMetrics(prev => ({ ...prev, internalLinks }));

    // Analyze external links
    const externalLinks = Array.from(links).filter(link => {
      const href = link.getAttribute('href') || '';
      return href.startsWith('http') && !href.includes(window.location.hostname);
    }).length;
    setMetrics(prev => ({ ...prev, externalLinks }));
  }, []);

  const optimizeSEO = useCallback(() => {
    if (settings.metaTags) {
      // Add missing meta tags
      const metaTags = [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Zion Tech Group' }
      ];

      metaTags.forEach(tag => {
        if (!document.querySelector(`meta[name="${tag.name}"]`)) {
          const meta = document.createElement('meta');
          meta.name = tag.name;
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      });
    }

    if (settings.canonicalUrls) {
      // Add canonical URL
      if (!document.querySelector('link[rel="canonical"]')) {
        const canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = window.location.href;
        document.head.appendChild(canonical);
      }
    }

    if (settings.altTexts) {
      // Add alt text to images without it
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        img.alt = `Image ${index + 1}`;
      });
    }
  }, [settings]);

  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  useEffect(() => {
    optimizeSEO();
  }, [optimizeSEO]);

  const toggleSetting = (key: keyof SEOSettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="seo-optimizer">
      <h3>SEO Optimizer</h3>
      <div className="settings">
        {Object.entries(settings).map(([key, value]) => (
          <label key={key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={value}
              onChange={() => toggleSetting(key as keyof SEOSettings)}
            />
            <span>{key}</span>
          </label>
        ))}
      </div>
      <div className="metrics">
        <h4>SEO Metrics</h4>
        <ul>
          <li>Title Length: {metrics.titleLength}</li>
          <li>Description Length: {metrics.descriptionLength}</li>
          <li>Images with Alt: {metrics.imageAltTexts}</li>
          <li>Internal Links: {metrics.internalLinks}</li>
          <li>External Links: {metrics.externalLinks}</li>
        </ul>
      </div>
    </div>
  );
};

export default AdvancedSEOOptimizer;