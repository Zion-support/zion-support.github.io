import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'service';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  lang?: string;
  themeColor?: string;
  viewport?: string;
  robots?: string;
  alternateLanguages?: { [key: string]: string };
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
  businessInfo?: {
    name: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    logo: string;
    sameAs: string[];
  };
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Revolutionary AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative technology platforms. Leading the future of digital transformation.',
  keywords = [
    'AI Solutions',
    'Artificial Intelligence',
    'Technology Services',
    'Digital Transformation',
    'Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'IT Infrastructure',
    'Business Intelligence',
    'Innovation',
    'Zion Tech Group',
    'Future Technology'
  ],
  author = 'Zion Tech Group',
  canonical = 'https://ziontechgroup.com',
  ogImage = '/images/zion-tech-group-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  lang = 'en',
  themeColor = '#22ddd2',
  viewport = 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternateLanguages = {
    'en': 'https://ziontechgroup.com',
    'es': 'https://ziontechgroup.com/es',
    'fr': 'https://ziontechgroup.com/fr',
    'de': 'https://ziontechgroup.com/de',
    'zh': 'https://ziontechgroup.com/zh',
    'ja': 'https://ziontechgroup.com/ja'
  },
  socialMedia = {
    facebook: 'https://facebook.com/ziontechgroup',
    twitter: 'https://twitter.com/ziontechgroup',
    linkedin: 'https://linkedin.com/company/ziontechgroup',
    instagram: 'https://instagram.com/ziontechgroup',
    youtube: 'https://youtube.com/@ziontechgroup'
  },
  businessInfo = {
    name: 'Zion Tech Group',
    address: '123 Innovation Drive, Tech City, TC 12345, United States',
    phone: '+1-555-123-4567',
    email: 'info@ziontechgroup.com',
    website: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    sameAs: [
      'https://facebook.com/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://instagram.com/ziontechgroup',
      'https://youtube.com/@ziontechgroup'
    ]
  }
}) => {
  // Default structured data if none provided
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: businessInfo.name,
    url: businessInfo.website,
    logo: businessInfo.logo,
    description: description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.split(',')[0],
      addressLocality: businessInfo.address.split(',')[1]?.trim(),
      addressRegion: businessInfo.address.split(',')[2]?.trim(),
      postalCode: businessInfo.address.split(',')[3]?.trim(),
      addressCountry: businessInfo.address.split(',')[4]?.trim()
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: businessInfo.phone,
      email: businessInfo.email,
      contactType: 'customer service'
    },
    sameAs: businessInfo.sameAs,
    founder: {
      '@type': 'Person',
      name: 'Zion Tech Group Leadership',
      jobTitle: 'Executive Team'
    },
    foundingDate: '2020',
    numberOfEmployees: '100-500',
    industry: 'Technology',
    serviceType: [
      'AI Solutions',
      'IT Services',
      'Digital Transformation',
      'Cloud Computing',
      'Cybersecurity'
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex' : robots} />
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Language and Viewport */}
      <html lang={lang} />
      <meta name="viewport" content={viewport} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Alternate Languages */}
      {Object.entries(alternateLanguages).map(([langCode, url]) => (
        <link key={langCode} rel="alternate" hrefLang={langCode} href={url} />
      ))}
      
      {/* Theme and Colors */}
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={lang} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Mobile App Meta */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance */}
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Zion Tech Group Services',
          description: 'Comprehensive technology services offered by Zion Tech Group',
          itemListElement: [
            {
              '@type': 'Service',
              position: 1,
              name: 'AI Business Intelligence',
              description: 'Machine Learning & Data Science Solutions',
              url: 'https://ziontechgroup.com/services/ai-business-intelligence',
              provider: {
                '@type': 'Organization',
                name: 'Zion Tech Group'
              }
            },
            {
              '@type': 'Service',
              position: 2,
              name: 'Cloud & DevOps',
              description: 'Cloud Infrastructure & DevOps Automation',
              url: 'https://ziontechgroup.com/services/cloud-devops',
              provider: {
                '@type': 'Organization',
                name: 'Zion Tech Group'
              }
            },
            {
              '@type': 'Service',
              position: 3,
              name: 'Cybersecurity',
              description: 'AI-Powered Security Solutions',
              url: 'https://ziontechgroup.com/services/ai-cybersecurity',
              provider: {
                '@type': 'Organization',
                name: 'Zion Tech Group'
              }
            }
          ]
        })}
      </script>
      
      {/* Local Business Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: businessInfo.name,
          image: businessInfo.logo,
          '@id': businessInfo.website,
          url: businessInfo.website,
          telephone: businessInfo.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: businessInfo.address.split(',')[0],
            addressLocality: businessInfo.address.split(',')[1]?.trim(),
            addressRegion: businessInfo.address.split(',')[2]?.trim(),
            postalCode: businessInfo.address.split(',')[3]?.trim(),
            addressCountry: businessInfo.address.split(',')[4]?.trim()
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.7128,
            longitude: -74.0060
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday'
            ],
            opens: '09:00',
            closes: '18:00'
          },
          sameAs: businessInfo.sameAs
        })}
      </script>
      
      {/* WebSite Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Zion Tech Group',
          url: businessInfo.website,
          description: description,
          publisher: {
            '@type': 'Organization',
            name: 'Zion Tech Group',
            logo: {
              '@type': 'ImageObject',
              url: businessInfo.logo
            }
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://ziontechgroup.com/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        })}
      </script>
    </Helmet>
  );
};

export function HomePageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Technology Services",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": "AI Solutions, Quantum Computing, IT Services",
        "description": "Comprehensive technology services including AI, quantum computing, and IT infrastructure"
      }}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions"
      description="Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation."
      keywords="contact Zion Tech Group, AI consulting, quantum computing consulting, IT consulting, digital transformation consulting"
      ogType="website"
      structuredData={{
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
      title={title}
      description={description}
      ogImage={image}
      ogUrl={`https://ziontechgroup.com/blog/${slug}`}
      ogType="article"
      structuredData={{
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
      }}
    />
  );
}
