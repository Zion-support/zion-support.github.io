import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  enableStructuredData?: boolean;
  enableMetaOptimization?: boolean;
  enableSitemapGeneration?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  enableStructuredData = true,
  enableMetaOptimization = true,
  enableSitemapGeneration = true,
}) => {
  useEffect(() => {
    if (enableStructuredData) {
      addStructuredData();
    }

    if (enableMetaOptimization) {
      optimizeMetaTags();
    }

    if (enableSitemapGeneration) {
      generateSitemap();
    }
  }, [enableStructuredData, enableMetaOptimization, enableSitemapGeneration]);

  const addStructuredData = () => {
    // Organization structured data
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo512.png',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      foundingDate: '2020',
      numberOfEmployees: '50-100',
      industry: 'Technology',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'Customer Service',
        areaServed: 'US',
        availableLanguage: 'en',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
      ],
    };

    // Service structured data
    const serviceData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI and IT Solutions',
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
      },
      description: 'Comprehensive AI and IT solutions including machine learning, automation, cloud services, and digital transformation.',
      serviceType: 'Technology Services',
      areaServed: 'United States',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Technology Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Enterprise Solutions',
              description: 'Custom AI solutions for enterprise organizations',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Transformation',
              description: 'Complete digital transformation services',
            },
          },
        ],
      },
    };

    // Add structured data to page
    const addStructuredDataScript = (data: any, id: string) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    addStructuredDataScript(organizationData, 'organization-structured-data');
    addStructuredDataScript(serviceData, 'service-structured-data');
  };

  const optimizeMetaTags = () => {
    // Add canonical URL if not present
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }

    // Add hreflang tags for internationalization
    const hreflang = document.createElement('link');
    hreflang.rel = 'alternate';
    hreflang.hreflang = 'en';
    hreflang.href = 'https://ziontechgroup.com';
    document.head.appendChild(hreflang);

    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
      document.head.appendChild(viewport);
    }

    // Add theme-color meta tag
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#4f46e5';
      document.head.appendChild(themeColor);
    }
  };

  const generateSitemap = () => {
    // This would typically be done server-side, but we can add a sitemap link
    if (!document.querySelector('link[rel="sitemap"]')) {
      const sitemap = document.createElement('link');
      sitemap.rel = 'sitemap';
      sitemap.type = 'application/xml';
      sitemap.href = '/sitemap.xml';
      document.head.appendChild(sitemap);
    }
  };

  // Add breadcrumb structured data
  const addBreadcrumbData = (breadcrumbs: Array<{ name: string; url: string }>) => {
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
  };

  // Add FAQ structured data
  const addFAQData = (faqs: Array<{ question: string; answer: string }>) => {
    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqData);
    document.head.appendChild(script);
  };

  return null; // This component doesn't render anything
};

export default SEOOptimizer;