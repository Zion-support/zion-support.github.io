import React, { useEffect } from 'react'
interface MetaManagerProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
}

const MetaManagerPage: React.FC<MetaManagerProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = description
        document.head.appendChild(meta)
      }
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'keywords'
        meta.content = keywords
        document.head.appendChild(meta)
      }
    }

    // Update canonical URL
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]')
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical)
      } else {
        const link = document.createElement('link')
        link.rel = 'canonical'
        link.href = canonical
        document.head.appendChild(link)
      }
    }

    // Update Open Graph meta tags
    if (ogTitle) {
      const ogTitleMeta = document.querySelector('meta[property="og:title"]')
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute('content', ogTitle)
      } else {
        const meta = document.createElement('meta')
        meta.setAttribute('property', 'og:title')
        meta.content = ogTitle
        document.head.appendChild(meta)
      }
    }

    if (ogDescription) {
      const ogDescMeta = document.querySelector('meta[property="og:description"]')
      if (ogDescMeta) {
        ogDescMeta.setAttribute('content', ogDescription)
      } else {
        const meta = document.createElement('meta')
        meta.setAttribute('property', 'og:description')
        meta.content = ogDescription
        document.head.appendChild(meta)
      }
    }

    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]')
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage)
      } else {
        const meta = document.createElement('meta')
        meta.setAttribute('property', 'og:image')
        meta.content = ogImage
        document.head.appendChild(meta)
      }
    }

    // Update Twitter Card meta tags
    const twitterCardMeta = document.querySelector('meta[name="twitter:card"]')
    if (twitterCardMeta) {
      twitterCardMeta.setAttribute('content', twitterCard)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'twitter:card'
      meta.content = twitterCard
      document.head.appendChild(meta)
    }

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, twitterCard])
  
  return null
}

export default MetaManager