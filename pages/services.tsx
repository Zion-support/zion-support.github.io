import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code } from 'lucide-react'

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI, cloud, and cybersecurity solutions that scale your business.'

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<main className="min-h-screen bg-white text-gray-900">
				<section className="mx-auto max-w-5xl px-6 py-16">
					<h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Our Services</h1>
					<p className="mt-4 max-w-2xl text-lg text-gray-700">
						We deliver production-grade platforms and solutions across AI, cloud, and cybersecurity.
					</p>
				</section>
				
				<section className="mx-auto max-w-5xl px-6 pb-16">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div className="rounded-lg border p-6">
							<Brain className="h-8 w-8 text-blue-600 mb-4" />
							<h3 className="text-lg font-medium mb-2">AI Autonomous Systems</h3>
							<p className="text-gray-700 mb-4">Multi-agent workflows for sales, support, and operations.</p>
							<Link href="/ai-solutions" className="text-blue-600 hover:text-blue-700 flex items-center">
								Learn more <ArrowRight className="ml-1 h-4 w-4" />
							</Link>
						</div>
						
						<div className="rounded-lg border p-6">
							<Cloud className="h-8 w-8 text-blue-600 mb-4" />
							<h3 className="text-lg font-medium mb-2">Cloud Platforms</h3>
							<p className="text-gray-700 mb-4">Serverless and container platforms with observability.</p>
							<Link href="/solutions" className="text-blue-600 hover:text-blue-700 flex items-center">
								Learn more <ArrowRight className="ml-1 h-4 w-4" />
							</Link>
						</div>
						
						<div className="rounded-lg border p-6">
							<Shield className="h-8 w-8 text-blue-600 mb-4" />
							<h3 className="text-lg font-medium mb-2">Cybersecurity</h3>
							<p className="text-gray-700 mb-4">Zero-trust architecture and compliance automation.</p>
							<Link href="/solutions" className="text-blue-600 hover:text-blue-700 flex items-center">
								Learn more <ArrowRight className="ml-1 h-4 w-4" />
							</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
