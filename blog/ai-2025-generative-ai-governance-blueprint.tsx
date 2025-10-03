export default function GenerativeAIGovernanceBlueprint2025() {
	return (
		<div className="min-h-screen bg-slate-950 text-white">
			<main className="max-w-3xl mx-auto px-6 py-16">
				<h1 className="text-4xl font-extrabold mb-4">Generative AI Governance Blueprint 2025</h1>
				<p className="text-white/70 mb-8">
					A practical blueprint for policy, controls, testing, and reporting across the GenAI lifecycle.
					Reduce risk while accelerating delivery.
				</p>
				<section className="space-y-6">
					<h2 className="text-2xl font-bold">Policy to Controls</h2>
					<ul className="list-disc pl-6 space-y-2 text-white/90">
						<li>Define acceptable use, data handling, and model safety requirements</li>
						<li>Map to concrete controls: prompts, tools, data filters, and budgets</li>
						<li>Continuously validate with pre- and post-deployment evals</li>
					</ul>
				</section>
				<section className="space-y-6 mt-8">
					<h2 className="text-2xl font-bold">Assurance</h2>
					<p className="text-white/80">
						Scorecards, red teaming, and incident workflows integrated into CI/CD and runtime.
						Automate evidence collection for audits.
					</p>
				</section>
			</main>
		</div>
	);
}

