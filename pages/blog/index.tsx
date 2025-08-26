import Head from 'next/head'
import Link from 'next/link'

export default function BlogIndex() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Head>
				<title>Blog | Zion Tech Group</title>
			</Head>
			<main className="max-w-3xl mx-auto px-4 py-16">
				<h1 className="text-3xl font-bold mb-6">Blog</h1>
				<p className="text-gray-300 mb-6">No posts yet. Check back soon.</p>
				<Link href="/" className="text-cyan-400">Back to home</Link>
			</main>
		</div>
	)
}
