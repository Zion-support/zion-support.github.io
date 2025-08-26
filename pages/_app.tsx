import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Analytics from '../components/Analytics';
import { Inter } from 'next/font/google';

export default function App({ Component, pageProps }: any) {
	const router = useRouter();
	const baseUrl = 'https://ziontechgroup.com';
	const canonical = `${baseUrl}${router.asPath === '/' ? '' : router.asPath}`.replace(/\/$/, '/');
	return (
		<SEOContext.Consumer>
			{(ctx) => {
				const alreadyRendered = ctx?.renderedRef?.current;
				if (alreadyRendered) return null;
				if (!renderedRef.current) renderedRef.current = true;
				return <SEO />;
			}}
		</SEOContext.Consumer>
	);
}

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<Analytics />
			<div className={inter.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
			<DefaultSEO />
		</SEOContext.Provider>
	);
}