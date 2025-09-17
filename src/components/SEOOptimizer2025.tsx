import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizer2025Props {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  structuredData?: any;
}

const SEOOptimizer2025: React.FC<SEOOptimizer2025Props> = ({
  title = "Ultimate Tech Showcase 2025 - Revolutionary Technology Insights",
  description = "Discover the most comprehensive collection of technology insights, AI breakthroughs, and future innovations. Stay ahead with expert analysis and cutting-edge research.",
  keywords = [
    "AI Revolution 2025",
    "Quantum Computing",
    "Cybersecurity",
    "Green Technology",
    "Business Automation",
    "Cloud Computing",
    "Technology Trends",
    "Innovation",
    "Digital Transformation",
    "Future Tech",
    "Artificial Intelligence",
    "Machine Learning",
    "Edge Computing",
    "Sustainable Technology",
    "Autonomous Systems"
  ],
  canonicalUrl = "https://yourdomain.com",
  ogImage = "/images/og-ultimate-tech-showcase-2025.jpg",
  articleAuthor = "Tech Innovation Team",
  articlePublishedTime = new Date().toISOString(),
  articleModifiedTime = new Date().toISOString(),
  articleSection = "Technology",
  articleTags = ["Technology", "AI", "Innovation", "Future Tech"],
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ultimate Tech Showcase 2025",
    "description": description,
    "url": canonicalUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${canonicalUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tech Innovation Hub",
      "logo": {
        "@type": "ImageObject",
        "url": `${canonicalUrl}/images/logo.png`
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Technology Articles and Insights",
      "description": "Comprehensive collection of technology insights and innovations",
      "numberOfItems": 48,
      "itemListElement": [
        {
          "@type": "Article",
          "position": 1,
          "name": "AI Revolution 2025: The Future is Here",
          "description": "Discover the latest breakthroughs in artificial intelligence that are reshaping our world",
          "url": `${canonicalUrl}/blog/ai-revolution-2025-future-here`,
          "author": {
            "@type": "Person",
            "name": "Dr. Elena Rodriguez"
          },
          "datePublished": "2025-01-20",
          "dateModified": "2025-01-20"
        },
        {
          "@type": "Article",
          "position": 2,
          "name": "Quantum Computing Breakthrough: Beyond Classical Limits",
          "description": "Explore how quantum computing is revolutionizing artificial consciousness and creating truly intelligent systems",
          "url": `${canonicalUrl}/blog/quantum-consciousness-computing-future-here`,
          "author": {
            "@type": "Person",
            "name": "Dr. Marcus Chen"
          },
          "datePublished": "2025-01-18",
          "dateModified": "2025-01-18"
        }
      ]
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": canonicalUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Technology Showcase",
        "item": `${canonicalUrl}/ultimate-content-showcase-2025`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": canonicalUrl
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "author": {
      "@type": "Person",
      "name": articleAuthor
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tech Innovation Hub",
      "logo": {
        "@type": "ImageObject",
        "url": `${canonicalUrl}/images/logo.png`
      }
    },
    "datePublished": articlePublishedTime,
    "dateModified": articleModifiedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "articleSection": articleSection,
    "keywords": keywords.join(", "),
    "wordCount": 1500,
    "timeRequired": "PT8M",
    "inLanguage": "en-US"
  };

  useEffect(() => {
    // Update page title for better SEO
    document.title = title;
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Add canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
  }, [title, description, keywords, canonicalUrl]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Ultimate Tech Showcase 2025" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@techinnovation" />
      <meta name="twitter:creator" content="@techinnovation" />
      
      {/* Article Specific Meta Tags */}
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
      {articleSection && <meta property="article:section" content={articleSection} />}
      {articleTags && articleTags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content={articleAuthor} />
      <meta name="publisher" content="Tech Innovation Hub" />
      <meta name="copyright" content="Tech Innovation Hub" />
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Tech Showcase 2025" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
      
      {/* Additional SEO Links */}
      <link rel="alternate" type="application/rss+xml" title="Tech Innovation RSS Feed" href={`${canonicalUrl}/rss.xml`} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${canonicalUrl}/sitemap.xml`} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
    </Helmet>
  );
};

export default SEOOptimizer2025;