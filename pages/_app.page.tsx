import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Zion Tech Group — AI, IT & Micro SaaS</title>
				<link rel="canonical" href="https://ziontechgroup.com" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

