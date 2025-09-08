import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export interface SEOProps {
	title?: string;
	description?: string;
	canonical?: string;
	ogImage?: string;
	keywords?: string | string[];
	image?: string;
	url?: string;
	type?: 'website' | 'article' | 'product';
	publishedTime?: string;
	modifiedTime?: string;
	author?: string;
	section?: string;
	tags?: string[];
	structuredData?: unknown;
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
    <Head>
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
              "telephone": "+1-800-ZION-TECH",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
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
    </Head>
  );
};

function toAbsoluteUrl(baseUrl: string, urlOrPath: string | undefined): string | undefined {
	if (!urlOrPath) return undefined;
	if (/^(https?:)?\/\//.test(urlOrPath)) return urlOrPath;
	const base = baseUrl.replace(/\/$/, '');
	return base + (urlOrPath.startsWith('/') ? urlOrPath : `/${urlOrPath}`);
}

function withTrailingSlash(u: string): string {
	return u.endsWith('/') ? u : `${u}/`;
}

export const SEO: React.FC<SEOProps> = ({
	title,
	description,
	canonical,
	ogImage,
	keywords,
	image,
	url,
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
	const router = useRouter();
	const baseUrl = DEFAULTS.url;

	const pageTitle = title || DEFAULTS.title;
	const pageDescription = description || DEFAULTS.description;

	const pathFromRouter = typeof router?.asPath === 'string' ? router.asPath : '/';
	const derivedCanonicalRaw = baseUrl.replace(/\/$/, '') + (pathFromRouter.startsWith('/') ? pathFromRouter : `/${pathFromRouter}`);
	const derivedCanonical = withTrailingSlash(derivedCanonicalRaw.split('#')[0].split('?')[0]);
	const canonicalUrl = withTrailingSlash(
		canonical ? (toAbsoluteUrl(baseUrl, canonical) as string) : derivedCanonical
	);

	const chosenImage = image || ogImage || DEFAULTS.image;
	const absoluteImage = toAbsoluteUrl(baseUrl, chosenImage) as string;
	const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
			{keywords ? (
				<meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
			) : null}
			<meta name="author" content={author} />
			<meta name="robots" content={robotsContent} />
			<link rel="canonical" href={canonicalUrl} />
			<link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
			<link rel="alternate" hrefLang="en" href={canonicalUrl} />

			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:type" content={type} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:image" content={absoluteImage} />
			<meta property="og:site_name" content="Zion Tech Group" />
			<meta property="og:locale" content="en_US" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={absoluteImage} />

			{type === 'article' && publishedTime ? (
				<meta property="article:published_time" content={publishedTime} />
			) : null}
			{type === 'article' && modifiedTime ? (
				<meta property="article:modified_time" content={modifiedTime} />
			) : null}
			{type === 'article' && author ? (
				<meta property="article:author" content={author} />
			) : null}
			{type === 'article' && section ? (
				<meta property="article:section" content={section} />
			) : null}
			{type === 'article' && tags?.length
				? tags.map((tag, index) => <meta key={index} property="article:tag" content={tag} />)
				: null}

			{structuredData ? (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			) : (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([
							{
								"@context": "https://schema.org",
								"@type": "Organization",
								"name": "Zion Tech Group",
								"url": baseUrl,
								"logo": `${baseUrl.replace(/\/$/, '')}/favicon.svg`,
								"sameAs": [
									"https://www.linkedin.com/company/zion-tech-group",
									"https://github.com/Zion-Holdings",
									"https://twitter.com/ziontechgroup",
								],
							},
							{
								"@context": "https://schema.org",
								"@type": "WebSite",
								"url": baseUrl,
								"name": "Zion Tech Group",
								"potentialAction": {
									"@type": "SearchAction",
									"target": `${baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
									"query-input": "required name=search_term_string",
								},
							},
						]),
					}},
				/>
			)}
		</Head>
	);
};

export default SEO;
