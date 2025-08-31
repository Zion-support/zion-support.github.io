import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
=======
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  Zap,
  Eye,
  Target,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  RefreshCw,
  ExternalLink,
  Code,
  Image,
  FileText,
  Link as LinkIcon
} from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  structuredData: any;
  metaTags: Record<string, string>;
}

interface SEOProps {
  data: SEOData;
  pageType?: 'home' | 'service' | 'about' | 'contact' | 'blog' | 'product';
  enableAnalytics?: boolean;
  enableStructuredData?: boolean;
  enablePerformanceTracking?: boolean;
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
}

const defaultSEO = {
  title: 'Zion Tech Group - AI, Cybersecurity, Cloud & Digital Transformation',
  description: 'Leading technology company delivering cutting-edge AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with Zion Tech Group.',
  keywords: 'AI solutions, cybersecurity, cloud computing, digital transformation, machine learning, IT services, micro SaaS, edge computing, IoT, blockchain, quantum computing',
  image: '/og-image.jpg',
  url: 'https://ziontechgroup.com',
  type: 'website' as const,
  author: 'Zion Tech Group',
  section: 'Technology Services',
  tags: ['AI', 'Cybersecurity', 'Cloud Computing', 'Digital Transformation', 'Technology']
};

export const SEO: React.FC<SEOProps> = ({
<<<<<<< HEAD
  title,
  description,
  keywords,
  image,
  url,
  type,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags
}) => {
  const location = useLocation();
  const currentUrl = `${defaultSEO.url}${location.pathname}`;
  
  const seoData = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || currentUrl,
    type: type || defaultSEO.type,
    author: author || defaultSEO.author,
    publishedTime: publishedTime || '',
    modifiedTime: modifiedTime || '',
    section: section || defaultSEO.section,
    tags: tags || defaultSEO.tags
  };

  // Generate structured data for better SEO
  const generateStructuredData = () => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": seoData.description,
      "foundingDate": "2009",
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
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://facebook.com/ziontechgroup",
        "https://github.com/ziontechgroup"
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.4496,
          "longitude": -75.7163
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions",
              "description": "Cutting-edge artificial intelligence and machine learning solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity Services",
              "description": "Advanced security protocols and threat protection"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud & DevOps",
              "description": "Scalable cloud infrastructure and automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Edge Computing",
              "description": "Ultra-low latency IoT and edge solutions"
            }
          }
        ]
      }
    };

    return JSON.stringify(baseStructuredData);
  };

  // Generate article structured data if it's an article
  const generateArticleStructuredData = () => {
    if (seoData.type !== 'article') return null;

    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": seoData.title,
      "description": seoData.description,
      "image": seoData.image,
      "author": {
        "@type": "Organization",
        "name": seoData.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ziontechgroup.com/logo.png"
        }
      },
      "datePublished": seoData.publishedTime,
      "dateModified": seoData.modifiedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": seoData.url
      },
      "articleSection": seoData.section,
      "keywords": seoData.tags?.join(', ')
    };

    return JSON.stringify(articleStructuredData);
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length === 0) return null;

    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ziontechgroup.com"
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://ziontechgroup.com${currentPath}`
      });
    });

    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    return JSON.stringify(breadcrumbStructuredData);
  };

  // Generate FAQ structured data for common questions
  const generateFAQStructuredData = () => {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Zion Tech Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zion Tech Group offers comprehensive technology services including AI solutions, cybersecurity, cloud & DevOps, edge computing, IT services, and digital transformation consulting."
          }
        },
        {
          "@type": "Question",
          "name": "How can Zion Tech Group help with digital transformation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We help organizations modernize their technology infrastructure, implement AI solutions, improve security, and optimize operations through strategic technology consulting and implementation."
          }
        },
        {
          "@type": "Question",
          "name": "What industries do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve various industries including healthcare, financial services, manufacturing, government, retail, and technology companies across different sectors."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide 24/7 support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide 24/7 support for our managed services and critical infrastructure to ensure your business operations run smoothly."
          }
        },
        {
          "@type": "Question",
          "name": "What is your approach to cybersecurity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We take a comprehensive approach to cybersecurity including threat detection, prevention, incident response, compliance, and ongoing security monitoring and updates."
          }
        }
      ]
    };

    return JSON.stringify(faqStructuredData);
  };

  // Generate local business structured data
  const generateLocalBusinessStructuredData = () => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Zion Tech Group",
      "description": seoData.description,
      "url": "https://ziontechgroup.com",
      "telephone": "+1-302-464-0950",
      "email": "kleber@ziontechgroup.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.4496,
        "longitude": -75.7163
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Invoice"],
      "currenciesAccepted": "USD",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.4496,
          "longitude": -75.7163
        },
        "geoRadius": "50000"
      }
    };

    return JSON.stringify(localBusinessStructuredData);
  };

  useEffect(() => {
    // Update page title for better UX
    document.title = seoData.title;
    
    // Add meta description to head if not present
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
=======
  data,
  pageType = 'home',
  enableAnalytics = true,
  enableStructuredData = true,
  enablePerformanceTracking = true
}) => {
  const [seoScore, setSeoScore] = useState<number>(0);
  const [seoIssues, setSeoIssues] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

  // Enhanced SEO analysis
  const analyzeSEO = useCallback(() => {
    if (!enableAnalytics) return;
    
    setIsAnalyzing(true);
    const issues: string[] = [];
    let score = 100;

    // Check title length
    if (data.title.length < 30 || data.title.length > 60) {
      issues.push('Title length should be between 30-60 characters');
      score -= 10;
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
    }
    metaDescription.setAttribute('content', seoData.description);

<<<<<<< HEAD
    // Add meta keywords if not present
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoData.keywords);

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seoData.url);

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:type', content: seoData.type },
      { property: 'og:url', content: seoData.url },
      { property: 'og:image', content: seoData.image },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });

    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description },
      { name: 'twitter:image', content: seoData.image },
      { name: 'twitter:site', content: '@ziontechgroup' }
    ];

    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', tag.name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', tag.content);
    });

    // Add structured data scripts
    const structuredDataScripts = [
      generateStructuredData(),
      generateBreadcrumbStructuredData(),
      generateFAQStructuredData(),
      generateLocalBusinessStructuredData()
    ].filter(Boolean);

    // Remove existing structured data scripts
    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
      script.remove();
    });

    // Add new structured data scripts
    structuredDataScripts.forEach(data => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = data;
      document.head.appendChild(script);
    });

    // Add article structured data if applicable
    if (seoData.type === 'article') {
      const articleData = generateArticleStructuredData();
      if (articleData) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = articleData;
        document.head.appendChild(script);
      }
    }

  }, [seoData, location.pathname]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="author" content={seoData.author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:type" content={seoData.type} />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Performance Meta Tags */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
    </Helmet>
=======
    // Check description length
    if (data.description.length < 120 || data.description.length > 160) {
      issues.push('Description length should be between 120-160 characters');
      score -= 10;
    }

    // Check keywords
    if (data.keywords.length < 3) {
      issues.push('Add more relevant keywords (minimum 3)');
      score -= 5;
    }

    // Check for missing meta tags
    if (!data.ogImage) {
      issues.push('Missing Open Graph image');
      score -= 5;
    }

    if (!data.canonical) {
      issues.push('Missing canonical URL');
      score -= 5;
    }

    // Check for duplicate content
    const currentUrl = window.location.href;
    if (currentUrl !== data.canonical) {
      issues.push('URL mismatch with canonical');
      score -= 5;
    }

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    
    if (h1Count === 0) {
      issues.push('Missing H1 heading');
      score -= 10;
    } else if (h1Count > 1) {
      issues.push('Multiple H1 headings found');
      score -= 5;
    }

    // Check for images without alt text
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= Math.min(10, imagesWithoutAlt.length * 2);
    }

    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="' + window.location.origin + '"]');
    if (internalLinks.length < 5) {
      issues.push('Add more internal links for better site structure');
      score -= 5;
    }

    // Check for external links
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href^="' + window.location.origin + '"])');
    if (externalLinks.length > 0) {
      externalLinks.forEach(link => {
        if (!link.hasAttribute('rel') || !link.getAttribute('rel')?.includes('nofollow')) {
          issues.push('External links should have rel="nofollow"');
          score -= 2;
        }
      });
    }

    // Check for schema markup
    if (enableStructuredData && !data.structuredData) {
      issues.push('Missing structured data markup');
      score -= 10;
    }

    // Check for mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      issues.push('Missing viewport meta tag');
      score -= 5;
    }

    // Check for language declaration
    const htmlLang = document.documentElement.getAttribute('lang');
    if (!htmlLang) {
      issues.push('Missing HTML lang attribute');
      score -= 5;
    }

    setSeoScore(Math.max(0, score));
    setSeoIssues(issues);
    setIsAnalyzing(false);
  }, [data, enableAnalytics, enableStructuredData]);

  // Performance tracking
  const trackPerformance = useCallback(() => {
    if (!enablePerformanceTracking) return;

    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const metrics = {
        ttfb: navigation.responseStart - navigation.requestStart,
        fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        lcp: paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0,
        domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        windowLoad: navigation.loadEventEnd - navigation.loadEventStart
      };

      setPerformanceMetrics(metrics);

      // Send to analytics if available
      if (window.gtag) {
        window.gtag('event', 'performance_metrics', {
          event_category: 'performance',
          event_label: pageType,
          value: Math.round(metrics.lcp),
          custom_parameters: {
            ttfb: Math.round(metrics.ttfb),
            fcp: Math.round(metrics.fcp),
            dom_load: Math.round(metrics.domLoad),
            window_load: Math.round(metrics.windowLoad)
          }
        });
      }
    }
  }, [enablePerformanceTracking, pageType]);

  // Auto-analyze on mount
  useEffect(() => {
    analyzeSEO();
    trackPerformance();
  }, [analyzeSEO, trackPerformance]);

  // Generate structured data based on page type
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData) return null;

    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading technology solutions provider specializing in AI, quantum computing, and digital transformation",
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
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup"
      ]
    };

    switch (pageType) {
      case 'service':
        return {
          ...baseData,
          "@type": "Service",
          "name": data.title,
          "description": data.description,
          "provider": baseData,
          "areaServed": "Worldwide",
          "serviceType": "Technology Solutions"
        };
      
      case 'about':
        return {
          ...baseData,
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            ...baseData
          }
        };
      
      case 'contact':
        return {
          ...baseData,
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "ContactPage",
            "name": "Contact Zion Tech Group",
            "description": "Get in touch with our team for technology solutions"
          }
        };
      
      default:
        return baseData;
    }
  }, [pageType, data, enableStructuredData]);

  // Generate meta tags
  const generateMetaTags = useCallback(() => {
    const tags: Record<string, string> = {
      'viewport': 'width=device-width, initial-scale=1.0',
      'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      'author': 'Zion Tech Group',
      'theme-color': '#0ea5e9',
      'msapplication-TileColor': '#0ea5e9',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no',
      ...data.metaTags
    };

    return tags;
  }, [data.metaTags]);

  const structuredData = generateStructuredData();
  const metaTags = generateMetaTags();

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords.join(', ')} />
        <link rel="canonical" href={data.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={data.canonical} />
        <meta property="og:type" content={data.ogType} />
        {data.ogImage && <meta property="og:image" content={data.ogImage} />}
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={data.twitterCard} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        {data.ogImage && <meta name="twitter:image" content={data.ogImage} />}
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Additional Meta Tags */}
        {Object.entries(metaTags).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}
        
        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

      {/* SEO Analysis Panel (Development Only) */}
      {process.env.NODE_ENV === 'development' && enableAnalytics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50 w-80 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Panel Header */}
          <div className="bg-gradient-to-r from-green-500/20 to-blue-600/20 p-4 border-b border-slate-700/50">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Search className="w-5 h-5 text-green-400" />
                <span>SEO Analysis</span>
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={analyzeSEO}
                  disabled={isAnalyzing}
                  className="p-2 bg-slate-800/50 text-green-400 rounded-lg hover:bg-slate-700/50 transition-colors disabled:opacity-50"
                  title="Refresh analysis"
                >
                  <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Panel Content */}
          <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {/* SEO Score */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                SEO Score
              </h4>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      className="text-slate-700"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={`${(seoScore / 100) * 175.93} 175.93`}
                      className={`text-green-400 transition-all duration-1000 ${
                        seoScore >= 80 ? 'text-green-400' : seoScore >= 60 ? 'text-yellow-400' : 'text-red-400'
                      }`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{seoScore}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400">Current Score</div>
                  <div className={`text-lg font-semibold ${
                    seoScore >= 80 ? 'text-green-400' : seoScore >= 60 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {seoScore >= 80 ? 'Excellent' : seoScore >= 60 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>
              </div>
            </div>

            {/* Issues Found */}
            {seoIssues.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Issues Found ({seoIssues.length})
                </h4>
                <div className="space-y-2">
                  {seoIssues.slice(0, 5).map((issue, index) => (
                    <div key={index} className="flex items-start space-x-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{issue}</span>
                    </div>
                  ))}
                  {seoIssues.length > 5 && (
                    <div className="text-xs text-gray-500 text-center">
                      +{seoIssues.length - 5} more issues
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Performance Metrics */}
            {performanceMetrics && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                  Performance
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-xs text-gray-400">FCP</div>
                    <div className="text-sm font-semibold text-white">
                      {performanceMetrics.fcp.toFixed(0)}ms
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-xs text-gray-400">LCP</div>
                    <div className="text-sm font-semibold text-white">
                      {performanceMetrics.lcp.toFixed(0)}ms
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-xs text-gray-400">TTFB</div>
                    <div className="text-sm font-semibold text-white">
                      {performanceMetrics.ttfb.toFixed(0)}ms
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-xs text-gray-400">DOM Load</div>
                    <div className="text-sm font-semibold text-white">
                      {performanceMetrics.domLoad.toFixed(0)}ms
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => window.open('https://search.google.com/test/rich-results', '_blank')}
                  className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors"
                >
                  <Code className="w-4 h-4" />
                  <span className="text-xs">Test Rich Results</span>
                </button>
                <button
                  onClick={() => window.open('https://pagespeed.web.dev/', '_blank')}
                  className="flex items-center justify-center space-x-2 p-2 bg-slate-800/50 text-gray-300 hover:text-white rounded-lg transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  <span className="text-xs">PageSpeed</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
>>>>>>> 9cb0e0fb6f8bf7e7054ca17e97a3de29ca2678f1
  );
};

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      data={{
        title: "AI-Powered Business Solutions & Quantum Computing | Zion Tech Group",
        description: "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity.",
        keywords: ["AI business solutions", "quantum computing", "autonomous operations", "digital transformation", "IT services", "cybersecurity", "machine learning", "neural networks"],
        canonical: "https://ziontechgroup.com",
        ogImage: "/images/zion-tech-group-og.jpg",
        ogType: "website",
        twitterCard: "summary_large_image",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Zion Tech Group - AI-Powered Business Solutions",
          "description": "Leading provider of AI-powered business solutions, quantum computing, and innovative IT services for digital transformation.",
          "url": "https://ziontechgroup.com",
          "mainEntity": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "AI-powered business solutions and quantum computing services"
          }
        },
        metaTags: {
          "og:title": "AI-Powered Business Solutions & Quantum Computing | Zion Tech Group",
          "og:description": "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity.",
          "og:image": "/images/zion-tech-group-og.jpg",
          "twitter:title": "AI-Powered Business Solutions & Quantum Computing | Zion Tech Group",
          "twitter:description": "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity.",
          "twitter:image": "/images/zion-tech-group-og.jpg"
        }
      }}
      pageType="home"
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      data={{
        title: "AI Services, Quantum Computing & IT Solutions | Zion Tech Group",
        description: "Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure.",
        keywords: ["AI services", "quantum computing services", "IT infrastructure", "cybersecurity services", "cloud computing", "business automation", "machine learning services"],
        canonical: "https://ziontechgroup.com/services",
        ogImage: "/images/zion-tech-group-og.jpg",
        ogType: "website",
        twitterCard: "summary_large_image",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Technology Services",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "serviceType": "AI Solutions, Quantum Computing, IT Services",
          "description": "Comprehensive technology services including AI, quantum computing, and IT infrastructure"
        },
        metaTags: {
          "og:title": "AI Services, Quantum Computing & IT Solutions | Zion Tech Group",
          "og:description": "Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure.",
          "og:image": "/images/zion-tech-group-og.jpg",
          "twitter:title": "AI Services, Quantum Computing & IT Solutions | Zion Tech Group",
          "twitter:description": "Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure.",
          "twitter:image": "/images/zion-tech-group-og.jpg"
        }
      }}
      pageType="service"
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      data={{
        title: "Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions",
        description: "Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation.",
        keywords: ["contact Zion Tech Group", "AI consulting", "quantum computing consulting", "IT consulting", "digital transformation consulting"],
        canonical: "https://ziontechgroup.com/contact",
        ogImage: "/images/zion-tech-group-og.jpg",
        ogType: "website",
        twitterCard: "summary_large_image",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Zion Tech Group",
          "description": "Get in touch with Zion Tech Group for technology consulting and solutions",
          "mainEntity": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-0123",
              "contactType": "customer service",
              "email": "info@ziontechgroup.com"
            }
          }
        },
        metaTags: {
          "og:title": "Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions",
          "og:description": "Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation.",
          "og:image": "/images/zion-tech-group-og.jpg",
          "twitter:title": "Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions",
          "twitter:description": "Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation.",
          "twitter:image": "/images/zion-tech-group-og.jpg"
        }
      }}
      pageType="contact"
    />
  );
}

export function BlogPostSEO({ 
  title, 
  description, 
  author, 
  publishedDate, 
  image, 
  slug 
}: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image: string;
  slug: string;
}) {
  return (
    <SEO
      data={{
        title: title,
        description: description,
        keywords: ["blog", "article", "Zion Tech Group", "technology", "AI", "quantum computing"],
        canonical: `https://ziontechgroup.com/blog/${slug}`,
        ogImage: image,
        ogType: "article",
        twitterCard: "summary_large_image",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": description,
          "image": image,
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
            }
          },
          "datePublished": publishedDate,
          "dateModified": publishedDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://ziontechgroup.com/blog/${slug}`
          }
        },
        metaTags: {
          "og:title": title,
          "og:description": description,
          "og:image": image,
          "twitter:title": title,
          "twitter:description": description,
          "twitter:image": image
        }
      }}
      pageType="blog"
    />
  );
}
