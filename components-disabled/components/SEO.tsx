import React from 'react';''
import Head from 'next/head';'
interface SEOProps {
  // TODO: Implement
}
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;


export default function SEO({'
  title = "Zion Tech Group",""
  description = "Leading technology solutions provider","
  canonical,"
  ogImage = "/og-image.jpg",""
  ogType = "website",""
  twitterCard = "summary_large_image"")
}: SEOProps) {
  return (
    <Head>
</Head>
      <title>{title}</title>"
      <meta name="description" content={description} />"
</meta>"
      {canonical && <link rel="canonical" href={canonical} />}"
</link>"
      <meta property="og:title" content={title} />"
</meta>"
      <meta property="og:description" content={description} />"
</meta>"
      <meta property="og:type" content={ogType} />"
</meta>"
      <meta property="og:image" content={ogImage} />"
</meta>"
      <meta name="twitter:card" content={twitterCard} />"
</meta>"
      <meta name="twitter:title" content={title} />"
</meta>"
      <meta name="twitter:description" content={description} />"
</meta>"
      <meta name="twitter:image" content={ogImage} />"
</meta>
    </Head>)"

