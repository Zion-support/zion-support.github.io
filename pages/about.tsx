import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About | Zion Tech Group</title>
				<meta name="description" content="About Zion Tech Group" />
				<link rel="canonical" href="https://ziontechgroup.com/about" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					<h1 className="text-4xl font-bold mb-4">About Us</h1>
					<p className="text-white/80 max-w-2xl">We build autonomous systems and cutting-edge technology solutions.</p>
				</div>
			</main>
		</>
	);
}