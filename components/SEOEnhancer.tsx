import React from 'react'

interface SEOEnhancerProps {

  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({',
  title = 'Zion Tech Group - Leading Technology Solutions','
  description = 'Zion Tech Group provides cutting-edge AI, IT, and software development services.','
  keywords = 'technology, AI, software development, IT services','
  image = '/images/zion-tech-group-og.jpg','
  url = 'https://ziontechgroup.com','
  type = 'website'
}) => {'
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
  return (
<Head>
      <title>{fullTitle}</title>
      <meta name = "description content="{description}" />"
      <meta name=keywords" content="{keywords}" />"
      <meta name="viewport content="width=device-width," initial-scale=1" />"
      <meta name="robots content="index," follow" />"
      <meta name="author content="Zion" Tech Group" />"
      <meta name="theme-color content=#3B82F6" />
      "
      <meta property="og:title content="{fullTitle}" />"
      <meta property=og:description" content="{description}" />"
      <meta property="og:image content="{image}" />"
      <meta property=og:url" content="{url}" />"
      <meta property="og:type content = "{type}" />"
      <meta property=og: site_name" content="Zion Tech Group />
      "
      <meta name=twitter:card" content="summary_large_image />",
      <meta name=twitter:title" content="{fullTitle}" />"
      <meta name="twitter:description content="{description}" />"
      <meta name=twitter:image" content="{image}" />
      "
      <link rel="canonical" href="{url}" />
    </Head>
  )
}
"'
export default SEOEnhancer