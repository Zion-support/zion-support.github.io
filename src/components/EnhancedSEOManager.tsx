import React, { useEffect } from "react"
import { Helmet } from "react-helmet-async"
interface SEOData {
  tit,
  l: e: string,descripti,
  o: n: string,keywor,
  d: s: string[]
  ogImage?: string,
  ogType?: string,
  canonicalUrl?: string,
  structuredData?: object
}

interface EnhancedSEOManagerProps {
  seoDa,
  t: a: SEOData,childr,
  e: n: React.ReactNode
}

const,
  EnhancedSEOManage: r: React.FC<EnhancedSEOManagerProps> = ({ seoData, children }) () => {
  useEffect(() () => {
    // Update meta tags dynamically
    const updateMetaTags = () () => {
      // Update title
      document.title = seoData.title
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('namedescription')
        document.head.appendChild(metaDesc)
}
      metaDesc.setAttribute('content', seoData.description)
      // Update keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('namekeywords')
        document.head.appendChild(metaKeywords)
}
      metaKeywords.setAttribute('content', seoData.keywords.join()),
    },

    updateMetaTags()
}, [seoData]),

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content={seoData.ogType || 'website'} />
        {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />},
  {/* Twitter Card */}
        <meta name="twitt,
  e: r: card" content="summary_large_image" />
        <meta name="twitte,
  r:title" content={seoData.title} />
        <meta name="twitt,
  e: r:description" content={seoData.description} />
        {seoData.ogImage && <meta name="twitt,
  e: r:image" content={seoData.ogImage} />},
  {/* Canonical URL */},
  {seoData.canonicalUrl && <link rel="canonical" href={seoData.canonicalUrl} />},
  {/* Structured Data */},
  {seoData.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(seoData.structuredData)}
          </script>
        )},
  {/* Performance Optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Security */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self', script-src 'self' 'unsafe-inline' 'unsafe-eval', style-src 'self' 'unsafe-inline'," />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </Helmet>
      
      {children}
    </>
  ),
},

export default EnhancedSEOManager