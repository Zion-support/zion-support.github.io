<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
=======
import React, { useEffect } from 'react';
>>>>>>> origin/website-improvements-v2
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> cursor/create-and-deploy-new-content-ec50

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
<<<<<<< HEAD
  type?: string;
};

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords = 'AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation',
  image = 'https://zion.app/images/zion-tech-group-logo.png',
  url = 'https://zion.app',
  type = 'website'
}) => {
<<<<<<< HEAD
=======
  type?: 'website' | 'article' | 'profile' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

export function SEO({
  title = 'Zion Tech Group - The Future of Tech Marketplace',
  description = 'Connect with AI experts, discover innovative services, and accelerate your digital transformation with Zion Tech Group\'s comprehensive platform.',
  keywords = 'AI services, tech marketplace, digital transformation, IT consulting, cloud solutions, cybersecurity, talent placement',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = canonical || url;

  useEffect(() => {
    // Update document title for accessibility
    document.title = fullTitle;
    
    // Add structured data for better SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'website' ? 'Organization' : 'Article',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      description: description,
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
        areaServed: 'US',
        availableLanguage: 'English'
      },
      sameAs: [
        'https://facebook.com/ziontechgroup',
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://instagram.com/ziontechgroup'
      ]
    };

    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [fullTitle, description, type]);

>>>>>>> origin/website-improvements-v2
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
<<<<<<< HEAD
      <meta property="og:title" content={title} />
=======
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
>>>>>>> origin/website-improvements-v2
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
<<<<<<< HEAD
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
=======
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
>>>>>>> origin/website-improvements-v2
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
<<<<<<< HEAD
      <link rel="canonical" href={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
=======
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }
    
    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', title);
      document.head.appendChild(ogTitle);
    }
    
    // Update og:description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', description);
      document.head.appendChild(ogDescription);
    }
    
    // Update og:image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    } else {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', image);
      document.head.appendChild(ogImage);
    }
    
    // Update og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    } else {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', url);
      document.head.appendChild(ogUrl);
    }
    
    // Update og:type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    } else {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      ogType.setAttribute('content', type);
      document.head.appendChild(ogType);
    }
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
>>>>>>> cursor/create-and-deploy-new-content-ec50
};

export default SEO;
export { SEO };
=======
      <meta name="twitter:site" content="@ziontechgroup" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}
>>>>>>> origin/website-improvements-v2
