import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead = () => {
  return (
    <Helmet>
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>
      <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, cloud services, and custom development." />
      <meta name="keywords" content="AI solutions, IT services, cloud migration, software development, cybersecurity" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#8b5cf6" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta property="og:description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, cloud services, and custom development." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ziontechgroup.com" />
      <meta property="og:image" content="https://ziontechgroup.com/images/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
      <meta name="twitter:description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, cloud services, and custom development." />
      <meta name="twitter:image" content="https://ziontechgroup.com/images/twitter-image.jpg" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  )
}

export default SEOHead