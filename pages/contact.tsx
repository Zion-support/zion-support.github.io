import Head from 'next/head'

export default function Contact() {
	const title = 'Contact — Zion Tech Group'
	const description = 'Contact Zion Tech Group for AI, cloud, cybersecurity, and micro SaaS solutions.'

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href="https://ziontechgroup.com/contact/" />
			</Head>
			<main className="mx-auto min-h-screen max-w-3xl px-6 py-12">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
				<p className="mt-3 text-gray-700">We typically respond within one business day.</p>
				<div className="mt-8 grid gap-6 sm:grid-cols-2">
					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Get in touch</h2>
						<ul className="mt-2 space-y-1 text-gray-800">
							<li>Phone: <a className="text-blue-600 hover:underline" href="tel:+13024640950">+1 302 464 0950</a></li>
							<li>Email: <a className="text-blue-600 hover:underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
							<li>Website: <a className="text-blue-600 hover:underline" href="https://ziontechgroup.com">ziontechgroup.com</a></li>
						</ul>
					</section>
					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Office</h2>
						<p className="mt-2 text-gray-800">364 E Main St STE 1008<br/>Middletown, DE 19709</p>
						<a className="mt-3 inline-block text-blue-600 underline" href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709">View on Maps</a>
					</section>
				</div>
				<div className="mt-8">
					<a className="rounded bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700" href="/request-quote/">Request a quote</a>
				</div>
			</main>
		</>
	)
}
