import Head from 'next/head'

export default function Index() {
	return (
		<main style={{ padding: 20, fontFamily: 'sans-serif' }}>
			<Head>
				<title>Zion Tech Group | AI, Cloud, and Cybersecurity Services</title>
				<meta
					name='description'
					content='Zion Tech Group delivers AI, cloud, and cybersecurity solutions to accelerate digital transformation.'
				/>
				<meta name='robots' content='index,follow' />
				<link rel='canonical' href='https://ziontechgroup.com/' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'Zion Tech Group',
							url: 'https://ziontechgroup.com/',
							logo: 'https://ziontechgroup.com/icon-512x512.png'
						}),
					}}
				/>
			</Head>
			<h1>Zion Tech Group</h1>
			<p>World-class AI, cloud, and cybersecurity services.</p>
			<a href='/services' style={{ color: '#2563eb' }}>
				Explore Services
			</a>
		</main>
	)
}
