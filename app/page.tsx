import React from 'react'
import Link from 'next/link'

export const metadata = {
	title: 'Zion Tech Group',
	description: 'AI & Technology Solutions',
}

export default function HomePage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
			<div className="max-w-2xl text-center">
				<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Zion Tech Group</h1>
				<p className="text-gray-300 mb-8">Transform your business with trustworthy AI, cloud, and automation.</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link href="/services" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Explore Services</Link>
					<Link href="/contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700">Contact Us</Link>
				</div>
			</div>
		</div>
	)
}

