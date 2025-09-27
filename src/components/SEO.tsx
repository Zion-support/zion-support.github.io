import React from "react";

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	url?: string;
	type?: string;
	canonicalUrl?: string;
	ogImage?: string;
	twitterCard?: string;
}

const SEO: React.FC<SEOProps> = ({
	title = "Zion App - Advanced Technology Solutions",
	description = "Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services.",
	keywords = ["AI solutions", "cloud computing", "digital transformation", "business technology"],
	image = "/images/og-image.jpg",
	url = "https://ziontechgroup.com",
	type = "website",
	canonicalUrl,
	ogImage,
	twitterCard = "summary_large_image"
}) => {
	const fullImageUrl = ogImage || image;
	const fullUrl = canonicalUrl || url;

	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.join(", ")} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="canonical" href={fullUrl} />
			
			{/* Open Graph */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={fullImageUrl} />
			<meta property="og:url" content={fullUrl} />
			<meta property="og:type" content={type} />
			<meta property="og:site_name" content="Zion App" />
			
			{/* Twitter */}
			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={fullImageUrl} />
			
			{/* Additional SEO */}
			<meta name="robots" content="index, follow" />
			<meta name="author" content="Zion App" />
			<meta name="theme-color" content="#2563eb" />
		</>
	);
};

export default SEO;