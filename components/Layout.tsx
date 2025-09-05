import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
<<<<<<< HEAD
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, IT, micro SaaS, solutions",
  canonical = "https://ziontechgroup.com",
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
=======
	children: React.ReactNode;
	title?: string;
	description?: string;
	canonicalUrl?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
	children, 
	title = 'Zion Tech Group - Leading Technology Solutions Provider',
	description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
	canonicalUrl = 'https://ziontechgroup.com'
}) => {
	const ogImage = 'https://ziontechgroup.com/og-image.svg';
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: 'Zion Tech Group',
		description,
		url: 'https://ziontechgroup.com',
		logo: 'https://ziontechgroup.com/favicon.svg',
		sameAs: [
			'https://www.linkedin.com/company/zion-tech-group',
			'https://x.com/ziontechgroup'
		]
	};

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="keywords" content="technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity" />
				<meta name="author" content="Zion Tech Group" />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:site_name" content="Zion Tech Group" />
				<meta property="og:image" content={ogImage} />
				<meta property="og:image:alt" content="Zion Tech Group" />
				<meta property="og:image:type" content="image/svg+xml" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={ogImage} />
				<meta name="twitter:site" content="@ziontechgroup" />

				<link rel="canonical" href={canonicalUrl} />
				<link rel="preconnect" href="https://www.googletagmanager.com" />
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			</Head>
			<div className="min-h-screen flex flex-col">
				<EnhancedNavigation />
				<main className="flex-grow">
					{children}
				</main>
				<EnhancedFooter />
			</div>
		</>
	);
}
>>>>>>> origin/chore/seo-perf-fixes

export default Layout;