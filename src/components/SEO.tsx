import React from 'react'
import { Helmet } from 'react-helmet-async'

type SEOProps = {
	title?: string
	description?: string
	keywords?: string | string[]
	canonical?: string
	image?: string
	url?: string
	type?: 'website' | 'article' | 'product' | 'service'
	author?: string
	publishedTime?: string
	modifiedTime?: string
	section?: string
	tags?: string[]
	noindex?: boolean
	nofollow?: boolean
	ogType?: string
	twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
	structuredData?: object
}

export function SEO({ 
	title, 
	description, 
	keywords, 
	canonical,
	image = '/images/zion-tech-group-og.jpg',
	url,
	type = 'website',
	author = 'Zion Tech Group',
	publishedTime,
	modifiedTime,
	section,
	tags = [],
	noindex = false,
	nofollow = false,
	ogType = type,
	twitterCard = 'summary_large_image',
	structuredData
}: SEOProps) {
	const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords
	const siteUrl = process.env.REACT_APP_SITE_URL || 'https://ziontechgroup.com'
	const fullUrl = url ? `${siteUrl}${url}` : siteUrl
	const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`

	// Default structured data for organization
	const defaultStructuredData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Zion Tech Group",
		"url": siteUrl,
		"logo": `${siteUrl}/images/zion-logo.png`,
		"description": "Leading provider of AI-powered business solutions, quantum computing, and autonomous business operations.",
		"foundingDate": "2020",
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "Global"
		},
		"contactPoint": {
			"@type": "ContactPoint",
			"contactType": "customer service",
			"email": "contact@ziontechgroup.com"
		},
		"sameAs": [
			"https://twitter.com/ziontechgroup",
			"https://linkedin.com/company/ziontechgroup",
			"https://github.com/ziontechgroup"
		]
	}

	const pageStructuredData = {
		"@context": "https://schema.org",
		"@type": type === 'article' ? 'Article' : 'WebPage',
		"headline": title,
		"description": description,
		"url": fullUrl,
		"image": fullImage,
		"author": {
			"@type": "Organization",
			"name": author
		},
		"publisher": {
			"@type": "Organization",
			"name": "Zion Tech Group",
			"logo": {
				"@type": "ImageObject",
				"url": `${siteUrl}/images/zion-logo.png`
			}
		},
		...(type === 'article' && publishedTime && {
			"datePublished": publishedTime,
			"dateModified": modifiedTime || publishedTime
		}),
		...(section && { "articleSection": section }),
		...(tags.length > 0 && { "keywords": tags.join(', ') })
	}

	const finalStructuredData = structuredData || pageStructuredData

	return (
		<Helmet>
			{/* Basic Meta Tags */}
			{title && <title>{title}</title>}
			{description && <meta name="description" content={description} />}
			{keywordsContent && <meta name="keywords" content={keywordsContent} />}
			<meta name="author" content={author} />
			
			{/* Robots */}
			{noindex && <meta name="robots" content="noindex" />}
			{nofollow && <meta name="robots" content="nofollow" />}
			{noindex && nofollow && <meta name="robots" content="noindex, nofollow" />}
			
			{/* Canonical URL */}
			{canonical && <link rel="canonical" href={canonical} />}
			
			{/* Open Graph / Facebook */}
			<meta property="og:type" content={ogType} />
			<meta property="og:url" content={fullUrl} />
			{title && <meta property="og:title" content={title} />}
			{description && <meta property="og:description" content={description} />}
			<meta property="og:image" content={fullImage} />
			<meta property="og:site_name" content="Zion Tech Group" />
			<meta property="og:locale" content="en_US" />
			
			{/* Twitter */}
			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:site" content="@ziontechgroup" />
			<meta name="twitter:creator" content="@ziontechgroup" />
			{title && <meta name="twitter:title" content={title} />}
			{description && <meta name="twitter:description" content={description} />}
			<meta name="twitter:image" content={fullImage} />
			
			{/* Additional Meta Tags */}
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="theme-color" content="#0ea5e9" />
			<meta name="msapplication-TileColor" content="#0ea5e9" />
			
			{/* Favicon */}
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			
			{/* Manifest */}
			<link rel="manifest" href="/site.webmanifest" />
			
			{/* Preconnect to external domains */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			
			{/* Structured Data */}
			<script type="application/ld+json">
				{JSON.stringify(finalStructuredData)}
			</script>
			
			{/* Additional Organization Schema */}
			<script type="application/ld+json">
				{JSON.stringify(defaultStructuredData)}
			</script>
		</Helmet>
	)
}
