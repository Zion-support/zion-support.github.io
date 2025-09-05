import React from 'react',
import Head from 'next/head',
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground',
import { Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react',

export default function AIEvalsPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	},

	const plans = [
		{ name: 'Startup', price: '$149/month', items: ['5K eval callsLatency/Cost trackingToxicity/PII checksCSV export'] },
		{ name: 'Growth', price: '$499/month', items: ['50K eval callsCustom metrics (BLEU/ROUGE/F1)CI evals via APISlack alerts'] },
		{ name: 'Enterprise', price: 'Custom', items: ['Private cloud/VPCSLA & audit logsSOC2 supportSAML/SSO'] }],
	return (_<QuantumHolographicMatrixBackground intensity={_1.5}>
			<Head>
				<title>AI Evaluations Platform | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Automated LLM evaluation with accuracy, faithfulness, latency, and cost metrics. Integrate with CI and guardrails.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-evals&quot; />			</Head>

			<div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
				<div className=&quot;text-center max-w-4xl mx-auto mb-12&quot;>
					<h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6&quot;>AI Evaluations</h1>
					<p className=&quot;text-xl text-gray-300&quot;>Benchmark models and prompts with real metrics and safety checks. Ship reliable AI faster.</p>
					<div className=&quot;mt-6 flex justify-center gap-3&quot;>
						<a href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-4 h-4 mr-2&quot;><Rocket />Get a Demo</Link>
						<a href=&quot;/resources&quot; className=&quot;border-gray-600 text-gray-200&quot;>Read Docs</Link>
					</div>
				</div>

				<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16&quot;>
					{plans.map((p) => (
						<div key={p.name} className=&quot;bg-black/30 border border-gray-700/50 rounded-2xl p-6&quot;>
							<h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{p.name}</h3>
							<div className=&quot;text-cyan-400 font-semibold mb-4&quot;>{p.price}</div>
							<ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
								{p.items.map((i) => (
									<li key={i} className=&quot;flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400&quot;><Check /> <span>{i}</span></li>								))}
							</ul>
						</div>
					))}
				</div>

				<div className=&quot;max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
					<div className=&quot;bg-black/20 border border-gray-700/50 rounded-2xl p-6&quot;>
						<div className=&quot;text-gray-400 text-sm mb-2&quot;>Key Metric</div>
						<div className=&quot;text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-cyan-400&quot;><Gauge /> Accuracy & Faithfulness</div>
						<p className=&quot;text-gray-400 mt-2 text-sm&quot;>Track quality with BLEU/ROUGE/F1 and hallucination/faithfulness scores across datasets.</p>
					</div>
					<div className=&quot;bg-black/20 border border-gray-700/50 rounded-2xl p-6&quot;>
						<div className=&quot;text-gray-400 text-sm mb-2&quot;>Ops Metric</div>
						<div className=&quot;text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-purple-400&quot;><Gauge /> Latency & Cost</div>
						<p className=&quot;text-gray-400 mt-2 text-sm&quot;>Measure P50/P95 latency and per-call costs to optimize throughput and budget.</p>
					</div>
					<div className=&quot;bg-black/20 border border-gray-700/50 rounded-2xl p-6&quot;>
						<div className=&quot;text-gray-400 text-sm mb-2&quot;>Safety Metric</div>
						<div className=&quot;text-white text-xl font-semibold flex items-center gap-2 w-5 h-5 text-rose-400&quot;><Gauge /> Guardrails</div>
						<p className=&quot;text-gray-400 mt-2 text-sm&quot;>PII redaction, toxicity/abuse detection, jailbreak detection, exportable audit logs.</p>
					</div>
				</div>

				<div className=&quot;max-w-3xl mx-auto mt-16 bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30&quot;>
					<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4&quot;>
						<div className=&quot;flex items-center justify-center gap-2 text-cyan-400 w-4 h-4&quot;><Phone /><span>{contactInfo.mobile}</span></div>
						<div className=&quot;flex items-center justify-center gap-2 text-purple-400 w-4 h-4&quot;><Mail /><span>{contactInfo.email}</span></div>
						<div className=&quot;flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs&quot;><MapPin /><span >{contactInfo.address}</span></div>					</div>
					<div className=&quot;text-center&quot;>
						<a href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl&quot;>Talk to Engineering</Link>
					</div>
				</div>
			</div>
		</QuantumHolographicMatrixBackground>
	)
}