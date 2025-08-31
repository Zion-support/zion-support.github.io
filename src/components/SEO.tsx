import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
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
}

export const SEO: React.FC<SEOProps> = ({
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

  // Enhanced SEO analysis with more comprehensive checks
  const analyzeSEO = useCallback(() => {
    if (!enableAnalytics) return;
    
    setIsAnalyzing(true);
    const issues: string[] = [];
    let score = 100;

    // Enhanced title analysis
    if (data.title.length < 30 || data.title.length > 60) {
      issues.push('Title length should be between 30-60 characters');
      score -= 10;
    }

    // Enhanced description analysis
    if (data.description.length < 120 || data.description.length > 160) {
      issues.push('Description length should be between 120-160 characters');
      score -= 10;
    }

    // Enhanced keyword analysis
    if (data.keywords.length < 3) {
      issues.push('Add more relevant keywords (minimum 3)');
      score -= 5;
    }

    // Check for keyword density in title and description
    const titleLower = data.title.toLowerCase();
    const descLower = data.description.toLowerCase();
    data.keywords.forEach(keyword => {
      const keywordLower = keyword.toLowerCase();
      if (!titleLower.includes(keywordLower) && !descLower.includes(keywordLower)) {
        issues.push(`Keyword "${keyword}" not found in title or description`);
        score -= 3;
      }
    });

    // Enhanced meta tag checks
    if (!data.ogImage) {
      issues.push('Missing Open Graph image');
      score -= 5;
    }

    if (!data.canonical) {
      issues.push('Missing canonical URL');
      score -= 5;
    }

    // Enhanced URL and canonical checks
    const currentUrl = window.location.href;
    if (currentUrl !== data.canonical) {
      issues.push('URL mismatch with canonical');
      score -= 5;
    }

    // Check for HTTPS
    if (!window.location.protocol.includes('https')) {
      issues.push('Site should use HTTPS for better SEO');
      score -= 5;
    }

    // Check for mobile responsiveness
    if (window.innerWidth < 768) {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        issues.push('Missing viewport meta tag for mobile optimization');
        score -= 5;
      }
    }

    // Check for schema markup
    if (enableStructuredData && !data.structuredData) {
      issues.push('Missing structured data (schema markup)');
      score -= 5;
    }

    // Check for internal linking opportunities
    const links = document.querySelectorAll('a[href^="/"]');
    if (links.length < 5) {
      issues.push('Consider adding more internal links for better site structure');
      score -= 3;
    }

    // Check for image alt tags
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt tags`);
      score -= Math.min(5, imagesWithoutAlt.length);
    }

    // Check for heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    if (h1Count !== 1) {
      issues.push(`Should have exactly 1 H1 tag, found ${h1Count}`);
      score -= 5;
    }

    // Check for content length
    const content = document.body.textContent || '';
    if (content.length < 300) {
      issues.push('Content should be at least 300 characters for better SEO');
      score -= 5;
    }

    setSeoScore(Math.max(0, score));
    setSeoIssues(issues);
    setIsAnalyzing(false);
  }, [data, enableAnalytics, enableStructuredData]);

  // Enhanced structured data generation
  const generateStructuredData = useCallback(() => {
    if (!enableStructuredData) return null;

    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading provider of innovative micro SAAS, IT infrastructure, and AI solutions",
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
      ],
      "foundingDate": "2020",
      "numberOfEmployees": "10-50",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.4496,
          "longitude": -75.7163
        },
        "geoRadius": "50000"
      }
    };

    // Add page-specific structured data
    if (pageType === 'home') {
      return {
        ...baseStructuredData,
        "@type": "WebPage",
        "mainEntity": {
          "@type": "Service",
          "name": "AI-Powered Business Solutions",
          "description": "Comprehensive AI and technology solutions for business transformation",
          "provider": baseStructuredData,
          "areaServed": "Worldwide",
          "serviceType": "Technology Consulting"
        }
      };
    }

    if (pageType === 'service') {
      return {
        ...baseStructuredData,
        "@type": "Service",
        "name": data.title,
        "description": data.description,
        "provider": baseStructuredData
      };
    }

    return baseStructuredData;
  }, [data, pageType, enableStructuredData]);

  // Enhanced performance tracking
  const trackPerformance = useCallback(() => {
    if (!enablePerformanceTracking || !window.performance) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const metrics = {
      ttfb: navigation.responseStart - navigation.requestStart,
      fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      lcp: paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0,
      domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
      windowLoad: navigation.loadEventEnd - navigation.navigationStart
    };

    setPerformanceMetrics(metrics);

    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'performance',
        value: Math.round(metrics.ttfb),
        custom_parameter_1: Math.round(metrics.fcp),
        custom_parameter_2: Math.round(metrics.lcp)
      });
    }
  }, [enablePerformanceTracking]);

  useEffect(() => {
    analyzeSEO();
    trackPerformance();
  }, [analyzeSEO, trackPerformance]);

  const structuredData = generateStructuredData();

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords.join(', ')} />
        <link rel="canonical" href={data.canonical} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content={data.ogType} />
        <meta property="og:url" content={data.canonical} />
        <meta property="og:image" content={data.ogImage} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={data.twitterCard} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={data.ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#a855f7" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
        
        {/* Additional Meta Tags */}
        {Object.entries(data.metaTags).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}
      </Helmet>

      {/* SEO Dashboard (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-sm z-50 border border-gray-200"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-800">SEO Dashboard</h3>
            <button
              onClick={analyzeSEO}
              disabled={isAnalyzing}
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {isAnalyzing ? <RefreshCw className="w-3 h-3 animate-spin" /> : 'Analyze'}
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>SEO Score:</span>
              <span className={`font-semibold ${
                seoScore >= 80 ? 'text-green-600' : 
                seoScore >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {seoScore}/100
              </span>
            </div>
            
            {seoIssues.length > 0 && (
              <div className="text-xs">
                <span className="text-red-600 font-semibold">Issues ({seoIssues.length}):</span>
                <ul className="mt-1 space-y-1">
                  {seoIssues.slice(0, 3).map((issue, index) => (
                    <li key={index} className="text-red-600">• {issue}</li>
                  ))}
                  {seoIssues.length > 3 && (
                    <li className="text-gray-500">... and {seoIssues.length - 3} more</li>
                  )}
                </ul>
              </div>
            )}
            
            {performanceMetrics && (
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>TTFB:</span>
                  <span className={performanceMetrics.ttfb < 200 ? 'text-green-600' : 'text-yellow-600'}>
                    {Math.round(performanceMetrics.ttfb)}ms
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>FCP:</span>
                  <span className={performanceMetrics.fcp < 1800 ? 'text-green-600' : 'text-yellow-600'}>
                    {Math.round(performanceMetrics.fcp)}ms
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
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
