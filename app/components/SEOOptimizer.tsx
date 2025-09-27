'use client'

import { useEffect, useMemo } from 'react'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string | string[]
  canonicalUrl?: string
  url?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: Record<string, unknown>
  noindex?: boolean
  nofollow?: boolean
}

export default function SEOOptimizer({
  title = 'Zion Tech Group - Advanced AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
  keywords = ['AI', 'artificial intelligence', 'cloud services', 'cybersecurity', 'technology solutions', 'enterprise software', 'digital transformation'],
  canonicalUrl,
  url,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false
}: SEOOptimizerProps) {
  // Memoize SEO data to prevent unnecessary re-renders
  const seoData = useMemo(() => ({
    title: title.trim(),
    description: description.trim(),
    keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
    canonicalUrl: canonicalUrl?.trim(),
    ogImage: ogImage?.trim(),
    ogType: ogType?.trim(),
    twitterCard: twitterCard?.trim(),
  }), [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Batch DOM updates for better performance
    const updates: (() => void)[] = []

    // Update document title
    if (seoData.title) {
      updates.push(() => {
        document.title = seoData.title
      })
    }

    // Update meta description
    updates.push(() => {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement
      if (metaDescription) {
        metaDescription.content = seoData.description
      } else {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        metaDescription.content = seoData.description
        document.head.appendChild(metaDescription)
      }
    })

    // Update meta keywords
    updates.push(() => {
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement
      if (metaKeywords) {
        metaKeywords.content = seoData.keywords
      } else {
        metaKeywords = document.createElement('meta')
        metaKeywords.name = 'keywords'
        metaKeywords.content = seoData.keywords
        document.head.appendChild(metaKeywords)
      }
    })

    // Update canonical URL
    if (seoData.canonicalUrl) {
      updates.push(() => {
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
        if (canonical) {
          canonical.href = seoData.canonicalUrl || ''
        } else {
          canonical = document.createElement('link')
          canonical.rel = 'canonical'
          canonical.href = seoData.canonicalUrl || ''
          document.head.appendChild(canonical)
        }
      })
    }

    // Update robots meta
    updates.push(() => {
      let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement
      const robotsContent = [
        noindex ? 'noindex' : 'index',
        nofollow ? 'nofollow' : 'follow',
        'max-snippet:-1',
        'max-image-preview:large',
        'max-video-preview:-1'
      ].join(', ')

      if (robots) {
        robots.content = robotsContent
      } else {
        robots = document.createElement('meta')
        robots.name = 'robots'
        robots.content = robotsContent
        document.head.appendChild(robots)
      }
    })

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:image', content: seoData.ogImage },
      { property: 'og:type', content: seoData.ogType },
      { property: 'og:url', content: seoData.canonicalUrl || url || window.location.href },
      { property: 'og:site_name', content: 'Zion Tech Group' },
    ]

    ogTags.forEach(({ property, content }) => {
      if (content) {
        updates.push(() => {
          let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
          if (meta) {
            meta.content = content
          } else {
            meta = document.createElement('meta')
            meta.setAttribute('property', property)
            meta.content = content
            document.head.appendChild(meta)
          }
        })
      }
    })

    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: seoData.twitterCard },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description },
      { name: 'twitter:image', content: seoData.ogImage },
    ]

    twitterTags.forEach(({ name, content }) => {
      if (content) {
        updates.push(() => {
          let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
          if (meta) {
            meta.content = content
          } else {
            meta = document.createElement('meta')
            meta.name = name
            meta.content = content
            document.head.appendChild(meta)
          }
        })
      }
    })

    // Add structured data
    if (structuredData) {
      updates.push(() => {
        // Remove existing structured data
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
        existingScripts.forEach(script => script.remove())

        // Add new structured data
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(structuredData)
        document.head.appendChild(script)
      })
    }

    // Execute all updates
    updates.forEach(update => update())

  }, [seoData, structuredData, noindex, nofollow, url])

  return null
}