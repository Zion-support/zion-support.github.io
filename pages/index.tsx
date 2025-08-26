import React from 'react'

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'

	return (
		<>
			<main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
				<h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
					Zion Tech Group
				</h1>
				<p className="text-xl text-gray-700 mb-8 max-w-3xl">
					{description}
				</p>
				
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
					<div className="rounded-lg border p-6">
						<h2 className="text-xl font-semibold mb-3">AI Autonomous Systems</h2>
						<p className="text-gray-600 mb-4">
							Multi-agent copilots, RAG workflows, and intelligent automation that scales.
						</p>
						<a href="/services" className="text-blue-600 hover:underline">Learn more →</a>
					</div>
					
					<div className="rounded-lg border p-6">
						<h2 className="text-xl font-semibold mb-3">Cloud Platforms</h2>
						<p className="text-gray-600 mb-4">
							Serverless architectures, Kubernetes, and data pipelines built for scale.
						</p>
						<a href="/services" className="text-blue-600 hover:underline">Learn more →</a>
					</div>
					
					<div className="rounded-lg border p-6">
						<h2 className="text-xl font-semibold mb-3">Cybersecurity</h2>
						<p className="text-gray-600 mb-4">
							Zero-trust frameworks, compliance, and incident response that protects.
						</p>
						<a href="/services" className="text-blue-600 hover:underline">Learn more →</a>
					</div>
				</div>

				<div className="text-center">
					<a 
						href="/contact" 
						className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
					>
						Get Started
					</a>
				</div>
			</main>
		</>
	)
}
