import React from 'react';

export default function RealTimeAgentRouting2026() {
	return (
		<div className="min-h-screen bg-slate-950 text-white">
			<main className="max-w-3xl mx-auto px-6 py-16">
				<h1 className="text-4xl font-extrabold mb-4">Real-Time Agent Routing 2026</h1>
				<p className="text-white/70 mb-8">
					Adaptive routing across tools, models, and memory graphs to optimize latency, cost, and
					reliability. Close the loop with traces, evals, and budget-aware orchestration.
				</p>
				<section className="space-y-6">
					<h2 className="text-2xl font-bold">Architecture</h2>
					<ul className="list-disc pl-6 space-y-2 text-white/90">
						<li>Signal bus: tokens, retries, tool outcomes, cache events</li>
						<li>Policy engine: guardrails, budgets, change review gates</li>
						<li>Planner + router: skills, embeddings, and cost models</li>
					</ul>
				</section>
				<section className="space-y-6 mt-8">
					<h2 className="text-2xl font-bold">KPIs</h2>
					<ul className="list-disc pl-6 space-y-2 text-white/90">
						<li>p95 latency, success rate, unit economics per outcome</li>
						<li>Hallucination risk and safe completion rate</li>
						<li>Rollback frequency after deployment</li>
					</ul>
				</section>
				<section className="space-y-6 mt-8">
					<h2 className="text-2xl font-bold">Playbook</h2>
					<p className="text-white/80">
						Start with offline evals, ship canaries with policy tests, then progressively tighten
						budgets and increase automation once SLOs are stable.
					</p>
				</section>
			</main>
		</div>
	);
}

