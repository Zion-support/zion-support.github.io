import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  enableStructuredData?: boolean;
  enableMetaOptimization?: boolean;
  enableSitemapGeneration?: boolean;
  enableRobotsTxt?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  enableStructuredData = true,
  enableMetaOptimization = true,
  enableSitemapGeneration = true,
  enableRobotsTxt = true,
  enableOpenGraph = true,
  enableTwitterCards = true
}) => {
  useEffect(() => {
    // Add structured data for organization
    if (enableStructuredData) {
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
        "foundingDate": "2020",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service",
          "email": "kleber@ziontechgroup.com",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "364 E Main St STE 1008",
          "addressLocality": "Middletown",
          "addressRegion": "DE",
          "postalCode": "19709",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://ziontechgroup.com",
          "https://linkedin.com/company/ziontechgroup",
          "https://twitter.com/ziontechgroup"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI and IT Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Development Services",
                "description": "Custom AI solutions tailored to your business needs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cybersecurity Solutions",
                "description": "Comprehensive security solutions to protect your digital assets"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Infrastructure",
                "description": "Scalable cloud solutions and infrastructure management"
              }
            }
          ]
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(organizationSchema);
      document.head.appendChild(script);
    }

    // Add breadcrumb structured data
    if (enableStructuredData) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ziontechgroup.com"
          }
        ]
      };

      // Add current page to breadcrumb
      const currentPath = window.location.pathname;
      const pathSegments = currentPath.split('/').filter(segment => segment);
      
      pathSegments.forEach((segment, index) => {
        const breadcrumbItem = {
          "@type": "ListItem",
          "position": index + 2,
          "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          "item": `https://ziontechgroup.com${pathSegments.slice(0, index + 1).join('/')}`
        };
        breadcrumbSchema.itemListElement.push(breadcrumbItem);
      });

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);
    }

    // Optimize meta tags
    if (enableMetaOptimization) {
      // Ensure title is optimized
      const title = document.title;
      if (!title.includes('Zion Tech Group')) {
        document.title = `${title} - Zion Tech Group`;
      }

      // Add canonical URL if not present
      if (!document.querySelector('link[rel="canonical"]')) {
        const canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = window.location.href;
        document.head.appendChild(canonical);
      }

      // Add hreflang for internationalization
      const hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.hreflang = 'en';
      hreflang.href = window.location.href;
      document.head.appendChild(hreflang);
    }

    // Add Open Graph tags
    if (enableOpenGraph) {
      const ogTags = [
        { property: 'og:site_name', content: 'Zion Tech Group' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Zion Tech Group - AI and IT Solutions' }
      ];

      ogTags.forEach(tag => {
        if (!document.querySelector(`meta[property="${tag.property}"]`)) {
          const meta = document.createElement('meta');
          meta.setAttribute('property', tag.property);
          meta.setAttribute('content', tag.content);
          document.head.appendChild(meta);
        }
      });
    }

    // Add Twitter Card tags
    if (enableTwitterCards) {
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ziontechgroup' },
        { name: 'twitter:creator', content: '@ziontechgroup' },
        { name: 'twitter:image:alt', content: 'Zion Tech Group - AI and IT Solutions' }
      ];

      twitterTags.forEach(tag => {
        if (!document.querySelector(`meta[name="${tag.name}"]`)) {
          const meta = document.createElement('meta');
          meta.setAttribute('name', tag.name);
          meta.setAttribute('content', tag.content);
          document.head.appendChild(meta);
        }
      });
    }

    // Add performance hints
    const performanceHints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' }
    ];

    performanceHints.forEach(hint => {
      if (!document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`)) {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossorigin) {
          link.crossOrigin = hint.crossorigin;
        }
        document.head.appendChild(link);
      }
    });

    // Add security headers
    const securityMeta = [
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'referrer', content: 'strict-origin-when-cross-origin' }
    ];

    securityMeta.forEach(meta => {
      const key = Object.keys(meta)[0];
      const value = Object.values(meta)[0];
      if (!document.querySelector(`meta[${key}="${value}"]`)) {
        const metaElement = document.createElement('meta');
        metaElement.setAttribute(key, value);
        metaElement.setAttribute('content', meta.content);
        document.head.appendChild(metaElement);
      }
    });

  }, [enableStructuredData, enableMetaOptimization, enableOpenGraph, enableTwitterCards]);

  // Generate sitemap
  useEffect(() => {
    if (enableSitemapGeneration && typeof window !== 'undefined') {
      const generateSitemap = async () => {
        try {
          const response = await fetch('/api/sitemap');
          if (!response.ok) {
            // Generate basic sitemap
            const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ziontechgroup.com</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

            // Store sitemap in localStorage for now
            localStorage.setItem('sitemap', sitemap);
          }
        } catch (error) {
          console.warn('Sitemap generation failed:', error);
        }
      };

      generateSitemap();
    }
  }, [enableSitemapGeneration]);

  // Generate robots.txt
  useEffect(() => {
    if (enableRobotsTxt && typeof window !== 'undefined') {
      const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow important pages
Allow: /services/
Allow: /about/
Allow: /contact/
Allow: /pricing/`;

      // Store robots.txt in localStorage for now
      localStorage.setItem('robots.txt', robotsTxt);
    }
  }, [enableRobotsTxt]);

  return null;
};

export default SEOOptimizer;