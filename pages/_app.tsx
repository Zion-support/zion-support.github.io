import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import '../src/index.css'
import EnhancedNavigation2025 from '../components/layout/EnhancedNavigation2025'
import EnhancedFooter from '../components/layout/EnhancedFooter'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'
	const path = router.asPath || '/'
	// Ensure absolute canonical with trailing slash behavior consistent with next.config.js
	const canonicalUrl = `${siteUrl}${path.endsWith('/') ? path : `${path}/`}`

	const defaultTitle = 'Zion Tech Group — AI, Quantum, and Autonomous Systems'
	const defaultDescription =
		'Zion Tech Group builds AI autonomous systems, quantum infrastructure, and Micro SaaS products that drive measurable outcomes.'
	const ogImage = `${siteUrl}/og-image.svg`

	const organizationJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Zion Tech Group',
		url: siteUrl,
		logo: `${siteUrl}/favicon.svg`,
		sameAs: [
			'https://www.linkedin.com/company/zion-tech-group/',
			'https://twitter.com/ZionTechGroup',
		],
	};

	return (
		<div className={inter.variable}>
			<Head>
				<title>{defaultTitle}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#111827" />
				<link rel="canonical" href={canonicalUrl} />
				<meta name="robots" content="index,follow" />
				<meta name="description" content={defaultDescription} />
				<meta property="og:site_name" content="Zion Tech Group" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={defaultTitle} />
				<meta property="og:description" content={defaultDescription} />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:image" content={ogImage} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ZionTechGroup" />
				<meta name="twitter:title" content={defaultTitle} />
				<meta name="twitter:description" content={defaultDescription} />
				<meta name="twitter:image" content={ogImage} />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
			</Head>
			<div className="min-h-screen flex flex-col bg-black text-white">
				<EnhancedNavigation2025 />
				<main className="flex-1">
					<Component {...pageProps} />
				</main>
				<EnhancedFooter />
			</div>
		</div>
	)
}