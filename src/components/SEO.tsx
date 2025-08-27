import React from 'react'
import { Helmet } from 'react-helmet-async'

type SEOProps = {
	title?: string
	description?: string
	keywords?: string | string[]
	canonical?: string
}

export function SEO({ title, description, keywords, canonical }: SEOProps) {
	const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords

	return (
		<Helmet>
			{title && <title>{title}</title>}
			{description && <meta name="description" content={description} />}
			{keywordsContent && <meta name="keywords" content={keywordsContent} />}
			{canonical && <link rel="canonical" href={canonical} />}
		</Helmet>
	)
}
