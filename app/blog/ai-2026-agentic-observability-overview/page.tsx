import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Agentic Observability — Executive Overview',
	description: 'Overview of traces, evals, incidents, and KPIs for agentic systems to ship reliable autonomy.',
};

export default function AgenticObservabilityOverviewPage() {
	return (
		<article className="min-h-screen bg-white">
			<header className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white">
				<div className="max-w-4xl mx-auto px-6 py-14">
					<p className="text-pink-100/90 text-sm font-semibold">New • 2026</p>
					<h1 className="text-3xl md:text-5xl font-bold leading-tight">Agentic Observability — Executive Overview</h1>
					<p className="mt-4 text-pink-100/90 max-w-2xl">
						Gain deep visibility with traces, evaluation gates, incident timelines, and release scorecards to
						operate agent platforms with confidence.
					</p>
				</div>
			</header>

			<main className="max-w-4xl mx-auto px-6 py-10">
				<section className="prose prose-lg max-w-none">
					<h2>Key Telemetry</h2>
					<ul>
						<li><strong>Spans & Traces:</strong> End‑to‑end flow visibility across tools, models, and services.</li>
						<li><strong>Live Evals:</strong> Policy‑gated checks on safety, quality, reliability, and cost.</li>
						<li><strong>Incidents:</strong> Structured timelines with detection, mitigation, and prevention signals.</li>
						<li><strong>KPIs:</strong> SLO‑aligned scorecards powering change decisions and rollbacks.</li>
					</ul>

					<h2>Operating Model</h2>
					<ol>
						<li>Instrument agent workflows with standardized spans and attributes.</li>
						<li>Wire evaluation gates to releases and runtime, backed by scenario suites.</li>
						<li>Adopt evidence hubs for audits and post‑incident reviews.</li>
						<li>Use scorecards and rollback contracts to ship faster and safer.</li>
					</ol>
				</section>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
					<Link href="/blog/ai-2026-agentic-observability-deep-dive" className="block p-5 rounded-lg border hover:shadow-sm">
						<div className="text-sm font-semibold text-purple-700">Deep Dive</div>
						<div className="text-lg font-bold text-gray-900">Agentic Observability</div>
					</Link>
					<Link href="/blog/ai-2026-release-scorecards" className="block p-5 rounded-lg border hover:shadow-sm">
						<div className="text-sm font-semibold text-purple-700">Scorecards</div>
						<div className="text-lg font-bold text-gray-900">Release Scorecards</div>
					</Link>
				</div>
			</main>
		</article>
	);
}

