import Head from 'next/head'

export default function News() {
	return (
		<>
			<Head>
				<title>News | Zion Tech Group</title>
				<meta name="description" content="Company news and announcements." />
			</Head>
			<section className="py-10">
				<h1 className="text-3xl font-bold mb-3">News</h1>
				<p className="text-gray-700">Latest updates and announcements will appear here.</p>
			</section>
		</>
	)
}