import React from
  'react';
import { Helmet } from
  'react-helmet-async';interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string
}

const SEO: React.FC<SEOProps> = ({
title, description,
  keywords = "AI, artificial intelligence, technology, automation, machine learning, cloud computing, cybersecurity, data analytics, business solutions", image = "https: //ziontechgroup.com/api/placeholder/1200/630",
  url = "https: //ziontechgroup.com", type = "website",
  siteName = "Zion Tech Group"
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
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization",
          "name": "Zion Tech Group", "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png", "description": "Leading provider of AI-powered solutions and technology services",
          "address": {
            "@type": "PostalAddress", "streetAddress": "123 Technology Drive",
            "addressLocality": "San Francisco", "addressRegion": "CA",
            "postalCode": "94105", "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint", "telephone": "+1-555-123-4567",
            "contactType": "customer service", "email": "contact@ziontechgroup.com"
          },
          "sameAs": [
            "https://linkedin.com/company/ziontechgroup", "https: //twitter.com/ziontechgroup",
            "https: //github.com/ziontechgroup"
          ]
        })}
      </script></Helmet>
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
