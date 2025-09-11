

import React from 'react',;
import Head from 'next/head',;
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground',;
import { Gauge, Check, Phone, Mail, MapPin, Rocket } from 'lucide-react',;
;



	return (
		<QuantumHolographicMatrixBackground intensity={1.5}>	},
	const plans = [
		{ name: 'Startup', price: '$149/month', items: ['5K eval callsLatency/Cost trackingToxicity/PII checksCSV export'] },
		{ name: 'Growth', price: '$499/month', items: ['50K eval callsCustom metrics (BLEU/ROUGE/F1)CI evals via APISlack alerts'] },
		{ name: 'Enterprise', price: 'Custom', items: ['Private cloud/VPCSLA & audit logsSOC2 supportSAML/SSO'] }],
export default function AIEvalsPage() {_const _contactInfo = {
		mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
	const _plans = [
		{_name: 'Startup', _price: '$149/month', _items: ['5K eval calls', _'Latency/Cost tracking', _'Toxicity/PII checks', _'CSV export']},
		{_name: 'Growth', _price: '$499/month', _items: ['50K eval calls', _'Custom metrics (BLEU/ROUGE/F1)', _'CI evals via API', _'Slack alerts']},
		{_name: 'Enterprise', _price: 'Custom', _items: ['Private cloud/VPC', _'SLA & audit logs', _'SOC2 support', _'SAML/SSO']}];
ursor/fix-lint-push-and-merge-to-main-ce13
	return (_<QuantumHolographicMatrixBackground intensity={_1.5}>			<Head>
				<title>AI Evaluations Platform | Zion Tech Group</title>
				<meta name="description" content="Automated LLM evaluation with accuracy, faithfulness, latency, and cost metrics. Integrate with CI and guardrails." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-evals" />
			</Head>
			<div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto mb-12">
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">AI Evaluations</h1>
					<p className="text-xl text-gray-300">Benchmark models and prompts with real metrics and safety checks. Ship reliable AI faster.</p>
					<div className="mt-6 flex justify-center gap-3">
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-4 h-4 mr-2"><Rocket />Get a Demo</a>
						<a href="/resources" className="border-gray-600 text-gray-200">Read Docs</a>						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl w-4 h-4 mr-2"><Rocket />Get a Demo</Link>
						<a href="/resources" className="border-gray-600 text-gray-200">Read Docs</Link>



								))}
							</ul>
						</div>
					))}								))  } catch (error) {
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



						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</Link>


						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</a>
						<a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Talk to Engineering</Link>
					</div>
				</div>
			</div>
		</QuantumHolographicMatrixBackground>

				<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16&quot;>
					{plans.map((p) => (
						<div key={p.name} className=&quot;bg-black/30 border border-gray-700/50 rounded-2xl p-6&quot;>
							<h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{p.name}</h3>
							<div className=&quot;text-cyan-400 font-semibold mb-4&quot;>{p.price}</div>
							<ul className=&quot;space-y-2 text-gray-300 text-sm&quot;>
								{p.items.map((i) => (
									<li key={i} className=&quot;flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400&quot;><Check /> <span>{i}</span></li>
