import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
  url?: string;
}

export default function SEO({
  title = 'Zion Tech Group - Advanced AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
  keywords = ['AI', 'artificial intelligence', 'cloud services', 'cybersecurity', 'technology solutions', 'enterprise software', 'digital transformation'],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData,
  url,
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || url || (typeof window !== 'undefined' ? window.location.href : '');
  const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Zion Tech Group" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
