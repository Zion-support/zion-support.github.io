import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

export const SEOConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Zion Tech Group - AI-Powered Innovation & Enterprise Solutions',
    description: 'Transform your business with cutting-edge AI solutions, quantum technology, and innovative micro SAAS platforms. Leading the future of technology.',
    keywords: ['AI solutions', 'quantum technology', 'enterprise IT', 'cybersecurity', 'micro SAAS', 'digital transformation', 'machine learning', 'blockchain'],
    type: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: 'AI-Powered Innovation & Enterprise Solutions',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Wilmington',
        addressRegion: 'DE',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com'
      },
      sameAs: [
        'https://www.linkedin.com/company/ziontechgroup',
        'https://twitter.com/ziontechgroup',
        'https://github.com/ziontechgroup'
      ]
    }
  },
  services: {
    title: 'AI Services & Solutions - Zion Tech Group',
    description: 'Comprehensive AI services including autonomous systems, quantum computing, cybersecurity, and enterprise solutions. Transform your business today.',
    keywords: ['AI services', 'autonomous systems', 'quantum computing', 'cybersecurity', 'enterprise solutions'],
    type: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Services & Solutions',
      provider: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      },
      description: 'Comprehensive AI services including autonomous systems, quantum computing, cybersecurity, and enterprise solutions.',
      areaServed: 'Worldwide',
      serviceType: 'Artificial Intelligence Services'
    }
  },
  about: {
    title: 'About Zion Tech Group - Our Mission & Vision',
    description: 'Learn about Zion Tech Group\'s mission to revolutionize business through AI innovation, our expert team, and commitment to technological excellence.',
    keywords: ['about us', 'mission', 'vision', 'team', 'company history', 'AI innovation'],
    type: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Zion Tech Group',
      description: 'Learn about Zion Tech Group\'s mission to revolutionize business through AI innovation.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        foundingDate: '2020',
        description: 'AI-Powered Innovation & Enterprise Solutions'
      }
    }
  },
  contact: {
    title: 'Contact Zion Tech Group - Get in Touch',
    description: 'Contact Zion Tech Group for AI solutions, enterprise consulting, and technology partnerships. Reach our experts today.',
    keywords: ['contact', 'get quote', 'consultation', 'support', 'partnership'],
    type: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Zion Tech Group',
      description: 'Contact us for AI solutions, enterprise consulting, and technology partnerships.',
      mainEntity: {
        '@type': 'Organization',
        name: 'Zion Tech Group',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-302-464-0950',
          contactType: 'customer service',
          email: 'kleber@ziontechgroup.com'
        }
      }
    }
  },
  blog: {
    title: 'AI & Technology Blog - Zion Tech Group Insights',
    description: 'Stay updated with the latest AI trends, technology insights, and industry analysis from Zion Tech Group experts.',
    keywords: ['AI blog', 'technology insights', 'industry analysis', 'AI trends', 'tech news'],
    type: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'AI & Technology Blog',
      description: 'Latest AI trends, technology insights, and industry analysis.',
      publisher: {
        '@type': 'Organization',
        name: 'Zion Tech Group'
      }
    }
  }
};

interface SEOHeadProps {
  config?: SEOConfig;
  configKey?: keyof typeof SEOConfigs;
  customData?: Partial<SEOConfig>;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  config, 
  configKey, 
  customData = {} 
}) => {
  const location = useLocation();
  
  // Determine which config to use
  const baseConfig = config || (configKey ? SEOConfigs[configKey] : SEOConfigs.home);
  
  // Merge custom data with base config
  const finalConfig: SEOConfig = {
    ...baseConfig,
    ...customData,
    url: customData.url || `${window.location.origin}${location.pathname}`,
    canonical: customData.canonical || `${window.location.origin}${location.pathname}`
  };

  // Generate structured data JSON-LD
  const structuredData = finalConfig.structuredData ? 
    JSON.stringify(finalConfig.structuredData) : 
    JSON.stringify(SEOConfigs.home.structuredData);

  // Set page title and meta description for analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: finalConfig.title,
        page_location: finalConfig.url
      });
    }
  }, [finalConfig.title, finalConfig.url]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalConfig.title}</title>
      <meta name="description" content={finalConfig.description} />
      {finalConfig.keywords && (
        <meta name="keywords" content={finalConfig.keywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalConfig.canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalConfig.title} />
      <meta property="og:description" content={finalConfig.description} />
      <meta property="og:type" content={finalConfig.type || 'website'} />
      <meta property="og:url" content={finalConfig.url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      {finalConfig.image && (
        <meta property="og:image" content={finalConfig.image} />
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:title" content={finalConfig.title} />
      <meta name="twitter:description" content={finalConfig.description} />
      {finalConfig.image && (
        <meta name="twitter:image" content={finalConfig.image} />
      )}
      
      {/* Additional Meta Tags */}
      <meta name="author" content={finalConfig.author || 'Zion Tech Group'} />
      <meta name="robots" content={
        finalConfig.noindex ? 'noindex' : 
        finalConfig.nofollow ? 'nofollow' : 
        'index, follow'
      } />
      
      {/* Article-specific meta tags */}
      {finalConfig.type === 'article' && (
        <>
          {finalConfig.publishedTime && (
            <meta property="article:published_time" content={finalConfig.publishedTime} />
          )}
          {finalConfig.modifiedTime && (
            <meta property="article:modified_time" content={finalConfig.modifiedTime} />
          )}
          {finalConfig.section && (
            <meta property="article:section" content={finalConfig.section} />
          )}
          {finalConfig.tags && finalConfig.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {structuredData}
      </script>
      
      {/* Performance and Security Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Wilmington, Delaware" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Wilmington, DE, USA" />
      <meta name="business:contact_data:locality" content="Wilmington" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19709" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Additional Performance Optimizations */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEOHead;