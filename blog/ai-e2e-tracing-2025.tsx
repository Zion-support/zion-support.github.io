// @ts-nocheck
/* eslint-disable react/react-in-jsx-scope */

export const metadata = {
	title: 'E2E AI Tracing 2025: From Prompt to Outcome KPIs',
	description: 'Instrument prompts, tools, and UX to business KPIs with robust traces and evals that prove ROI and prevent regressions.',
	date: '2025-09-30',
	author: 'Zion Tech Group',
	category: 'Observability',
	readTime: '7 min',
	tags: ['Tracing', 'Observability', 'KPIs', 'GenAI']
};

const AIE2ETracing2025 = () => {
	return (
		<article className="max-w-4xl mx-auto px-6 py-12">
			<header className="mb-12">
				<div className="flex items-center gap-3 mb-4">
					<span className="px-4 py-1.5 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-300 text-sm font-semibold rounded-full border border-indigo-500/30">
						{metadata.category}
					</span>
					<span className="text-gray-500 text-sm">{metadata.readTime} read</span>
				</div>
				<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
					{metadata.title}
				</h1>
				<p className="text-xl text-gray-400 leading-relaxed">{metadata.description}</p>
				<div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
					<span>By {metadata.author}</span>
					<span>•</span>
					<time dateTime={metadata.date}>{new Date(metadata.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
				</div>
			</header>

			<div className="prose prose-invert prose-lg max-w-none">
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-white mb-4">Why E2E Tracing</h2>
					<p className="text-gray-300">Connect prompts, tools, and UX to measurable KPIs. Capture spans for prompts, tool calls, retrieval, and responses, then attribute impact to conversions and support SLAs.</p>
				</section>
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-white mb-4">Implementation Blueprint</h2>
					<ul className="list-disc pl-6 text-gray-300">
						<li>Trace context propagation across frontend, gateway, and workers</li>
						<li>Span taxonomy for prompts, retrieval, tools, and model inference</li>
						<li>Eval hooks in CI and online canaries</li>
						<li>KPI linkage for ROI dashboards</li>
					</ul>
				</section>
				<section className="mb-10">
					<h2 className="text-3xl font-bold text-white mb-4">Results</h2>
					<p className="text-gray-300">Teams report 300% faster diagnosis, 40% cost reduction through routing, and measurable uplift in conversion from prompt quality improvements.</p>
				</section>
			</div>
		</article>
	);
};

export default AIE2ETracing2025;

