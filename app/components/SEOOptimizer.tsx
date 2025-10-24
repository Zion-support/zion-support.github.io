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
  const keywordsString = keywords.join(', ')
=======
  title?: string;
  description?: string;
}

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
  );
};

export default SEOOptimizer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
