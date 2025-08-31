import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

interface EnhancedSEOProps {
  data: SEOData;
  children: React.ReactNode;
}

export const SEOConfigs = {
  home: {
    title: "Zion Tech Group - Empowering the Future Through Innovative Technology Solutions",
    description: "Leading provider of AI solutions, IT services, and MicroSaaS platforms. Transform your business with cutting-edge technology, quantum computing, and AI-powered automation.",
    keywords: ["AI solutions", "IT services", "MicroSaaS", "technology consulting", "quantum computing", "AI automation", "enterprise solutions"],
    ogType: "website",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading provider of AI solutions, IT services, and MicroSaaS platforms",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressRegion": "DE"
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
    }
  },
  services: {
    title: "AI & Technology Services - Zion Tech Group",
    description: "Comprehensive AI services including autonomous business operations, quantum computing, cybersecurity, and enterprise automation solutions.",
    keywords: ["AI services", "quantum computing", "cybersecurity", "enterprise automation", "AI solutions"],
    ogType: "website"
  },
  about: {
    title: "About Zion Tech Group - Innovation & Technology Leadership",
    description: "Learn about Zion Tech Group's mission to empower businesses through innovative technology solutions and AI-driven transformation.",
    keywords: ["about us", "company", "leadership", "mission", "technology company"],
    ogType: "website"
  },
  contact: {
    title: "Contact Zion Tech Group - Get Started Today",
    description: "Ready to transform your business? Contact Zion Tech Group for a free consultation on AI solutions and technology services.",
    keywords: ["contact", "consultation", "get started", "support", "help"],
    ogType: "website"
  },
  aiAutonomousFinancialAdvisor: {
    title: "AI Autonomous Financial Advisor - Zion Tech Group",
    description: "Revolutionary AI-powered autonomous financial advisor providing investment analysis, portfolio optimization, and risk management with 24/7 monitoring.",
    keywords: ["AI financial advisor", "autonomous investment", "portfolio optimization", "risk management", "financial AI", "investment analysis"],
    ogType: "website",
    canonical: "https://ziontechgroup.com/services/ai-autonomous-financial-advisor"
  },
  aiAutonomousHealthcareDiagnostics: {
    title: "AI Autonomous Healthcare Diagnostics - Zion Tech Group",
    description: "Cutting-edge AI-powered healthcare diagnostics platform for medical imaging analysis, disease detection, and predictive health analytics.",
    keywords: ["AI healthcare", "medical diagnostics", "medical imaging", "disease detection", "health analytics", "AI medicine"],
    ogType: "website",
    canonical: "https://ziontechgroup.com/services/ai-autonomous-healthcare-diagnostics"
  },
  aiAutonomousCybersecurityOperations: {
    title: "AI Autonomous Cybersecurity Operations - Zion Tech Group",
    description: "Advanced AI-powered autonomous cybersecurity platform providing 24/7 threat detection, autonomous response, and zero-trust security architecture.",
    keywords: ["AI cybersecurity", "autonomous security", "threat detection", "zero trust", "cybersecurity AI", "security automation"],
    ogType: "website",
    canonical: "https://ziontechgroup.com/services/ai-autonomous-cybersecurity-operations"
  },
  innovativeServicesShowcase2027: {
    title: "Innovative Services Showcase 2027 - Zion Tech Group",
    description: "Discover Zion Tech Group's latest innovative AI services, autonomous operations platforms, and cutting-edge technology solutions for 2027.",
    keywords: ["innovative services", "AI services 2027", "autonomous operations", "technology showcase", "AI innovation", "future technology"],
    ogType: "website",
    canonical: "https://ziontechgroup.com/innovative-services-showcase-2027"
  }
};

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ data, children }) => {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = "https://ziontechgroup.com/og-image.jpg",
    ogType = "website",
    twitterCard = "summary_large_image",
    structuredData,
    noIndex = false,
    noFollow = false
  } = data;

  const metaDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Robots Meta */}
        <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonical || window.location.href} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
        
        {/* Additional Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Zion Tech Group",
            "image": "https://ziontechgroup.com/logo.png",
            "description": "Leading provider of AI solutions, IT services, and MicroSaaS platforms",
            "url": "https://ziontechgroup.com",
            "telephone": "+1-302-464-0950",
            "email": "kleber@ziontechgroup.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US",
              "addressRegion": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.3185",
              "longitude": "-75.5071"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "39.3185",
                "longitude": "-75.5071"
              },
              "geoRadius": "50000"
            }
          })}
        </script>
      </Helmet>
      {children}
    </>
  );
};