#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// SEO optimization script
async function optimizeSEO() {
  console.log('🔍 Starting SEO optimizations...');

  // 1. Optimize meta tags
  await optimizeMetaTags();
  
  // 2. Add structured data
  await addStructuredData();
  
  // 3. Optimize sitemap
  await optimizeSitemap();
  
  // 4. Add robots.txt
  await addRobotsTxt();
  
  console.log('✅ SEO optimizations completed!');
}

async function optimizeMetaTags() {
  console.log('📝 Optimizing meta tags...');
  
  const layoutPath = 'app/layout.tsx';
  let content = fs.readFileSync(layoutPath, 'utf8');
  
  // Enhanced meta tags
  const enhancedMetaTags = `
        {/* Enhanced SEO meta tags */}
        <meta name="publisher" content="Zion Tech Group" />
        <meta name="copyright" content="Zion Tech Group" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US-DE" />
        <meta name="geo.placename" content="Middletown, Delaware" />
        <meta name="geo.position" content="39.8283;-75.5795" />
        <meta name="ICBM" content="39.8283, -75.5795" />
        
        {/* Enhanced Open Graph tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:updated_time" content="${new Date().toISOString()}" />
        
        {/* Enhanced Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        <meta name="twitter:domain" content="ziontechgroup.com" />
        
        {/* Additional structured data */}
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
          "foundingDate": "2020",
          "numberOfEmployees": "50-100",
          "industry": "Technology",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "Customer Service",
            "areaServed": "US",
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ]
        }
        </script>
  `;
  
  // Insert enhanced meta tags
  content = content.replace(
    /{.*Enhanced SEO meta tags.*}/s,
    enhancedMetaTags
  );
  
  fs.writeFileSync(layoutPath, content);
  console.log('✅ Meta tags optimized');
}

async function addStructuredData() {
  console.log('📊 Adding structured data...');
  
  const structuredData = `'use client';
import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    // Add FAQ structured data
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What AI services does Zion Tech Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zion Tech Group offers comprehensive AI solutions including AI marketing, automation, healthcare, fintech, content generation, data analytics, cybersecurity, and more."
          }
        },
        {
          "@type": "Question",
          "name": "How can AI transform my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI can automate processes, improve decision-making, enhance customer experiences, optimize operations, and drive innovation across all business functions."
          }
        },
        {
          "@type": "Question",
          "name": "What is the pricing for AI services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI services start at $1,500/month for basic solutions and scale based on complexity and requirements. Contact us for a custom quote."
          }
        }
      ]
    };

    // Add service structured data
    const serviceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Solutions",
      "description": "Comprehensive AI solutions for enterprise businesses",
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group"
      },
      "areaServed": "United States",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Marketing Automation",
              "description": "AI-powered marketing solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Data Analytics",
              "description": "Advanced data analysis and insights"
            }
          }
        ]
      }
    };

    // Inject structured data
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.textContent = JSON.stringify(faqData);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.textContent = JSON.stringify(serviceData);
    document.head.appendChild(script2);
  }, []);

  return null;
}`;
  
  fs.writeFileSync('app/components/StructuredData.tsx', structuredData);
  console.log('✅ Structured data added');
}

async function optimizeSitemap() {
  console.log('🗺️ Optimizing sitemap...');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://ziontechgroup.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/ai-services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ziontechgroup.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
  
  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('✅ Sitemap optimized');
}

async function addRobotsTxt() {
  console.log('🤖 Adding robots.txt...');
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /ai-services/
Allow: /about/
Allow: /contact/
Allow: /pricing/`;
  
  fs.writeFileSync('public/robots.txt', robotsTxt);
  console.log('✅ Robots.txt added');
}

// Run SEO optimizations
optimizeSEO().catch(console.error);