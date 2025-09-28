import React, { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  twitterCard?: string;
  twitterSite?: string;
  structuredData?: Record<string, any>;
}

interface SEOOptimizerProps {
  seoData: SEOData;
  children?: React.ReactNode;
}

export const useSEOData = (pathname: string): SEOData => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const defaultSEO: SEOData = {
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered technology solutions, cloud services, and digital transformation consulting for modern enterprises.',
    keywords: 'AI, artificial intelligence, technology solutions, cloud services, digital transformation, quantum computing, enterprise software',
    ogTitle: 'Zion Tech Group - Advanced AI and IT Solutions',
    ogDescription: 'Leading provider of AI-powered technology solutions, cloud services, and digital transformation consulting for modern enterprises.',
    ogImage: '/og-image.png',
    ogType: 'website',
    canonical: `${baseUrl}${pathname}`,
    twitterCard: 'summary_large_image',
    twitterSite: '@ziontechgroup'
  };

  // Customize SEO data based on pathname
  switch (pathname) {
    case '/about':
      return {
        ...defaultSEO,
        title: 'About Us - Zion Tech Group',
        description: 'Learn about Zion Tech Group\'s mission, values, and commitment to delivering cutting-edge AI and technology solutions that transform businesses.',
        ogTitle: 'About Us - Zion Tech Group',
        ogDescription: 'Learn about Zion Tech Group\'s mission, values, and commitment to delivering cutting-edge AI and technology solutions.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          description: 'Leading provider of AI-powered technology solutions',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          sameAs: [
            'https://linkedin.com/company/zion-tech-group',
            'https://twitter.com/ziontechgroup'
          ]
        }
      };
    case '/services':
      return {
        ...defaultSEO,
        title: 'Our Services - Zion Tech Group',
        description: 'Explore our comprehensive range of AI, cloud, and technology services designed to transform your business and accelerate digital innovation.',
        ogTitle: 'Our Services - Zion Tech Group',
        ogDescription: 'Explore our comprehensive range of AI, cloud, and technology services designed to transform your business.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Technology Consulting Services',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          description: 'AI, cloud, and technology services for digital transformation',
          serviceType: 'Technology Consulting'
        }
      };
    case '/contact':
      return {
        ...defaultSEO,
        title: 'Contact Us - Zion Tech Group',
        description: 'Get in touch with our team of experts to discuss your technology needs, project requirements, and how we can help transform your business.',
        ogTitle: 'Contact Us - Zion Tech Group',
        ogDescription: 'Get in touch with our team of experts to discuss your technology needs and project requirements.',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Zion Tech Group',
          description: 'Contact information for Zion Tech Group',
          mainEntity: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-0123',
              contactType: 'customer service',
              email: 'contact@ziontechgroup.com'
            }
          }
        }
      };
    case '/portfolio':
      return {
        ...defaultSEO,
        title: 'Our Portfolio - Zion Tech Group',
        description: 'Explore our successful projects and case studies showcasing our expertise in AI implementation, cloud migration, and digital transformation.',
        ogTitle: 'Our Portfolio - Zion Tech Group',
        ogDescription: 'Explore our successful projects and case studies showcasing our expertise in AI and digital transformation.'
      };
    default:
      return {
        ...defaultSEO,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zion Tech Group',
          url: baseUrl,
          description: defaultSEO.description,
          publisher: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          }
        }
      };
  }
};

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ seoData, children }) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Update title
    document.title = seoData.title;

    // Update meta description
    updateMetaTag('description', 'name', seoData.description);

    // Update keywords
    if (seoData.keywords) {
      updateMetaTag('keywords', 'name', seoData.keywords);
    }

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: seoData.ogTitle || seoData.title },
      { property: 'og:description', content: seoData.ogDescription || seoData.description },
      { property: 'og:image', content: seoData.ogImage || '/og-image.png' },
      { property: 'og:url', content: seoData.canonical || window.location.href },
      { property: 'og:type', content: seoData.ogType || 'website' }
    ];

    ogTags.forEach(({ property, content }) => {
      updateMetaTag(property, 'property', content);
    });

    // Update Twitter Card tags
    if (seoData.twitterCard) {
      updateMetaTag('twitter:card', 'name', seoData.twitterCard);
    }
    if (seoData.twitterSite) {
      updateMetaTag('twitter:site', 'name', seoData.twitterSite);
    }
    updateMetaTag('twitter:title', 'name', seoData.ogTitle || seoData.title);
    updateMetaTag('twitter:description', 'name', seoData.ogDescription || seoData.description);
    updateMetaTag('twitter:image', 'name', seoData.ogImage || '/og-image.png');

    // Update canonical URL
    if (seoData.canonical) {
      updateCanonicalLink(seoData.canonical);
    }

    // Add structured data
    if (seoData.structuredData) {
      updateStructuredData(seoData.structuredData);
    }

    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewport);
    }

    // Add theme color
    updateMetaTag('theme-color', 'name', '#1e1b4b');

  }, [seoData]);

  const updateMetaTag = (name: string, attribute: string, content: string) => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  const updateCanonicalLink = (href: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', href);
  };

  const updateStructuredData = (data: Record<string, any>) => {
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  };

  return <>{children}</>;
};

export default SEOOptimizer;