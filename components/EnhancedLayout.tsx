import Head from "next/head";
import React, { ReactNode } from "react";

interface EnhancedLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  showPerformanceMetrics?: boolean;
  showSEOAnalysis?: boolean;
}

export const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,
  title = "Zion Tech Group - Leading Technology Solutions Provider",
  description = "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.",
  keywords = "AI development, cloud architecture, digital transformation, technology solutions, machine learning, software development",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  canonical,
  noindex = false,
  showPerformanceMetrics = false,
  showSEOAnalysis = false
}) => {
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || "https://ziontechgroup.com";

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional SEO Tags */}
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": description,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "contact@ziontechgroup.com"
              },
              "sameAs": [
                "https://linkedin.com/company/zion-tech-group",
                "https://twitter.com/ziontechgroup",
                "https://github.com/zion-tech-group"
              ]
            })
          }}
        />
        
        {/* Performance Monitoring */}
        {showPerformanceMetrics && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Performance monitoring script
                window.addEventListener('load', function() {
                  if ('performance' in window) {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart);
                    }
                  }
                });
              `
            }}
          />
        )}
        
        {/* SEO Analysis */}
        {showSEOAnalysis && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // SEO analysis script
                document.addEventListener('DOMContentLoaded', function() {
                  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
                  const images = document.querySelectorAll('img');
                  const links = document.querySelectorAll('a');
                  
                  console.log('SEO Analysis:', {
                    headings: headings.length,
                    images: images.length,
                    links: links.length,
                    hasH1: document.querySelector('h1') !== null
                  });
                });
              `
            }}
          />
        )}
      </Head>
      
      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
      </div>
    </>
  );
};

export default EnhancedLayout;