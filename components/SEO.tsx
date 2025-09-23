import Head from 'next/head';
import React from 'react';

type SEOHeadProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
<<<<<<< HEAD
=======
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: object;
>>>>>>> 2f91f519a862b7cb51772274fd4f684c7acb589a
};

export default function SEOHead({
  title = 'Zion Tech Group - Advanced AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
<<<<<<< HEAD
  keywords = ['AI', 'cloud', 'cybersecurity', 'technology'],
  canonical,
}: SEOHeadProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || 'https://zion.app';

=======
  keywords = ['AI', 'cloud', 'cybersecurity', 'enterprise'],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  noIndex = false,
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
>>>>>>> 2f91f519a862b7cb51772274fd4f684c7acb589a
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
<<<<<<< HEAD
=======
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
>>>>>>> 2f91f519a862b7cb51772274fd4f684c7acb589a
    </Head>
  );
}
