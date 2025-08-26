import Link from 'next/link'
import Head from 'next/head'

export default function Solutions() {
	return (
		<>
			<Head>
				<title>Solutions | Zion Tech Group</title>
				<meta name="description" content="Explore industry and platform solutions from Zion Tech Group." />
			</Head>
			<section className="py-10">
				<h1 className="text-3xl font-bold mb-4">Solutions</h1>
				<ul className="list-disc pl-5 space-y-1 text-gray-700">
					<li><Link className="text-cyan-700 hover:underline" href="/services/ai">Enterprise AI</Link></li>
					<li><Link className="text-cyan-700 hover:underline" href="/services/cloud">Cloud Modernization</Link></li>
					<li><Link className="text-cyan-700 hover:underline" href="/services/cybersecurity">Cybersecurity</Link></li>
				</ul>
			</section>
		</>
	)
}