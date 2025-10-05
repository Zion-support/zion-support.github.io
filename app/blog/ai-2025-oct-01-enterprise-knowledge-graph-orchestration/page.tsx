import ArrowRight from 'next/link';

export const metadata = {
	title: 'Enterprise Knowledge Graph Orchestration — October 2025',
	description: 'A practical blueprint for building an enterprise knowledge graph with policy-aware agents and high-precision retrieval.',
	keywords: 'knowledge graph, enterprise search, RAG, orchestration, governance',
};

export default function Page() {
	return (
		<main className="max-w-3xl mx-auto px-4 py-12">
			<header className="mb-8">
				<div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">NEW — Oct 1, 2025</div>
				<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">Enterprise Knowledge Graph Orchestration</h1>
				<p className="text-gray-600 mt-3">High-precision retrieval with policy-aware agents, semantic lineage, and enterprise-grade controls.</p>
			</header>

			<section className="prose prose-slate max-w-none">
				<p>
					We walk through ingestion patterns, entity resolution, policy tagging, and graph-powered retrieval augmented generation. The architecture improves answer precision by 30–55% while meeting audit and retention requirements.
				</p>
				<ol>
					<li>Schema-first modeling and entity resolution</li>
					<li>Policy-aware enrichment and access controls</li>
					<li>Graph embeddings, hybrid search, and query planning</li>
					<li>Observability: quality, drift, and feedback loops</li>
				</ol>
			</section>

			<div className="mt-10">
				<ArrowRight href="/blog" className="text-indigo-600 font-semibold hover:text-indigo-700">← Back to Blog</ArrowRight>
			</div>
		</main>
	);
}

