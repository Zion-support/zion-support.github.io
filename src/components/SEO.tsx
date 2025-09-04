
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
  keywords = 'AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group',
  image = '/og-image.svg',
  url = 'https://ziontechgroup.com',

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.svg",
          "description": description,
          "sameAs": ["https://linkedin.com/company/zion-tech-group",
            "https://twitter.com/ziontechgroup"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-ZION-TECH",
            "contactType": "customer service"
          }
        })}

import Head from "next/head"
import React from "react"
import { Helmet  } from "react - helmet-async", SEOProps {title?: string;description?: string
export const SEO: React.FC < SEOProps> = ({,
"
export default function Page() {
export default function Page() {;

interface SEOProps {

