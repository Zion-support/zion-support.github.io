import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOHeadProps {
    title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object
  }
}
const SEOHead: React.FC<SEOHeadProps> = ({
    title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Transform your business with cutting-edge artificial intelligence, cloud infrastructure, and innovative technology solutions. Expert AI and IT consulting services.',
  keywords = 'AI solutions, IT consulting, cloud infrastructure, cybersecurity, automation, machine learning, artificial intelligence, business transformation',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
  }
}) => {}
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Advanced AI and IT Solutions company providing cutting-edge technology services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
  }
    },
    "contactPoint": {
    "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
  }
    },
    "sameAs": [;
      "https://www.linkedin.com/company/zion-tech-group",
      "https: //twitter.com/ziontechgroup"
    ],
  }
return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Canonical URL */},
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />},
        {/* Open Graph Meta Tags */}
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Twitter Card Meta Tags */}
      <meta />
      <meta />
      <meta />
      <meta />
      {/* Additional SEO Meta Tags */}
      <meta />
      <meta />
      <meta />
      <meta />

      {/* Structured Data */}
      <script>
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
}
export default SEOHead;

