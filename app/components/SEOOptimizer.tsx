<<<<<<< HEAD
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
=======
'use client';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;,
    description: string;
  keywords: string[];,
    canonical: string;
  ogImage: string;,
    twitterCard: string;
  structuredData: object;
}

export const SEOOptimizer: React.FC = () => {
  const seoData: SEOData = {
    title: 'Zion Tech Group - AI-Powered Enterprise Solutions',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities.',
    keywords: [
      'AI solutions',
      'artificial intelligence',
      'machine learning',
      'quantum computing',
      'digital transformation',
      'enterprise software',
      'automation',
      'data analytics'
    ],
    canonical: 'https://ziontechgroup.com',
    ogImage: 'https://ziontechgroup.com/og-image.webp',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.webp',
      description: 'Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.',
      address: {
        '@type': 'PostalAddress'
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'},
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com'},
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https: //twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group'],


interface SEOOptimizerProps {/* TODO: Fix JSX expression */}
}

const,
  SEOOptimizer: React.FC<SEOOptimizerProps> = memo(({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
    }
    
    // Add breadcrumb structured data;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    addBreadcrumbStructuredData();
    // Add organization structured data
    addOrganizationStructuredData();
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);
<<<<<<< HEAD
  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
=======

  const updateMetaTag = (nam,
  e: string, conten,
  t: string, attribut)
  e: string = 'name') => {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };
<<<<<<< HEAD
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
=======

  const updateCanonicalUrl = (ur)
  l: string) => {/* TODO: Fix JSX expression */}
    }
    canonical.setAttribute('href', url);
  };

  const addStructuredData = (dat)
  a: any) => {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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

<<<<<<< HEAD
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children, title, description }) => {
=======
  const addFAQStructuredData = () => {/* TODO: Fix JSX expression */}
          }
        },
        {/* TODO: Fix JSX expression */}
          }
        },
        {/* TODO: Fix JSX expression */}
          }
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqData);
    script.id = 'faq-structured-data';
    // Remove existing FAQ data;
    const existing = document.getElementById('faq-structured-data');
    if (existing) {/* TODO: Fix JSX expression */}
    }
    document.head.appendChild(script);
  };

  const addOrganizationStructuredData = () => {/* TODO: Fix JSX expression */}
      },
      'address': {/* TODO: Fix JSX expression */}
      },
      'sameAs': [
        'http,
  s://twitter.com/ziontechgroup',
        'http,
  s://linkedin.com/company/ziontechgroup'
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(organizationData);
    script.id = 'organization-structured-data';
    // Remove existing organization data;
    const existing = document.getElementById('organization-structured-data');
    if (existing) {/* TODO: Fix JSX expression */}

    }
  };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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

<<<<<<< HEAD
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
=======
  return(<Helmet>)
      <title>{seoData.title}</title>)
      <meta name="description" content={seoData.description} />)
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      {/* Open Graph */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={seoData.canonical} />
      <meta property="og:image" content={seoData.ogImage} />
      <meta property="og: type" content="website" />,
      <meta property="og:site_name" content="Zion Tech Group" />,
,
      {/* Twitter Card */}
      <meta name="twitter:card" content={seoData.twitterCard} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.ogImage} />
      {/* Canonical */}
      <link rel="canonical" href={seoData.canonical} />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
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
