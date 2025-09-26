import { Link } from 'react-router-dom';

export const metadata = {
	title: 'AI 2026: Evidence‑Led Operations — Practical Blueprint',
	description:
		'Operationalize AI with evidence‑driven loops: eval gates, posture baselines, SLOs, and audit‑ready artifacts.',
};

export default function Page() {
	return (
		<div className="min-h-screen bg-white">
			<section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">Evidence‑Led Operations — Practical Blueprint</h1>
					<p className="text-lg opacity-90">Build durable autonomy with evaluation gates, posture scorecards, and runbook‑grade evidence.</p>
				</div>
			</section>

			<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-purple">
				<p>
					Evidence‑led operations integrates testing, governance, and reliability into one feedback loop so changes move fast
					without sacrificing safety or cost. Each change ships with machine‑verifiable evidence that it meets policy and
					operational standards.
				</p>

				<h2>Core Loops</h2>
				<ol>
					<li>Propose change with required evidence contracts and risk tier</li>
					<li>Run evaluation gates: safety, correctness, privacy, cost, and performance</li>
					<li>Guarded rollout with SLO budgets, canary, and auto‑rollback</li>
					<li>Runtime capture: incidents, drift, and audit artifacts</li>
					<li>Weekly scorecards drive remediation and roadmap</li>
				</ol>

				<h2>Artifacts That Matter</h2>
				<ul>
					<li>Policy‑as‑code with clear pass/fail thresholds</li>
					<li>Scenario libraries tied to real business outcomes</li>
					<li>Evidence bundles: logs, traces, metrics, prompts, and decisions</li>
					<li>Posture baselines and drift reports</li>
					<li>Cost and reliability scorecards mapped to unit economics</li>
				</ul>

				<div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
					<h3 className="m-0">Related resources</h3>
					<ul>
						<li><Link to="/blog/ai-2026-evidence-hub-architecture">Evidence Hub Architecture</Link></li>
						<li><Link to="/blog/ai-2026-operational-evals-blueprint">Operational Evals Blueprint</Link></li>
						<li><Link to="/blog/ai-2026-agent-slo-blueprint">Agent SLO Blueprint</Link></li>
						<li><Link to="/blog/ai-2026-eval-gated-ci-cd-blueprint">Eval‑Gated CI/CD</Link></li>
					</ul>
				</div>
			</main>
		</div>
	);
}

