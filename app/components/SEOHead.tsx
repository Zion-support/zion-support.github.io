'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  noindex?: boolean
  nofollow?: boolean
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of advanced AI and IT solutions. Transform your business with cutting-edge technology and expert consulting services.',
  keywords = 'AI solutions, IT services, technology consulting, artificial intelligence, business automation, digital transformation',
  canonical,
  ogTitle,
  ogDescription,
  ogImage = '/og-image.jpg',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  noindex = false,
  nofollow = false
}) => {
  const metaRobots = []
  if (noindex) metaRobots.push('noindex')
  if (nofollow) metaRobots.push('nofollow')
  if (metaRobots.length === 0) metaRobots.push('index', 'follow')

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={metaRobots.join(', ')} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl || (typeof window !== 'undefined' ? window.location.href : '')} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  )
}

export default SEOHead