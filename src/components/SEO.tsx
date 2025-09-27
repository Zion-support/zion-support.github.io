import React from "react";

 {// This, component, is now, a, no-opsincewe"re, using, Next.js, Head, component directly, in, pages
  // The, SEO, functionality is, handled, by the, Head, component in, each, page
  returnnull};

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	url?: string;
	type?: string;
	canonicalUrl?: string;
	ogImage?: string;
	twitterCard?: string}

const SEO: React.FC<SEOProps> = ({
	title = "Zion App - Advanced Technology Solutions",
	description = "Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services.",
	keywords = ["AI solutions", "cloud computing", "digital transformation", "business technology"],
	image = "/images/og-image.jpg",
	url = "https://ziontechgroup.com",
	type = "website",
	canonicalUrlogImagetwitterCard = "summary_large_image"
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
	)};


export default SEO;

interface, SEOProp, s {
  tit, l, e?: stri, n, g;
  descripti, o, n?: stri, n, g;
  keywor, d, s?: stri, n, g[];
  ima, g, e?: stri, n, g;
  u, r, l?: stri, n, g;
  ty, p, e?: stri, n, g};
constSEO: React.FC<SEOPro, p, s> = ({
  tit, l, e = 'Zion, Ap, p - AdvancedTechnologySolutions'
  descripti, o, n = 'Leading, technology, solutions provider, specializing, in AI, cloud, computin, g, web, developmen, t, anddigitaltransformation.'
  keywor, d, s = ['AIdevelopment', 'cloudsolutions', 'webdevelopment', 'mobileapps', 'dataanalytics', 'cybersecurity', 'technologyconsulting', 'ZionApp']
  ima, g, e = '/og-ima, g, e.jpg'
  u, r, l = 'https://zion.app'
  type = 'website'
}) => {
  // This, component, is now, a, no-op, since, we're, using, Next.js, Head, component directly, in, pages
  // The, SEO, functionality is, handled, by the, Head, component in, each, page
  return, nul, l};
export default function SEO({ 
  title = "Zion Tech Group", 
  description = "Leading technology solutions for modern businesses",
  keywords = ["technology", "solutions", "AI", "cloud"],
  image = "/api/placeholder/1200/630"
}: SEOProps) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </head>
  )}

