import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEOHead() {
  return (
    <Helmet>
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>
      <meta name="description" content="Leading provider of AI-powered solutions, cloud migration, cybersecurity, and IT services. Transform your business with cutting-edge technology." />
      <meta name="keywords" content="AI solutions, cloud migration, cybersecurity, IT services, data analytics, DevOps, digital transformation" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta property="og:description" content="Leading provider of AI-powered solutions, cloud migration, cybersecurity, and IT services." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="twitter:description" content="Leading provider of AI-powered solutions, cloud migration, cybersecurity, and IT services." />
      <link rel="canonical" href="https://ziontechgroup.com" />
    </Helmet>
  )
}