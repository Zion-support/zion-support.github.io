import Head from 'next/head'

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-45f8
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-8d12
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
interface SEOHeadProps {
	title?: string;
	description?: string;
	keywords?: string[];
	canonical?: string;
	ogImage?: string;
	ogType?: string;
	twitterCard?: string;
	noIndex?: boolean;
	structuredData?: object;
}

export default function SEOHead({
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
=======
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonicalUrl} />
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-8d12

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Zion Tech Group" />

<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* Twitter */}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* Structured Data */}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

      {/* Preconnect (perf) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850
    </Head>
  );
<<<<<<< HEAD
=======
	title = 'Zion Tech Group - Advanced AI and Technology Solutions',
	description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
	keywords = ['AI', 'artificial intelligence', 'cloud services', 'cybersecurity', 'technology solutions', 'enterprise software', 'digital transformation'],
	canonical,
	ogImage = '/og-image.jpg',
	ogType = 'website',
	twitterCard = 'summary_large_image',
	noIndex = false,
	structuredData
}: SEOHeadProps) {
	const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
	const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

	return (
		<Head>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.join(', ')} />
			<meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
			<link rel="canonical" href={canonicalUrl} />

			<meta property="og:type" content={ogType} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:site_name" content="Zion Tech Group" />

			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />

			{structuredData && (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
			)}
		</Head>
	);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-45f8
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
	title = 'Zion Tech Group - Advanced AI and Technology Solutions',
	description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
	keywords = ['AI', 'artificial intelligence', 'cloud services', 'cybersecurity', 'technology solutions', 'enterprise software', 'digital transformation'],
	canonical,
	ogImage = '/og-image.jpg',
	ogType = 'website',
	twitterCard = 'summary_large_image',
	noIndex = false,
	structuredData,
}: SEOHeadProps) {
	const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
	const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

	return (
		<Head>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.join(', ')} />
			<meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
			<link rel="canonical" href={canonicalUrl} />
			<link rel="icon" href="/favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<meta property="og:type" content={ogType} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:url" content={canonicalUrl} />
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

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
		</Head>
	);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-6ba1
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-8d12
=======
    </Head>
  )
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-1467
}
