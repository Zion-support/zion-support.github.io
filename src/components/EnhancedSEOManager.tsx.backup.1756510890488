import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

interface EnhancedSEOManagerProps {
  seoData: SEOData;
  children: React.ReactNode;
}

const EnhancedSEOManager: React.FC<EnhancedSEOManagerProps> = ({ seoData, children }) => {
  useEffect(() => {
    // Update meta tags dynamically
    const updateMetaTags = () => {
      // Update title
      document.title = seoData.title;
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', seoData.description);
      
      // Update keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', seoData.keywords.join(', '));
      
      // Update Open Graph tags
      const updateOGTag = (property: string, content: string) => {
        let ogTag = document.querySelector(`meta[property="${property}"]`);
        if (!ogTag) {
          ogTag = document.createElement('meta');
          ogTag.setAttribute('property', property);
          document.head.appendChild(ogTag);
        }
        ogTag.setAttribute('content', content);
      };
      
      if (seoData.ogImage) updateOGTag('og:image', seoData.ogImage);
      if (seoData.ogType) updateOGTag('og:type', seoData.ogType);
      updateOGTag('og:title', seoData.title);
      updateOGTag('og:description', seoData.description);
      updateOGTag('og:url', seoData.canonicalUrl || window.location.href);
      
      // Update Twitter Card tags
      const updateTwitterTag = (name: string, content: string) => {
        let twitterTag = document.querySelector(`meta[name="${name}"]`);
        if (!twitterTag) {
          twitterTag = document.createElement('meta');
          twitterTag.setAttribute('name', name);
          document.head.appendChild(twitterTag);
        }
        twitterTag.setAttribute('content', content);
      };
      
      updateTwitterTag('twitter:card', 'summary_large_image');
      updateTwitterTag('twitter:title', seoData.title);
      updateTwitterTag('twitter:description', seoData.description);
      if (seoData.ogImage) updateTwitterTag('twitter:image', seoData.ogImage);
      
      // Add canonical URL
      if (seoData.canonicalUrl) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', seoData.canonicalUrl);
      }
      
      // Add structured data
      if (seoData.structuredData) {
        let script = document.querySelector('script[type="application/ld+json"]');
        if (!script) {
          script = document.createElement('script');
          script.setAttribute('type', 'application/ld+json');
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(seoData.structuredData);
      }
    };
    
    updateMetaTags();
    
    // Cleanup function
    return () => {
      // Remove dynamically added meta tags on unmount
      const dynamicTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]');
      dynamicTags.forEach(tag => tag.remove());
    };
  }, [seoData]);
  
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//ziontechgroup.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
      {children}
    </>
  );
};

export default EnhancedSEOManager;