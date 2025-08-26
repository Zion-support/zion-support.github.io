import Head from 'next/head'

export default function Services() {
	return (
		<main style={{ padding: 20, fontFamily: 'sans-serif' }}>
			<Head>
				<title>Services | Zion Tech Group</title>
				<meta name='description' content='Explore Zion Tech Group services: AI, cloud, cybersecurity.' />
				<link rel='canonical' href='https://ziontechgroup.com/services' />
			</Head>
			<h1>Services</h1>
			<ul>
				<li>AI Solutions</li>
				<li>Cloud Engineering</li>
				<li>Cybersecurity</li>
			</ul>
		</main>
	)
}
