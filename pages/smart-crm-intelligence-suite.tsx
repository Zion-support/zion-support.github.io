import React from 'react';
import Head from 'next/head';
import { Check, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';

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
		<>
			<Head>
				<title>Smart CRM Intelligence Suite | Zion Tech Group</title>
				<meta name="description" content="Transform your CRM with AI-driven lead scoring, next-best-actions, and pipeline risk alerts. Boost win rates and forecast accuracy." />
				<link rel="canonical" href="https://ziontechgroup.com/smart-crm-intelligence-suite" />
			</Head>

			<EnhancedNavigation />

			<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white pt-20">
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
									<a href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">Contact Sales</a>
									<a href="/market-pricing" className="flex-1 border border-gray-600 text-gray-200 px-4 py-2 rounded-lg text-center hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"><ExternalLink className="w-4 h-4 mr-2 inline" /> Market Pricing</a>
								</div>
							</div>

							<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
								<h3 className="text-white font-semibold mb-3">Contact</h3>
								<div className="space-y-3 text-sm">
									<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href="tel:+13024640950" className="hover:underline">{contact.mobile}</a></div>
									<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href="mailto:kleber@ziontechgroup.com" className="hover:underline">{contact.email}</a></div>
									<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><span className="text-xs">{contact.address}</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}