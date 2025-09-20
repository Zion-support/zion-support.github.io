import React from 'react';
import Link from 'next/link';

export default function ConsultingServices() {
	return (
		<section className="mx-auto max-w-4xl px-4 py-12">
			<h1 className="text-3xl font-bold mb-4">Consulting</h1>
			<p className="text-gray-700 mb-4">Strategy, roadmaps, and execution support.</p>
			<Link href="/services?category=consulting" className="text-indigo-600 hover:underline">View Consulting services →</Link>
		</section>
	);
}