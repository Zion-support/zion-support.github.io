import React from "react";


interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	url?: string;
	type?: string;
}

export default function SEO({
	title = "Zion App - Technology Solutions for Modern Business",
	description = "Transform your business with cutting-edge AI, cloud infrastructure, and data analytics solutions.",
	keywords = ["technology", "AI", "cloud", "analytics", "business solutions"],
	image = "/images/og-image.jpg",
	url = "https://zion.app",
	type = "website"
}: SEOProps) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Zion App",
		"description": description,
		"url": url,
		"logo": image,
		"sameAs": [
			"https://twitter.com/zionapp",
			"https://linkedin.com/company/zion-app"
		]
	};

	return (
		<>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.join(", ")} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			
			{/* Open Graph */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content={type} />
			
			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			
			{/* Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
		</>
	);
}

