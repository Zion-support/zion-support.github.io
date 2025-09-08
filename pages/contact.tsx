import Head from 'next/head';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact | Zion Tech Group</title>
				<meta name="description" content="Get in touch with Zion Tech Group" />
			</Head>
			<h1 className="text-2xl font-semibold mb-4">Contact</h1>
			<p>Email: info@ziontechgroup.com</p>
		</>
	);
}
