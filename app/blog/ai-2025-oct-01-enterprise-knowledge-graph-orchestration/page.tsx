import React from 'react';
import Link from 'next/link';

export const metadata = {
	title= 'Enterprise Knowledge Graph Orchestration — October 2025',
	description: 'A practical blueprint for building an enterprise knowledge graph with policy-aware agents and high-precision retrieval.',
	keywords: 'knowledge graph, enterprise search, RAG, orchestration, governance',
};

export default function Page() {
	return (
		<main className="text-left">"
			<header className="text-left">"
				<div className="text-left">NEW — Oct 1, 2025</div>"
				<h1 className="text-left">Enterprise Knowledge Graph Orchestration</h1>"
				<p className="text-left">High-precision retrieval with policy-aware agents, semantic lineage, and enterprise-grade controls.</p>"
			</header>

			<section className="text-left">"
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

			<div className="text-left">"
				<Link href="/blog" className="text-left">← Back to Blog</Link>"
			</div>
		</main>
	);
}

