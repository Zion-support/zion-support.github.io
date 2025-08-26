import Head from 'next/head'

export default function About() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Head>
				<title>About | Zion Tech Group</title>
			</Head>
			<main className="max-w-3xl mx-auto px-4 py-16">
				<h1 className="text-3xl font-bold mb-4">About Zion Tech Group</h1>
				<p className="text-gray-300">We build practical AI, cloud, and security solutions focused on measurable business outcomes.</p>
			</main>
		</div>
	)
}
