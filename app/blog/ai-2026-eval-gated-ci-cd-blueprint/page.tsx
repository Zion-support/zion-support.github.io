import Link from 'next/link';

export const metadata = {
	title: 'AI 2026: Eval‑Gated CI/CD — Blueprint',
	description:
		'Add evaluation gates to CI, staging, and canary to ship safer, higher‑quality agent releases.',
};

export default function Page() {
	return (
		<div className="min-h-screen bg-white">
			<section className="bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">Eval‑Gated CI/CD — Blueprint</h1>
					<p className="text-lg opacity-90">Gate every release with scenario suites, rollback contracts, and policy as code.</p>
				</div>
			</section>

			<main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-rose">
				<p>
					Implement evaluation‑first delivery. Attach gates across CI, staging, canary, and ramp to prevent
					releases that regress safety, quality, reliability, or cost. Automate rollbacks on policy violations
					and capture evidence for audits.
				</p>

				<h2>Key Practices</h2>
				<ul>
					<li>Policy‑as‑code gates with clear pass/fail criteria</li>
					<li>Scenario suites mapped to critical user journeys</li>
					<li>Canary scorecards and automatic rollback actions</li>
					<li>Evidence hub for reproducibility and audits</li>
				</ul>

				<div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-200">
					<h3 className="m-0">Related resources</h3>
					<ul>
						<li><Link href="/blog/ai-2026-safe-rollouts-in-production">Safe Rollouts in Production</Link></li>
						<li><Link href="/blog/ai-2026-eval-gated-autonomy">Eval‑Gated Autonomy</Link></li>
						<li><Link href="/blog/ai-2026-agent-platform-slos-best-practices">Agent Platform SLOs</Link></li>
					</ul>
				</div>
			</main>
		</div>
	);
}

