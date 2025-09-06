import React from 'react'
import SEO from '../components/SEO'
import Link from 'next/link'
export default function RAGEvaluationLabPage() {
	return (
		<>
			<SEO title="RAG Evaluation Lab" description="Measure answer quality, hallucination rate, latency, and cost of your RAG pipelines with production-grade evals and CI gates." />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">RAG Evaluation Lab</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Production-ready evaluations for retrieval-augmented generation. Track accuracy, _hallucination rate, _latency, _and cost. Integrate with CI to prevent regressions.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
					</p>
					<div className=&quot;mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
						{[
							{ title: 'Grounding & Faithfulness', desc: 'Measure factual consistency, citation quality, and hallucination rate.' },
							{ title: 'Golden Datasets', desc: 'Curate and run task-specific datasets for repeatable evaluation.' },
							{ title: 'Scenario Evals', desc: 'Synthetic and real-world tests across intents, domains, and edge cases.' },
							{ title: 'CI/CD Quality Gates', desc: 'Fail builds on regressions, compare models and versions.' },
							{ title: 'Offline & Canary', desc: 'Pre-release offline runs and live traffic canaries with alerts.' },
							{ title: 'Dashboards & Reports', desc: 'Team dashboards, API access, and exportable reports.' }
						].map((f) => (
							<div key={f.title} className=&quot;rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur&quot;>
								<h3 className=&quot;text-lg font-semibold text-white&quot;>{f.title}</h3>
								<p className=&quot;mt-2 text-sm text-gray-300&quot;>{f.desc}</p>
							</div>
						))}
					</div>

					<div className=&quot;mt-12&quot;>
						<h2 className=&quot;text-2xl font-semibold&quot;>Pricing</h2>
						<div className=&quot;mt-6 grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
							<div className=&quot;rounded-2xl border border-cyan-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Starter</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Offline evals, 3 projects, 10k runs/mo.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$149<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-blue-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Growth</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Live canaries, alerts, 10 projects, 100k runs/mo.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$449<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-purple-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Enterprise</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>SSO, SOC 2, private networking, custom limits.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://humanloop.com" target="_blank" rel="noreferrer">Humanloop</a>, <a className="underline hover:text-cyan-300" href="https://arize.com" target="_blank" rel="noreferrer">Arize</a>, <a className="underline hover: text-cyan-300" href="https://promptfoo.dev" target="_blank" rel="noreferrer">promptfoo</a>.</p>
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
					</div>

					<div className=&quot;mt-12 flex flex-wrap items-center gap-4&quot;>
						<Link href=&quot;/contact&quot; className=&quot;px-5 py-3 rounded-lg bg-cyan-400 text-black font-semibold&quot;>Start Evaluating</a>
						<a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;px-5 py-3 rounded-lg border border-white/20&quot;>Email: kleber@ziontechgroup.com</a>
						<span className=&quot;text-gray-400&quot;>Call: +1 302 464 0950</span>
					</div>
				</div>
			</section>
		</>
	)
}
