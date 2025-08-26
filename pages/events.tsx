import React from 'react';
import Head from 'next/head';

export default function EventsPage() {
	return (
		<>
			<Head>
				<title>Events | Zion Tech Group</title>
				<meta name="description" content="Events by Zion Tech Group" />
				<link rel="canonical" href="https://ziontechgroup.com/events" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					<h1 className="text-4xl font-bold mb-4">Events</h1>
					<p className="text-white/80 max-w-2xl">No events scheduled. Check back soon.</p>
				</div>
			</main>
		</>
	);
}