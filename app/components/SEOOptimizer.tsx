<<<<<<< HEAD
<<<<<<< HEAD
import { Code } from 'lucide-react';
import { Cloud } from 'lucide-react';
import React from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
<<<<<<< HEAD
interface SeooptimizerProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Seooptimizer({ className = '', children, ...props }: SeooptimizerProps) {
  return (
    <div className={`seooptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOOptimizerProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  structuredData?: object
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  structuredData
}) => {
<<<<<<< HEAD
  const keywordsString = keywords.join(', ')
=======
  title?: string;
  description?: string;
}
=======
  useEffect(() => {
    // Update page title
    document.title = title;
    // Update meta description
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    // Update Twitter tags
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    // Update canonical URL
    updateCanonicalUrl(canonicalUrl);
    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
    // Add breadcrumb structured data
    addBreadcrumbStructuredData();
    // Add organization structured data
    addOrganizationStructuredData();
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
  const updateCanonicalUrl = (url: string,) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  };
  const addStructuredData = (data: Record<string, unknown>) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    // Remove existing structured data
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };
  const addBreadcrumbStructuredData = () => {
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https: //ziontechgroup.com',
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    // Remove existing breadcrumb data
    const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children, title, description }) => {
  useEffect(() => {
    // Add structured data for better SEO
    const addStructuredData = () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) return;

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.svg",
        "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "364 E Main St STE 1008",
          "addressLocality": "Middletown",
          "addressRegion": "DE",
          "postalCode": "19709",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service",
          "email": "kleber@ziontechgroup.com"
        },
        "sameAs": [
          "https://twitter.com/ziontechgroup",
          "https://linkedin.com/company/ziontechgroup"
        ],
        "offers": [
          {
            "@type": "Offer",
            "name": "AI Solutions",
            "description": "Artificial intelligence and machine learning services"
          },
          {
            "@type": "Offer",
            "name": "Cybersecurity",
            "description": "Advanced cybersecurity solutions and protection"
          },
          {
            "@type": "Offer",
            "name": "Cloud Infrastructure",
            "description": "Cloud computing and infrastructure services"
          }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    // Add meta tags for better social sharing
    const addSocialMetaTags = () => {
      const metaTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ziontechgroup' },
        { name: 'twitter:creator', content: '@ziontechgroup' },
        { name: 'twitter:title', content: 'Zion Tech Group - Advanced AI and IT Solutions' },
        { name: 'twitter:description', content: 'Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.' },
        { name: 'twitter:image', content: 'https://ziontechgroup.com/og-image.jpg' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Zion Tech Group - Advanced AI and IT Solutions' }
      ];

      metaTags.forEach(tag => {
        const existingTag = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
        if (!existingTag) {
          const meta = document.createElement('meta');
          if (tag.name) meta.setAttribute('name', tag.name);
          if (tag.property) meta.setAttribute('property', tag.property);
          meta.setAttribute('content', tag.content);
          document.head.appendChild(meta);
        }
      });
    };

    // Add performance hints
    const addPerformanceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const existingHint = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
        if (!existingHint) {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
          document.head.appendChild(link);
        }
      });
    };

    // Initialize SEO optimizations
    addStructuredData();
    addSocialMetaTags();
    addPerformanceHints();
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0326

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      <meta name="keywords" content={keywordsString} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEOOptimizer
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
import React from 'react';

const SEOOptimizer: React.FC = () => {
  return (
    <div className="seooptimizer">
      <h2>SEOOptimizer</h2>
      <p>SEOOptimizer component.</p>
    </div>
=======
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og: title" content={title,} />
      <meta property="og: description" content={description,} />
      <meta property="og: image" content={ogImage,} />
      <meta property="og: url" content={canonicalUrl,} />
      <meta name="twitter: title" content={title,} />
      <meta name="twitter: description" content={description,} />
      <meta name="twitter: image" content={ogImage,} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
};

export default SEOOptimizer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
