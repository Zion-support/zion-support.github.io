import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ServiceSlugPage() {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<>
			<Head>
				<title>{slug ? `${slug} | Zion Tech Group` : 'Service | Zion Tech Group'}</title>
				<meta name="description" content="Service details and information." />
			</Head>
			<main className="mx-auto max-w-4xl px-4 py-12">
				<h1 className="text-3xl font-bold mb-4">
					{slug ? slug.toString().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Service'}
				</h1>
				<p className="text-gray-700">This page is under construction.</p>
			</main>
		</>
	);
}
