import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../src/index.css'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com'
	const path = router.asPath || '/'
	// Ensure absolute canonical with trailing slash behavior consistent with next.config.js
	const canonicalUrl = `${siteUrl}${path.endsWith('/') ? path : `${path}/`}`

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#111827" />
				<link rel="canonical" href={canonicalUrl} />
				<meta name="robots" content="index,follow" />
				<meta property="og:site_name" content="Zion Tech Group" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ZionTechGroup" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}