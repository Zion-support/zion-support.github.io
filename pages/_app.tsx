import type { AppProps } from 'next/app'
import Head from 'next/head'
import SiteLayout from '../components/SiteLayout'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<a href="#main" className="skip-link">Skip to main content</a>
			<DefaultSEO />
			<Analytics />
			<Component {...pageProps} />
		</SEOContext.Provider>
	);
}