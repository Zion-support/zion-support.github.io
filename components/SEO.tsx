import Head from 'next/head'
import type { ReactNode } from 'react'

<<<<<<< HEAD
=======
type SEOHeadProps = {
	title?: string
	description?: string
	keywords?: string[]
	canonical?: string
	ogImage?: string
	ogType?: string
	twitterCard?: string
	noIndex?: boolean
	structuredData?: object
=======
import Head from 'next/head';

interface SEOHeadProps {
	title?: string;
	description?: string;
	keywords?: string[];
	canonical?: string;
	ogImage?: string;
	ogType?: string;
	twitterCard?: string;
	noIndex?: boolean;
	structuredData?: object;
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
			{children}
		</Head>
	)
}

export default SEO
=======
	);
}
>>>>>>> cursor/check-fix-push-and-merge-to-main-8f81
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
