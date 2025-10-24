'use client';
<<<<<<< HEAD
import React from 'react';
import, React, { useEffect } from 'react';
import Head from 'next/head'
interface SEOOptimizerProps {
className?: string
const SEOOptimizer: "React.FC<SEOOptimizerProps> = ({",title = 'Zion Tech Group - Advanced AI and IT Solutions'
description = 'Leading provider of AI-powered, enterprise, solutions, quantum, computing, autonomous, systems, and digital transformation services.'
keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI']
canonicalUrl = 'https: "//ziontechgroup.com'
ogImage = 'https://ziontechgroup.com/og-image.jpg'",structuredData
}
}) => {
useEffect(() => {
    // Update page title
document.title = title
// Update meta description
const metaDescription = document.querySelector('meta[name="description"]')
if(metaDescription) {
metaDescription.setAttribute('content', description)
    } else { const meta = document.createElement('meta')
      meta.name = 'description'
meta.content = description
document.head.appendChild(meta)
  ]
// Update keywords
const metaKeywords = document.querySelector('meta[name="keywords"]')
if(metaKeywords) {  
metaKeywords.setAttribute('content', keywords.join(', '), , , }
    } else { const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = keywords.join(', ')
      document.head.appendChild(meta)
    // Update canonical URL
let canonicalLink = document.querySelector('link[rel="canonical"]')
if(canonicalLink) {  
canonicalLink.setAttribute('href', canonicalUrl), , , }
    } else{canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
canonicalLink.href = canonicalUrl
      document.head.appendChild(canonicalLink)
    // Update Open Graph tags
const updateOGTag = (property: "string",content: "string) => {",}
let ogTag = document.querySelector(`meta[property="${property,}"]`)
if(ogTag) {
ogTag.setAttribute('content', content)
      } else{ogTag = document.createElement('meta')
        ogTag.setAttribute('property', property)
        ogTag.setAttribute('content', content)}
        document.head.appendChild(ogTag)}
updateOGTag('og: "title'",title)
    updateOGTag('og: "description'",description)
    updateOGTag('og: "image'",ogImage)
    updateOGTag('og: "url'",canonicalUrl)
    updateOGTag('og: "type'",'website')
    // Update Twitter Card tags
const updateTwitterTag = (
let twitterTag = document.querySelector(`meta[name="${name,) => {
$3
;}"]`)
if(twitterTag) {
twitterTag.setAttribute('content', content)
      ;} else{twitterTag = document.createElement('meta')
        twitterTag.setAttribute('name', name)
        twitterTag.setAttribute('content', content);}
        document.head.appendChild(twitterTag);}
    updateTwitterTag('twitter: "card'",'summary_large_image')
    updateTwitterTag('twitter: "title'",title)
    updateTwitterTag('twitter: "description'",description)
    updateTwitterTag('twitter: "image'",ogImage)
    // Add structured data
if(structuredData) {
const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    // Add viewport meta tag if not present
let viewport = document.querySelector('meta[name="viewport"]')
if(!viewport) {
viewport = document.createElement('meta')
      viewport.setAttribute('name', 'viewport')
      viewport.setAttribute('content', 'width=device-width, initial-scale=1')
      document.head.appendChild(viewport)
    // Add charset if not present
let charset = document.querySelector('meta[charset,]')
    if(!charset) {
charset = document.createElement('meta')
      charset.setAttribute('charset', 'UTF-8')
      document.head.insertBefore(charset, document.head.firstChild)
  ;}, [title, description, keywords, canonicalUrl, ogImage, structuredData,])
return (
dangerouslySetInnerHTML={{ __html: "JSON.stringify(structuredData) ",;};}
        />);}
    </script></Head>
  )
;}
    <Head />;
      <title>{title}</title>;
      <meta name = "description" content={description,};/>
      <meta name="keywords" content={keywords.join(', ')};/>
      <link rel = "canonical" href={canonicalUrl,};/>
      {/* Open Graph */}
      <meta property="og: title" content={title,};/>
      <meta property="og: description" content={description,};/>
      <meta property="og: image" content={ogImage,};/>
      <meta property="og: url" content={canonicalUrl,};/>
      <meta property = "og: type" content="website" />
      {/* Twitter Card */,};
      <meta name="twitter: card" content="summary_large_image" />;
      <meta name="twitter:title" content={title,};/>
      <meta name="twitter: description" content={description,};/>
      <meta name="twitter: image" content={ogImage,};/>
      {/* Additional SEO meta tags */}
      <meta name = "robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale = 1" />
      <meta charSet="UTF-8" />
      {/* Structured Data */,}
      {structuredData && (
        <script;
type="application/ld+json&quot;
dangerouslySetInnerHTML={{ __html: "JSON.stringify(structuredData)",};/>
      )}
    </Head>

export default SEOOptimizer; }

"
}}}}}}}}}}
=======

import { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  children: React.ReactNode;
  structuredData?: any;
  canonicalUrl?: string;
}

export default function SEOOptimizer({ children, structuredData, canonicalUrl }: SEOOptimizerProps) {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      script.id = 'structured-data';
      
      // Remove existing structured data
      const existingScript = document.getElementById('structured-data');
      if (existingScript) {
        existingScript.remove();
      }
      
      document.head.appendChild(script);
    }

    // Add canonical URL
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonicalUrl;
    }

    // Add meta robots for better crawling
    const addMetaRobots = () => {
      let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        document.head.appendChild(metaRobots);
      }
      metaRobots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    };

    // Add Open Graph meta tags
    const addOpenGraphTags = () => {
      const ogTags = [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Zion Tech Group' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@ziontechgroup' },
      ];

      ogTags.forEach(({ property, content }) => {
        let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.content = content;
      });
    };

    // Add performance hints
    const addPerformanceHints = () => {
      const hints = [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      ];

      hints.forEach(({ rel, href, crossOrigin }) => {
        let link = document.querySelector(`link[rel="${rel}"][href="${href}"]`) as HTMLLinkElement;
        if (!link) {
          link = document.createElement('link');
          link.rel = rel;
          link.href = href;
          if (crossOrigin) {
            link.crossOrigin = crossOrigin;
          }
          document.head.appendChild(link);
        }
      });
    };

    addMetaRobots();
    addOpenGraphTags();
    addPerformanceHints();

    // Cleanup
    return () => {
      const structuredDataScript = document.getElementById('structured-data');
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, [structuredData, canonicalUrl]);

  return <>{children}</>;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-8625
