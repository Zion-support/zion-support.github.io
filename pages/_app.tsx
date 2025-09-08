import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../src/index.css'
import { AppLayout } from '@/layout/AppLayout'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</>
	)
}
