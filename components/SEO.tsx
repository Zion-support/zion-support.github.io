import React from 'react';
=======

interface SEOProps {
  title?: string;
  description?: string;
export default function SEO({ title, description, canonical, ogImage, image, noIndex, noindex, nofollow, jsonLd }: SEOProps) {
	const router = useRouter();
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULTS.url;
	const pageTitle = title || DEFAULTS.title;
	const pageDescription = description || DEFAULTS.description;
	const pagePath = typeof router?.asPath === 'string' ? router.asPath : '/';
	// Derive canonical from baseUrl + path, ensure single slash and trailing slash
	const rawDerived = baseUrl.replace(/\/$/, '') + (pagePath.startsWith('/') ? pagePath : `/${pagePath}`);
	const normalizedCanonical = rawDerived.endsWith('/') ? rawDerived : `${rawDerived}/`;
	// Prefer explicit image, then ogImage, then default; resolve to absolute URL
	const requestedImage = image || ogImage || DEFAULTS.image;
	const imageUrl = /^(https?:)?\/\//.test(requestedImage)
		? requestedImage
		: baseUrl.replace(/\/$/, '') + (requestedImage.startsWith('/') ? requestedImage : `/${requestedImage}`);
	const envNoIndex = process.env.NEXT_PUBLIC_NOINDEX === 'true';
	const isNoIndex = envNoIndex || (noIndex ?? false) || (noindex ?? false);
	const robotsContent = `${isNoIndex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;
	const imageAlt = 'Zion Tech Group - Revolutionary Technology Solutions';

	// Normalize provided canonical (if any) to an absolute URL with trailing slash
	function toAbsoluteUrl(urlOrPath: string): string {
		if (/^(https?:)?\/\//.test(urlOrPath)) return urlOrPath;
		return baseUrl.replace(/\/$/, '') + (urlOrPath.startsWith('/') ? urlOrPath : `/${urlOrPath}`);
	}
	function withTrailingSlash(u: string): string {
		return u.endsWith('/') ? u : `${u}/`;
	}
	const canonicalUrl = withTrailingSlash(canonical ? toAbsoluteUrl(canonical) : normalizedCanonical);

	// Default JSON-LD if none provided
	const defaultJsonLd = [
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Zion Tech Group",
			"url": baseUrl,
			"logo": `${baseUrl.replace(/\/$/, '')}/favicon.svg`,
			"sameAs": [
				"https://www.linkedin.com/company/zion-tech-group",
				"https://github.com/Zion-Holdings",
				"https://www.instagram.com/ziontechgroup",
				"https://www.youtube.com/@ziontechgroup",
				"https://twitter.com/ziontechgroup"
			]
		},
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"url": baseUrl,
			"name": "Zion Tech Group",
			"potentialAction": {
				"@type": "SearchAction",
				"target": `${baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
				"query-input": "required name=search_term_string"
			}
		}
	];

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
			<meta name="robots" content={robotsContent} />
			<link rel="canonical" href={canonicalUrl} />
			<link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
			<link rel="alternate" hrefLang="en" href={canonicalUrl} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Zion Tech Group" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:image:alt" content={imageAlt} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={imageUrl} />
			<meta name="twitter:image:alt" content={imageAlt} />
			{jsonLd ? (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			) : null}
		</Head>
	);
}
=======
export default SEO;
