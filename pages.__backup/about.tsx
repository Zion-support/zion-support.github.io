import Head from 'next/head';

export default function About() {
	return (
		<div>
			<Head>
				<title>About - Zion Tech Group</title>
			</Head>
			<main className="container mx-auto p-6">
				<h1 className="text-2xl font-semibold">About Zion Tech Group</h1>
				<p className="mt-4 text-gray-600">We build reliable, modern technology solutions.</p>
			</main>
		</div>
	);
}
