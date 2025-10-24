import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOEnhancerProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Leading provider of AI-powered solutions, 5G technology, and innovative software development services.',
  keywords = 'AI, Artificial Intelligence, 5G, Technology, Software Development, Machine Learning',
  canonicalUrl
}) => {
  useEffect(() => {
    // Update document title
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

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = keywords
      document.head.appendChild(meta)
    }

    // Update canonical URL
    if (canonicalUrl) {
      const existingCanonical = document.querySelector('link[rel="canonical"]')
      if (existingCanonical) {
        existingCanonical.setAttribute('href', canonicalUrl)
      } else {
        const link = document.createElement('link')
        link.rel = 'canonical'
        link.href = canonicalUrl
        document.head.appendChild(link)
      }
    }
  }, [title, description, keywords, canonicalUrl])

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  )
}

export default SEOEnhancer