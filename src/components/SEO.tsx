import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - AI-Powered Business Solutions & Digital Transformation',
  description = 'Transform your business with cutting-edge AI, cybersecurity, and digital transformation solutions. Zion Tech Group delivers innovative technology solutions that drive growth and innovation.',
  keywords = 'AI solutions, cybersecurity, digital transformation, cloud services, DevOps, machine learning, business automation, IT consulting, technology innovation',
  image = '/images/zion-tech-group-og.jpg',
  url,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = ['AI', 'Cybersecurity', 'Digital Transformation', 'Cloud Computing', 'DevOps']
}) => {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;

  // Generate structured data for better SEO
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/images/logo.svg',
      description: 'Leading provider of AI-powered business solutions and digital transformation services',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressLocality: 'San Francisco',
        addressRegion: 'CA'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        email: 'info@ziontechgroup.com'
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://facebook.com/ziontechgroup'
      ],
      offers: {
        '@type': 'Offer',
        category: 'Technology Services',
        description: 'AI solutions, cybersecurity, and digital transformation services'
      }
    };

    return JSON.stringify(baseData);
  };

  // Generate article structured data if it's a blog post
  const generateArticleStructuredData = () => {
    if (type === 'article' && publishedTime) {
      const articleData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        author: {
          '@type': 'Organization',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ziontechgroup.com/images/logo.svg'
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl
        }
      };

      return JSON.stringify(articleData);
    }
    return null;
  };

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ziontechgroup.com'
      }
    ];

    pathSegments.forEach((segment, index) => {
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      const item = `https://ziontechgroup.com/${pathSegments.slice(0, index + 1).join('/')}`;
      
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: index + 2,
        name,
        item
      });
    });

    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    };

    return JSON.stringify(breadcrumbData);
  };

  useEffect(() => {
    // Update page title for better UX
    document.title = title;
    
    // Add meta description to head if not present
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Add hreflang for internationalization
    const hreflangLinks = [
      { lang: 'en', href: currentUrl },
      { lang: 'en-US', href: currentUrl },
      { lang: 'x-default', href: currentUrl }
    ];

    hreflangLinks.forEach(({ lang, href }) => {
      let hreflangLink = document.querySelector(`link[hreflang="${lang}"]`);
      if (!hreflangLink) {
        hreflangLink = document.createElement('link');
        hreflangLink.setAttribute('hreflang', lang);
        document.head.appendChild(hreflangLink);
      }
      hreflangLink.setAttribute('href', href);
    });
  }, [title, description, keywords, currentUrl]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {generateStructuredData()}
      </script>
      
      {generateArticleStructuredData() && (
        <script type="application/ld+json">
          {generateArticleStructuredData()}
        </script>
      )}
      
      <script type="application/ld+json">
        {generateBreadcrumbStructuredData()}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="generator" content="React + Vite" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Mobile Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* PWA Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};