import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
import React, { memo, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  page?: string;
  seoData?: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    structuredData?: any;
  };
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({
  page = 'home',
  seoData = {}
}) => {
  const defaultSEOData = useMemo(() => ({
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI solutions, cybersecurity, and cloud infrastructure services.',
    keywords: ['AI', 'artificial intelligence', 'cybersecurity', 'cloud infrastructure', 'IT solutions'],
    canonical: 'https://ziontechgroup.com',
    ogImage: 'https://ziontechgroup.com/og-image.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading provider of AI solutions, cybersecurity, and cloud infrastructure services.',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    }
  }), []);

  const addBreadcrumbStructuredData = () => {
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ziontechgroup.com'
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const addFAQStructuredData = () => {
    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Zion Tech Group offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer AI solutions, cybersecurity services, and cloud infrastructure solutions.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I contact Zion Tech Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us through our website or email us directly.'
          }
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqData);
    script.id = 'faq-structured-data';
    const existing = document.getElementById('faq-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const addOrganizationStructuredData = () => {
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Leading provider of AI solutions, cybersecurity, and cloud infrastructure services.',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationData);
    script.id = 'organization-structured-data';
    const existing = document.getElementById('organization-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };

  const mergedSEOData = { ...defaultSEOData, ...seoData };

  useEffect(() => {
    addBreadcrumbStructuredData();
    addFAQStructuredData();
    addOrganizationStructuredData();
  }, []);
=======
interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, IT consulting, cloud infrastructure, and cybersecurity services. Transform your business with cutting-edge technology solutions.',
  keywords = 'AI services, IT consulting, cloud infrastructure, cybersecurity, digital transformation, artificial intelligence, machine learning, business automation',
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Update document title for better SEO
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update Open Graph image
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }

    // Add structured data
    if (structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(structuredData);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }

    // Add breadcrumb structured data
    const breadcrumbData = {
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

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    // Add FAQ structured data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Zion Tech Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zion Tech Group offers comprehensive AI services, IT consulting, cloud infrastructure solutions, cybersecurity services, and digital transformation consulting for businesses of all sizes."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Zion Tech Group?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Zion Tech Group by calling (302) 464-0950, emailing kleber@ziontechgroup.com, or visiting our office at 364 E Main St STE 1008, Middletown, DE 19709."
          }
        },
        {
          "@type": "Question",
          "name": "What is the average ROI for AI solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI solutions typically deliver an average ROI of 300% for our clients, with some projects achieving even higher returns through improved efficiency and automation."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqData);
    document.head.appendChild(faqScript);

    // Cleanup function
    return () => {
      // Remove dynamically added scripts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('BreadcrumbList') || script.textContent?.includes('FAQPage')) {
          script.remove();
        }
      });
    };
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);
>>>>>>> main

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
<<<<<<< HEAD
});

SEOOptimizer.displayName = 'SEOOptimizer';
=======
};

>>>>>>> main
export default SEOOptimizer;