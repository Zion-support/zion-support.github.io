import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Zion Tech Group</title>
				<meta name="description" content="AI, cloud, and cybersecurity solutions." />
			</Head>
			<main className="mx-auto max-w-5xl px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
				<p className="text-gray-700 mb-6">Building modern AI, cloud, and security solutions.</p>
				<div className="flex gap-3">
					<Link href="/services" className="px-5 py-3 rounded bg-indigo-600 text-white hover:bg-indigo-700">View Services</Link>
					<Link href="/contact" className="px-5 py-3 rounded border hover:bg-gray-50">Contact</Link>
				</div>
			</main>
		</>
	);
}
