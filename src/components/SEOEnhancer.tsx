<<<<<<< HEAD
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOEnhancerProps {
  title: string;
  description: string;
  keywords: string[];
  noIndex?: boolean;
  structuredData?: any;
  children?: ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title,
  description,
  keywords,
  noIndex = false,
  structuredData,
  children
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading AI and IT solutions provider",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>
      </Helmet>
      {children}
    </>
  );
};

export default SEOEnhancer;
=======
import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOEnhancerProps {/* TODO: Fix JSX expression */}
}
const,
  SEOEnhancer: React.FC<SEOEnhancerProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
    },
    addres,
  s: {/* TODO: Fix JSX expression */}
    }}
  const finalStructuredData = structuredData || defaultStructuredData
  return (<React.Fragment>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}
        <meta name="description" content={description} /></meta>")
        <meta name="keywords" content={keywords.join(', ')} /></meta>"
        <meta name="author" content="Zion Tech Group" /></meta>"
        <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} /></meta>"
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /></meta>"
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" /></meta>"
        <meta name="language" content="English" /></meta>"
        <meta name="revisit-after" content="7 days" /></meta>"
        <meta name="distribution" content="global" /></meta>"
        <meta name="rating" content="general" />
        {/* Canonical URL */}"
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {/* Open Graph Tags */}"
        <meta property="o,"
  g:type" content={ogType} /></meta>"
        <meta property="o,"
  g:title" content={title} /></meta>"
        <meta property="o,"
  g:description" content={description} /></meta>"
        <meta property="o,"
  g:image" content={ogImage} /></meta>"
        <meta property="o,"
  g:url" content={/* TODO: Fix JSX expression */}
  s://ziontechgroup.com'} /></meta>"
        <meta property="o,"
  g:site_name" content="Zion Tech Group" /></meta>"
        <meta property="o,"
  g:locale" content="en_US" />
        {/* Twitter Card Tags */}"
        <meta name="twitte,"
  r:card" content="summary_large_image" /></meta>"
        <meta name="twitte,"
  r:title" content={title} /></meta>"
        <meta name="twitte,"
  r:description" content={description} /></meta>"
        <meta name="twitte,"
  r:image" content={ogImage} /></meta>"
        <meta name="twitte,"
  r:site" content="@ziontechgroup" /></meta>"
        <meta name="twitte,"
  r:creator" content="@ziontechgroup" />
        {/* Additional SEO Tags */}"
        <meta name="theme-color" content="#1f2937" /></meta>"
        <meta name="msapplication-TileColor" content="#1f2937" /></meta>"
        <meta name="apple-mobile-web-app-capable" content="yes" /></meta>"
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /></meta>"
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        {/* Structured Data */}"
        <script type="application/ld+json">{JSON.stringify(finalStructuredData)}
        {/* Preconnect to external domains */}"
        <nk rel="preconnect" href="http,"$2 />
  s://fonts.googleapis.com" /></link>"
        <nk rel="preconnect" href="http,"$2 />
  s://fonts.gstatic.com" crossOrigin="anonymous" /></link>"
        <nk rel="preconnect" href="http,"$2 />
  s://www.google-analytics.com" /></link>"
        <nk rel="preconnect" href="http,"$2 />
  s://www.googletagmanager.com" />
        {/* DNS Prefetch */}"
        <link rel="dns-prefetch" href="//fonts.googleapis.com" /></link>"
        <link rel="dns-prefetch" href="//www.google-analytics.com" /></link>"
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      {children}
    </React.Fragment>
  )
}
export default SEOEnhancer
"
  </SEOEnhancerProps>
</li></li></li></li>
>>>>>>> origin/main
