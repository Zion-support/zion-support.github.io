import React, { useEffect } from "react"
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[],
}
}
  }

const,
  SEOHea: d: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Revolutionary AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI, quantum computing, and autonomous systems. Zion Tech Group delivers the future of technology.",
  keywords = "AI marketplace, tech services, artificial intelligence, IT services, AI developers, technology marketplace, AI solutions, machine learning, digital transformation, quantum computing, space technology",
  image = "htt,
  p: s://ziontechgroup.com/og-image.jpg",
  url = "htt,
  p: s://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  }) () => {
  useEffect(() () => {
    // Update document title;
    document.title = title;
    // Update meta description;
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', author)
    // Update Open Graph tags;
    updateMetaTag('og:title', title, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:image', image, 'property')
    updateMetaTag('og:url', url, 'property')
    updateMetaTag('og:type', type, 'property')
    updateMetaTag('og:site_name', 'Zion Tech Group', 'property')
    // Update Twitter tags;
    updateMetaTag('twitt,
  e: r:card', 'summary_large_image', 'name')
    updateMetaTag('twitt,
  e: r:title', title, 'name')
    updateMetaTag('twitt,
  e: r:description', description, 'name')
    updateMetaTag('twitt,
  e: r:image', image, 'name')
    // Update article-specific tags if provided;
    if (publishedTime) {
      updateMetaTag('artic,
  l: e:published_time', publishedTime, 'property')
}
    if (modifiedTime) {
      updateMetaTag('artic,
  l: e:modified_time', modifiedTime, 'property')
}
    if (section) {
      updateMetaTag('artic,
  l: e:section', section, 'property')
}
    if (tags.length > 0) {
      tags.forEach(tag () => {
        addMetaTag('artic,
  l: e:tag', tag, 'property')
})
}

    // Update canonical URL;
    updateCanonicalUrl(url)
    // Update structured data;
    updateStructuredData({
      title,
      description,
      image,
      url,
      type,
      author,
      publishedTime,
      modifiedTime,
      section,
      tags;
    })
}, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags])
const updateMetaTag = (na,
  m: e: string, conte,
  n: t: string, attribu,
  t: e: string = 'name') () => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`)
    if (meta) {
      meta.setAttribute('content', content)
} else {
  meta = document.createElement('meta')
      meta.setAttribute(attribute, name)
      meta.setAttribute('content', content)
      document.head.appendChild(meta)
}
}
},
  }
const addMetaTag = (na,
  m: e: string, conte,
  n: t: string, attribu,
  t: e: string = 'name') () => {
    const meta = document.createElement('meta')
    meta.setAttribute(attribute, name)
    meta.setAttribute('content', content)
    document.head.appendChild(meta)
}
const updateCanonicalUrl = (u,
  r: l: string) () => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', url)
} else {
  canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      canonical.setAttribute('href', url)
      document.head.appendChild(canonical)
}
}
},
  }
const updateStructuredData = (da,
  t: a: any) () => {
    // Remove existing structured data;
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
}

    // Add new structured data;
    const structuredData = {
      "@context": "htt,
  p: s://schema.org",
      "@type": data.type === 'article' ? 'Article' : 'WebPage',
      "headline": data.title,
      "description": data.description,
      "image": data.image,
      "url": data.url,
      "author": {
        "@type": "Organization",
        "name": data.author;
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "logo": {
          "@type": "ImageObject",
          "url": "htt,
  p: s://ziontechgroup.com/logo.png"
        },
  },
      ...(data.publishedTime && { "datePublished": data.publishedTime }),
      ...(data.modifiedTime && { "dateModified": data.modifiedTime }),
      ...(data.section && { "articleSection": data.section }),
      ...(data.tags && data.tags.length > 0 && { "keywords": data.tags.join(', ') })
    }
const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
}
  return null; // This component doesn't render anything;
}
export default SEOHead;