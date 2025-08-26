import React from 'react';
import Link from 'next/link';

export default function AIServices() {
	return (
		<section className="mx-auto max-w-4xl px-4 py-12">
			<h1 className="text-3xl font-bold mb-4">AI Services</h1>
			<p className="text-gray-700 mb-4">Explore our AI & ML offerings.</p>
			<Link href="/services?category=ai" className="text-indigo-600 hover:underline">View AI services →</Link>
		</section>
	);
}