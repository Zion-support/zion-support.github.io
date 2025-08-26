import Head from 'next/head'

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Head>
				<title>Zion Tech Group</title>
				<meta name="description" content="Zion Tech Group website" />
			</Head>
			<main className="max-w-3xl mx-auto px-4 py-16">
				<h1 className="text-3xl font-bold mb-4">Zion Tech Group</h1>
				<p className="text-gray-300">Site setup successful. More pages re-enabling soon.</p>
			</main>
		</div>
	)
}
