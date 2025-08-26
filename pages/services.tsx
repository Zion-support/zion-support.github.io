import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
	return (
		<>
			<Head>
				<title>Services | Zion Tech Group</title>
			</Head>
			<section className="mx-auto max-w-6xl px-4 py-12">
				<h1 className="text-3xl font-bold mb-6">Services</h1>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<Link href="/services/ai" className="rounded border p-6 hover:bg-gray-50">AI & Machine Learning</Link>
					<Link href="/services/cloud" className="rounded border p-6 hover:bg-gray-50">Cloud & Data</Link>
					<Link href="/services/cybersecurity" className="rounded border p-6 hover:bg-gray-50">Cybersecurity</Link>
					<Link href="/services/infrastructure" className="rounded border p-6 hover:bg-gray-50">Infrastructure</Link>
					<Link href="/services/transformation" className="rounded border p-6 hover:bg-gray-50">Transformation</Link>
					<Link href="/services/consulting" className="rounded border p-6 hover:bg-gray-50">Consulting</Link>
				</div>
			</section>
		</>
	);
}
