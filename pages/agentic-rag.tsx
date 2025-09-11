<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',;
import Head from 'next/head',;
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground',;
import { Database, Link, Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react',;
;

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react'
import Head from 'next/head'
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground'
import { Database, Link, Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react',



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function AgenticRAGPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950'
		email: 'kleber@ziontechgroup.com'
		address: '364 E Main St STE 1008 Middletown DE 19709'
		website: 'https://ziontechgroup.com'
<<<<<<< HEAD


=======
	}
	const plans = [
		{ name: 'Starter', price: '$199/month', items: ['100K tokens/monthWeb/PDF ingestionBasic rerankerCSV export'] }
		{ name: 'Pro', price: '$599/month', items: ['2M tokens/monthGitHub/S3 connectorsHybrid search + rerankEval kits'] }
		{ name: 'Enterprise', price: 'Custom', items: ['Siloed indexesSOC2/ISO supportPrivate VPCSAML/SSO'] }]

	return (
		<UltraFuturisticMatrixBackground>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
	},
	const plans = [
		{ name: 'Starter', price: '$199/month', items: ['100K tokens/monthWeb/PDF ingestionBasic rerankerCSV export'] },
		{ name: 'Pro', price: '$599/month', items: ['2M tokens/monthGitHub/S3 connectorsHybrid search + rerankEval kits'] },
		{ name: 'Enterprise', price: 'Custom', items: ['Siloed indexesSOC2/ISO supportPrivate VPCSAML/SSO'] }],
export default function AgenticRAGPage() {_const _contactInfo = {
		mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
	const _plans = [
		{_name: 'Starter', _price: '$199/month', _items: ['100K tokens/month', _'Web/PDF ingestion', _'Basic reranker', _'CSV export']},
		{_name: 'Pro', _price: '$599/month', _items: ['2M tokens/month', _'GitHub/S3 connectors', _'Hybrid search + rerank', _'Eval kits']},
		{_name: 'Enterprise', _price: 'Custom', _items: ['Siloed indexes', _'SOC2/ISO support', _'Private VPC', _'SAML/SSO']}];
<<<<<<< HEAD

	return (_<UltraFuturisticMatrixBackground>

=======
ursor/fix-lint-push-and-merge-to-main-ce13
	return (_<UltraFuturisticMatrixBackground>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
			<Head>
				<title>Agentic RAG Platform | Zion Tech Group</title>
				<meta name="description" content="High-accuracy retrieval augmented generation with ingestion, indexing, reranking, and evaluation built-in." />
				<link rel="canonical" href="https://ziontechgroup.com/agentic-rag" />
			</Head>
			<div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto mb-12">
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Agentic RAG</h1>
					<p className="text-xl text-gray-300">Ingest everything. Retrieve precisely. Answer confidently with sources and chain-of-thought.</p>
					<div className="mt-6 flex justify-center gap-3">
<<<<<<< HEAD


=======
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-4 h-4 mr-2"><Rocket />Request a Demo</a>
						                                        <a href="/resources" className="border-gray-600 text-gray-200 border px-6 py-3 rounded-xl">Explore Docs</a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-4 h-4 mr-2"><Rocket />Request a Demo</Link>
						                                        <a href="/resources" className="border-gray-600 text-gray-200 border px-6 py-3 rounded-xl">Explore Docs</Link>


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
					{plans.map((p) => (
						<div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
							<h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
							<div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
							<ul className="space-y-2 text-gray-300 text-sm">
								{p.items.map((i) => (
									<li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{i}</span></li>
<<<<<<< HEAD


=======
								))}
							</ul>
						</div>
					))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
								))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
							</ul>;
						</div>;
					))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
				</div>
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Ingestion</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-cyan-400"><Link /> Connectors</div>
						<p className="text-gray-400 mt-2 text-sm">Web, PDFs, DOCX, Markdown, GitHub, and cloud storage with auto-chunking.</p>
					</div>
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Indexing</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-purple-400"><Database /> Hybrid + Rerank</div>
						<p className="text-gray-400 mt-2 text-sm">Embedding + keyword + reranker for fidelity. Namespace partitioning with filters.</p>
					</div>
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Evaluation</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-rose-400"><Gauge /> Accuracy & Sources</div>
						<p className="text-gray-400 mt-2 text-sm">Evals with reference answers, source grounding checks, and hallucination detection.</p>
					</div>
				</div>
				<div className="max-w-3xl mx-auto mt-16 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
						<div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
						<div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
						<div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
					</div>
					<div className="text-center">
<<<<<<< HEAD


						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</Link>


=======
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</a>
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
					</div>
				</div>
			</div>
		</UltraFuturisticMatrixBackground>

<<<<<<< HEAD
}

<<<<<<< HEAD
=======
=======
=======
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import React from 'react',
import Head from 'next / head',
import UltraFuturisticMatrixBackground from '../components / ui / UltraFuturisticMatrixBackground',
import { Database, Link, Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react',
;
export default /**
 * AgenticRAGPage - Function description
 */
function AgenticRAGPage() {
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com';
},
const plans = [;
  { name: 'Starter', price: '$199 / month', items: ['100K tokens / month_web / PDF ingestion_basic rerankerCSV export'] },
  { name: 'Pro', price: '$599 / month', items: ['2M tokens / monthGitHub / S3 connectors_hybrid search + rerank_eval kits'] },
  { name: 'Enterprise', price: 'Custom', items: ['Siloed indexesSOC2 / ISO support_private VPCSAML / SSO'] }],
return (
  <UltraFuturisticMatrixBackground>;
  <Head>;
    <title > Agentic RAG Platform | Zion Tech Group</title>;
    <meta name="description" content="High - accuracy retrieval augmented generation with ingestion, indexing, reranking, and evaluation built - in." />;
    <link rel="canonical" href="https://ziontechgroup.com / agentic - rag" />;
  </Head>;
  <div className="min - h-screen py - 20 px - 4 sm:px - 6 lg:px - 8">;
    <div className="text - center max - w-4xl mx - auto mb - 12">;
    <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6">Agentic RAG</h1>;
    <p className="text - xl text - gray - 300">Ingest everything. Retrieve precisely. Answer confidently with sources and chain - of - thought.</p>;
    <div className="mt - 6 flex justify - center gap - 3">;
      <a href="/contact" className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - xl w - 4 h - 4 mr - 2"><Rocket />Request a Demo</a>;
                                              <a href="/resources" className="border - gray - 600 text - gray - 200 border px - 6 py - 3 rounded - xl">Explore Docs</a>;
    </div>;
    </div>;
    <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6 max - w-6xl mx - auto mb - 16">;
    {plans.map ((p) => (
      <div key={p.name} className="bg - black / 30 border border - gray - 700 / 50 rounded - 2xl p - 6">;
      <h3 className="text - 2xl font - bold text - white mb - 2">{p.name}</h3>;
      <div className="text - cyan - 400 font - semibold mb - 4">{p.price}</div>;
      <ul className="space - y-2 text - gray - 300 text - sm">;
        {p.items.map ((i) => (
        <li key={i} className="flex items - start gap - 2 w - 4 h - 4 mt - 0.5 text - emerald - 400"><Check /> <span>{i}</span></li>))}
        </ul>;
      </div>))}
    </div>;
    <div className="max - w-5xl mx - auto grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
    <div className="bg - black / 20 border border - gray - 700 / 50 rounded - 2xl p - 6">;
      <div className="text - gray - 400 text - sm mb - 2">Ingestion</div>;
      <div className="text - white text - xl font - semibold flex items - center gap - 2 w - 5 h - 5 text - cyan - 400"><Link /> Connectors</div>;
      <p className="text - gray - 400 mt - 2 text - sm">Web, PDFs, DOCX, Markdown, GitHub, and cloud storage with auto - chunking.</p>;
    </div>;
    <div className="bg - black / 20 border border - gray - 700 / 50 rounded - 2xl p - 6">;
      <div className="text - gray - 400 text - sm mb - 2">Indexing</div>;
      <div className="text - white text - xl font - semibold flex items - center gap - 2 w - 5 h - 5 text - purple - 400"><Database /> Hybrid + Rerank</div>;
      <p className="text - gray - 400 mt - 2 text - sm">Embedding + keyword + reranker for fidelity. Namespace partitioning with filters.</p>;
    </div>;
    <div className="bg - black / 20 border border - gray - 700 / 50 rounded - 2xl p - 6">;
      <div className="text - gray - 400 text - sm mb - 2">Evaluation</div>;
      <div className="text - white text - xl font - semibold flex items - center gap - 2 w - 5 h - 5 text - rose - 400"><Gauge /> Accuracy & Sources</div>;
      <p className="text - gray - 400 mt - 2 text - sm">Evals with reference answers, source grounding checks, and hallucination detection.</p>;
    </div>;
    </div>;
    <div className="max - w-3xl mx - auto mt - 16 bg - black / 20 backdrop - blur - xl rounded - 2xl p - 6 border border - cyan - 500 / 30">;
    <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4 text - sm mb - 4">;
      <div className="flex items - center justify - center gap - 2 text - cyan - 400 w - 4 h - 4"><Phone /><span>{contact_info.mobile}</span></div>;
      <div className="flex items - center justify - center gap - 2 text - purple - 400 w - 4 h - 4"><Mail /><span>{contact_info.email}</span></div>;
      <div className="flex items - center justify - center gap - 2 text - green - 400 w - 4 h - 4 text - xs"><MapPin /><span >{contact_info.address}</span></div>;
    </div>;
    <div className="text - center">;
      <a href="/contact" className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - xl">Talk to Engineering</a>;
    </div>;
    </div>;
  </div>;
  </UltraFuturisticMatrixBackground>);
<<<<<<< HEAD

	return (_<UltraFuturisticMatrixBackground>
			<Head>
				<title>Agentic RAG Platform | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;High-accuracy retrieval augmented generation with ingestion, indexing, reranking, and evaluation built-in.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/agentic-rag&quot; />
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

				<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16&quot;>
					{plans.map((p) => (
						<div key={p.name} className=&quot;bg-black/30 border border-gray-700/50 rounded-2xl p-6&quot;>
							<h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{p.name}</h3>
							<div className=&quot;text-cyan-400 font-semibold mb-4&quot;>{p.price}</div>
							<ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
								{p.items.map((i) => (
									<li key={i} className=&quot;flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400&quot;><Check /> <span>{i}</span></li>
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from 'react';
import Head from 'next/head';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import { Database, Link, Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react';
import React from 'react',;
import Head from 'next/head',;
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground',;
import { Database, Link, Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react',;
;
import React from 'react'
import Head from 'next/head'
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground'
import { Database, Link, Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react',
export default function AgenticRAGPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950'
		email: 'kleber@ziontechgroup.com'
		address: '364 E Main St STE 1008 Middletown DE 19709'
		website: 'https://ziontechgroup.com'
	}
	const plans = [
		{ name: 'Starter', price: '$199/month', items: ['100K tokens/monthWeb/PDF ingestionBasic rerankerCSV export'] }
		{ name: 'Pro', price: '$599/month', items: ['2M tokens/monthGitHub/S3 connectorsHybrid search + rerankEval kits'] }
		{ name: 'Enterprise', price: 'Custom', items: ['Siloed indexesSOC2/ISO supportPrivate VPCSAML/SSO'] }]

	return (
		<UltraFuturisticMatrixBackground>
	},
	const plans = [
		{ name: 'Starter', price: '$199/month', items: ['100K tokens/monthWeb/PDF ingestionBasic rerankerCSV export'] },
		{ name: 'Pro', price: '$599/month', items: ['2M tokens/monthGitHub/S3 connectorsHybrid search + rerankEval kits'] },
		{ name: 'Enterprise', price: 'Custom', items: ['Siloed indexesSOC2/ISO supportPrivate VPCSAML/SSO'] }],
export default function AgenticRAGPage() {_const _contactInfo = {
		mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
	const _plans = [
		{_name: 'Starter', _price: '$199/month', _items: ['100K tokens/month', _'Web/PDF ingestion', _'Basic reranker', _'CSV export']},
		{_name: 'Pro', _price: '$599/month', _items: ['2M tokens/month', _'GitHub/S3 connectors', _'Hybrid search + rerank', _'Eval kits']},
		{_name: 'Enterprise', _price: 'Custom', _items: ['Siloed indexes', _'SOC2/ISO support', _'Private VPC', _'SAML/SSO']}];
ursor/fix-lint-push-and-merge-to-main-ce13
	return (_<UltraFuturisticMatrixBackground>
			<Head>
				<title>Agentic RAG Platform | Zion Tech Group</title>
				<meta name="description" content="High-accuracy retrieval augmented generation with ingestion, indexing, reranking, and evaluation built-in." />
				<link rel="canonical" href="https://ziontechgroup.com/agentic-rag" />
			</Head>
			<div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto mb-12">
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Agentic RAG</h1>
					<p className="text-xl text-gray-300">Ingest everything. Retrieve precisely. Answer confidently with sources and chain-of-thought.</p>
					<div className="mt-6 flex justify-center gap-3">
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-4 h-4 mr-2"><Rocket />Request a Demo</a>
						                                        <a href="/resources" className="border-gray-600 text-gray-200 border px-6 py-3 rounded-xl">Explore Docs</a>
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-4 h-4 mr-2"><Rocket />Request a Demo</Link>
						                                        <a href="/resources" className="border-gray-600 text-gray-200 border px-6 py-3 rounded-xl">Explore Docs</Link>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
					{plans.map((p) => (
						<div key={p.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
							<h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
							<div className="text-cyan-400 font-semibold mb-4">{p.price}</div>
							<ul className="space-y-2 text-gray-300 text-sm">
								{p.items.map((i) => (
									<li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{i}</span></li>
								))}
							</ul>
						</div>
					))}
								))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


							</ul>;
						</div>;
					))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
				</div>
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Ingestion</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-cyan-400"><Link /> Connectors</div>
						<p className="text-gray-400 mt-2 text-sm">Web, PDFs, DOCX, Markdown, GitHub, and cloud storage with auto-chunking.</p>
					</div>
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Indexing</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-purple-400"><Database /> Hybrid + Rerank</div>
						<p className="text-gray-400 mt-2 text-sm">Embedding + keyword + reranker for fidelity. Namespace partitioning with filters.</p>
					</div>
					<div className="bg-black/20 border border-gray-700/50 rounded-2xl p-6">
						<div className="text-gray-400 text-sm mb-2">Evaluation</div>
						<div className="text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-rose-400"><Gauge /> Accuracy & Sources</div>
						<p className="text-gray-400 mt-2 text-sm">Evals with reference answers, source grounding checks, and hallucination detection.</p>
					</div>
				</div>
				<div className="max-w-3xl mx-auto mt-16 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
						<div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
						<div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
						<div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
					</div>
					<div className="text-center">
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</a>
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</Link>
					</div>
				</div>
			</div>
		</UltraFuturisticMatrixBackground>
	);
};
	)
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
