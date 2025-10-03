// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export default function EdgeNativeAgents2027Banner() {
	return (
		<div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 text-white py-8 border-b border-white/10">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
					<div>
						<div className="text-sm uppercase tracking-wider text-white/80 mb-1">New article</div>
						<h2 className="text-2xl md:text-3xl font-bold">AI 2027: Edge‑Native Agents</h2>
						<p className="text-white/80">Sub‑50ms latency with guardrails, observability, and cost control.</p>
					</div>
					<Link href="/blog/ai-2027-edge-native-agents" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
						Read now <span>→</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

