import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Zion Tech Group</title>
			</Head>
			<main className="container mx-auto p-6">
				<h1 className="text-2xl font-semibold">Welcome to Zion Tech Group</h1>
				<p className="mt-4 text-gray-600">Site is under maintenance. Please check back soon.</p>
			</main>
		</div>
	);
}
