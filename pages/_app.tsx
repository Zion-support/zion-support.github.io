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
		<SiteLayout>
			<Script strategy="afterInteractive" data-domain="ziontechgroup.com" src="https://plausible.io/js/script.js" />
			<SEO canonical={canonical} url={canonical} />
			<Component {...pageProps} />
		</SiteLayout>
	);
}