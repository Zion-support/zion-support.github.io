import Head from 'next/head';

export default function CloudCostOptimizerPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Head>
				<title>Cloud Cost Optimizer | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/cloud-cost-optimizer" />
				<meta name="description" content="Rightsizing, scheduling, and waste detection for AWS, Azure, and GCP. From $399/mo." />
			</Head>
			<main className="container mx-auto px-6 py-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Cost Optimizer</h1>
				<p className="text-white/80 mb-8 max-w-3xl">Agentless savings recommendations with policy-based actions and FinOps reports.</p>
				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-white/10 rounded-xl p-6">
						<h2 className="text-xl font-semibold mb-2">Pricing</h2>
						<p className="text-3xl font-bold text-cyan-400">$399/mo</p>
						<p className="text-sm text-white/60">Or 3% of savings</p>
					</div>
					<div className="bg-white/10 rounded-xl p-6">
						<h2 className="text-xl font-semibold mb-2">Features</h2>
						<ul className="space-y-1 text-white/80 text-sm">
							<li>• Idle resource detection</li>
							<li>• Instance rightsizing</li>
							<li>• Off-hours scheduling</li>
							<li>• RI/SP optimization insights</li>
						</ul>
					</div>
					<div className="bg-white/10 rounded-xl p-6">
						<h2 className="text-xl font-semibold mb-2">Get Started</h2>
						<div className="space-y-2">
							<a href="/contact" className="inline-block px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold">Start Saving</a>
							<div className="text-sm text-white/70">Call +1 302 464 0950 • kleber@ziontechgroup.com</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
