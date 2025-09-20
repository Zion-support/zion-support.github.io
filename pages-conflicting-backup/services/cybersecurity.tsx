import React from 'react';
import Link from 'next/link';

export default function CybersecurityServices() {
	return (
		<section className="mx-auto max-w-4xl px-4 py-12">
			<h1 className="text-3xl font-bold mb-4">Cybersecurity</h1>
			<p className="text-gray-700 mb-4">Assessments, Zero Trust, compliance.</p>
			<Link href="/services?category=cybersecurity" className="text-indigo-600 hover:underline">View Cybersecurity services →</Link>
		</section>
	);
}