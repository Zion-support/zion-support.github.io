import Head from 'next/head'
<<<<<<< HEAD
=======

export default function Contact(){return (<main style={{padding:20,fontFamily:'sans-serif',lineHeight:1.6,maxWidth:800,margin:'0 auto'}}>
<Head>
	<title>Contact | Zion Tech Group</title>
	<meta name="description" content="Contact Zion Tech Group for Micro SaaS, IT, and AI services. Phone +1 302 464 0950." />
	<link rel="canonical" href="https://ziontechgroup.com/contact/" />
</Head>
<h1>Contact</h1>
<p>We’d love to hear about your project. Reach us via any of the channels below.</p>
>>>>>>> b2e805513c8ec2ec4ec0f701770203a474e1624d

export default function Contact() {
	const title = 'Contact — Zion Tech Group'
	const description = 'Contact Zion Tech Group for AI, cloud, and cybersecurity solutions.'

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<main className="mx-auto min-h-screen max-w-3xl px-6 py-12">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
				<p className="mt-3 text-gray-700">We typically respond within one business day.</p>
				<div className="mt-8 rounded-lg border p-6">
					<p className="text-gray-800">
						Email us at{' '}
						<a className="text-blue-600 hover:underline" href="mailto:contact@ziontechgroup.com">
							contact@ziontechgroup.com
						</a>
					</p>
					<p className="mt-2 text-gray-800">Or request a quote and we will reach out:</p>
					<a className="mt-4 inline-block rounded bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700" href="/request-quote/">
						Request a quote
					</a>
				</div>
			</main>
		</>
	)
}
