import type { AppProps } from 'next/app'
import '../styles/globals.css'
import React from 'react'
import UltraAdvancedNavigation2026V2 from '../components/layout/UltraAdvancedNavigation2026V2'
import Footer from '../components/layout/Footer'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<header className="sticky top-0 z-50 shadow-sm">
				<UltraAdvancedNavigation2026V2 />
			</header>
			<main className="flex-1">
				<Component {...pageProps} />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}