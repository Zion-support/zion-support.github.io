:src_backup/components/SEO.tsx
import { useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom;



  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}: SEOProps) => {
  const fullTitle = `${title} | Zion Tech Group`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';
  const fullImage = image || 'https://ziontechgroup.com/og-image.jpg';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#000000" />
    </Head>

  url?: string;
  image?: string;
  type?: string;
}
export function SEO({
  title = "Zion Tech Group - AI & Technology Solutions","
  description = "Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation and enterprise-grade reliability.","
  keywords = "AI, artificial intelligence, technology solutions, digital transformation, enterprise software, cloud computing, cybersecurity, automation","
  url = "https://ziontechgroup.com","
  image = "https://ziontechgroup.com/og-image.jpg","
  type = "website","
  className
}:,  SEOProps) {
  const structuredData = {
    "@context": "https://schema.org","
    "@type": "Organization","
    "name": "Zion Tech Group","
    "description": description,"
    "url": url,"
    "logo": "https://ziontechgroup.com/logo.png","
    "image": image,"
    "contactPoint": {"
      "@type": "ContactPoint","
      "telephone": "+1-302-464-0950","
      "contactType": "customer service","
      "email": "kleber@ziontechgroup.com""
    },
    "address": {"
      "@type": "PostalAddress","
      "streetAddress": "364 E Main St STE 1008","
      "addressLocality": "Middletown","
      "addressRegion": "DE","
      "postalCode": "19709","
      "addressCountry": "US""
    },
    "sameAs": [",
      "https://linkedin.com/company/zion-tech-group","
      "https://twitter.com/ziontechgroup","
      "https://facebook.com/ziontechgroup""
    ],
    "offers": {"
      "@type": "AggregateOffer","
      "offerCount": "6",",
      "offers": ["
        {
          "@type": "Offer","
          "name": "AI Services","
          "description": "Custom AI solutions powered by machine learning and deep learning technologies""
        },
        {
          "@type": "Offer","
          "name": "IT Services","
          "description": "Comprehensive IT infrastructure and digital transformation solutions""
        },
        {
          "@type": "Offer","
          "name": "Cybersecurity","
          "description": "Advanced security solutions to protect your digital assets""
        }
      ]

const SEO: React.FC<SEOProps> = ({

}) => {
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';


:src_backup/components/SEO.tsx
  type?: 'website' | 'article' | 'product' | 'service';
  type?: 'website' | 'article' | 'product' | 'service';
  type?: 'website | article' | 'product | service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  noindex?: boolean;
  canonical?: string;
}

export function SEO({
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI, quantum computing, cybersecurity, and digital transformation services. Expert technology solutions for the modern enterprise.',
  keywords = 'AI, artificial intelligence, quantum computing, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group, machine learning, neural networks, autonomous systems',
  image = '/images/zion-tech-group-og.jpg',
  url,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  noindex = false,
  canonical
}: SEOProps) {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://facebook.com/ziontechgroup"
    ],
    "foundingDate": "2015",
    "numberOfEmployees": "100-500",
    "industry": "Technology",
    "serviceType": [
      "AI Solutions",
      "Cybersecurity",
      "Cloud Computing",
      "Digital Transformation",
      "Quantum Computing",
      "Machine Learning"
    ]
export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions Provider', description = 'Leading technology solutions provider offering AI services, IT services, and micro SaaS solutions. Enterprise-grade infrastructure and development services.',
  keywords = 'technology solutions, AI services, IT services, micro SaaS, enterprise software, cloud services, cybersecurity', image = 'https: //ziontechgroup.com/og-image.jpg',
  url = 'https: //ziontechgroup.com', type = 'website'
}) => {
  const structuredData = {
    '@context': 'https://schema.org', '@type': 'Organization',
    'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com',
    'logo': 'https://ziontechgroup.com/logo.svg', 'description': description,
    'sameAs': [
      'https://linkedin.com/compunknown/zion-tech-group', 'https: //twitter.com/ziontechgroup'
    ], 'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+1-555-ZION-TECH', 'contactType': 'customer service'
    }
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0


:src_backup/components/SEO.tsx
origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4210


:src_backup/components/SEO.tsx
      <meta property="og: type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og: type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og: type content={type} />
      <meta property=og:url" content={url} />
      <meta property="og:title content={title} />
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0


:src_backup/components/SEO.tsx
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author content={author} />
      <meta name=robots" content={noindex ? 'noindex, nofollow : index, follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
  title = 'Zion Tech Group - Advanced AI Solutions', description = 'Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.',
  keywords = 'AI, artificial intelligence, cloud computing, digital transformation, automation', image = '/og-image.jpg',
  url = 'https: //ziontechgroup.com', type = 'website'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og: title" content={title} />
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />


:src_backup/components/SEO.tsx
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      {combinedStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* Performance and Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Your Street Address" />
      <meta name="business:contact_data:locality" content="Your City" />
      <meta name="business:contact_data:region" content="Your State" />
      <meta name="business:contact_data:postal_code" content="Your ZIP Code" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-XXX-XXX-XXXX" />
      
      {/* Custom CSS for critical rendering */}
      <style>{`
        /* Critical CSS for above-the-fold content */
        .hero-section {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .loading .hero-section {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>
    </Helmet>
  );
}
origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4210
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:title" content={fullTitle} />