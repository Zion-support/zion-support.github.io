import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../src/index.css'
import EnhancedNavigation2025 from '../components/layout/EnhancedNavigation2025'
import EnhancedFooter from '../components/layout/EnhancedFooter'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#111827" />
				<meta name="robots" content="index,follow" />
				<meta property="og:site_name" content="Zion Tech Group" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ZionTechGroup" />
			</Head>
			<div className="min-h-screen flex flex-col bg-black text-white">
				<EnhancedNavigation2025 />
				<main className="flex-1">
					<Component {...pageProps} />
				</main>
				<EnhancedFooter />
			</div>
		</>
	)
}
