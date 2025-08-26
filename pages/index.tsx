import Head from 'next/head'

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Zion Tech Group</title>
				<meta name="description" content="Zion Tech Group - Innovative technology solutions" />
			</Head>
			<div className="min-h-screen flex items-center justify-center p-8">
				<div className="max-w-2xl text-center">
					<h1 className="text-3xl font-bold mb-4">Zion Tech Group</h1>
					<p className="text-gray-600">Site maintenance in progress. Please check back soon.</p>
				</div>
			</div>
		</>
	)
}
