'use client';
import React from 'react';
import Head from 'next/head';
import { Metadata } from 'next';

<<<<<<< HEAD
import React, { useEffect } from 'react'
import Head from 'next/head'

interface SEOOptimizerProps {
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }
  ]

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = keywords.join(', ')
      document.head.appendChild(meta)
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    } else {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      canonicalLink.href = canonicalUrl
      document.head.appendChild(canonicalLink)
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`)
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

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`)
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

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]')
    if (!viewport) {
      viewport = document.createElement('meta')
      viewport.setAttribute('name', 'viewport')
      viewport.setAttribute('content', 'width=device-width, initial-scale=1')
      document.head.appendChild(viewport)
    }

    // Add charset if not present
    let charset = document.querySelector('meta[charset]')
    if (!charset) {
      charset = document.createElement('meta')
      charset.setAttribute('charset', 'UTF-8')
      document.head.insertBefore(charset, document.head.firstChild)
    }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])
=======
export const metadata: Metadata = {
  title: 'SEOOptimizer - Zion Tech Group',
  description: 'Comprehensive seooptimizer solutions for modern businesses.',
  keywords: 'seooptimizer, AI solutions, technology services',
  openGraph: {
    title: 'SEOOptimizer - Zion Tech Group',
    description: 'Comprehensive seooptimizer solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/components',
  },
};
>>>>>>> origin/main

const SEOOptimizer: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            SEOOptimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive seooptimizer solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/main
  );
};

export default SEOOptimizer;