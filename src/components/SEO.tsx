import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  Eye, 
  BarChart3, 
  Globe, 
  Smartphone,
  Monitor,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings
} from 'lucide-react';

interface SEOMetaData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  robots?: string;
  language?: string;
  author?: string;
  viewport?: string;
  charset?: string;
}

interface SEOProps {
  meta: SEOMetaData;
  showPanel?: boolean;
  autoOptimize?: boolean;
  enableAnalytics?: boolean;
}

interface SEOAnalysis {
  score: number;
  issues: string[];
  suggestions: string[];
  improvements: string[];
}

export const SEO: React.FC<SEOProps> = ({
  meta,
  showPanel = false,
  autoOptimize = true,
  enableAnalytics = true
}) => {
  const [analysis, setAnalysis] = useState<SEOAnalysis>({
    score: 0,
    issues: [],
    suggestions: [],
    improvements: []
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(showPanel);
  const [pageSpeed, setPageSpeed] = useState<number>(0);
  const [coreWebVitals, setCoreWebVitals] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  // Default meta values
  const defaultMeta = useMemo(() => ({
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    robots: 'index, follow',
    language: 'en',
    author: 'Zion Tech Group',
    twitterCard: 'summary_large_image',
    ...meta
  }), [meta]);

  // SEO Analysis function
  const analyzeSEO = useCallback(async () => {
    setIsAnalyzing(true);
    const newIssues: string[] = [];
    const newSuggestions: string[] = [];
    const newImprovements: string[] = [];
    let score = 100;

    try {
      // Check title length
      if (meta.title.length < 30) {
        newIssues.push('Title is too short (should be 30-60 characters)');
        score -= 15;
      } else if (meta.title.length > 60) {
        newIssues.push('Title is too long (should be 30-60 characters)');
        score -= 10;
      } else {
        newImprovements.push('Title length is optimal');
      }

      // Check description length
      if (meta.description.length < 120) {
        newIssues.push('Description is too short (should be 120-160 characters)');
        score -= 15;
      } else if (meta.description.length > 160) {
        newIssues.push('Description is too long (should be 120-160 characters)');
        score -= 10;
      } else {
        newImprovements.push('Description length is optimal');
      }

      // Check keywords
      if (meta.keywords.length === 0) {
        newIssues.push('No keywords specified');
        score -= 10;
      } else if (meta.keywords.length > 10) {
        newSuggestions.push('Consider reducing keywords to 5-10 most important ones');
      } else {
        newImprovements.push('Keywords are well optimized');
      }

      // Check for missing Open Graph tags
      if (!meta.ogTitle) {
        newSuggestions.push('Add Open Graph title for better social sharing');
        score -= 5;
      }
      if (!meta.ogDescription) {
        newSuggestions.push('Add Open Graph description for better social sharing');
        score -= 5;
      }
      if (!meta.ogImage) {
        newSuggestions.push('Add Open Graph image for better social sharing');
        score -= 5;
      }

      // Check for missing Twitter Card tags
      if (!meta.twitterTitle) {
        newSuggestions.push('Add Twitter Card title for better Twitter sharing');
        score -= 3;
      }
      if (!meta.twitterDescription) {
        newSuggestions.push('Add Twitter Card description for better Twitter sharing');
        score -= 3;
      }

      // Check for canonical URL
      if (!meta.canonicalUrl) {
        newSuggestions.push('Add canonical URL to prevent duplicate content issues');
        score -= 5;
      }

      // Check heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const h1Count = document.querySelectorAll('h1').length;
      
      if (h1Count === 0) {
        newIssues.push('No H1 heading found');
        score -= 10;
      } else if (h1Count > 1) {
        newIssues.push('Multiple H1 headings found (should have only one)');
        score -= 10;
      } else {
        newImprovements.push('H1 heading structure is correct');
      }

      // Check for images without alt text
      const images = document.querySelectorAll('img');
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
      if (imagesWithoutAlt.length > 0) {
        newIssues.push(`${imagesWithoutAlt.length} images missing alt text`);
        score -= Math.min(15, imagesWithoutAlt.length * 2);
      } else {
        newImprovements.push('All images have alt text');
      }

      // Check for internal links
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="http://localhost"], a[href^="https://ziontechgroup.com"]');
      if (internalLinks.length < 3) {
        newSuggestions.push('Add more internal links for better site structure');
        score -= 5;
      } else {
        newImprovements.push('Good internal linking structure');
      }

      // Check for external links
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href^="http://localhost"]):not([href^="https://ziontechgroup.com"])');
      if (externalLinks.length > 0) {
        newSuggestions.push('Consider adding rel="nofollow" to external links');
      }

      // Check for meta viewport
      if (!meta.viewport) {
        newIssues.push('Missing viewport meta tag for mobile optimization');
        score -= 10;
      } else {
        newImprovements.push('Viewport meta tag is present');
      }

      // Check for structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
      if (structuredData.length === 0) {
        newSuggestions.push('Add structured data (JSON-LD) for better search results');
        score -= 5;
      } else {
        newImprovements.push('Structured data is present');
      }

      // Check for sitemap
      const sitemapLink = document.querySelector('link[rel="sitemap"]');
      if (!sitemapLink) {
        newSuggestions.push('Add sitemap link for better search engine crawling');
        score -= 3;
      }

      // Check for robots.txt
      fetch('/robots.txt')
        .then(response => {
          if (!response.ok) {
            newSuggestions.push('Create robots.txt file for search engine guidance');
            score -= 3;
          } else {
            newImprovements.push('Robots.txt file is present');
          }
        })
        .catch(() => {
          newSuggestions.push('Create robots.txt file for search engine guidance');
          score -= 3;
        });

    } catch (error) {
      console.warn('SEO analysis failed:', error);
    }

    setAnalysis({
      score: Math.max(0, score),
      issues: newIssues,
      suggestions: newSuggestions,
      improvements: newImprovements
    });
    setIsAnalyzing(false);
  }, [meta]);

  // Measure Core Web Vitals
  const measureCoreWebVitals = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        // First Contentful Paint
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const fcp = entries[entries.length - 1];
          if (fcp) {
            setCoreWebVitals(prev => ({ ...prev, fcp: fcp.startTime }));
          }
        }).observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lcp = entries[entries.length - 1];
          if (lcp) {
            setCoreWebVitals(prev => ({ ...prev, lcp: lcp.startTime }));
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const fid = entries[entries.length - 1];
          if (fid) {
            setCoreWebVitals(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
          }
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        new PerformanceObserver((entryList) => {
          let cls = 0;
          entryList.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          });
          setCoreWebVitals(prev => ({ ...prev, cls }));
        }).observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setCoreWebVitals(prev => ({ 
            ...prev, 
            ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
          }));
        }
      } catch (error) {
        console.warn('Core Web Vitals measurement failed:', error);
      }
    }
  }, []);

  // Calculate page speed score
  const calculatePageSpeed = useCallback(() => {
    let score = 100;
    
    if (coreWebVitals.fcp > 1800) score -= 20;
    if (coreWebVitals.lcp > 2500) score -= 25;
    if (coreWebVitals.fid > 100) score -= 15;
    if (coreWebVitals.cls > 0.1) score -= 20;
    if (coreWebVitals.ttfb > 600) score -= 20;
    
    setPageSpeed(Math.max(0, score));
  }, [coreWebVitals]);

  // Auto-optimize SEO
  useEffect(() => {
    if (autoOptimize) {
      analyzeSEO();
    }
  }, [autoOptimize, analyzeSEO]);

  // Measure performance on mount
  useEffect(() => {
    measureCoreWebVitals();
    
    const timer = setTimeout(() => {
      measureCoreWebVitals();
    }, 2000);

    return () => clearTimeout(timer);
  }, [measureCoreWebVitals]);

  // Calculate page speed when core web vitals change
  useEffect(() => {
    if (coreWebVitals.fcp > 0) {
      calculatePageSpeed();
    }
  }, [coreWebVitals, calculatePageSpeed]);

  // Generate structured data
  const generateStructuredData = useMemo(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": meta.description,
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "areaServed": "US"
      }
    };

    return JSON.stringify(structuredData);
  }, [meta.description]);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords.join(', ')} />
        <meta name="author" content={defaultMeta.author} />
        <meta name="robots" content={defaultMeta.robots} />
        <meta name="language" content={defaultMeta.language} />
        <meta charSet={defaultMeta.charset} />
        <meta name="viewport" content={defaultMeta.viewport} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={defaultMeta.ogTitle || defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.ogDescription || defaultMeta.description} />
        <meta property="og:image" content={defaultMeta.ogImage || 'https://ziontechgroup.com/og-image.jpg'} />
        <meta property="og:url" content={defaultMeta.ogUrl || window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={defaultMeta.twitterCard} />
        <meta name="twitter:title" content={defaultMeta.twitterTitle || defaultMeta.title} />
        <meta name="twitter:description" content={defaultMeta.twitterDescription || defaultMeta.description} />
        <meta name="twitter:image" content={defaultMeta.twitterImage || 'https://ziontechgroup.com/twitter-image.jpg'} />

        {/* Canonical URL */}
        {defaultMeta.canonicalUrl && (
          <link rel="canonical" href={defaultMeta.canonicalUrl} />
        )}

        {/* Structured Data */}
        <script type="application/ld+json">
          {generateStructuredData}
        </script>

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </Helmet>

      {/* SEO Analysis Panel */}
      {showAnalysis && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-white text-sm z-50 max-w-xs"
        >
          <h3 className="font-semibold mb-2 text-green-400">SEO Analysis</h3>
          
          {/* SEO Score */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs">SEO Score:</span>
              <span className={`text-lg font-bold ${
                analysis.score >= 90 ? 'text-green-400' :
                analysis.score >= 70 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {analysis.score}
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  analysis.score >= 90 ? 'bg-green-500' :
                  analysis.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${analysis.score}%` }}
              />
            </div>
          </div>

          {/* Page Speed */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs">Page Speed:</span>
              <span className={`text-sm font-bold ${
                pageSpeed >= 90 ? 'text-green-400' :
                pageSpeed >= 70 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {pageSpeed}
              </span>
            </div>
          </div>

          {/* Issues */}
          {analysis.issues.length > 0 && (
            <div className="mb-3 p-2 bg-red-900/20 border border-red-500/30 rounded text-xs">
              <h4 className="text-red-400 font-medium mb-1">Issues:</h4>
              <div className="space-y-1">
                {analysis.issues.slice(0, 3).map((issue, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-red-300">{issue}</span>
                  </div>
                ))}
                {analysis.issues.length > 3 && (
                  <span className="text-red-400 text-xs">+{analysis.issues.length - 3} more</span>
                )}
              </div>
            </div>
          )}

          {/* Suggestions */}
          {analysis.suggestions.length > 0 && (
            <div className="mb-3 p-2 bg-blue-900/20 border border-blue-500/30 rounded text-xs">
              <h4 className="text-blue-400 font-medium mb-1">Suggestions:</h4>
              <div className="space-y-1">
                {analysis.suggestions.slice(0, 2).map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-blue-300">{suggestion}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => setShowAnalysis(false)}
            className="w-full px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded text-xs font-medium transition-colors"
          >
            Dismiss
          </button>
        </motion.div>
      )}

      {/* SEO Toggle Button */}
      <motion.button
        onClick={() => setShowAnalysis(!showAnalysis)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="SEO Analysis"
        aria-label="Toggle SEO analysis panel"
      >
        <Search className="w-7 h-7 text-white mx-auto" />
        {analysis.score < 80 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">
              {Math.round(analysis.score)}
            </span>
          </div>
        )}
      </motion.button>

      {/* Google Analytics */}
      {enableAnalytics && (
        <>
          <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `}
          </script>
        </>
      )}
    </>
  );
};

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      meta={{
        title: "AI-Powered Business Solutions & Quantum Computing | Zion Tech Group",
        description: "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity.",
        keywords: ["AI business solutions", "quantum computing", "autonomous operations", "digital transformation", "IT services", "cybersecurity", "machine learning", "neural networks"],
        ogTitle: "AI-Powered Business Solutions & Quantum Computing | Zion Tech Group",
        ogDescription: "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity.",
        ogImage: "https://ziontechgroup.com/og-image.jpg",
        ogUrl: "https://ziontechgroup.com",
        twitterTitle: "AI-Powered Business Solutions & Quantum Computing | Zion Tech Group",
        twitterDescription: "Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity.",
        twitterImage: "https://ziontechgroup.com/og-image.jpg",
        canonicalUrl: "https://ziontechgroup.com",
        robots: "index, follow",
        language: "en",
        author: "Zion Tech Group",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        charset: "utf-8",
        ogType: "website",
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
        }
      }}
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      meta={{
        title: "AI Services, Quantum Computing & IT Solutions | Zion Tech Group",
        description: "Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure.",
        keywords: ["AI services", "quantum computing services", "IT infrastructure", "cybersecurity services", "cloud computing", "business automation", "machine learning services"],
        ogTitle: "AI Services, Quantum Computing & IT Solutions | Zion Tech Group",
        ogDescription: "Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure.",
        ogImage: "https://ziontechgroup.com/og-image.jpg",
        ogUrl: "https://ziontechgroup.com",
        twitterTitle: "AI Services, Quantum Computing & IT Solutions | Zion Tech Group",
        twitterDescription: "Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure.",
        twitterImage: "https://ziontechgroup.com/og-image.jpg",
        canonicalUrl: "https://ziontechgroup.com/services",
        robots: "index, follow",
        language: "en",
        author: "Zion Tech Group",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        charset: "utf-8",
        ogType: "website",
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
        }
      }}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      meta={{
        title: "Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions",
        description: "Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation.",
        keywords: ["contact Zion Tech Group", "AI consulting", "quantum computing consulting", "IT consulting", "digital transformation consulting"],
        ogTitle: "Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions",
        ogDescription: "Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation.",
        ogImage: "https://ziontechgroup.com/og-image.jpg",
        ogUrl: "https://ziontechgroup.com/contact",
        twitterTitle: "Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions",
        twitterDescription: "Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation.",
        twitterImage: "https://ziontechgroup.com/og-image.jpg",
        canonicalUrl: "https://ziontechgroup.com/contact",
        robots: "index, follow",
        language: "en",
        author: "Zion Tech Group",
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        charset: "utf-8",
        ogType: "website",
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
        }
      }}
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
      meta={{
        title: title,
        description: description,
        keywords: ["blog", "Zion Tech Group", "technology", "IT", "AI", "quantum computing"],
        ogTitle: title,
        ogDescription: description,
        ogImage: image,
        ogUrl: `https://ziontechgroup.com/blog/${slug}`,
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: image,
        canonicalUrl: `https://ziontechgroup.com/blog/${slug}`,
        robots: "index, follow",
        language: "en",
        author: author,
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        charset: "utf-8",
        ogType: "article",
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
        }
      }}
    />
  );
}
