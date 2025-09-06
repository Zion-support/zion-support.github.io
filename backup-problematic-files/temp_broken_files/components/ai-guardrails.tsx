import React from 'react',
import Head from 'next/head',
import { Check, Shield, ShieldAlert, Lock, Phone, Mail, MapPin, ExternalLink } from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
export default function AIGuardrailsPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	},

	const features = [
		'Prompt/output policy engine with allow/deny listsJailbreak and prompt injection detectionPII/PHI detection and redactionToxicity, bias and safety classifiersHuman handoff flows and escalation policiesAudit logs, alerting and exportable evidence'
	],
	return (_<UltraAdvancedFuturisticBackground>
			<Head>
				<title>AI Guardrails Suite | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Production-grade safety and governance for AI apps: policy enforcement, jailbreak detection, PII/PHI controls and audit logs with SDKs and proxies.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-guardrails&quot; />			</Head>

			<section className=&quot;min-h-screen pt-28 pb-20 px-4&quot;>
				<div className=&quot;max-w-6xl mx-auto&quot;>
					<div className=&quot;text-center mb-12&quot;>
						<h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-400 via-red-500 to-orange-500 bg-clip-text text-transparent&quot;>AI Guardrails Suite</h1>
						<p className=&quot;mt-4 text-xl text-gray-300&quot;>Safety and governance for LLM apps with minimal integration and strong guarantees.</p>
					</div>

					<div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10&quot;>
						<Card className=&quot;lg:col-span-2 bg-black/30 border border-rose-500/30&quot;>
							<div className=&quot;p-6&quot;>
								<h2 className=&quot;text-2xl font-semibold text-white mb-4&quot;>Capabilities</h2>
								<ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
									{features.map((f) => (
										<li key={f} className=&quot;flex items-start gap-2 text-gray-200&quot;><Check className=&quot;w-5 h-5 text-emerald-400 mt-0.5&quot; /> <span>{f}</span></li>									))}
								</ul>
							</div>
						</Card>
						<Card className=&quot;bg-black/30 border border-rose-500/30&quot;>
							<div className=&quot;p-6&quot;>
								<div className=&quot;text-3xl font-bold text-white&quot;>Starting at $199<span className=&quot;text-base text-gray-400&quot;>/month</span></div>
								<div className=&quot;text-sm text-gray-400 mt-1&quot;>14-day trial  Setup: 30 minutes</div>
								<div className=&quot;mt-4&quot;>
									<Button href=&quot;/contact&quot; className=&quot;w-full bg-gradient-to-r from-rose-500 to-orange-600 text-white&quot;>Request Demo</Button>
								</div>
							</div>
						</Card>
					</div>

					<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-12&quot;>
						<Card className=&quot;p-6 bg-black/30 border border-purple-500/30&quot;>
							<h3 className=&quot;text-lg font-semibold mb-2&quot;>SDKs & Proxies</h3>
							<p className=&quot;text-gray-300 text-sm&quot;>Drop-in Node/Python SDKs and gateway proxy for provider-agnostic guardrail enforcement.</p>
						</Card>
						<Card className=&quot;p-6 bg-black/30 border border-emerald-500/30&quot;>
							<h3 className=&quot;text-lg font-semibold mb-2&quot;>Compliance</h3>
							<p className=&quot;text-gray-300 text-sm&quot;>SOC 2-friendly audit logs, policy-as-code, and retention controls for evidence collection.</p>
						</Card>
						<Card className=&quot;p-6 bg-black/30 border border-cyan-500/30&quot;>
							<h3 className=&quot;text-lg font-semibold mb-2&quot;>Integrations</h3>
							<p className=&quot;text-gray-300 text-sm&quot;>Slack, PagerDuty, Datadog and SIEM integrations for alerting and incident response.</p>
						</Card>
					</div>

					<div className=&quot;bg-black/20 border border-rose-500/30 rounded-2xl p-6&quot;>
						<h3 className=&quot;text-xl font-semibold text-white mb-4 text-center&quot;>Contact</h3>
						<div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 text-sm&quot;>
							<div className=&quot;flex items-center justify-center gap-2 text-cyan-400&quot;><Phone className=&quot;w-4 h-4&quot; /> <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`}>{contactInfo.mobile}</a></div>
							<div className=&quot;flex items-center justify-center gap-2 text-purple-400&quot;><Mail className=&quot;w-4 h-4&quot; /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div>
							<div className=&quot;flex items-center justify-center gap-2 text-emerald-400&quot;><MapPin className=&quot;w-4 h-4&quot; /> <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-xs&quot;>{contactInfo.address}</a></div>						</div>
						<div className=&quot;text-center mt-6&quot;>
							<Button href=&quot;/services&quot; variant=&quot;outline&quot; className=&quot;border-rose-500 text-rose-400&quot;>Explore Services <ExternalLink className=&quot;w-4 h-4 ml-2&quot; /></Button>
						</div>
					</div>
				</div>
			</section>
		</UltraAdvancedFuturisticBackground>
	)}