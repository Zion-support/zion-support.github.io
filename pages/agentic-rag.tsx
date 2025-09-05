<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground',
import { Database, Link, Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react',

export default function AgenticRAGPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	},

	const plans = [
		{ name: 'Starter', price: '$199/month', items: ['100K tokens/monthWeb/PDF ingestionBasic rerankerCSV export'] },
		{ name: 'Pro', price: '$599/month', items: ['2M tokens/monthGitHub/S3 connectorsHybrid search + rerankEval kits'] },
		{ name: 'Enterprise', price: 'Custom', items: ['Siloed indexesSOC2/ISO supportPrivate VPCSAML/SSO'] }],
=======
import React from 'react';
import Head from 'next/head';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';


export default function AgenticRAGPage() {_const _contactInfo = {
		mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

	const _plans = [
		{_name: 'Starter', _price: '$199/month', _items: ['100K tokens/month', _'Web/PDF ingestion', _'Basic reranker', _'CSV export']},
		{_name: 'Pro', _price: '$599/month', _items: ['2M tokens/month', _'GitHub/S3 connectors', _'Hybrid search + rerank', _'Eval kits']},
		{_name: 'Enterprise', _price: 'Custom', _items: ['Siloed indexes', _'SOC2/ISO support', _'Private VPC', _'SAML/SSO']}];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

	return (_<UltraFuturisticMatrixBackground>
			<Head>
				<title>Agentic RAG Platform | Zion Tech Group</title>
<<<<<<< HEAD
				<meta name=&quot;description&quot; content=&quot;High-accuracy retrieval augmented generation with ingestion, indexing, reranking, and evaluation built-in.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/agentic-rag&quot; />
=======
				<meta name="description" content="High-accuracy retrieval augmented generation with ingestion, _indexing, _reranking, _and evaluation built-in." />
				<link rel="canonical" href="https://ziontechgroup.com/agentic-rag" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
			</Head>

			<div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
				<div className=&quot;text-center max-w-4xl mx-auto mb-12&quot;>
					<h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>Agentic RAG</h1>
					<p className=&quot;text-xl text-gray-300&quot;>Ingest everything. Retrieve precisely. Answer confidently with sources and chain-of-thought.</p>
					<div className=&quot;mt-6 flex justify-center gap-3&quot;>
						<a href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-4 h-4 mr-2&quot;><Rocket />Request a Demo</Link>
						                                        <a href=&quot;/resources&quot; className=&quot;border-gray-600 text-gray-200 border px-6 py-3 rounded-xl&quot;>Explore Docs</Link>
					</div>
				</div>

<<<<<<< HEAD
				<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16&quot;>
					{plans.map((p) => (
						<div key={p.name} className=&quot;bg-black/30 border border-gray-700/50 rounded-2xl p-6&quot;>
							<h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{p.name}</h3>
							<div className=&quot;text-cyan-400 font-semibold mb-4&quot;>{p.price}</div>
							<ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
								{p.items.map((i) => (
									<li key={i} className=&quot;flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400&quot;><Check /> <span>{i}</span></li>
=======
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
					{_plans.map((p) => (_<div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
							<h3 className="text-2xl font-bold text-white mb-2">{_p.name}</h3>
							<div className="text-cyan-400 font-semibold mb-4">{_p.price}</div>
							<ul className="space-y-2 text-gray-300 text-sm">
								{_p.items.map((i) => (
									<li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{_i}</span></li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
								))}
							</ul>
						</div>
					))}
				</div>

				<div className=&quot;max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
					<div className=&quot;bg-black/20 border border-gray-700/50 rounded-2xl p-6&quot;>
						<div className=&quot;text-gray-400 text-sm mb-2&quot;>Ingestion</div>
						<div className=&quot;text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-cyan-400&quot;><Link /> Connectors</div>
						<p className=&quot;text-gray-400 mt-2 text-sm&quot;>Web, PDFs, DOCX, Markdown, GitHub, and cloud storage with auto-chunking.</p>
					</div>
					<div className=&quot;bg-black/20 border border-gray-700/50 rounded-2xl p-6&quot;>
						<div className=&quot;text-gray-400 text-sm mb-2&quot;>Indexing</div>
						<div className=&quot;text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-purple-400&quot;><Database /> Hybrid + Rerank</div>
						<p className=&quot;text-gray-400 mt-2 text-sm&quot;>Embedding + keyword + reranker for fidelity. Namespace partitioning with filters.</p>
					</div>
					<div className=&quot;bg-black/20 border border-gray-700/50 rounded-2xl p-6&quot;>
						<div className=&quot;text-gray-400 text-sm mb-2&quot;>Evaluation</div>
						<div className=&quot;text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-rose-400&quot;><Gauge /> Accuracy & Sources</div>
						<p className=&quot;text-gray-400 mt-2 text-sm&quot;>Evals with reference answers, source grounding checks, and hallucination detection.</p>
					</div>
				</div>

<<<<<<< HEAD
				<div className=&quot;max-w-3xl mx-auto mt-16 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30&quot;>
					<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4&quot;>
						<div className=&quot;flex items-center justify-center gap-2 text-cyan-400 w-4 h-4&quot;><Phone /><span>{contactInfo.mobile}</span></div>
						<div className=&quot;flex items-center justify-center gap-2 text-purple-400 w-4 h-4&quot;><Mail /><span>{contactInfo.email}</span></div>
						<div className=&quot;flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs&quot;><MapPin /><span >{contactInfo.address}</span></div>
=======
				<div className="max-w-3xl mx-auto mt-16 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
						<div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{_contactInfo.mobile}</span></div>
						<div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{_contactInfo.email}</span></div>
						<div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{_contactInfo.address}</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
					</div>
					<div className=&quot;text-center&quot;>
						<a href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl&quot;>Talk to Engineering</Link>
					</div>
				</div>
			</div>
		</UltraFuturisticMatrixBackground>
	)
}