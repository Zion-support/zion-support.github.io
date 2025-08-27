import React from 'react'
import { SEO } from '@/components/SEO'
// Prefer the existing implementation if present
let Impl: React.ComponentType | null = null
try {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	Impl = (await import('./services/AI')).default
} catch {}

const Fallback: React.FC = () => (
	<div className="min-h-screen bg-slate-950 text-white py-16">
		<SEO title="AI Services" description="Explore our AI-powered services and solutions." />
		<div className="container mx-auto max-w-3xl px-6">
			<h1 className="text-3xl font-bold mb-4">AI Services</h1>
			<p className="text-slate-300">Coming soon.</p>
		</div>
	</div>
)

export default (Impl || Fallback)

