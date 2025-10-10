import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  nofollow?: boolean
  canonical?: string
  alternate?: { hreflang: string; href: string }[]
  structuredData?: any
}

const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'AI, IT solutions, artificial intelligence, machine learning, cloud computing, cybersecurity, software development, Zion Tech Group',
  image = '/images/og-image.jpg',
  url,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical,
  alternate = [],
  structuredData
}) => {
  const location = useLocation()
  const currentUrl = url || `https://ziontechgroup.com${location.pathname}`
  const fullImageUrl = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`
  return (
    <Helmet>{/* Basic Meta Tags */}
      </Helmet><title>{title}</title>
      <meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta>{/* Open Graph Meta Tags */}
      </meta><meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta>{/* Twitter Card Meta Tags */}
      </meta><meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta> </meta><meta>{/* Additional Meta Tags */}
      {publishedTime && </meta><meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta>))}
      
      {/* Canonical URL */}
      {canonical && </meta><link rel="canonical" href={canonical} />}
      
      {/* Alternate Language Versions */}
      {alternate.map((alt, index) => (
        <link>))}
      
      {/* Structured Data */}
      {structuredData && (
        </link><script>{JSON.stringify(structuredData)}
        </script></script>
      )}
      
      {/* Default Structured Data */}
      <script>{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/images/logo.png",
          "description": "Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-012-3456",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com"
          },
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
          ]
        })}
      </script></script>
    </Helmet>
  )
}
export default EnhancedSEOHead