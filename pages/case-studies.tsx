import React from 'react';
import Head from 'next/head';

export default function CaseStudiesPage() {
	return (
		<>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<meta name="description" content="Case Studies by Zion Tech Group" />
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					<h1 className="text-4xl font-bold mb-4">Case Studies</h1>
					<p className="text-white/80 max-w-2xl">Coming soon: success stories and outcomes.</p>
				</div>
			</main>
		</>
	);
}