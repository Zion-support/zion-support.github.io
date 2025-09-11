import Link from 'next/link';

export default function EnterpriseRAGBlueprintPage() {
	return (
		<div className='min-h-screen'>
			<nav className='mb-6'>
				<Link href='/blog' className='text-blue-600 hover:underline'>
					← Back to Blog
				</Link>
			</nav>
			<article className='prose prose-lg max-w-none'>
				<h1>Enterprise RAG Blueprint: From Pilot to Production</h1>
				<p className='text-gray-500'>Published: 2025-09-11 • Tags: RAG, LLM, Architecture</p>
				<p>
					A step-by-step implementation blueprint for retrieval-augmented generation in
					regulated, multi-tenant environments.
				</p>
				<h2>Architecture principles</h2>
				<ul>
					<li>Document pipelines with chunking tuned by content type</li>
					<li>Hybrid retrieval (BM25 + vector) with metadata filtering</li>
					<li>Source-grounded generation with confidence scoring</li>
					<li>Red-teaming, evals, and safety checks in CI/CD</li>
				</ul>
				<h2>Rollout phases</h2>
				<ol>
					<li>Pilot: narrow scope, tight feedback loops, basic analytics</li>
					<li>Alpha: integrate identity, observability, and guardrails</li>
					<li>Beta: scale data coverage, add routing and caching</li>
					<li>GA: SLAs, DR, cost controls, and governance</li>
				</ol>
				<p>
					Want an accelerated blueprint for your org?{' '}
					<Link href='/contact' className='text-blue-600 hover:underline'>Chat with us</Link>.
				</p>
			</article>
		</div>
	);
}

