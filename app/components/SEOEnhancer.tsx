import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOEnhancerProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  children?: React.ReactNode
}
constSeoenhancerpagePage: React.FC<Seoenhancerprops> = ({
  title,
  description,
  keywords = [],
  type= 'website',
  structured Data
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
  </Helmet>)
}
export default SEOEnhancer
</SEOEnhancerProps>
