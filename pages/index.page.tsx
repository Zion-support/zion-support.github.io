import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Zion Tech Group</title>
				<meta name="description" content="Zion Tech Group - AI, Cybersecurity, and Cloud Services" />
			</Head>
			<main style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '2rem'}}>
				<h1 style={{fontSize: '2rem', marginBottom: '1rem'}}>Zion Tech Group</h1>
				<p style={{opacity: 0.8, marginBottom: '1rem'}}>Welcome. This minimal homepage is temporarily in place while we stabilize the build.</p>
				<Link href="/services" legacyBehavior>
					<a style={{color: '#2563eb', textDecoration: 'underline'}}>View Services</a>
				</Link>
			</main>
		</>
	);
}