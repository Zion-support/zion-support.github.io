import Head from 'next/head';
import type { ReactNode } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
  children?: ReactNode;
  url?: string;
}

export default function SEOHead({
  title = 'Zion Tech Group - Advanced AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
  keywords = [
    'AI',
    'artificial intelligence',
    'cloud services',
    'cybersecurity',
    'technology solutions',
    'enterprise software',
    'digital transformation',
  ],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData,
  children,
  url,
}: SEOHeadProps) {
  const fullTitle = title.includes('Zion Tech Group')
    ? title
    : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || url || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={(Array.isArray(keywords) ? keywords : [keywords]).join(', ')} />
      {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}
      {noIndex && <meta name='robots' content='noindex,nofollow' />}

      {/* Open Graph */}
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={ogType} />
      <meta property='og:image' content={ogImage} />
      {canonicalUrl && <meta property='og:url' content={canonicalUrl} />}

      {/* Twitter */}
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {children}
    </Head>
  );
}
