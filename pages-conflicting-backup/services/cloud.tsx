import React from 'react';
import Link from 'next/link';

export default function CloudServices() {
	return (
		<section className="mx-auto max-w-4xl px-4 py-12">
			<h1 className="text-3xl font-bold mb-4">Cloud Services</h1>
			<p className="text-gray-700 mb-4">Migrations, platforms, and data infrastructure.</p>
			<Link href="/services?category=cloud" className="text-indigo-600 hover:underline">View Cloud services →</Link>
		</section>
	);
}