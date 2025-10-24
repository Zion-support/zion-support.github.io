'use client';

import React, { useEffect } from 'react'
import Head from 'next/head'

<<<<<<< HEAD
interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  structuredData?: object
  className?: string
=======
interface SEOOptimizerProps {;
  className?: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
}

const SEOOptimizer: React.FC<SEOOptimizerProps>= ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
<<<<<<< HEAD
  structuredData,
  className
}) => {
  useEffect(() => {
    // Update page title
    document.title = title

    // Update meta description
=======
  structuredData;
}) => {
  useEffect(() => {
    // Update page title;
    document.title = title;
    // Update meta description;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description;
      document.head.appendChild(meta)
    }

<<<<<<< HEAD
    // Update keywords
=======
    // Update keywords;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = keywords.join(', ')
      document.head.appendChild(meta)
    }

<<<<<<< HEAD
    // Update canonical URL
=======
    // Update canonical URL;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    } else {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink)
    }

<<<<<<< HEAD
    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`)
=======
    // Update Open Graph tags;
    const updateOGTag = (property: string, content: string) => {let ogTag = document.querySelector(`meta[property="${property}"]`)
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      if (ogTag) {
        ogTag.setAttribute('content', content)
      } else {
        ogTag = document.createElement('meta')
        ogTag.setAttribute('property', property)
        ogTag.setAttribute('content', content)
        document.head.appendChild(ogTag)
      }
    }

    updateOGTag('og:title', title)
    updateOGTag('og:description', description)
    updateOGTag('og:image', ogImage)
    updateOGTag('og:url', canonicalUrl)
    updateOGTag('og:type', 'website')

<<<<<<< HEAD
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`)
=======
    // Update Twitter Card tags;
    const updateTwitterTag = (name: string, content: string) =</ {let twitterTag = document.querySelector(`meta[name="${name}"]`)
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
      if (twitterTag) {
        twitterTag.setAttribute('content', content)
      } else {
        twitterTag = document.createElement('meta')
        twitterTag.setAttribute('name', name)
        twitterTag.setAttribute('content', content)
        document.head.appendChild(twitterTag)
      }
    }

    updateTwitterTag('twitter:card', 'summary_large_image')
    updateTwitterTag('twitter:title', title)
    updateTwitterTag('twitter:description', description)
    updateTwitterTag('twitter:image', ogImage)

    // Add structured data;
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

<<<<<<< HEAD
    // Add viewport meta tag if not present
=======
    // Add viewport meta tag if not present;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    let viewport = document.querySelector('meta[name="viewport"]')
    if (!viewport) {
      viewport = document.createElement('meta')
      viewport.setAttribute('name', 'viewport')
      viewport.setAttribute('content', 'width=device-width, initial-scale=1')
      document.head.appendChild(viewport)
    }

    // Add charset if not present;
    let charset = document.querySelector('meta[charset]')
    if (!charset) {
      charset = document.createElement('meta')
      charset.setAttribute('charset', 'UTF-8')
      document.head.insertBefore(charset, document.head.firstChild)
    }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])

  return (
<<<<<<< HEAD
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}

export default SEOOptimizer
=======
    <Head />
      <title>{title}</title />
      <meta name="description" content={description} / />
      <meta name="keywords" content={keywords.join(', ')} / />
      <link rel="canonical" href={canonicalUrl} / />

export default SEOOptimizerPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
