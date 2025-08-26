import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
// import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Check, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function SmartCrmIntelligenceSuitePage() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709'
	};

	const features = [
		'AI lead scoring and next-best-action',
		'Account-based insights and intent signals',
		'Conversational summaries and auto-logging',
		'Pipeline risk alerts and forecast accuracy',
		'Playbooks with automated outreach',
		'Native integrations (Salesforce, HubSpot, Pipedrive)'
	];

	return (
		<UltraAdvancedFuturisticBackground>
			<Head>
				<title>Smart CRM Intelligence Suite | Zion Tech Group</title>
				<meta name="description" content="Transform your CRM with AI-driven lead scoring, next-best-actions, and pipeline risk alerts. Boost win rates and forecast accuracy." />
				<link rel="canonical" href="https://ziontechgroup.com/smart-crm-intelligence-suite" />
			</Head>

			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Smart CRM Intelligence Suite</h1>
					<p className="text-gray-300 text-lg max-w-3xl mx-auto">AI signals for sales teams: prioritize the right accounts, automate follow-ups, and increase conversion rates with explainable insights.</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
					<div className="lg:col-span-2 space-y-6">
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">Unify CRM activity, emails, meetings, and intent data to produce AI-driven scores, alerts, and playbooks. SDRs and AEs get prioritized tasks; managers get accurate forecasts and risk heatmaps.</p>
						</div>

						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
							<ul className="space-y-2 text-gray-300">
								{features.map((f) => (
									<li key={f} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-400" /><span>{f}</span></li>
								))}
							</ul>
						</div>
					</div>

					<div className="space-y-6">
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
							<div className="text-3xl font-bold text-white">$299<span className="text-base font-medium text-gray-400">/month</span></div>
							<div className="text-sm text-gray-400 mt-2">Trial: 14 days • Setup: 1–2 days • Integrations: Salesforce, HubSpot, Pipedrive</div>
							<div className="mt-6 flex gap-3">
								<Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
								<Button href="https://ziontechgroup.com/smart-crm-intelligence-suite" variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
							</div>
							<div className="mt-6 space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contact.mobile}</span></div>
								<div className="flex items-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contact.email}</span></div>
								<div className="flex items-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span>{contact.address}</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UltraAdvancedFuturisticBackground>
	);
}