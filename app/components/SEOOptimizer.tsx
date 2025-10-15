import React, { useEffect, useState } from 'react';
import { SEO_CONSTANTS, STRUCTURED_DATA, META_TAGS, OPEN_GRAPH_TAGS, TWITTER_TAGS } from '../utils/seoConstants';
import { trackPerformance } from '../utils/analytics';

interface SEOState {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  structuredData: any;
  metaTags: Array<{ name: string; content: string }>;
  performanceScore: number;
  recommendations: string[];
}

const SEOOptimizer: React.FC = () => {
  const [seoState, setSeoState] = useState<SEOState>({
    title: '',
    description: '',
    keywords: '',
    canonicalUrl: '',
    ogImage: '',
    structuredData: null,
    metaTags: [],
    performanceScore: 0,
    recommendations: [],
  });

  useEffect(() => {
    // Analyze current page SEO
    const analyzeSEO = () => {
      const title = document.title || '';
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
      const canonicalUrl = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || window.location.href;
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

      // Calculate performance score
      let score = 0;
      const recommendations: string[] = [];

      if (title.length > 30 && title.length < 60) score += 20;
      else if (title.length > 0) recommendations.push('Title should be between 30-60 characters');

      if (description.length > 120 && description.length < 160) score += 20;
      else if (description.length > 0) recommendations.push('Description should be between 120-160 characters');

      if (keywords.length > 0) score += 10;
      else recommendations.push('Add relevant keywords');

      if (canonicalUrl) score += 10;
      else recommendations.push('Add canonical URL');

      if (ogImage) score += 10;
      else recommendations.push('Add Open Graph image');

      // Check for structured data
      const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
      if (structuredDataScripts.length > 0) score += 20;
      else recommendations.push('Add structured data');

      // Check for alt text on images
      const images = document.querySelectorAll('img');
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
      if (imagesWithoutAlt.length === 0) score += 10;
      else recommendations.push(`${imagesWithoutAlt.length} images missing alt text`);

      // Check for heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const h1Count = document.querySelectorAll('h1').length;
      if (h1Count === 1) score += 10;
      else if (h1Count === 0) recommendations.push('Add H1 heading');
      else recommendations.push('Use only one H1 heading per page');

      setSeoState({
        title,
        description,
        keywords,
        canonicalUrl,
        ogImage,
        structuredData: null,
        metaTags: [],
        performanceScore: score,
        recommendations,
      });
    };

    // Add essential meta tags
    const addEssentialMetaTags = () => {
      const essentialTags = [
        { name: 'robots', content: META_TAGS.ROBOTS },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'author', content: META_TAGS.AUTHOR },
        { name: 'theme-color', content: META_TAGS.THEME_COLOR },
        { name: 'msapplication-TileColor', content: META_TAGS.MSAPPLICATION_TILECOLOR },
        { property: 'og:site_name', content: OPEN_GRAPH_TAGS.SITE_NAME },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:site', content: TWITTER_TAGS.SITE },
        { name: 'twitter:creator', content: TWITTER_TAGS.CREATOR },
      ];

      essentialTags.forEach(tag => {
        const selector = Object.keys(tag).map(key => `[${key}="${tag[key]}"]`).join('');
        const existingMeta = document.querySelector(`meta${selector}`);
        
        if (!existingMeta) {
          const meta = document.createElement('meta');
          Object.entries(tag).forEach(([key, value]) => {
            meta.setAttribute(key, value);
          });
          document.head.appendChild(meta);
        }
      });
    };

    // Add structured data
    const addStructuredData = () => {
      // Organization structured data
      const orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.textContent = JSON.stringify(STRUCTURED_DATA.ORGANIZATION);
      orgScript.id = 'seo-organization-data';
      document.head.appendChild(orgScript);

      // Website structured data
      const websiteScript = document.createElement('script');
      websiteScript.type = 'application/ld+json';
      websiteScript.textContent = JSON.stringify(STRUCTURED_DATA.WEBSITE);
      websiteScript.id = 'seo-website-data';
      document.head.appendChild(websiteScript);
    };

    // Optimize images for SEO
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" if not present
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }

        // Ensure alt text is present
        if (!img.alt) {
          img.alt = 'Image';
        }
      });
    };

    // Add sitemap link
    const addSitemapLink = () => {
      const existingSitemap = document.querySelector('link[rel="sitemap"]');
      if (!existingSitemap) {
        const sitemapLink = document.createElement('link');
        sitemapLink.rel = 'sitemap';
        sitemapLink.type = 'application/xml';
        sitemapLink.href = '/sitemap.xml';
        document.head.appendChild(sitemapLink);
      }
    };

    // Add robots.txt link
    const addRobotsLink = () => {
      const existingRobots = document.querySelector('link[rel="robots"]');
      if (!existingRobots) {
        const robotsLink = document.createElement('link');
        robotsLink.rel = 'robots';
        robotsLink.href = '/robots.txt';
        document.head.appendChild(robotsLink);
      }
    };

    // Track SEO performance
    const trackSEOPerformance = () => {
      trackPerformance('seo_score', seoState.performanceScore, {
        title_length: seoState.title.length,
        description_length: seoState.description.length,
        has_keywords: seoState.keywords.length > 0,
        has_canonical: !!seoState.canonicalUrl,
        has_og_image: !!seoState.ogImage,
        recommendations_count: seoState.recommendations.length,
      });
    };

    // Initialize SEO optimization
    addEssentialMetaTags();
    addStructuredData();
    optimizeImages();
    addSitemapLink();
    addRobotsLink();
    analyzeSEO();

    // Track performance after a delay
    const timeoutId = setTimeout(trackSEOPerformance, 2000);

    return () => {
      clearTimeout(timeoutId);
      
      // Cleanup structured data scripts
      const orgScript = document.getElementById('seo-organization-data');
      const websiteScript = document.getElementById('seo-website-data');
      if (orgScript) orgScript.remove();
      if (websiteScript) websiteScript.remove();
    };
  }, []);

  // Show SEO info in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm text-xs z-50">
        <h3 className="font-bold mb-2">SEO Analysis</h3>
        <div className="space-y-1">
          <div>Score: {seoState.performanceScore}/100</div>
          <div>Title: {seoState.title.length} chars</div>
          <div>Description: {seoState.description.length} chars</div>
          <div>Keywords: {seoState.keywords ? 'Yes' : 'No'}</div>
          <div>Canonical: {seoState.canonicalUrl ? 'Yes' : 'No'}</div>
          <div>OG Image: {seoState.ogImage ? 'Yes' : 'No'}</div>
        </div>
        {seoState.recommendations.length > 0 && (
          <div className="mt-2 pt-2 border-t border-slate-600">
            <div className="font-semibold text-yellow-400">Recommendations:</div>
            <ul className="mt-1 space-y-1">
              {seoState.recommendations.map((rec, index) => (
                <li key={index} className="text-yellow-300">• {rec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default SEOOptimizer;
