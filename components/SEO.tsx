import Head from 'next/head';

<<<<<<< HEAD
type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
  url?: string; // backward compatibility
};

export default function SEO({
=======
interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noIndex?: boolean
  structuredData?: object
}

export default function SEOHead({
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
  title = 'Zion Tech Group - Advanced AI and Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
  keywords = ['AI', 'artificial intelligence', 'cloud services', 'cybersecurity', 'technology solutions', 'enterprise software', 'digital transformation'],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
<<<<<<< HEAD
  structuredData,
  url,
}: SEOProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || url || (typeof window !== 'undefined' ? window.location.href : '');
  const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;
=======
  structuredData
}: SEOHeadProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />} 

=======
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Robots & Canonical */}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Zion Tech Group" />

<<<<<<< HEAD
=======
      {/* Twitter */}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

<<<<<<< HEAD
=======
      {/* Structured Data */}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
<<<<<<< HEAD
=======

      {/* Preconnect (perf) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
    </Head>
  );
}
