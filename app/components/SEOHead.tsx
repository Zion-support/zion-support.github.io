import React from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noindex?: boolean
  nofollow?: boolean
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false
}: SEOHeadProps) {
  const robots = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ')

  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0f172a" />
    </>
  )
}