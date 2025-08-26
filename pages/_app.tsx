import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../src/index.css'
import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/layout/SiteFooter'
import SiteSidebar from '../components/layout/SiteSidebar'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#111827" />
			</Head>
			<SiteHeader />
			<div className="mx-auto max-w-7xl px-4 flex gap-8">
				<SiteSidebar />
				<main className="flex-1 min-h-screen">
					<Component {...pageProps} />
				</main>
			</div>
			<SiteFooter />
		</>
	)
}