import React from 'react';
import { SEO } from '@/components/SEO';

export default function Accessibility() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
			<SEO 
				title="Accessibility - Zion Tech Group"
				description="Our commitment to inclusive, accessible experiences that meet WCAG 2.1 AA."
			/>
			<div className="container mx-auto px-4 max-w-4xl text-white">
				<h1 className="text-4xl font-bold mb-6">Accessibility</h1>
				<p className="text-zinc-300 mb-8">
					We are committed to ensuring our website and services are accessible to everyone, 
					including people with disabilities. Our goal is to conform to WCAG 2.1 AA standards.
				</p>
				<h2 className="text-2xl font-semibold mt-8 mb-3">Feedback</h2>
				<p className="text-zinc-300 mb-6">
					If you encounter accessibility barriers, please contact us at
					{' '}<a className="text-cyan-400 underline" href="mailto:info@ziontechgroup.com">info@ziontechgroup.com</a>.
				</p>
				<h2 className="text-2xl font-semibold mt-8 mb-3">Compatibility</h2>
				<p className="text-zinc-300">
					We support modern browsers and assistive technologies. We continuously test and improve 
					the experience to ensure a high level of accessibility across platforms.
				</p>
			</div>
		</div>
	);
}

