'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {}
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({}
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {}
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.';

  useEffect(() => {}
    // Add structured data for breadcrumbs
    const breadcrumbData = {}
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {}
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https: //ziontechgroup.com"
  }
      ]
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    
    // Remove existing breadcrumb data
    const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) {}
      existing.remove();
    }
    document.head.appendChild(script);

    return () => {}
      const scriptToRemove = document.getElementById('breadcrumb-structured-data');
      if (scriptToRemove) {}
        scriptToRemove.remove();
      }
    };
  }, [title, description, url, type]);

  return(<Helmet />)
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywordsString}/>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl}/>
      
      {/* Open Graph */} <meta property="og: title" content={title,}/>
      <meta property="og: description" content={description,}/>
      <meta property="og: type" content="website" />,
      <meta property="og: url" content={canonicalUrl,}/>
      
      {/* Twitter Card */} <meta name="twitter: card" content="summary_large_image" />,
      <meta name="twitter: title" content={title,}/>
      <meta name="twitter: description" content={description,}/>
'use client';;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI and IT solutions for businesses. Transform your operations with cutting-edge technology.',
  keywords = ['AI solutions', 'IT services', 'cloud computing', 'automation', 'cybersecurity'],
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  twitterCard = 'summary_large_image',
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsString);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywordsString;
      document.head.appendChild(meta);
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
      } else {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = canonicalUrl;
        document.head.appendChild(canonical);
      }
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = title;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      meta.content = ogImage;
      document.head.appendChild(meta);
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:title';
      meta.content = title;
      document.head.appendChild(meta);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:image';
      meta.content = ogImage;
      document.head.appendChild(meta);
    }

    const twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
    if (twitterCardMeta) {
      twitterCardMeta.setAttribute('content', twitterCard);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'twitter:card';
      meta.content = twitterCard;
      document.head.appendChild(meta);
    }

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Handle robots meta
    const robotsContent = [];
    if (noIndex) robotsContent.push('noindex');
    if (noFollow) robotsContent.push('nofollow');
    if (robotsContent.length === 0) robotsContent.push('index', 'follow');

    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', robotsContent.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = robotsContent.join(', ');
      document.head.appendChild(meta);
    }
  }, [title, description, keywords, canonicalUrl, structuredData, ogImage, twitterCard, noIndex, noFollow]);

  return ()
    <Head></Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} /></meta>
      <meta name="keywords" content={keywords.join(', ')} /></meta>
      <meta name="author" content="Zion Tech Group" /></meta>
      <meta name="robots" content="index, follow" /></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /></meta>
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} /></meta>
      <meta property="og:description" content={fullDescription} /></meta>
      <meta property="og:type" content="website" /></meta>
      <meta property="og:url" content={canonicalUrl} /></meta>
      <meta property="og:image" content={ogImage} /></meta>
      <meta property="og:image:width" content="1200" /></meta>
      <meta property="og:image:height" content="630" /></meta>
      <meta property="og:site_name" content="Zion Tech Group" /></meta>
      <meta property="og:locale" content="en_US" /></meta>
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" /></meta>
      <meta name="twitter:title" content={fullTitle} /></meta>
      <meta name="twitter:description" content={fullDescription} /></meta>
      <meta name="twitter:image" content={ogImage} /></meta>
      <meta name="twitter:site" content="@ziontechgroup" /></meta>
      <meta name="twitter:creator" content="@ziontechgroup" /></meta>
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#6366f1" /></meta>
      <meta name="msapplication-TileColor" content="#6366f1" /></meta>
      <meta name="apple-mobile-web-app-capable" content="yes" /></meta>
      <meta name="apple-mobile-web-app-status-bar-style" content="default" /></meta>
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" /></meta>
      {/* Structured Data */}
      {structuredData && ()
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
    __html: JSON.stringify({}
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": fullDescription,
              "url": canonicalUrl,
              "logo": "https://ziontechgroup.com/logo.png",
              "contactPoint": {}
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://github.com/ziontechgroup"
              ],
              ...structuredData
            })
          }}
        /></script>
      )}
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOOptimizer;
