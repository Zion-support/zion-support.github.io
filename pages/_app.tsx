// Simplified app initialization - removed complex polyfills
console.log('🚀 Starting Zion App...');

import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import '../src/index.css'; // Temporarily disabled to test loading

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zion App - AI Marketplace & DAO Platform</title>
        <meta name="description" content="Zion App - The ultimate AI marketplace and DAO platform for the future of work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
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
			<div className="min-h-screen flex flex-col bg-black text-white">
				<main className="flex-1">
					<Component {...pageProps} />
				</main>
			</div>
		</div>
	)
}
