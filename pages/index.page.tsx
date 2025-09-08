import React from 'react';
import Head from 'next/head';

export default function HomeIndex() {
	return (
		<>
			<Head>
				<title>Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com" />
			</Head>
			<div className="min-h-screen flex items-center justify-center bg-black text-white">
				<div className="text-center space-y-4">
					<h1 className="text-3xl font-bold">Zion Tech Group</h1>
					<p>Visit our services overview:</p>
					<a className="text-cyan-400 underline" href="/services-advertising">Services Advertising</a>
				</div>
			</div>
		</>
	);
}