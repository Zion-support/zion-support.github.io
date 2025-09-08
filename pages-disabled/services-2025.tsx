import React from 'react';
import { Helmet } from 'react-helmet-async';
const Link = (props: any) => <a {...props} />;

const services = [
	// Micro SaaS
	{
		id: 'saas-log-monitor',
		title: 'Serverless Log Monitor',
		category: 'Micro SaaS',
		price: '$49/month',
		link: 'https://ziontechgroup.com/services/serverless-log-monitor',
		features: [
			'Real-time tail & anomaly alerts',
			'14-day retention, 1GB/day included',
			'Webhook/Slack/PagerDuty integrations',
		],
		benefits: ['Detect issues faster', 'Cut MTTR by 30%+'],
	},
	{
		id: 'saas-screenshot-api',
		title: 'Screenshot & Rendering API',
		category: 'Micro SaaS',
		price: '$39/month',
		link: 'https://ziontechgroup.com/services/screenshot-rendering-api',
		features: ['Full-page screenshots', 'HTML-to-image/PDF', 'Queue + webhook callbacks'],
		benefits: ['Automate reporting', 'Improve content ops'],
	},
	{
		id: 'saas-email-warmup',
		title: 'Inbox Reputation & Warmup',
		category: 'Micro SaaS',
		price: '$69/month',
		link: 'https://ziontechgroup.com/services/inbox-warmup',
		features: ['Smart warmup', 'Spam score checks', 'Daily deliverability reports'],
		benefits: ['Higher open rates', 'Better sender score'],
	},

	// IT Services
	{
		id: 'it-cloud-migration',
		title: 'Cloud Migration Factory',
		category: 'IT Services',
		price: 'From $8,000/project',
		link: 'https://ziontechgroup.com/services/cloud-migration-factory',
		features: ['AWS/Azure/GCP', 'Landing zone & IaC', 'Zero-downtime cutover'],
		benefits: ['Predictable timelines', 'Lower infra costs 20–40%'],
	},
	{
		id: 'it-zero-trust',
		title: 'Zero Trust Implementation',
		category: 'IT Services',
		price: 'From $12,000',
		link: 'https://ziontechgroup.com/services/zero-trust-implementation',
		features: ['Identity-first controls', 'Microsegmentation', 'Continuous verification'],
		benefits: ['Reduce breach blast radius', 'Compliance-ready posture'],
	},
	{
		id: 'it-observability',
		title: 'Observability Accelerator',
		category: 'IT Services',
		price: 'From $9,500',
		link: 'https://ziontechgroup.com/services/observability-accelerator',
		features: ['Metrics/Logs/Traces', 'SLOs & error budgets', 'Incident runbooks'],
		benefits: ['Faster mean time to detect', 'Higher uptime'],
	},

	// AI Solutions
	{
		id: 'ai-rag-help-center',
		title: 'RAG Help Center Assistant',
		category: 'AI Solutions',
		price: '$299/month',
		link: 'https://ziontechgroup.com/services/rag-help-center',
		features: ['Docs ingestion', 'Citations & sources', 'Human handoff'],
		benefits: ['Deflect 40–70% tickets', 'CSAT lift 10–20%'],
	},
	{
		id: 'ai-code-review',
		title: 'AI Code Review & Quality Gates',
		category: 'AI Solutions',
		price: '$199/month',
		link: 'https://ziontechgroup.com/services/ai-code-review',
		features: ['PR review bot', 'Security & performance checks', 'Style/typing fixes'],
		benefits: ['Fewer defects', 'Faster merges'],
	},
	{
		id: 'ai-lead-scoring',
		title: 'Predictive Lead Scoring',
		category: 'AI Solutions',
		price: '$149/month',
		link: 'https://ziontechgroup.com/services/predictive-lead-scoring',
		features: ['CRM integrations', 'Propensity models', 'Explainable scores'],
		benefits: ['Higher conversion', 'Prioritized outreach'],
	},

	// Cybersecurity
	{
		id: 'sec-phishing-sim',
		title: 'Managed Phishing Simulation',
		category: 'Cybersecurity',
		price: '$599/month',
		link: 'https://ziontechgroup.com/services/phishing-simulation',
		features: ['Realistic campaigns', 'Auto-enroll training', 'Risk scoring'],
		benefits: ['Lower click-through rates', 'Meet compliance'],
	},
	{
		id: 'sec-sast-dast',
		title: 'Secure SDLC: SAST + DAST',
		category: 'Cybersecurity',
		price: 'From $5,000',
		link: 'https://ziontechgroup.com/services/secure-sdlc',
		features: ['Tooling setup', 'Pipeline gates', 'Developer enablement'],
		benefits: ['Shift-left security', 'Fewer prod vulns'],
	},

	// Data & Analytics
	{
		id: 'data-warehouse-starter',
		title: 'Modern Data Warehouse Starter',
		category: 'Data & Analytics',
		price: 'From $7,500',
		link: 'https://ziontechgroup.com/services/modern-data-warehouse',
		features: ['ELT pipelines', 'dbt models', ' BI dashboards'],
		benefits: ['Weeks to insights', 'Self-serve analytics'],
	},
	{
		id: 'data-mkt-mix',
		title: 'Marketing Mix Modeling',
		category: 'Data & Analytics',
		price: '$499/month',
		link: 'https://ziontechgroup.com/services/marketing-mix-modeling',
		features: ['Spend optimization', 'Channel ROI', 'Scenario planning'],
		benefits: ['Cut CAC', 'Maximize ROAS'],
	},

	// DevOps & Platform
	{
		id: 'devops-platform-guardrails',
		title: 'Platform Guardrails as Code',
		category: 'DevOps',
		price: '$129/month',
		link: 'https://ziontechgroup.com/services/platform-guardrails',
		features: ['Golden paths', 'Policy-as-code', 'Scorecards'],
		benefits: ['Safer releases', 'Standardized delivery'],
	},
	{
		id: 'devops-cost',
		title: 'Kubernetes Cost Governance',
		category: 'DevOps',
		price: '$99/month',
		link: 'https://ziontechgroup.com/services/kubernetes-cost-governance',
		features: ['Quota policies', 'Idle detection', 'Chargeback reports'],
		benefits: ['Save 20–50% compute', 'Reduce waste'],
	},
];

export default function Services2025Page() {
	return (
		<main className="min-h-screen bg-black text-white">
			<Helmet>
				<title>New Services 2025 | Zion Tech Group</title>
				<meta name="description" content="Expanded portfolio of Micro SaaS, IT services, and AI solutions with transparent pricing and clear ROI." />
				<link rel="canonical" href="https://ziontechgroup.com/services-2025" />
			</Helmet>
			<section className="px-6 py-16 max-w-7xl mx-auto">
				<header className="mb-10">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Expanded Services Portfolio (2025)</h1>
					<p className="mt-4 text-gray-300 max-w-3xl">We added practical, real offerings across Micro SaaS, IT Services, Cybersecurity, Data, DevOps, and AI. Transparent pricing, fast onboarding, and measurable value.</p>
				</header>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{services.map((s) => (
						<article key={s.id} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
							<div className="flex items-center justify-between mb-2">
								<span className="text-xs uppercase tracking-wider text-gray-400">{s.category}</span>
								<span className="text-emerald-300 font-semibold">{s.price}</span>
							</div>
							<h3 className="text-xl font-bold mb-2">{s.title}</h3>
							<ul className="text-gray-300 text-sm space-y-1 mb-3 list-disc pl-5">
								{s.features.map((f, i) => (
									<li key={i}>{f}</li>
								))}
							</ul>
							<p className="text-gray-200 text-sm mb-3">Benefits: {s.benefits.join(' • ')}</p>
							<Link href={s.link} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
								<span>Learn more</span>
								<span aria-hidden>→</span>
							</Link>
						</article>
					))}
				</div>

				<div className="mt-14 rounded-xl border border-white/10 bg-white/5 p-6">
					<h2 className="text-2xl font-bold mb-2">Contact Us</h2>
					<p className="text-gray-300">Have a question or want a tailored proposal? Reach us:</p>
					<ul className="mt-3 text-gray-200 space-y-1">
						<li><strong>Mobile:</strong> +1 302 464 0950</li>
						<li><strong>E-mail:</strong> <a className="underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
						<li><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</li>
						<li><strong>Website:</strong> <a className="underline" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a></li>
					</ul>
				</div>

				<div className="mt-8 text-sm text-gray-400">
					<p>Prices reflect typical market ranges as of 2025 and may vary by scope, usage, and integrations.</p>
				</div>
			</section>
		</main>
	);
}