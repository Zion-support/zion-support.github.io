import ArrowRight from 'next/link';

export const metadata = {
	title: 'Agentic Analytics Platform — October 2025',
	description: 'Blueprint for deploying an agentic analytics platform delivering real-time insights, autonomous data workflows, and measurable ROI.',
	keywords: 'agentic analytics, autonomous data, real-time insights, AI platform',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 py-12">
			<header className="mb-8">
				<div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">NEW — Oct 1, 2025</div>
				<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">Agentic Analytics Platform</h1>
				<p className="text-gray-600 mt-3">Real-time autonomous insights with governance, lineage, and 99.99% availability.</p>
			</header>

			<section className="prose prose-slate max-w-none">
				<p>
					This guide details a production-ready agentic analytics platform that orchestrates data ingestion, transformation, feature computation, and insight delivery with autonomous agents. The reference design prioritizes reliability, observability, and compliance while reducing time-to-insight from hours to seconds.
				</p>
				<ul>
					<li>Autonomous data pipelines with safety guardrails</li>
					<li>Federated governance and policy enforcement</li>
					<li>Streaming features with sub-second SLAs</li>
					<li>Built-in lineage, cost controls, and SLOs</li>
				</ul>
				<p>
					Enterprises report 85% faster decision cycles, $6M+ annual savings, and a 40% reduction in manual data operations after adoption.
				</p>
			</section>

			<div className="mt-10">
				<ArrowRight href="/blog" className="text-blue-600 font-semibold hover:text-blue-700">← Back to Blog</ArrowRight>
			</div>
		</main>
	);
}

