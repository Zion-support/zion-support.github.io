import Head from 'next/head';

type SEOProps = {
	title?: string;
	description?: string;
	keywords?: string | string[];
	url?: string;
	ogImage?: string;
	noIndex?: boolean;
	canonical?: string;
	structuredData?: object;
};

export default function SEO({
	title = 'Zion Tech Group - Advanced AI and Technology Solutions',
	description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.',
	keywords = ['AI', 'cloud', 'cybersecurity', 'digital transformation'],
	url,
	ogImage = '/og-image.jpg',
	noIndex = false,
	canonical,
	structuredData,
}: SEOProps) {
	const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
	const keywordsStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
	const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : url || '');
	return (
		<Head>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywordsStr} />
			<meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
			{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			{canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />
			{structuredData && (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
			)}
		</Head>
	);
}
