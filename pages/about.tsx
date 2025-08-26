import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/about" />
			</Head>
			<main className="min-h-screen flex items-center justify-center">
				<div>About Zion Tech Group</div>
			</main>
		</>
	);
}
