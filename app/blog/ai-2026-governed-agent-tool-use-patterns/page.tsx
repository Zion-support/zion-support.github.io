import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Governed Agent Tool‑Use Patterns — Practical Playbook',
	description:
		'Risk‑tiered autonomy, eval‑gated tools, and policy‑as‑code patterns for safe, scalable agent tool‑use.',
};

export default function Page() {
	return (
		<div className="min-h-screen bg-white">
			<section className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">Governed Agent Tool‑Use Patterns</h1>
					<p className="text-lg opacity-90">
						Risk‑tiered autonomy, eval gates, and policy‑as‑code to keep tool‑use safe at scale.
					</p>
				</div>
			</section>

			<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-purple">
				<p>
					Production agent platforms must balance velocity with risk. This playbook provides concrete
					patterns to govern tool‑use with evaluation gates, policy‑as‑code, and evidence capture so teams
					can ship fast without sacrificing safety.
				</p>

				<h2>Core Concepts</h2>
				<ul>
					<li>Risk tiers mapping tools and actions to oversight requirements</li>
					<li>Eval‑gated tool execution with pass thresholds and rollback contracts</li>
					<li>Policy‑as‑code for approvals, budgets, and guardrails</li>
					<li>Evidence hub: inputs, outputs, decisions, and metrics for auditability</li>
				</ul>

				<h2>Reference Patterns</h2>
				<ol>
					<li>
						<strong>Pre‑Execution Checks:</strong> scenario evals, rate limits, and budget guards before
						tool invocation.
					</li>
					<li>
						<strong>Inline Guarded Calls:</strong> wrap tool adapters with policy checks and telemetry
						emission.
					</li>
					<li>
						<strong>Post‑Execution Scoring:</strong> safety/quality scorers with automatic remediation or
						rollback.
					</li>
				</ol>

				<div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
					<h3 className="m-0">Related resources</h3>
					<ul>
						<li>
							<Link href="/blog/ai-2026-agent-platform-guardrails-blueprint">Agent Platform Guardrails Blueprint</Link>
						</li>
						<li>
							<Link href="/blog/ai-2026-agent-risk-mitigation-playbook">Agent Risk Mitigation Playbook</Link>
						</li>
						<li>
							<Link href="/blog/ai-2026-eval-gates-success-metrics">Eval Gates Success Metrics</Link>
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}

