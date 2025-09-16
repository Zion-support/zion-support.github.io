import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Agentic Evidence Hub — Executive Overview',
	description:
		'Why enterprises need a centralized, audit-ready evidence hub for safe autonomous operations: metrics, artifacts, and release governance.',
};

export default function AgenticEvidenceHubOverviewPage() {
	return (
		<main className="min-h-screen bg-white">
			<section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<p className="text-sm font-semibold text-emerald-700">Executive overview • 2026</p>
					<h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Agentic Evidence Hub</h1>
					<p className="mt-3 text-gray-700 leading-relaxed">
						Enterprises shipping agentic systems need defensible, audit-ready evidence. This overview outlines the minimal viable
						evidence model, how to unify artifacts from evaluations, incidents, releases, and runtime guardrails, and how to wire
						policy-as-code to enable safe, fast autonomy at scale.
					</p>
				</div>
			</section>

			<section className="py-12">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-purple">
					<h2>Why an Evidence Hub?</h2>
					<p>
						Agentic systems continuously change. To ship safely, teams must centralize evaluation results, deployment scorecards,
						rollback contracts, incident timelines, and approvals. A unified hub shortens audit cycles, de-risks launches, and
						enables quantitative governance.
					</p>

					<h3>Core Capabilities</h3>
					<ul>
						<li>Evidence model: scenarios, metrics, thresholds, sign-offs, and lineage</li>
						<li>Release scorecards: gate criteria, canary analysis, and rollback readiness</li>
						<li>Runtime guardrails: policy-as-code checks with evidence capture</li>
						<li>Incident dossiers: triage, mitigations, postmortems, and lessons learned</li>
						<li>Compliance views: auditor-friendly narratives mapped to controls</li>
					</ul>

					<h3>Adoption Path</h3>
					<ol>
						<li>Start with a minimal evidence schema and evaluation harness integration</li>
						<li>Introduce scorecards into change management workflows</li>
						<li>Capture runtime guardrail decisions and link to incidents</li>
						<li>Automate approvals and enforce policy gates in CI/CD</li>
					</ol>

					<div className="not-prose mt-8 flex flex-wrap gap-3">
						<Link
							href="/blog/ai-2026-release-scorecards"
							className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700"
						>
							Release Scorecards
						</Link>
						<Link
							href="/blog/ai-2026-safe-rollouts-in-production"
							className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50"
						>
							Safe Rollouts
						</Link>
						<Link
							href="/blog/ai-2026-evaluations-in-production"
							className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50"
						>
							Evals in Production
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}

