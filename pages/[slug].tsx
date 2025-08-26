import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DynamicFallbackPage() {
	return (
		<>
			<Head>
				<title>Page Not Found | Zion Tech Group</title>
				<meta name="robots" content="noindex" />
			</Head>
			<main className="container mx-auto px-4 py-24 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Page Not Found</h1>
				<p className="text-gray-300 mb-8">This page does not exist. Explore our main sections below.</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Link href="/services" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl">Browse Services</Link>
					<Link href="/contact" className="border border-gray-600 text-gray-200 px-6 py-3 rounded-xl">Contact Us</Link>
				</div>
			</main>
		</>
	)
}
