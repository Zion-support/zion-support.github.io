import React from 'react';
import Head from 'next/head';

export default function HomePage() {
	return (
		<main style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16}}>
			<Head>
				<title>Zion Tech Group</title>
				<meta name="description" content="Zion Tech Group — AI, automation, and emerging tech solutions." />
			</Head>
			<h1 style={{fontSize: 28, margin: 0}}>Zion Tech Group</h1>
			<p style={{opacity: 0.8, margin: 0}}>Site under maintenance. Please check back soon.</p>
			<a href="/services" style={{marginTop: 12, textDecoration: 'underline'}}>View Services</a>
		</main>
	);
}
