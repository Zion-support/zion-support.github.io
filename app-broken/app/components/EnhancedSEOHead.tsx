'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
  structuredData?: object
}
const EnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology.',
  keywords = 'AI solutions, artificial intelligence, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, IT consulting',
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  siteName = 'Zion Tech Group',
  structuredData
}) => {
  const defaultStructuredData = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Zion Tech Group&quot;,
    &quot;url&quot;: &quot;https://ziontechgroup.com&quot;,
    &quot;logo&quot;: &quot;https://ziontechgroup.com/logo.png&quot;,
    &quot;description&quot;: &quot;Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.&quot;,
    &quot;address&quot;: {
      &quot;@type&quot;: &quot;PostalAddress&quot;,
      &quot;streetAddress&quot;: &quot;364 E Main St STE 1008&quot;,
      &quot;addressLocality&quot;: &quot;Middletown&quot;,
      &quot;addressRegion&quot;: &quot;DE&quot;,
      &quot;postalCode&quot;: &quot;19709&quot;,
      &quot;addressCountry&quot;: &quot;US&quot;
    },
    &quot;contactPoint&quot;: {
      &quot;@type&quot;: &quot;ContactPoint&quot;,
      &quot;telephone&quot;: &quot;+1-302-464-0950&quot;,
      &quot;contactType&quot;: &quot;customer service&quot;,
      &quot;email&quot;: &quot;kleber@ziontechgroup.com&quot;
    },
    &quot;sameAs&quot;: [
      &quot;https://linkedin.com/company/zion-tech-group&quot;,
      &quot;https://twitter.com/ziontechgroup&quot;,
      &quot;https://github.com/zion-tech-group&quot;
    ]
  }
const EnhancedSEOHead: React.FC = () => {
      &quot;contactType&quot;: &quot;sales&quot;,
      &quot;email&quot;: &quot;kleber@ziontechgroup.com&quot;
    },
    &quot;sameAs&quot;: [
      &quot;https://www.linkedin.com/company/ziontechgroup&quot;,
      &quot;https://twitter.com/ziontechgroup&quot;
    ],
    &quot;service&quot;: [
      {
        &quot;@type&quot;: &quot;Service&quot;,
        &quot;name&quot;: &quot;AI Solutions&quot;,
        &quot;description&quot;: &quot;Comprehensive artificial intelligence solutions for business transformation&quot;
      },
      {
        &quot;@type&quot;: &quot;Service&quot;,
        &quot;name&quot;: &quot;Cloud Infrastructure&quot;,
        &quot;description&quot;: &quot;Scalable and secure cloud solutions for modern businesses&quot;
      },
      {
        &quot;@type&quot;: &quot;Service&quot;,
        &quot;name&quot;: &quot;Cybersecurity&quot;,
        &quot;description&quot;: &quot;Advanced security solutions to protect digital assets&quot;
      },
      {
        &quot;@type&quot;: &quot;Service&quot;,
        &quot;name&quot;: &quot;Custom Development&quot;,
        &quot;description&quot;: &quot;Tailored software solutions for specific business needs&quot;
      }
    ]
  }
  const websiteStructuredData = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebSite&quot;,
    &quot;name&quot;: &quot;Zion Tech Group&quot;,
    &quot;url&quot;: &quot;https://ziontechgroup.com&quot;,
    &quot;potentialAction&quot;: {
      &quot;@type&quot;: &quot;SearchAction&quot;,
      &quot;target&quot;: &quot;https://ziontechgroup.com/search?q={search_term_string}&quot;,
      &quot;query-input&quot;: &quot;required name=search_term_string&quot;
    }
  }
  const finalStructuredData = structuredData || defaultStructuredData
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name=&quot;description&quot; content={description} />
      <meta name=&quot;keywords&quot; content={keywords} />
      <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
      <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
      <meta name=&quot;googlebot&quot; content=&quot;index, follow&quot; />
      <meta name=&quot;bingbot&quot; content=&quot;index, follow&quot; />
      {/* Canonical URL */}
      <link rel=&quot;canonical&quot; href={url} />
      {/* Open Graph / Facebook */}
      <meta property=&quot;og:type&quot; content={type} />
      <meta property=&quot;og:url&quot; content={url} />
      <meta property=&quot;og:title&quot; content={title} />
      <meta property=&quot;og:description&quot; content={description} />
      <meta property=&quot;og:image&quot; content={image} />
      <meta property=&quot;og:url&quot; content={url} />
      <meta property=&quot;og:type&quot; content={type} />
      <meta property=&quot;og:site_name&quot; content={siteName} />
      {/* Twitter Card Meta Tags */}
      <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      <meta name=&quot;twitter:title&quot; content={title} />
      <meta name=&quot;twitter:description&quot; content={description} />
      <meta name=&quot;twitter:image&quot; content={image} />
      <link rel=&quot;canonical&quot; href={currentUrl} />
      {/* Open Graph / Facebook */}
      <meta property=&quot;og:type&quot; content={type} />
      <meta property=&quot;og:url&quot; content={currentUrl} />
      <meta property=&quot;og:title&quot; content={title} />
      <meta property=&quot;og:description&quot; content={description} />
      <meta property=&quot;og:image&quot; content={fullImageUrl} />
      <meta property=&quot;og:site_name&quot; content=&quot;Zion Tech Group&quot; />
      <meta property=&quot;og:locale&quot; content=&quot;en_US&quot; />
      {/* Twitter */}
      <meta property=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      <meta property=&quot;twitter:url&quot; content={currentUrl} />
      <meta property=&quot;twitter:title&quot; content={title} />
      <meta property=&quot;twitter:description&quot; content={description} />
      <meta property=&quot;twitter:image&quot; content={fullImageUrl} />
      <meta property=&quot;twitter:site&quot; content=&quot;@ziontechgroup&quot; />
      <meta property=&quot;twitter:creator&quot; content=&quot;@ziontechgroup&quot; />
      {/* Additional SEO Meta Tags */}
      <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, viewport-fit=cover&quot; />
      <meta name=&quot;theme-color&quot; content=&quot;#0f172a&quot; />
      <meta name=&quot;color-scheme&quot; content=&quot;dark light&quot; />
      <meta httpEquiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; />
      <meta name=&quot;format-detection&quot; content=&quot;telephone=no,address=no,email=no&quot; />
      {/* PWA Meta Tags */}
      <link rel=&quot;manifest&quot; href=&quot;/manifest.json&quot; />
      <link rel=&quot;apple-touch-icon&quot; href=&quot;/logo192.png&quot; />
      <meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;yes&quot; />
      <meta name=&quot;apple-mobile-web-app-status-bar-style&quot; content=&quot;black-translucent&quot; />
      <meta name=&quot;apple-mobile-web-app-title&quot; content=&quot;Zion Tech Group&quot; />
      {/* Preconnect to external domains */}
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot; />
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossOrigin=&quot;anonymous&quot; />
      {/* Structured Data */}
      <script type=&quot;application/ld+json&quot;>
        {JSON.stringify(structuredData)}
      </script>
      <script type=&quot;application/ld+json&quot;>
        {JSON.stringify(websiteStructuredData)}
      <meta name=&quot;theme-color&quot; content=&quot;#0f172a&quot; />
      <meta name=&quot;msapplication-TileColor&quot; content=&quot;#0f172a&quot; />
      <meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;yes&quot; />
      <meta name=&quot;apple-mobile-web-app-status-bar-style&quot; content=&quot;black-translucent&quot; />
      {/* Canonical URL */}
      <link rel=&quot;canonical&quot; href={url} />
      {/* Favicon */}
      <link rel=&quot;icon&quot; type=&quot;image/x-icon&quot; href=&quot;/favicon.ico&quot; />
      <link rel=&quot;apple-touch-icon&quot; sizes=&quot;180x180&quot; href=&quot;/apple-touch-icon.png&quot; />
      <link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;32x32&quot; href=&quot;/favicon-32x32.png&quot; />
      <link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;16x16&quot; href=&quot;/favicon-16x16.png&quot; />
      <link rel=&quot;manifest&quot; href=&quot;/site.webmanifest&quot; />
      {/* Structured Data */}
      <script type=&quot;application/ld+json&quot;>
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  )
}
export default EnhancedSEOHead