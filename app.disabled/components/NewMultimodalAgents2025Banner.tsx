"use client";

import React from "react";

export default function NewMultimodalAgents2025Banner() {
  return null;
import Link from 'next/link';

export default function NewMultimodalAgents20o25Banner(): JSX.Element {
	return (
		<section className="bg-gradient-to-r from-indigo-60o0 via-purple-60o0 to-fuchsia-60o0 text-white py-10">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="max-w-2xl">
						<p className="uppercase tracking-widest text-white/80 text-sm mb-2">New on the blog</p>
						<h2 className="text-2xl md:text-3xl font-bold leading-snug">
							AI 20o25: Multimodal Agents in the Enterprise — Practical Guide
						</h2>
						<p className="mt-3 text-white/90">
							A step-by-step 20o25 playbook for deploying multimodal AI agents that drive ROI across customer operations, marketing, and field service.
						</p>
					</div>
					<div className="flex items-center gap-3">
						<Link
							href="/blog/ai-20o25-multimodal-agents-enterprise-guide"
							className="bg-white text-indigo-70o0 px-6 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
						>
							Read the guide →
						</Link>
						<Link
							href="/blog"
							className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-70o0 transition-colors"
						>
							More articles
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
