<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> origin/main
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
<<<<<<< HEAD
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  ogType?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'business.business'  ;
  author?: string;
  canonical?: string;
}

export function SEO({
  title = "Zion Tech Group - Advanced Technology Solutions",
  description = "Leading provider of AI, cybersecurity, cloud solutions, and digital transformation services for businesses worldwide.",
  keywords = "AI, artificial intelligence, cybersecurity, cloud computing, digital transformation, technology solutions",
  ogImage = "/images/og-image.jpg",
  canonicalUrl,
  structuredData,
  twitterCard = "summary_large_image",
  ogType = "website",
  author = "Zion Tech Group",
  canonical
}: SEOProps) {
  const siteUrl = "https://ziontechgroup.com";
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} | Zion Tech Group`;
  const fullCanonical = canonical || canonicalUrl || `${siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`;
=======
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  locale?: string;
  alternateLocales?: Array<{ href: string; hreflang: string }>;
}

const defaultSEO = {
  title: 'Zion Tech Group - AI, IT & Micro SaaS Solutions',
  description: 'Leading provider of AI-powered solutions, IT services, and Micro SaaS products. Transform your business with cutting-edge technology.',
  keywords: [
    'AI services',
    'IT solutions',
    'Micro SaaS',
    'cybersecurity',
    'cloud migration',
    'mobile development',
    'artificial intelligence',
    'machine learning',
    'data analytics',
    'business automation'
  ],
  image: '/images/og-image.jpg',
  url: 'https://ziontechgroup.com',
  type: 'website' as const,
  author: 'Zion Tech Group',
  locale: 'en_US',
};

export const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  author = defaultSEO.author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonical,
  noindex = false,
  nofollow = false,
  locale = defaultSEO.locale,
  alternateLocales = [],
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  // Generate structured data
  const generateStructuredData = () => {
    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/images/logo.png',
      description: 'Leading provider of AI-powered solutions, IT services, and Micro SaaS products.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
      },
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup',
      ],
    };

    if (type === 'article' && publishedTime) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: fullImage,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        author: {
          '@type': 'Organization',
          name: author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/images/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullUrl,
        },
      };
    }

    if (type === 'service') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        description,
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        serviceType: section || 'Technology Services',
      };
    }

    return structuredData || baseStructuredData;
  };
>>>>>>> origin/main

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Zion Tech Group" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
=======
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content={locale} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={locale} />

      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1f2937" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Alternate Language Links */}
      {alternateLocales.map((locale, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={locale.hreflang}
          href={locale.href}
        />
      ))}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

// SEO hook for dynamic updates
export const useSEO = (seoProps: SEOProps) => {
  const [seo, setSEO] = React.useState<SEOProps>(seoProps);

  const updateSEO = React.useCallback((newProps: Partial<SEOProps>) => {
    setSEO(prev => ({ ...prev, ...newProps }));
  }, []);

  return { seo, updateSEO };
};

// Page-specific SEO components
export const HomePageSEO: React.FC = () => (
  <SEO
    title="Zion Tech Group - AI, IT & Micro SaaS Solutions"
    description="Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative Micro SaaS products. Expert team delivering results."
    keywords={[
      'AI solutions',
      'IT services',
      'Micro SaaS',
      'business automation',
      'digital transformation',
      'cloud computing',
      'cybersecurity',
      'machine learning',
      'data analytics',
      'software development'
    ]}
    type="website"
  />
);

export const ServicesPageSEO: React.FC = () => (
  <SEO
    title="Our Services - AI, IT & Micro SaaS Solutions"
    description="Comprehensive range of technology services including AI development, IT consulting, Micro SaaS solutions, cybersecurity, and cloud migration."
    keywords={[
      'AI development services',
      'IT consulting',
      'Micro SaaS development',
      'cybersecurity services',
      'cloud migration',
      'mobile app development',
      'web development',
      'data science',
      'machine learning consulting'
    ]}
    type="service"
    section="Technology Services"
  />
);

export const AboutPageSEO: React.FC = () => (
  <SEO
    title="About Us - Zion Tech Group"
    description="Learn about Zion Tech Group's mission to revolutionize business through AI, IT solutions, and Micro SaaS products. Meet our expert team."
    keywords={[
      'about zion tech group',
      'company mission',
      'expert team',
      'technology leadership',
      'innovation',
      'business solutions',
      'AI expertise',
      'IT specialists'
    ]}
    type="website"
  />
);

export const ContactPageSEO: React.FC = () => (
  <SEO
    title="Contact Us - Get in Touch with Zion Tech Group"
    description="Contact Zion Tech Group for AI solutions, IT services, and Micro SaaS development. Get a free consultation and project quote."
    keywords={[
      'contact zion tech group',
      'free consultation',
      'project quote',
      'AI consultation',
      'IT support',
      'custom development',
      'business inquiry'
    ]}
    type="website"
  />
);

export default SEO;
>>>>>>> origin/main
