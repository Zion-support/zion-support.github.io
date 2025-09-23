import Head from 'next/head'
import type { ReactNode } from 'react'

type SEOProps = {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO = ({
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords = 'AI, artificial intelligence, cloud infrastructure, cybersecurity, technology solutions, consulting',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  )
}

export default function SEOHead({
	title = 'Zion Tech Group - Advanced AI and Technology Solutions',
	description = 'Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. Enterprise-grade technology that drives innovation and growth.',
	keywords = ['AI', 'artificial intelligence', 'cloud services', 'cybersecurity', 'technology solutions', 'enterprise software', 'digital transformation'],
	canonical,
	ogImage = '/og-image.jpg',
	ogType = 'website',
	twitterCard = 'summary_large_image',
	noIndex = false,
	structuredData,
}: SEOHeadProps) {
	const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`
	const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '')

=======
type Props = {
	title?: string
	description?: string
	children?: ReactNode
}

export default function SEO({ title = 'Zion Tech Group', description = 'AI & Technology Solutions', children }: Props) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-833f
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.join(', ')} />
			<meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
			{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
			<link rel="icon" href="/favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			<meta property="og:type" content={ogType} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			{canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
			<meta property="og:site_name" content="Zion Tech Group" />

			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />

			{structuredData && (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
			)}

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
		</Head>
	)
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-e382
}

export default SEO
=======
	);
}
>>>>>>> cursor/check-fix-push-and-merge-to-main-8f81
