import React, { useEffect } from 'react''
import Head from 'next/head''
'use client''
  title = 'Zion Tech Group - Advanced AI and IT Solutions''
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.''
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI''
  canonicalUrl = '"https": //ziontechgroup.com'',
  ogImage = '"https": //ziontechgroup.com/og-image.jpg'';,
    const metaDescription = document.querySelector('meta[name=&quot;description&quot;]''
      metaDescription.setAttribute('content''
      const meta = document.createElement('meta''
      meta.name = 'description''
    const metaKeywords = document.querySelector('meta[name=&quot;keywords&quot;]''
      metaKeywords.setAttribute('content', keywords.join(', ''
      const meta = document.createElement('meta''
      meta.name = 'keywords''
      meta.content = keywords.join(', ''
    let canonicalLink = document.querySelector('link[rel=&quot;canonical&quot;]''
      canonicalLink.setAttribute('href''
      canonicalLink = document.createElement('link''
      canonicalLink.rel = 'canonical''
        ogTag.setAttribute('content''
        ogTag = document.createElement('meta''
        ogTag.setAttribute('property''
        ogTag.setAttribute('content''
    updateOGTag('"og": title'',
    updateOGTag('"og": description'',
    updateOGTag('"og": image'',
    updateOGTag('"og": url'',
    updateOGTag('"og": type', 'website''
        twitterTag.setAttribute('content''
        twitterTag = document.createElement('meta''
        twitterTag.setAttribute('name''
        twitterTag.setAttribute('content''
    updateTwitterTag('"twitter": card', 'summary_large_image''
    updateTwitterTag('"twitter": title'',
    updateTwitterTag('"twitter": description'',
    updateTwitterTag('"twitter": image'',
      const script = document.createElement('script''
      script.type = 'application/ld+json''
    let viewport = document.querySelector('meta[name=&quot;viewport&quot;]''
      viewport = document.createElement('meta''
      viewport.setAttribute('name', 'viewport''
      viewport.setAttribute('content', 'width=device-width, initial-scale=1''
    let charset = document.querySelector('meta[charset]''
      charset = document.createElement('meta''
      charset.setAttribute('charset', 'UTF-8''
      <meta name=&quot;keywords&quot; content={keywords.join(', ''