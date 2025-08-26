import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact | Zion Tech Group</title>
				<meta name="description" content="Contact Zion Tech Group" />
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					<h1 className="text-4xl font-bold mb-4">Contact</h1>
					<p className="text-white/80 max-w-2xl">Email: kleber@ziontechgroup.com • Phone: +1 302 464 0950</p>
				</div>
			</main>
		</>
	);
}