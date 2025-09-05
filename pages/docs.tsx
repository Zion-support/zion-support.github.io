import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function DocsPage() {
	return (
		<Layout>
			<Head>
				<title>Documentation | Zion Tech Group</title>
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/docs&quot; />
			</Head>
			<section className=&quot;container mx-auto px-4 py-24&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6&quot;>Documentation</h1>
				<p className=&quot;text-gray-300&quot;>Guides, API docs, and best practices. Coming soon.</p>
			</section>
		</Layout>
	)
}
