import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'Executive AI Roadmap — October 2025',
	description:
		'Clear 90-day plan for governed autonomy, cost guardrails, and data foundations to ship reliable AI.',
};

export default function ExecutiveAIRoadmapPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="bg-gradient-to-br from-indigo-50 to-blue-50 border-b border-gray-100">
				<div className="max-w-4xl mx-auto px-6 py-16">
					<div className="text-sm text-indigo-700 font-semibold mb-3">October 1, 2025 • Executive Guide</div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
						Executive AI Roadmap — Q4 2025
					</h1>
					<p className="mt-4 text-lg text-gray-700">
						A concise, practical 90-day plan to ship reliable AI: governed autonomy,
						cost guardrails, and data foundations that reduce risk while accelerating ROI.
					</p>
					<div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
						<span>⏱️ 9 min read</span>
						<span>•</span>
						<Link href="/blog" className="text-indigo-600 hover:text-indigo-700 font-medium">All Articles</Link>
					</div>
				</div>
			</section>

			<section>
				<div className="max-w-4xl mx-auto px-6 py-12 prose prose-indigo">
					<h2>Why now</h2>
					<p>
						Organizations are moving beyond pilots. The next quarter is about durable
						impact with controls: policy-first orchestration, runtime guardrails, and
						financial accountability.
					</p>

					<h2>30/60/90 plan</h2>
					<ol>
						<li>
							<strong>Days 1–30:</strong> Establish decision policies, enable evaluation
							pipelines, and instrument cost/latency/reliability scorecards.
						</li>
						<li>
							<strong>Days 31–60:</strong> Introduce multi-model routing and caching with
							budgets and rollback. Prove 30–50% cost reduction without quality loss.
						</li>
						<li>
							<strong>Days 61–90:</strong> Expand to agentic workflows with human-in-the-loop
							checkpoints. Track business KPIs with live scorecards.
						</li>
					</ol>

					<h2>Reference architecture</h2>
					<ul>
						<li>Policy engine controlling prompts, tools, and data access</li>
						<li>Online evaluations validating outputs and safety</li>
						<li>Cost-aware router with caching and model fallbacks</li>
						<li>Observability: traces, cost, latency, and quality signals</li>
					</ul>

					<h2>Business outcomes</h2>
					<ul>
						<li>30–70% AI cost reduction via routing and caching</li>
						<li>Reduced incident frequency and impact with guardrails</li>
						<li>Measured ROI tied to critical KPIs and SLAs</li>
					</ul>

					<h2>Next steps</h2>
					<p>
						Start with one high-value workflow and extend. Treat the roadmap as a
						living document—iterate weekly with data from evaluations and scorecards.
					</p>
				</div>
			</section>
		</main>
	);
}

