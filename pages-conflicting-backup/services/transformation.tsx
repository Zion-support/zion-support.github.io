import React from 'react';
import Link from 'next/link';

export default function TransformationServices() {
	return (
		<section className="mx-auto max-w-4xl px-4 py-12">
			<h1 className="text-3xl font-bold mb-4">Transformation</h1>
			<p className="text-gray-700 mb-4">Digital transformation and innovation programs.</p>
			<Link href="/services?category=transformation" className="text-indigo-600 hover:underline">View Transformation services →</Link>
		</section>
	);
}