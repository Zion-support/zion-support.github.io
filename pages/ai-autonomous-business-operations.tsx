import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function AIAutonomousBusinessOperations() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>AI-Powered Autonomous Business Operations | Zion Tech Group</title>
				<meta name="description" content="Continuous AI agents coordinate workflows across sales, support, finance, and operations. They monitor KPIs, trigger automations, and collaborate with humans to keep your business always-on." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-business-operations" />
			</Head>

			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						AI-Powered Autonomous Business Operations
					</h1>
					<p className="text-gray-300 text-lg max-w-3xl mx-auto">
						From reactive to autonomous: 24/7 operations with measurable outcomes.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
					<div className="lg:col-span-2 space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">
								Continuous AI agents coordinate workflows across sales, support, finance, and operations. They monitor KPIs, trigger automations, and collaborate with humans to keep your business always-on.
							</p>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
							<ul className="space-y-2 text-gray-300">
								{[
									"Autonomous KPI monitoring and anomaly detection",
									"Agentic workflows for ticket triage, billing, collections, and renewals",
									"Human-in-the-loop approvals and audit trails",
									"Playbooks for incident response and customer recovery",
									"Compliance logging and role-based access",
									"Integrations: Slack/Teams, Jira, Zendesk, QuickBooks, Stripe"
								].map((feature) => (
									<li key={feature} className="flex items-start gap-2">
										<Check className="w-4 h-4 mt-0.5 text-emerald-400" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</Card>
					</div>

					<div className="space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
							<div className="text-3xl font-bold text-white">$3,500<span className="text-base font-medium text-gray-400">/month</span></div>
							<div className="text-sm text-gray-400 mt-2">Implementation: 3–6 weeks • Average ROI 5–12x within 120 days</div>
							<div className="mt-6 flex gap-3">
								<Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
								<Button href="/services" variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> View All Services</Button>
							</div>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Contact</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</a></div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}