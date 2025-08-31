import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Search,
  Eye,
  TrendingUp,
  Target,
  Globe,
  Smartphone,
  Monitor,
  Zap,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  BarChart3,
  Code,
  Database,
  Workflow,
  Lock,
  Server,
  Chip,
  ShieldCheck,
  Bot,
  Sparkles,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  BarChart,
  Users2,
  Settings as SettingsIcon
} from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
  structuredData: any;
  metaTags: Array<{ name: string; content: string }>;
}

interface SEOProps {
  data: SEOData;
  pageType?: 'home' | 'service' | 'about' | 'contact' | 'blog' | 'product';
  enableAnalytics?: boolean;
  enableStructuredData?: boolean;
  enableSocialTags?: boolean;
}

interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  keywordDensity: number;
  headingStructure: number;
  imageAltTags: number;
  internalLinks: number;
  externalLinks: number;
  loadSpeed: number;
  mobileFriendly: number;
  accessibility: number;
  overallScore: number;
}

const SEO: React.FC<SEOProps> = ({
  data,
  pageType = 'home',
  enableAnalytics = true,
  enableStructuredData = true,
  enableSocialTags = true
}) => {
  const [metrics, setMetrics] = useState<SEOMetrics>({
    titleLength: 0,
    descriptionLength: 0,
    keywordDensity: 0,
    headingStructure: 0,
    imageAltTags: 0,
    internalLinks: 0,
    externalLinks: 0,
    loadSpeed: 0,
    mobileFriendly: 0,
    accessibility: 0,
    overallScore: 0
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [seoIssues, setSeoIssues] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  // Default SEO data for Zion Tech Group
  const defaultSEOData: SEOData = {
    title: 'Zion Tech Group - Future of Technology | AI, Quantum Computing & Innovation',
    description: 'Transform your business with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology with expertise and innovation.',
    keywords: [
      'AI solutions',
      'quantum computing',
      'technology innovation',
      'digital transformation',
      'cloud services',
      'cybersecurity',
      'data analytics',
      'micro SAAS',
      'business technology',
      'IT consulting',
      'Zion Tech Group',
      'Delaware technology company'
    ],
    author: 'Zion Tech Group',
    canonical: 'https://ziontechgroup.com',
    ogImage: 'https://ziontechgroup.com/og-image.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterSite: '@ziontechgroup',
    twitterCreator: '@ziontechgroup',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com'
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://facebook.com/ziontechgroup'
      ]
    },
    metaTags: [
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' }
    ]
  };

  // Merge provided data with defaults
  const seoData = { ...defaultSEOData, ...data };

  // Analyze SEO metrics
  const analyzeSEO = useCallback(async () => {
    setIsAnalyzing(true);
    const newMetrics: SEOMetrics = {
      titleLength: seoData.title.length,
      descriptionLength: seoData.description.length,
      keywordDensity: calculateKeywordDensity(),
      headingStructure: analyzeHeadingStructure(),
      imageAltTags: analyzeImageAltTags(),
      internalLinks: analyzeInternalLinks(),
      externalLinks: analyzeExternalLinks(),
      loadSpeed: await measureLoadSpeed(),
      mobileFriendly: analyzeMobileFriendliness(),
      accessibility: analyzeAccessibility(),
      overallScore: 0
    };

    // Calculate overall score
    newMetrics.overallScore = calculateOverallScore(newMetrics);
    setMetrics(newMetrics);

    // Generate recommendations
    generateRecommendations(newMetrics);
    
    setIsAnalyzing(false);
  }, [seoData]);

  // Calculate keyword density
  const calculateKeywordDensity = (): number => {
    const content = document.body.innerText.toLowerCase();
    const keywords = seoData.keywords.map(k => k.toLowerCase());
    let totalDensity = 0;

    keywords.forEach(keyword => {
      const regex = new RegExp(keyword, 'gi');
      const matches = content.match(regex);
      if (matches) {
        totalDensity += (matches.length / content.split(' ').length) * 100;
      }
    });

    return Math.min(totalDensity, 100);
  };

  // Analyze heading structure
  const analyzeHeadingStructure = (): number => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 100;

    if (headings.length === 0) return 0;

    // Check for H1
    const h1Count = document.querySelectorAll('h1').length;
    if (h1Count === 0) score -= 30;
    else if (h1Count > 1) score -= 20;

    // Check heading hierarchy
    let previousLevel = 0;
    headings.forEach((heading) => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      if (currentLevel - previousLevel > 1) {
        score -= 10;
      }
      previousLevel = currentLevel;
    });

    return Math.max(0, score);
  };

  // Analyze image alt tags
  const analyzeImageAltTags = (): number => {
    const images = document.querySelectorAll('img');
    if (images.length === 0) return 100;

    let altCount = 0;
    images.forEach((img) => {
      if (img.alt && img.alt.trim() !== '') {
        altCount++;
      }
    });

    return (altCount / images.length) * 100;
  };

  // Analyze internal links
  const analyzeInternalLinks = (): number => {
    const links = document.querySelectorAll('a[href]');
    let internalCount = 0;

    links.forEach((link) => {
      const href = (link as HTMLAnchorElement).href;
      if (href.includes(window.location.hostname)) {
        internalCount++;
      }
    });

    return Math.min(internalCount, 100);
  };

  // Analyze external links
  const analyzeExternalLinks = (): number => {
    const links = document.querySelectorAll('a[href]');
    let externalCount = 0;

    links.forEach((link) => {
      const href = (link as HTMLAnchorElement).href;
      if (!href.includes(window.location.hostname)) {
        externalCount++;
      }
    });

    return Math.min(externalCount, 100);
  };

  // Measure load speed
  const measureLoadSpeed = async (): Promise<number> => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.navigationStart;
        // Score based on load time (lower is better)
        if (loadTime < 1000) return 100;
        if (loadTime < 2000) return 80;
        if (loadTime < 3000) return 60;
        if (loadTime < 5000) return 40;
        return 20;
      }
    }
    return 50; // Default score
  };

  // Analyze mobile friendliness
  const analyzeMobileFriendliness = (): number => {
    let score = 100;

    // Check viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) score -= 20;

    // Check for mobile-specific CSS
    const mobileCSS = document.querySelector('link[media*="mobile"], link[media*="max-width"]');
    if (!mobileCSS) score -= 15;

    // Check touch targets
    const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
    let smallTargets = 0;
    touchTargets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        smallTargets++;
      }
    });

    if (smallTargets > 0) {
      score -= Math.min(30, (smallTargets / touchTargets.length) * 30);
    }

    return Math.max(0, score);
  };

  // Analyze accessibility
  const analyzeAccessibility = (): number => {
    let score = 100;

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    let missingAlt = 0;
    images.forEach((img) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        missingAlt++;
      }
    });

    if (missingAlt > 0) {
      score -= Math.min(20, (missingAlt / images.length) * 20);
    }

    // Check for form labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    let missingLabels = 0;
    formInputs.forEach((input) => {
      const id = input.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      
      if (!label && !ariaLabel && !input.getAttribute('aria-labelledby')) {
        missingLabels++;
      }
    });

    if (missingLabels > 0) {
      score -= Math.min(20, (missingLabels / formInputs.length) * 20);
    }

    // Check for ARIA attributes
    const ariaElements = document.querySelectorAll('[aria-*]');
    let invalidAria = 0;
    ariaElements.forEach((element) => {
      const ariaInvalid = element.getAttribute('aria-invalid');
      if (ariaInvalid && !['true', 'false', 'grammar', 'spelling'].includes(ariaInvalid)) {
        invalidAria++;
      }
    });

    if (invalidAria > 0) {
      score -= Math.min(20, (invalidAria / ariaElements.length) * 20);
    }

    return Math.max(0, score);
  };

  // Calculate overall score
  const calculateOverallScore = (metrics: SEOMetrics): number => {
    const weights = {
      titleLength: 0.1,
      descriptionLength: 0.1,
      keywordDensity: 0.15,
      headingStructure: 0.15,
      imageAltTags: 0.1,
      internalLinks: 0.1,
      externalLinks: 0.05,
      loadSpeed: 0.15,
      mobileFriendly: 0.05,
      accessibility: 0.05
    };

    let totalScore = 0;
    Object.entries(weights).forEach(([key, weight]) => {
      if (key in metrics) {
        totalScore += (metrics[key as keyof SEOMetrics] as number) * weight;
      }
    });

    return Math.round(totalScore);
  };

  // Generate recommendations
  const generateRecommendations = (metrics: SEOMetrics) => {
    const issues: string[] = [];
    const recs: string[] = [];

    // Title analysis
    if (metrics.titleLength < 30) {
      issues.push('Title is too short');
      recs.push('Increase title length to 50-60 characters');
    } else if (metrics.titleLength > 60) {
      issues.push('Title is too long');
      recs.push('Reduce title length to 50-60 characters');
    }

    // Description analysis
    if (metrics.descriptionLength < 120) {
      issues.push('Description is too short');
      recs.push('Increase description length to 150-160 characters');
    } else if (metrics.descriptionLength > 160) {
      issues.push('Description is too long');
      recs.push('Reduce description length to 150-160 characters');
    }

    // Keyword density
    if (metrics.keywordDensity < 1) {
      issues.push('Low keyword density');
      recs.push('Increase keyword usage naturally in content');
    } else if (metrics.keywordDensity > 3) {
      issues.push('High keyword density (potential spam)');
      recs.push('Reduce keyword usage to avoid over-optimization');
    }

    // Heading structure
    if (metrics.headingStructure < 80) {
      issues.push('Poor heading structure');
      recs.push('Improve heading hierarchy (H1 → H2 → H3)');
    }

    // Image alt tags
    if (metrics.imageAltTags < 90) {
      issues.push('Missing image alt tags');
      recs.push('Add descriptive alt text to all images');
    }

    // Load speed
    if (metrics.loadSpeed < 80) {
      issues.push('Slow page load speed');
      recs.push('Optimize images, minify CSS/JS, enable compression');
    }

    // Mobile friendliness
    if (metrics.mobileFriendly < 80) {
      issues.push('Poor mobile experience');
      recs.push('Improve mobile responsiveness and touch targets');
    }

    // Accessibility
    if (metrics.accessibility < 80) {
      issues.push('Accessibility issues');
      recs.push('Add proper labels, ARIA attributes, and alt text');
    }

    setSeoIssues(issues);
    setRecommendations(recs);
  };

  // Run SEO analysis on mount
  useEffect(() => {
    analyzeSEO();
  }, [analyzeSEO]);

  // Generate page-specific structured data
  const generatePageStructuredData = () => {
    const baseData = seoData.structuredData;
    
    switch (pageType) {
      case 'home':
        return {
          ...baseData,
          '@type': 'WebPage',
          name: 'Home',
          description: seoData.description
        };
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: seoData.title,
          description: seoData.description,
          provider: baseData,
          areaServed: 'Worldwide',
          serviceType: 'Technology Consulting'
        };
      case 'about':
        return {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Us',
          description: seoData.description,
          mainEntity: baseData
        };
      case 'contact':
        return {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Us',
          description: seoData.description,
          mainEntity: baseData
        };
      case 'blog':
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: seoData.title,
          description: seoData.description,
          author: {
            '@type': 'Organization',
            name: seoData.author
          },
          publisher: baseData,
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString()
        };
      default:
        return baseData;
    }
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <meta name="author" content={seoData.author} />
        <link rel="canonical" href={seoData.canonical} />

        {/* Additional Meta Tags */}
        {seoData.metaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}

        {/* Open Graph Tags */}
        {enableSocialTags && (
          <>
            <meta property="og:title" content={seoData.title} />
            <meta property="og:description" content={seoData.description} />
            <meta property="og:type" content={seoData.ogType} />
            <meta property="og:url" content={seoData.canonical} />
            <meta property="og:image" content={seoData.ogImage} />
            <meta property="og:site_name" content="Zion Tech Group" />
            <meta property="og:locale" content="en_US" />
          </>
        )}

        {/* Twitter Card Tags */}
        {enableSocialTags && (
          <>
            <meta name="twitter:card" content={seoData.twitterCard} />
            <meta name="twitter:site" content={seoData.twitterSite} />
            <meta name="twitter:creator" content={seoData.twitterCreator} />
            <meta name="twitter:title" content={seoData.title} />
            <meta name="twitter:description" content={seoData.description} />
            <meta name="twitter:image" content={seoData.ogImage} />
          </>
        )}

        {/* Structured Data */}
        {enableStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(generatePageStructuredData())}
          </script>
        )}

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Mobile Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        
        {/* Security Meta Tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance Meta Tags */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </Helmet>

      {/* SEO Analysis Panel (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-6 left-6 z-50 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4 max-w-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white flex items-center">
              <Search className="w-4 h-4 text-cyan-400 mr-2" />
              SEO Analysis
            </h3>
            <button
              onClick={analyzeSEO}
              disabled={isAnalyzing}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* SEO Score */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Overall Score</span>
              <span className={`text-lg font-bold ${
                metrics.overallScore >= 80 ? 'text-green-400' :
                metrics.overallScore >= 60 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {metrics.overallScore}/100
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  metrics.overallScore >= 80 ? 'bg-green-500' :
                  metrics.overallScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${metrics.overallScore}%` }}
              />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-2 mb-3">
            {[
              { key: 'titleLength', label: 'Title', target: '50-60' },
              { key: 'descriptionLength', label: 'Description', target: '150-160' },
              { key: 'keywordDensity', label: 'Keywords', target: '1-3%' },
              { key: 'loadSpeed', label: 'Speed', target: '>80' }
            ].map(({ key, label, target }) => (
              <div key={key} className="flex items-center justify-between text-xs">
                <span className="text-gray-400">{label}</span>
                <div className="flex items-center space-x-2">
                  <span className={`font-medium ${
                    metrics[key as keyof SEOMetrics] >= 80 ? 'text-green-400' :
                    metrics[key as keyof SEOMetrics] >= 60 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {Math.round(metrics[key as keyof SEOMetrics] as number)}
                  </span>
                  <span className="text-gray-500 text-xs">({target})</span>
                </div>
              </div>
            ))}
          </div>

          {/* Issues & Recommendations */}
          {seoIssues.length > 0 && (
            <div className="mb-3">
              <h4 className="text-xs font-medium text-white mb-2">Issues Found</h4>
              <div className="space-y-1">
                {seoIssues.slice(0, 3).map((issue, index) => (
                  <div key={index} className="flex items-start space-x-2 text-xs">
                    <AlertTriangle className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-yellow-300">{issue}</span>
                  </div>
                ))}
                {seoIssues.length > 3 && (
                  <div className="text-center text-xs text-gray-400">
                    +{seoIssues.length - 3} more issues
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-white mb-2">Recommendations</h4>
              <div className="space-y-1">
                {recommendations.slice(0, 2).map((rec, index) => (
                  <div key={index} className="flex items-start space-x-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-green-300">{rec}</span>
                  </div>
                ))}
                {recommendations.length > 2 && (
                  <div className="text-center text-xs text-gray-400">
                    +{recommendations.length - 2} more recommendations
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SEO;
