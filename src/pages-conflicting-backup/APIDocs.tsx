import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';

export default function APIDocs() {
	return (
		<>
			<Header />
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-3xl font-bold mb-4 text-white">API Documentation</h1>
				<p className="text-gray-300 max-w-2xl">
					Our public API documentation will be published here. For now, contact us at
					{' '}<a href="/contact" className="text-zion-cyan underline">Contact</a> for access and details.
				</p>
			</main>
			<Footer />
		</>
	);
}