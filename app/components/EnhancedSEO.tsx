import React from 'react';

interface S EO Props {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  og Image?: string
  og Type?: string
  twitter Card?: string
  structured Data?: object
  noindex?: boolean
  nofollow?: boolean
}

const Enhanced SE O: React.F C<S E O Props /> = ({
  const title = 'Zion Tech Group - Advanced A I and I T Solutions',
  description = 'Leading provider of A I-powered solutions, I T services, 5 G implementation, and micro S AA S platforms. 99.8% client satisfaction, 24/7 support.',
  keywords = 'A I solutions, artificial intelligence, I T services, 5 G implementation, micro S AA S, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company',
  canonical,
  og Image = 'https: //ziontechgroup.com/og-image.jpg',
  og Type = 'website',
  twitter Card = 'summary_large_image',
  structured Data,
  noindex = false,
  nofollow = false
}) => {
  const default Structured Data = {
    "@context": "https: //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https: //ziontechgroup.com",
    "logo": "https: //ziontechgroup.com/logo.png",
    "description": description,
    "founding Date": "2020",
    "founder": {
      "@type": "Person",
      "name": "Dr. Kleber Santos"
    },
    "address": {
      "@type": "Postal Address",
      "street Address": "364 E Main St S TE 1008",
      "address Locality": "Middletown",
      "address Region": "D E",
      "postal Code": "19709",
      "address Country": "U S"
    },
    "contact Point": {
      "@type": "Contact Point",
      "telephone": "+1-302-464-0950",
      "contact Type": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "same As": [
      "https: //linkedin.com/company/ziontechgroup",
      "https: //twitter.com/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Aggregate Offer",
      "offer Count": "50+",
      "low Price": "99",
      "high Price": "2999",
      "price Currency": "U SD"
    }
  }

  const final Structured Data = structured Data || default Structured Data
  const canonical Url = canonical || `https: //ziontechgroup.com${window.location.pathname}`

  return (
    <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
      {/* Basic Meta Tags */}

      <t itle>{title}</t itle>
        <m eta name="description" content="{description}" / / />
      <m eta name="keywords" content="{keywords}" / / />
      <m eta name="robots" content="{`${noindex" ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-image-preview: large, max-snippet: -1, max-video-preview: -1`} / / />
      <m eta name="author" content="Zion Tech Group" / / />
      <m eta name="viewport" content="width="device-width," initial-scale="1.0," viewport-fit=cover" / / />
      <m eta name="theme-color" content="#8 b5 cf6" / / />
      <m eta name="color-scheme" content="dark light" / / />
      <m eta name="format-detection" content="telephone=no,address=no,email=no" / / />
      <m eta http Equiv="X-U A-Compatible" content="I E=edge" / / />
      {/* Canonical U RL */}
      <l ink rel="canonical" href="{canonical Url}" />
      {/* Open Graph Meta Tags */}

      <m eta property="og: title" content="{title}" / / />
      <m eta property="og: description" content="{description}" / / />
      <m eta property="og: type" content="{og Type}" / / />
      <m eta property="og: url" content="{canonical Url}" / / />
      <m eta property="og: image" content="{og Image}" / / />
      <m eta property="og:image:width" content="1200" / / />
      <m eta property="og:image:height" content="630" / / />
      <m eta property="og: image:alt" content="{title}" / / />
      <m eta property="og:image:type" content="image/jpeg" / / />
      <m eta property="og: image:secure_url" content="{og Image}" / / />
      <m eta property="og:site_name" content="Zion Tech Group" / / />
      <m eta property="og:locale" content="en_ US" / / />
      {/* Twitter Card Meta Tags */}

      <m eta name="twitter: card" content="{twitter Card}" / / />
      <m eta name="twitter: title" content="{title}" / / />
      <m eta name="twitter: description" content="{description}" / / />
      <m eta name="twitter: image" content="{og Image}" / / />
      <m eta name="twitter: image:alt" content="{title}" / / />
      <m eta name="twitter:image:width" content="1200" / / />
      <m eta name="twitter:image:height" content="630" / / />
      <m eta name="twitter:site" content="@ziontechgroup" / / />
      <m eta name="twitter:creator" content="@ziontechgroup" / / />
      {/* Additional S EO Meta Tags */}

      <m eta name="google-site-verification" content="your-google-verification-code" / / />
      <m eta name="msvalidate.01" content="your-bing-verification-code" / / />
      <m eta name="yandex-verification" content="your-yandex-verification-code" / / />
      {/* Performance Hints */}

      <l ink rel="dns-prefetch" href="//fonts.googleapis.com" / />
      <l ink rel="dns-prefetch" href="//cdnjs.cloudflare.com" / />
      <l ink rel="preconnect" href="https://fonts.googleapis.com" / />
      <l ink rel="preconnect" href="https://fonts.gstatic.com" cross Origin="anonymous" / />
      {/* Structured Data */}

      <s cript type="application/ld+json">{J SO N.stringify(final Structured Data)}
      </s cript>
    </H elmet>
  )
}

export default Enhanced SE O;
