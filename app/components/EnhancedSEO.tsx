import React from 'react'
import { Helmet } from 'react-helmet-async'
interface EnhancedSEOProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  structuredData?: object
  noIndex?: boolean
  noFollow?: boolean
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered solutions, 5G technology, and enterprise IT services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, 5G technology, enterprise IT, digital transformation, cloud computing, cybersecurity',
  canonicalUrl,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage = '/og-image.jpg',
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  const fullDescription = description || 'Leading provider of AI-powered solutions, 5G technology, and enterprise IT services.'
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og: "title content={twitterTitle || fullTitle"} />
      <meta property="og: "description content={twitterDescription || fullDescription"} />
      <meta property="og: "type content=website />
      <meta property=og:url content={ogUrl || canonicalUrl"} />
      <meta property="og: "image content={twitterImage"} />
      
      {/* Twitter */}
      <meta name="twitter: "card content=summary_large_image />
      <meta name=twitter:title content={twitterTitle || fullTitle"} />
      <meta name="twitter: "description content={twitterDescription || fullDescription"} />
      <meta name="twitter: "image content={twitterImage"} />
      
      {/* SEO */}
      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
export default EnhancedSEO