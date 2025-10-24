'use client';
import React from 'react';
import React, { useEffect } from 'react';
import Head from 'next/head';
interface SEOOptimizerProps {
<<<<<<< HEAD

  className?: string;
}
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({,

  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.'
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI']
  canonicalUrl = 'https: //ziontechgroup.com',
  ogImage = 'https: //ziontechgroup.com/og-image.jpg',
  structuredData
=======
  className?: string
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({,
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.'
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI']
  canonicalUrl = 'https://ziontechgroup.com'
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
}) => {
  useEffect(() => {
    // Update page title
    document.title = title
<<<<<<< HEAD
    // Update meta description;

const metaDescription = document.querySelector('meta[name=&quot;description&quot;]')
    if (metaDescription) {
=======
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if(metaDescription) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta),
  ]
<<<<<<< HEAD
    // Update keywords;

const metaKeywords = document.querySelector('meta[name=&quot;keywords&quot;]')
    if (metaKeywords) {
=======
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if(metaKeywords) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
      metaKeywords.setAttribute('content', keywords.join(', ');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if(canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical'
<<<<<<< HEAD
      canonicalLink.href = canonicalUrl
      document.head.appendChild(canonicalLink)

    }
    // Update Open Graph tags;

const updateOGTag = (property: string, content: string) => {,

      let ogTag = document.querySelector(`meta[property=&quot;${property}&quot;]`)
      if (ogTag) {
=======
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);
    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`)
      if(ogTag) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag)}
<<<<<<< HEAD
    updateOGTag('og:title', title)
    updateOGTag('og:description', description)
    updateOGTag('og:image', ogImage)
    updateOGTag('og:url', canonicalUrl)
    updateOGTag('og:type', 'website')
    // Update Twitter Card tags;

const updateTwitterTag = (name: string, content: string) => {,
      let twitterTag = document.querySelector(`meta[name=&quot;${name}&quot;]`)
      if (twitterTag) {
=======
    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:image', ogImage);
    updateOGTag('og:url', canonicalUrl);
    updateOGTag('og:type', 'website');
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`)
      if(twitterTag) {
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag)}
    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);
    // Add structured data
    if(structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]')
    if(!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1');
      document.head.appendChild(viewport);
    // Add charset if not present
    let charset = document.querySelector('meta[charset]');
    if(!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])
  return (
<<<<<<< HEAD
    <Head> </Head><title>{title}</title>
      <meta name=&quot;description&quot; content={description} /> </meta><meta name=&quot;keywords&quot; content={keywords.join(', ')} /> </meta><link rel=&quot;canonical&quot; href={canonicalUrl} />{/* Open Graph */}
      </link><meta property=&quot;og:title&quot; content={title} /> </meta><meta property=&quot;og:description&quot; content={description} /> </meta><meta property=&quot;og:image&quot; content={ogImage} /> </meta><meta property=&quot;og:url&quot; content={canonicalUrl} /> </meta><meta property=&quot;og: type&quot; content=&quot;website&quot; />,
      {/* Twitter Card */}
      <meta name=&quot;twitter: card&quot; content=&quot;summary_large_image&quot; />,
      <meta name=&quot;twitter:title&quot; content={title} /> </meta><meta name=&quot;twitter:description&quot; content={description} /> </meta><meta name=&quot;twitter:image&quot; content={ogImage} />{/* Additional SEO meta tags */}
      </meta><meta name=&quot;robots&quot; content=&quot;index, follow&quot; /> </meta><meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; /> </meta><meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /> </meta><meta charSet=&quot;UTF-8&quot; />{/* Structured Data */}
      {structuredData && (
        </meta><script
          type=&quot;application/ld+json&quot

export default SEOOptimizer

=======
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />)}
    </script></Head>
  )
}
=======
    <Head />
      <title>{title}</title>
      <meta name="description" content={description};/>
      <meta name="keywords" content={keywords.join(', ')};/>
      <link rel="canonical" href={canonicalUrl};/>
      {/* Open Graph */}
      <meta property="og:title" content={title};/>
      <meta property="og:description" content={description};/>
      <meta property="og:image" content={ogImage};/>
      <meta property="og:url" content={canonicalUrl};/>
      <meta property="og: type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter: card" content="summary_large_image" />
      <meta name="twitter:title" content={title};/>
      <meta name="twitter:description" content={description};/>
      <meta name="twitter:image" content={ogImage};/>
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json&quot
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData)};/>
      )}
    </Head>
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a

=======

<<<<<<< HEAD
export default SEOOptimizerPage

=======
export default SEOOptimizer }
>>>>>>> cursor/fix-errors-and-merge-to-main-da11
"
}}}}}}}}}}
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
