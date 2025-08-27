import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
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
	const baseUrl = DEFAULTS.url;

	const pageTitle = title || DEFAULTS.title;
	const pageDescription = description || DEFAULTS.description;

	const canonicalUrl = withTrailingSlash(
		canonical ? (toAbsoluteUrl(baseUrl, canonical) as string) : baseUrl
	);

	const chosenImage = image || ogImage || DEFAULTS.image;
	const absoluteImage = toAbsoluteUrl(baseUrl, chosenImage) as string;
	const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

	return (
		<Helmet>
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
						])
					}}
				/>
			)}
		</Helmet>
	);
};

export default SEO;
