import React from 'react';
import Head from 'next/head';

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-8">
			<Head>
				<title>Zion Tech Group — AI, IT & Micro SaaS</title>
				<link rel="canonical" href="https://ziontechgroup.com" />
				<meta name="description" content="AI services, IT solutions, and micro SaaS by Zion Tech Group. Call +1 302 464 0950 or email kleber@ziontechgroup.com." />
			</Head>
			<h1 className="text-3xl font-bold text-gray-900 mb-4">Zion Tech Group</h1>
			<p className="text-gray-600 mb-4 text-center">
				We build real micro SaaS, enterprise IT, and AI solutions.
			</p>
			<p className="text-sm text-gray-500">
				Contact: <a className="text-blue-600" href="tel:+13024640950">+1 302 464 0950</a> ·{' '}
				<a className="text-blue-600" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
			</p>
		</div>
	);
}

