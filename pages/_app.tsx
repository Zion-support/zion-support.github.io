import type { AppProps } from 'next/app';
import React, { useRef } from 'react';
import '../styles/globals.css';
import { SEOContext } from '../components/SEOContext';
import DefaultSEO from '../components/DefaultSEO';
import Analytics from '../components/Analytics';
import SiteHeader from '../components/layout/SiteHeader';
import SiteFooter from '../components/layout/SiteFooter';
import SiteSidebar from '../components/layout/SiteSidebar';

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<a href="#main" className="skip-link">Skip to main content</a>
			<DefaultSEO />
			<Analytics />
			<SiteHeader />
			<div className="min-h-screen">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
					<aside className="hidden lg:block lg:col-span-3">
						<SiteSidebar />
					</aside>
					<main id="main" className="col-span-1 lg:col-span-9">
						<Component {...pageProps} />
					</main>
				</div>
			</div>
			<SiteFooter />
		</SEOContext.Provider>
	);
}
