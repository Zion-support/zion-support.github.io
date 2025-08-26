import Head from 'next/head';

export default function About() {
	return (
		<div className="min-h-screen bg-zion-slate-dark text-white">
			<Head>
				<title>About | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/about" />
			</Head>
			<main className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">About Zion Tech Group</h1>
				<p className="text-zion-slate-light max-w-3xl">We build AI, cloud, and cybersecurity solutions to accelerate innovation.</p>
			</main>
		</div>
	);
}
