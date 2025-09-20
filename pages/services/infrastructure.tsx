import React from 'react';
import Link from 'next/link';

export default function InfrastructureServices() {
	return (
		<section className="mx-auto max-w-4xl px-4 py-12">
			<h1 className="text-3xl font-bold mb-4">Infrastructure</h1>
			<p className="text-gray-700 mb-4">Reliable, scalable platforms and operations.</p>
			<Link href="/services?category=infrastructure" className="text-indigo-600 hover:underline">View Infrastructure services →</Link>
		</section>
	);
}