import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function News() {
	useEffect(() => {
		// Static export friendly: keep content visible, no hard redirect
	}, []);
	return (
		<>
			<Head>
				<title>News | Zion Tech Group</title>
				<meta name="description" content="Latest news and updates from Zion Tech Group." />
			</Head>
			<section className="mx-auto max-w-4xl px-4 py-12">
				<h1 className="text-3xl font-bold mb-4">News</h1>
				<p className="text-gray-700 mb-6">We publish updates on our Blog. Visit the latest articles below.</p>
				<Link href="/blog" className="text-indigo-600 hover:underline">Go to Blog →</Link>
			</section>
		</>
	);
}