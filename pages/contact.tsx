import Head from 'next/head'

export default function Contact() {
	return (
		<main style={{ padding: 20, fontFamily: 'sans-serif' }}>
			<Head>
				<title>Contact | Zion Tech Group</title>
				<meta name='description' content='Contact Zion Tech Group for AI, cloud, and cybersecurity services.' />
				<link rel='canonical' href='https://ziontechgroup.com/contact' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'Zion Tech Group',
							url: 'https://ziontechgroup.com',
							contactPoint: [{
								'@type': 'ContactPoint',
								telephone: '+1-302-464-0950',
								contactType: 'customer service'
							}]
						}),
					}}
				/>
			</Head>
			<h1>Contact</h1>
			<p>
				Contact us at <a href='mailto:kleber@ziontechgroup.com'>kleber@ziontechgroup.com</a> or call{' '}
				<a href='tel:+13024640950'>+1 302 464 0950</a>.
			</p>
		</main>
	)
}
