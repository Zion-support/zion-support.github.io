import React, { useRef } from 'react';
import '../styles/globals.css';
import { SEOContext } from '../components/SEOContext';
import DefaultSEO from '../components/DefaultSEO';
import Analytics from '../components/Analytics';

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<a href="#main" className="skip-link">Skip to main content</a>
			<DefaultSEO />
			<Analytics />
			<Component {...pageProps} />
		</SEOContext.Provider>
	);
}
import '../styles/globals.css';
import SiteLayout from '../components/layout/SiteLayout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SiteLayout>
			<Component {...pageProps} />
		</SiteLayout>
	);
}
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SiteLayout from '../components/SiteLayout'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SiteLayout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#0b1020" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap" rel="stylesheet" />
			</Head>
			<Component {...pageProps} />
		</SiteLayout>
	)
}
