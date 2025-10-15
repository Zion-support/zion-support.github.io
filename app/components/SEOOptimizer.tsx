import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  structuredData,
}) => {
  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title.includes('Zion Tech Group') ? title : `${title} - Zion Tech Group`;
    }

    // Update meta description
    if (description) {
      updateMetaTag('description', description);
    }

    // Update meta keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update canonical URL
    if (canonicalUrl) {
      updateCanonicalUrl(canonicalUrl);
    }

    // Update Open Graph tags
    if (ogImage) {
      updateMetaTag('og:image', ogImage, 'property');
    }

    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }

    // Add breadcrumb schema
    addBreadcrumbSchema();

    // Add FAQ schema for common questions
    addFAQSchema();

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  };

  const addStructuredData = (data: object) => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  const addBreadcrumbSchema = () => {
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

    // Add current page to breadcrumb
    const currentPath = window.location.pathname;
    if (currentPath !== '/') {
      const pathSegments = currentPath.split('/').filter(Boolean);
      pathSegments.forEach((segment, index) => {
        breadcrumbData.itemListElement.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          "item": `https://ziontechgroup.com${currentPath}`
        });
      });
    }

    addStructuredData(breadcrumbData);
  };

  const addFAQSchema = () => {
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Zion Tech Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zion Tech Group offers comprehensive AI and IT services including artificial intelligence solutions, cloud infrastructure, digital transformation, web development, mobile development, data analytics, and specialized AI tools for businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Zion Tech Group?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact us at kleber@ziontechgroup.com, call us at +1 (302) 464-0950, or visit our office at 364 E Main St STE 1008, Middletown DE 19709."
          }
        },
        {
          "@type": "Question",
          "name": "What AI tools does Zion Tech Group provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide various AI tools including content moderators, sales predictors, workflow automators, financial forecasters, customer churn predictors, sentiment trackers, and many more specialized business automation tools."
          }
        }
      ]
    };

    addStructuredData(faqData);
  };

  return null;
};

export default SEOOptimizer;