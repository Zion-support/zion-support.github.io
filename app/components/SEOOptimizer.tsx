'use client';'import React, { useEffect } from 'react';';'import Head from 'next/head';''
interface SEOOptimizerProps {
  
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  
  title = 'Zion Tech Group - Advanced AI and IT Solutions',''  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',''  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],''  canonicalUrl = 'https://ziontechgroup.com',''  ogImage = 'https://ziontechgroup.com/og-image.jpg',''  structuredData
}) => {
  
  useEffect(() => {
  
  
  
    // Update document title
    if (typeof document !== 'undefined') {''      document.title = title;
    }

    // Update meta description;
const metaDescription = document.querySelector('meta[name="description"]');'"'    if (metaDescription) {"  
      metaDescription.setAttribute('content', description);''    } else {;
const meta = document.createElement('meta');''      meta.name = 'description''      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords;
const metaKeywords = document.querySelector('meta[name="keywords"]');'"'    if (metaKeywords) {"  
      metaKeywords.setAttribute('content', keywords.join(', '));''    } else {;
const meta = document.createElement('meta');''      meta.name = 'keywords''      meta.content = keywords.join(', ');''      document.head.appendChild(meta);
    }

    // Update canonical URL;
const canonicalLink = document.querySelector('link[rel="canonical"]');'"'    if (canonicalLink) {"  
      canonicalLink.setAttribute('href', canonicalUrl);''    } else {;
const link = document.createElement('link');''      link.rel = 'canonical''      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    // Update Open Graph tags;
const ogTitle = document.querySelector('meta[property="og:title"]');'"'    if (ogTitle) {"  
      ogTitle.setAttribute('content', title);''    } else {;
const meta = document.createElement('meta');''      meta.setAttribute('property', 'og:title');''      meta.content = title;
      document.head.appendChild(meta);
    }
const ogDescription = document.querySelector('meta[property="og:description"]');'"'    if (ogDescription) {"  
      ogDescription.setAttribute('content', description);''    } else {;
const meta = document.createElement('meta');''      meta.setAttribute('property', 'og:description');''      meta.content = description;
      document.head.appendChild(meta);
    }
const ogImage = document.querySelector('meta[property="og:image"]');'"'    if (ogImage) {"  
      ogImage.setAttribute('content', ogImage);''    } else {;
const meta = document.createElement('meta');''      meta.setAttribute('property', 'og:image');''      meta.content = ogImage;
      document.head.appendChild(meta);
    }
const ogUrl = document.querySelector('meta[property="og:url"]');'"'    if (ogUrl) {"  
      ogUrl.setAttribute('content', canonicalUrl);''    } else {;
const meta = document.createElement('meta');''      meta.setAttribute('property', 'og:url');''      meta.content = canonicalUrl;
      document.head.appendChild(meta);
    }

    // Update Twitter Card tags;
const twitterCard = document.querySelector('meta[name="twitter:card"]');'"'    if (twitterCard) {"  
      twitterCard.setAttribute('content', 'summary_large_image');''    } else {;
const meta = document.createElement('meta');''      meta.name = 'twitter:card''      meta.content = 'summary_large_image''      document.head.appendChild(meta);
    }
const twitterTitle = document.querySelector('meta[name="twitter:title"]');'"'    if (twitterTitle) {"  
      twitterTitle.setAttribute('content', title);''    } else {;
const meta = document.createElement('meta');''      meta.name = 'twitter:title''      meta.content = title;
      document.head.appendChild(meta);
    }
const twitterDescription = document.querySelector('meta[name="twitter:description"]');'"'    if (twitterDescription) {"  
      twitterDescription.setAttribute('content', description);''    } else {;
const meta = document.createElement('meta');''      meta.name = 'twitter:description''      meta.content = description;
      document.head.appendChild(meta);
    }
const twitterImage = document.querySelector('meta[name="twitter:image"]');'"'    if (twitterImage) {"  
      twitterImage.setAttribute('content', ogImage);''    } else {;
const meta = document.createElement('meta');''      meta.name = 'twitter:image''      meta.content = ogImage;
      document.head.appendChild(meta);
    }

    // Add structured data
    if (structuredData) {;
const script = document.createElement('script');''      script.type = 'application/ld+json''      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Add viewport meta tag if not present;
const viewport = document.querySelector('meta[name="viewport"]');'"'    if (!viewport) {;"const meta = document.createElement('meta');''      meta.name = 'viewport''      meta.content = 'width=device-width, initial-scale=1.0''      document.head.appendChild(meta);
    }

    // Add charset if not present;
const charset = document.querySelector('meta[charset]');''    if (!charset) {;
const meta = document.createElement('meta');''      meta.setAttribute('charset', 'UTF-8');''      document.head.insertBefore(meta, document.head.firstChild);
    }

    // Add language attribute to html tag
    if (document.documentElement && !document.documentElement.getAttribute('lang')) {''      document.documentElement.setAttribute('lang', 'en');''    }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

export default function SEOOptimizerPage() {
  return (
  
    <Head>
<title>{title}</title>
<meta name="description" content={description} />""<meta name="keywords" content={keywords.join(', ')} />'"'<link rel="canonical" href={canonicalUrl} />""
      {/* Open Graph */}
      <meta property="og:title" content={title} />""<meta property="og:description" content={description} />""<meta property="og:image" content={ogImage} />""<meta property="og:url" content={canonicalUrl} />""<meta property="og:type" content="website" />""<meta property="og:site_name" content="Zion Tech Group" />""
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />""<meta name="twitter:title" content={title} />""<meta name="twitter:description" content={description} /></Helmet>""  )
}
export default SEOOptimizer;
      <meta name="twitter:image" content={ogImage} />""
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />""<meta name="author" content="Zion Tech Group" />""<meta name="theme-color" content="#1e40af" />""
      {/* Structured Data */}
      {structuredData && (
  
        <script
          type="application/ld+json"""          dangerouslySetInnerHTML={{
  
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
}
export default SEOOptimizer;
>>>>>>> cursor/delete-records-a75e
