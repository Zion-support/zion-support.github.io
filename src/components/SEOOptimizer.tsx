import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

interface SEOOptimizerProps {
  data: SEOData;
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ data, children }) => {
  // Generate structured data for the page
  const generateStructuredData = () => {
    const baseUrl = window.location.origin;
    const currentUrl = window.location.href;
    
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`,
      "description": data.description,
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/zion-tech-group",
        "https://github.com/Zion-Holdings"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    };

    // Add page-specific structured data
    if (data.title.includes('AI')) {
      return {
        ...defaultStructuredData,
        "@type": "TechArticle",
        "headline": data.title,
        "description": data.description,
        "author": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        },
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        }
      };
    }

    return { ...defaultStructuredData, ...data.structuredData };
  };

  // Generate meta tags
  const generateMetaTags = () => {
    const baseUrl = window.location.origin;
    const currentUrl = data.canonical || window.location.href;
    const ogImage = data.ogImage || `${baseUrl}/og-image.png`;

    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords.join(', '),
      canonical: currentUrl,
      ogTitle: data.title,
      ogDescription: data.description,
      ogImage: ogImage,
      ogUrl: currentUrl,
      ogType: data.ogType || 'website',
      twitterCard: data.twitterCard || 'summary_large_image',
      twitterTitle: data.title,
      twitterDescription: data.description,
      twitterImage: ogImage
    };
  };

  const metaTags = generateMetaTags();
  const structuredData = generateStructuredData();

  // Track page view for analytics
  useEffect(() => {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: data.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }

    // Custom analytics tracking
    if (typeof window !== 'undefined' && window.analytics) {
      window.analytics.track('Page View', {
        title: data.title,
        path: window.location.pathname,
        timestamp: new Date().toISOString()
      });
    }
  }, [data.title]);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={metaTags.ogTitle} />
        <meta property="og:description" content={metaTags.ogDescription} />
        <meta property="og:image" content={metaTags.ogImage} />
        <meta property="og:url" content={metaTags.ogUrl} />
        <meta property="og:type" content={metaTags.ogType} />
        <meta property="og:site_name" content="Zion Tech Group" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={metaTags.twitterCard} />
        <meta name="twitter:title" content={metaTags.twitterTitle} />
        <meta name="twitter:description" content={metaTags.twitterDescription} />
        <meta name="twitter:image" content={metaTags.twitterImage} />
        <meta name="twitter:site" content="@ziontechgroup" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Theme and PWA */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {children}
    </>
  );
};

// SEO data for different page types
export const seoData = {
  home: {
    title: "Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Cybersecurity",
    description: "Leading-edge technology solutions in AI, quantum computing, and cybersecurity. Transform your business with our innovative services and cutting-edge technology.",
    keywords: [
      "AI solutions",
      "quantum computing",
      "cybersecurity",
      "technology consulting",
      "digital transformation",
      "artificial intelligence",
      "machine learning",
      "blockchain",
      "cloud computing",
      "data analytics"
    ],
    ogType: "website"
  },

  aiBreakthrough: {
    title: "AI Revolutionary Breakthrough 2026 - First AGI Implementation | Zion Tech Group",
    description: "Discover the first Artificial General Intelligence (AGI) implementation in 2026. Revolutionary AI breakthrough with human-level intelligence and self-improvement capabilities.",
    keywords: [
      "AGI",
      "artificial general intelligence",
      "AI breakthrough 2026",
      "machine consciousness",
      "AI revolution",
      "neural networks",
      "deep learning",
      "AI transformation"
    ],
    ogType: "article"
  },

  futureTech: {
    title: "Future Technology Innovations 2026 - Metaverse 2.0, Quantum Internet | Zion Tech Group",
    description: "Explore cutting-edge technologies shaping 2026: Metaverse 2.0, Quantum Internet, Synthetic Biology, Space Technology, and Neuromorphic Computing.",
    keywords: [
      "future technology 2026",
      "metaverse 2.0",
      "quantum internet",
      "synthetic biology",
      "space technology",
      "neuromorphic computing",
      "advanced robotics",
      "technology trends"
    ],
    ogType: "article"
  },

  businessAutomation: {
    title: "Business Automation Guide 2025 - 90-Day Roadmap to 80% Automation | Zion Tech Group",
    description: "Complete 90-day roadmap to automate 80% of your business operations. Achieve +300% productivity gains and -50% cost reduction with our proven automation strategies.",
    keywords: [
      "business automation",
      "process automation",
      "workflow automation",
      "RPA",
      "AI automation",
      "digital transformation",
      "productivity optimization",
      "cost reduction"
    ],
    ogType: "article"
  }
};

export default SEOOptimizer;