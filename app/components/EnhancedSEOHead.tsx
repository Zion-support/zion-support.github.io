'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
;
interface SEOHeadProps {}
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({}
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI and IT solutions, transforming businesses through innovative technology and expert consulting.',
  keywords = 'AI solutions, IT services, artificial intelligence, machine learning, cloud computing, cybersecurity, digital transformation',
  image = '/og-image.jpg',
  url,
  type = 'website'
}) => {}
  const location = useLocation()
  const currentUrl = url || `https://ziontechgroup.com${location.pathname}`
  
  const structuredData = {}
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {}
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "contact@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ],
    "address": {}
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  }

  return ()
    <Helmet></Helmet>
      <title>{title}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywords} /></meta>
      <meta property="og:title" content={title} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:image" content={image} /></meta>
      <meta property="og:url" content={currentUrl} /></meta>
      <meta property="og:type" content={type} /></meta>
      <meta name="twitter:card" content="summary_large_image" /></meta>
      <meta name="twitter:title" content={title} /></meta>
      <meta name="twitter:description" content={description} /></meta>
      <meta name="twitter:image" content={image} /></meta>
      <link rel="canonical" href={currentUrl} /></link>
      <script type="application/ld+json"></script>
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default EnhancedSEOHead
