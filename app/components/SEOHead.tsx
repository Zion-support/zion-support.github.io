import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead: React.FC = () => {
  return (
    <Helmet>
      <title>Zion Tech Group - AI & IT Solutions</title>
      <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
      <meta name="keywords" content="AI solutions, IT services, digital transformation, cloud services, 5G implementation" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
      <meta property="og:description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
      <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
      <link rel="canonical" href="https://ziontechgroup.com" />
    </Helmet>
  )
}

export default SEOHead
