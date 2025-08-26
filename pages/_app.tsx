import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../src/index.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#111827" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}