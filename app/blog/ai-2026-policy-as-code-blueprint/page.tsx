import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Policy‑as‑Code Blueprint',
	description: 'Blueprint for encoding AI governance, approvals, and guardrails as code to ship safer autonomy.',
};

export default function PolicyAsCodeBlueprintPage() {
	return (
		<article className="min-h-screen bg-white">
			<header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
				<div className="max-w-4xl mx-auto px-6 py-14">
					<p className="text-purple-100/90 text-sm font-semibold">New • 2026</p>
					<h1 className="text-3xl md:text-5xl font-bold leading-tight">Policy‑as‑Code Blueprint</h1>
					<p className="mt-4 text-purple-100/90 max-w-2xl">
						Codify approvals, risk tiers, guardrails, and evaluation gates as versioned policy to scale safe
						autonomy across the enterprise.
					</p>
				</div>
			</header>

			<main className="max-w-4xl mx-auto px-6 py-10">
				<section className="prose prose-lg max-w-none">
					<h2>Why Policy‑as‑Code</h2>
					<p>
						Enterprises need auditable, testable controls for agent systems. Policy‑as‑code brings consistency,
						traceability, and automation to governance, enabling faster, safer releases.
					</p>

					<h2>Core Components</h2>
					<ul>
						<li>
							<strong>Risk Tiers:</strong> Map use cases to tiered controls for safety, reliability, and cost.
						</li>
						<li>
							<strong>Evaluation Gates:</strong> Enforce quality thresholds with scenario suites and scorecards.
						</li>
						<li>
							<strong>Approvals & Rollback Contracts:</strong> Standardize change management with clear criteria.
						</li>
						<li>
							<strong>Evidence Hub:</strong> Centralize artifacts for audit readiness and incident learning.
						</li>
					</ul>

					<h2>Adoption Steps</h2>
					<ol>
						<li>Define risk taxonomy and map to guardrails.</li>
						<li>Build policy libraries and tests alongside code.</li>
						<li>Integrate gates into CI/CD and runtime enforcement.</li>
						<li>Route artifacts to an evidence hub for reviews and audits.</li>
					</ol>
				</section>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
					<Link href="/blog/ai-2026-safe-tool-use-blueprint" className="block p-5 rounded-lg border hover:shadow-sm">
						<div className="text-sm font-semibold text-purple-700">Companion Guide</div>
						<div className="text-lg font-bold text-gray-900">Safe Tool Use Blueprint</div>
					</Link>
					<Link href="/blog/ai-2026-eval-gated-ci-cd-blueprint" className="block p-5 rounded-lg border hover:shadow-sm">
						<div className="text-sm font-semibold text-purple-700">Blueprint</div>
						<div className="text-lg font-bold text-gray-900">Eval‑Gated CI/CD</div>
					</Link>
				</div>
			</main>
		</article>
	);
}

