import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
	return (
		<>
			<Head>
				<title>404 - Page Not Found | Zion Tech Group</title>
				<meta name="description" content="Page not found." />
			</Head>
			<main className="mx-auto max-w-4xl px-4 py-12 text-center">
				<h1 className="text-6xl font-bold mb-4">404</h1>
				<h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
				<p className="text-gray-700 mb-8">The page you're looking for doesn't exist.</p>
				<Link href="/" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
					Go Home
				</Link>
			</main>
		</>
	);
}
