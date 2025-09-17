import Link from 'next/link';
import React from 'react';

export const metadata = {
	title: 'AI 2026: Executive AI Security Playbook',
	description:
		'Practical, board-ready playbook for securing AI systems: policy-as-code, eval-gated releases, and evidence-driven assurance.',
};

export default function Page() {
	return (
		<div className="min-h-screen bg-white">
			<section className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">Executive AI Security Playbook</h1>
					<p className="text-lg opacity-90">A concise guide to govern, secure, and ship safe autonomy with audit-ready evidence.</p>
				</div>
			</section>

			<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
				<p>
					Executives need clear mechanisms to reduce AI risk while accelerating delivery. This playbook outlines
					policy-as-code controls, evaluation gates, and evidence bundles that make safety measurable and
					audit-ready.
				</p>

				<h2>Core Controls</h2>
				<ul>
					<li>Policy-as-Code: codified rules for data, tools, identities, and actions</li>
					<li>Eval Gates: pre-prod and runtime checks that block unsafe changes</li>
					<li>Evidence Bundles: artifacts tying outcomes to approvals and posture</li>
					<li>Tiered Tooling: risk-aligned permissions and sandboxes by operation class</li>
				</ul>

				<h2>Executive Scorecard</h2>
				<ol>
					<li>Safety SLOs met over last 30/90 days</li>
					<li>Incident rate and time-to-mitigate</li>
					<li>Change failure rate across models/tools</li>
					<li>Evidence completeness for releases</li>
				</ol>

				<div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
					<h3 className="m-0">Related resources</h3>
					<ul>
						<li><Link href="/blog/ai-2026-policy-as-code-blueprint">Policy‑as‑Code Blueprint</Link></li>
						<li><Link href="/blog/ai-2026-production-safety-checklist">Production Safety Checklist</Link></li>
						<li><Link href="/blog/ai-2026-guardrail-scorecards-executive-brief">Guardrail Scorecards — Executive Brief</Link></li>
					</ul>
				</div>
			</main>
		</div>
	);
}

