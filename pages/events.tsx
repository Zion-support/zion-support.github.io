import Head from 'next/head'

export default function Events() {
	return (
		<main className="container mx-auto px-4 py-12">
			<Head>
				<title>Events | Zion Tech Group</title>
				<meta name="description" content="Upcoming events and webinars" />
			</Head>
			<h1 className="text-3xl font-bold mb-4">Events</h1>
			<p>Upcoming events will be listed here. For inquiries, contact us via the Contact page.</p>
		</main>
	)
}