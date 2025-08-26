import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions',
  description = 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge services in AI, cybersecurity, space tech, and quantum solutions.',
  keywords = 'AI, artificial intelligence, quantum computing, space technology, cybersecurity, machine learning, automation, Zion Tech Group, technology solutions, enterprise software, cloud computing, blockchain, IoT, robotics',
  image = '/images/zion-tech-group-og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Zion Tech Group',
  section,
  tags = [],
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex' : 'index'} />
      {nofollow && <meta name="robots" content="nofollow" />}
      
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Default Structured Data if none provided */}
      {!structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
              "description": description,
              "foundingDate": "2020",
              "sameAs": [
                "https://www.linkedin.com/company/zion-tech-group",
                "https://twitter.com/ziontechgroup",
                "https://github.com/Zion-Holdings"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & Machine Learning Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Quantum Computing Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Space Technology Solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      )}
    </>
  );
};

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

	// Mark SEO rendered synchronously to avoid duplicate default + page-level SEO
	const seoCtx = useSEOContext();
	if (seoCtx && !seoCtx.renderedRef.current) {
		seoCtx.renderedRef.current = true;
	}

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
				"https://x.com/ziontechgroup"
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
			{(jsonLd || defaultJsonLd) ? (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd || defaultJsonLd) }} />
			) : null}
		</Head>
	);
}
