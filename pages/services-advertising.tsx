import React from 'react',
import SEO from '../components/SEO',
const ext = (url: string) => (
<<<<<<< HEAD
	<a className="text-cyan-400 underline" href={`/out?u=${encodeURIComponent(url)}`} target="_blank" rel="nofollow noopener noreferrer">{url.replace('https://', '')}</a>
),
=======
	<a className=&quot;text-cyan-400 underline&quot; href={`/out?u=${encodeURIComponent(url)}`} target=&quot;_blank&quot; rel=&quot;nofollow noopener noreferrer&quot;>{url.replace('https://', '')}</Link>
);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default function ServicesAdvertisingPage() {
	return (
		<div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
			<SEO title=&quot;Services Advertising | Zion Tech Group&quot; description=&quot;Features, benefits, and market references for Zion Tech Group services&quot; url=&quot;https://ziontechgroup.com/services-advertising/&quot; />
			<div className=&quot;max-w-6xl mx-auto space-y-10&quot;>
				<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Services Advertising</h1>

  const benefits = [
    '1000% ROI target with measurable KPIsTransparent pricing with market referencesFast onboarding with templates and playbooksEnterprise-grade security and compliance24/7 support with SLAsProven architectures and reference implementationsNo long-term lock-in, cancel anytimeSOC 2-aligned processes and data handling',
    'Flexible deployment: SaaS or self-hosted options'
  ],

				{/* New: Core micro SaaS and AI additions */}
				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>AI Social Media Manager</h2>
					<p className=&quot;text-slate-300&quot;>Generate, schedule, and optimize multi-platform posts with best-time recommendations and analytics.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $20–$80/mo</li>
						<li>References: {ext('https://buffer.com/pricing')}, {ext('https://www.hootsuite.com/plans')}</li>
						<li>Try: <a href=&quot;/services/ai-social-media-manager&quot; className=&quot;text-cyan-400 underline&quot;>ziontechgroup.com/services/ai-social-media-manager</Link></li>
					</ul>
				</section>

  const pricingRefs = [
    {
      title: 'AI Platforms',
      links: [
        { name: 'OpenAI', href: 'https://openai.com/api/pricing' },
        { name: 'Anthropic', href: 'https://www.anthropic.com/pricing' },
        { name: 'Google Vertex AI', href: 'https://cloud.google.com/vertex-ai/pricing' },
        { name: 'Azure OpenAI', href: 'https://azure.microsoft.com/pricing/details/cognitive-services/openai-service/' },
        { name: 'Langfuse', href: 'https://langfuse.com/pricing' },
        { name: 'Groq', href: 'https://wow.groq.com/pricing' },
        { name: 'OpenRouter', href: 'https://openrouter.ai/models' },
        { name: 'Weights & Biases', href: 'https://wandb.ai/site/pricing' },
        { name: 'Humanloop', href: 'https://humanloop.com/pricing' }
      ],
      note: 'SMB budgets: $100–$2,000/mo. Enterprise: $5k–$100k+/mo depending on volume and models.'
    },
    {
      title: 'Security & Compliance',
      links: [
        { name: 'Wiz', href: 'https://www.wiz.io/pricing' },
        { name: 'Prisma Cloud', href: 'https://www.paloaltonetworks.com/prisma/cloud/pricing' },
        { name: 'HashiCorp Vault', href: 'https://www.hashicorp.com/products/vault/pricing' },
        { name: 'Cloudflare Zero Trust', href: 'https://www.cloudflare.com/products/zero-trust/pricing/' },
        { name: 'Snyk', href: 'https://snyk.io/plans/' },
        { name: 'Okta', href: 'https://www.okta.com/pricing/' }
      ],
      note: 'SMB budgets: $200–$5,000/mo. Enterprise: $10k–$250k/yr+ for broader suites.'
    },
    {
      title: 'Vector & Search',
      links: [
        { name: 'Pinecone', href: 'https://www.pinecone.io/pricing/' },
        { name: 'Weaviate', href: 'https://weaviate.io/pricing' },
        { name: 'Qdrant', href: 'https://qdrant.tech/pricing/' },
        { name: 'Elasticsearch Serverless', href: 'https://www.elastic.co/pricing/' },
        { name: 'Milvus', href: 'https://zilliz.com/pricing' }
      ],
      note: 'SMB budgets: $50–$1,000/mo. Enterprise: $2k–$50k+/mo depending on throughput/latency.'
    },
    {
      title: 'Cloud & Edge',
      links: [
        { name: 'AWS Calculator', href: 'https://calculator.aws' },
        { name: 'Azure', href: 'https://azure.microsoft.com/pricing' },
        { name: 'Google Cloud', href: 'https://cloud.google.com/pricing' },
        { name: 'Cloudflare', href: 'https://www.cloudflare.com/plans/' },
        { name: 'Netlify', href: 'https://www.netlify.com/pricing/' },
        { name: 'Vercel', href: 'https://vercel.com/pricing' }
      ],
      note: 'SMB budgets: $200–$10,000/mo.'
    },
    {
      title: 'Product Analytics',
      links: [
        { name: 'Mixpanel', href: 'https://mixpanel.com/pricing/' },
        { name: 'Amplitude', href: 'https://amplitude.com/pricing' },
        { name: 'PostHog', href: 'https://posthog.com/pricing' }
      ],
      note: 'SMB budgets: $0–$1,500/mo.'
    },
    {
      title: 'Incident & On‑Call',
      links: [
        { name: 'PagerDuty', href: 'https://www.pagerduty.com/pricing/' },
        { name: 'Opsgenie', href: 'https://www.atlassian.com/software/opsgenie/pricing' },
        { name: 'Better Stack', href: 'https://betterstack.com/status/pricing' }
      ],
      note: 'SMB budgets: $10–$1,000/mo.'
    },
    {
      title: 'Email & Deliverability',
      links: [
        { name: 'SendGrid', href: 'https://sendgrid.com/pricing/' },
        { name: 'Mailgun', href: 'https://www.mailgun.com/pricing/' },
        { name: 'Postmark', href: 'https://postmarkapp.com/pricing' }
      ],
      note: 'SMB budgets: $15–$500/mo.'
    },
    {
      title: 'Observability & APM',
      links: [
        { name: 'Datadog', href: 'https://www.datadoghq.com/pricing/' },
        { name: 'New Relic', href: 'https://newrelic.com/pricing' },
        { name: 'Grafana Cloud', href: 'https://grafana.com/pricing/' }
      ],
      note: 'SMB budgets: $50–$2,000/mo.'
    }
  ],

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>AI Document Summarizer</h2>
					<p className=&quot;text-slate-300&quot;>Concise summaries with citations for PDFs, docs, and URLs with export options.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical budget: $10–$30/mo + usage</li>
						<li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.pinecone.io/pricing/')}</li>
						<li>Try: <a href=&quot;/services/ai-document-summarizer&quot; className=&quot;text-cyan-400 underline&quot;>ziontechgroup.com/services/ai-document-summarizer</Link></li>
					</ul>
				</section>

      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto space-y-12&quot;>
          <header className=&quot;text-center&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>
              Services That Ship Outcomes
            </h1>
            <p className=&quot;text-gray-300 text-lg&quot;>AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
            <div className=&quot;mt-8 flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
              <Button href=&quot;/contact&quot; className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white&quot;>
                Talk to Sales <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Button>
              <Button href=&quot;/market-pricing&quot; variant=&quot;outline&quot; className=&quot;px-8 py-4 border border-gray-600 text-gray-200&quot;>
                View Market Pricing <ExternalLink className=&quot;w-5 h-5 ml-2&quot; />
              </Button>
            </div>
          </header>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>New Real Micro SaaS</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
              {[ 
                { name: 'API Security Scanner', price: '$299/mo', href: '/services/api-security-scanner', points: ['OWASP Top 10CI/CD checksPII detection'] },
                { name: 'Email DMARC Analyzer', price: '$99/mo', href: '/services/email-dmarc-analyzer', points: ['DMARC/SPF/DKIMBIMI readinessWeekly reports'] },
                { name: 'Browser Performance Monitor', price: '$149/mo', href: '/services/browser-performance-monitor', points: ['RUM + SyntheticCore Web VitalsAlerts'] },
                { name: 'Cloud Cost Optimizer', price: '$399/mo', href: '/services/cloud-cost-optimizer', points: ['AnomaliesRightsizingBudgets'] },
                { name: 'API Observability Starter', price: '$149/mo', href: '/services/api-observability-starter', points: ['TracesSLOsDeps map'] }
              ].map((o) => (
                <a key={o.name} href={o.href} className=&quot;block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40&quot;>
                  <div className=&quot;text-sm text-gray-400 mb-1&quot;>From</div>
                  <div className=&quot;text-2xl font-bold text-white&quot;>{o.price}</div>
                  <div className=&quot;text-gray-200 mt-2 mb-3&quot;>{o.name}</div>
                  <ul className=&quot;text-sm text-gray-300 space-y-1 list-disc list-inside&quot;>
                    {o.points.map((p) => (<li key={p}>{p}</li>))}
                  </ul>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Why Zion Tech Group</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
              {benefits.map((b) => (
                <div key={b} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60&quot;>
                  <div className=&quot;flex items-start gap-3&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-emerald-400 mt-1&quot; />
                    <p className=&quot;text-gray-200&quot;>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Browser Automation Cloud</h2>
					<p className=&quot;text-slate-300&quot;>Scale Playwright/Puppeteer jobs with proxy pools, recorder-to-code and webhooks.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical budget: $40–$200/mo</li>
						<li>References: {ext('https://apify.com/pricing')}, {ext('https://www.browserless.io/pricing')}</li>
						<li>Try: <a href=&quot;/services/browser-automation-cloud&quot; className=&quot;text-cyan-400 underline&quot;>ziontechgroup.com/services/browser-automation-cloud</Link></li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>API Performance Testing</h2>
					<p className=&quot;text-slate-300&quot;>Load, latency and regression testing with CI gates and dashboards.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical budget: $30–$150/mo</li>
						<li>References: {ext('https://k6.io/pricing')}, {ext('https://jmeter.apache.org/')}</li>
						<li>Try: <a href=&quot;/services/api-performance-testing&quot; className=&quot;text-cyan-400 underline&quot;>ziontechgroup.com/services/api-performance-testing</Link></li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Email Deliverability Monitor</h2>
					<p className=&quot;text-slate-300&quot;>DMARC/SPF/DKIM health, blocklists, and inbox placement with alerts.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical budget: $15–$60/mo</li>
						<li>References: {ext('https://dmarc.org/overview/')}, {ext('https://postmarkapp.com/support/category/dmarc')}</li>
						<li>Try: <a href=&quot;/services/email-deliverability-monitor&quot; className=&quot;text-cyan-400 underline&quot;>ziontechgroup.com/services/email-deliverability-monitor</Link></li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Podcast Transcription & Insights</h2>
					<p className=&quot;text-slate-300&quot;>Transcripts, chapters, show notes, and SEO-ready blog pages.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical budget: $10–$60/mo + usage</li>
						<li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.descript.com/pricing')}</li>
						<li>Try: <a href=&quot;/services/podcast-transcription-insights&quot; className=&quot;text-cyan-400 underline&quot;>ziontechgroup.com/services/podcast-transcription-insights</Link></li>
					</ul>
				</section>

				<section id=&quot;ai-evaluation-orchestrator&quot; className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>AI Evaluation Orchestrator</h2>
					<p className=&quot;text-slate-300&quot;>Automate LLM evals, regression tests, red-teaming, and leaderboards across OpenAI, Anthropic, Groq, and more.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $50–$400/mo + API usage</li>
						<li>References: {ext('https://openai.com/pricing')}, {ext('https://www.anthropic.com/pricing')}, {ext('https://openrouter.ai/models')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Vector Search Starter</h2>
					<p className=&quot;text-slate-300&quot;>Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $50–$1,000/mo</li>
						<li>References: {ext('https://www.pinecone.io/pricing/')}, {ext('https://console.weaviate.cloud/pricing')}, {ext('https://www.elastic.co/pricing')}</li>
					</ul>
				</section>

				<section id=&quot;managed-postgres-ha&quot; className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Managed Postgres HA</h2>
					<p className=&quot;text-slate-300&quot;>SRE-backed high availability Postgres with PITR backups, failover, and tuning.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $1,200–$5,000/mo</li>
						<li>References: {ext('https://cloud.google.com/sql/pricing')}, {ext('https://aws.amazon.com/rds/postgresql/pricing/')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>AI Guardrails & Safety</h2>
					<p className=&quot;text-slate-300&quot;>Policy engine, PII detection, jailbreak protection, and audit logs for LLM apps.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $0–$500/mo</li>
						<li>References: {ext('https://platform.openai.com/docs/guides/safety-best-practices')}, {ext('https://github.com/guardrails-ai/guardrails')}</li>
					</ul>
				</section>
				
				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>Identity & SSO/SCIM</h2>
					<p className=&quot;text-slate-300&quot;>Enterprise SSO and user lifecycle with Okta/Auth0/WorkOS.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $100–$1,500/mo</li>
						<li>References: {ext('https://auth0.com/pricing')}, {ext('https://workos.com/pricing')}, {ext('https://www.okta.com/pricing/')}</li>
					</ul>
				</section>

				<section className=&quot;space-y-6&quot;>
					<h2 className=&quot;text-2xl font-semibold text-white&quot;>API Observability Starter</h2>
					<p className=&quot;text-slate-300&quot;>Distributed tracing, golden signals dashboards, opinionated SLOs and alerting. Go live in under 60 minutes.</p>
					<ul className=&quot;list-disc list-inside text-slate-300 space-y-1&quot;>
						<li>Typical SMB budget: $99–$350/mo</li>
						<li>References: {ext('https://www.honeycomb.io/pricing/')}, {ext('https://www.datadoghq.com/pricing/')}, {ext('https://newrelic.com/pricing')}</li>
					</ul>
				</section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>New Micro SaaS & IT Solutions</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
              {[
                { name: 'Affiliate Marketing Tracker Pro', price: '$99/mo', href: '/affiliate-marketing-tracker-pro', refs: [{ n: 'Refersion', u: 'https://www.refersion.com/pricing' }] },
                { name: 'SMB Privacy Web Analytics', price: '$12/mo', href: '/smb-privacy-web-analytics', refs: [{ n: 'Plausible', u: 'https://plausible.io/#pricing' }] },
                { name: 'MSP Helpdesk & ITSM', price: '$149/mo', href: '/msp-helpdesk-itsm', refs: [{ n: 'Freshdesk', u: 'https://freshdesk.com/pricing' }] },
                { name: 'AI Content Creation Studio', price: '$39/mo', href: '/ai-content-creation-studio', refs: [{ n: 'Jasper', u: 'https://www.jasper.ai/pricing' }] },
                { name: 'E-commerce Returns Manager', price: '$59/mo', href: '/ecommerce-returns-manager', refs: [{ n: 'Loop Returns', u: 'https://www.loopreturns.com/pricing' }] },
                { name: 'Automated Email Follow-ups', price: '$29/mo', href: '/automated-email-followups', refs: [{ n: 'Reply.io', u: 'https://reply.io/pricing' }] },
                { name: 'Podcast Transcription Pro', price: '$15/mo', href: '/podcast-transcription-pro', refs: [{ n: 'Rev', u: 'https://www.rev.com/pricing' }] },
                { name: 'Freelancer Portfolio Builder', price: '$9/mo', href: '/freelancer-portfolio-builder', refs: [{ n: 'Webflow', u: 'https://webflow.com/pricing' }] },
                { name: 'Micro CRM for Local Business', price: '$19/mo', href: '/micro-crm-local-business', refs: [{ n: 'Zoho Bigin', u: 'https://www.zoho.com/bigin/pricing/' }] },
                { name: 'AI SEO Content Optimizer', price: '$59/mo', href: '/ai-seo-content-optimizer', refs: [{ n: 'Surfer SEO', u: 'https://surferseo.com/pricing/' }] }
              ].map((o) => (
                <div key={o.name} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60&quot;>
                  <a href={o.href} className=&quot;block group&quot;>
                    <div className=&quot;text-sm text-gray-400 mb-1&quot;>From</div>
                    <div className=&quot;flex items-center justify-between&quot;>
                      <div className=&quot;text-white font-semibold text-lg group-hover:text-cyan-300&quot;>{o.name}</div>
                      <div className=&quot;text-cyan-300 font-medium&quot;>{o.price}</div>
                    </div>
                  </Link>
                  <div className=&quot;mt-3 text-sm text-gray-400 flex flex-wrap gap-3&quot;>
                    {o.refs.map((r) => (
                      <a key={r.n} href={r.u} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;inline-flex items-center gap-1 text-gray-300 hover:text-white&quot;>
                        <ExternalLink className=&quot;w-4 h-4&quot; /> {r.n}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Average Market Price Ranges</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
              {[ 
                { title: 'AI Evaluations & Prompting', range: '$50–$800/mo', links: [
                  { name: 'Weights & Biases', href: 'https://wandb.ai/site/pricing' },
                  { name: 'Humanloop', href: 'https://humanloop.com/pricing' },
                  { name: 'Promptfoo', href: 'https://www.promptfoo.dev/pricing' }
                ]},
                { title: 'LLM Platforms', range: '$100–$2,000/mo', links: [
                  { name: 'OpenAI', href: 'https://openai.com/api/pricing' },
                  { name: 'Anthropic', href: 'https://www.anthropic.com/pricing' },
                  { name: 'OpenRouter', href: 'https://openrouter.ai/models' }
                ]},
                { title: 'Observability/APM', range: '$50–$2,000/mo', links: [
                  { name: 'Datadog', href: 'https://www.datadoghq.com/pricing/' },
                  { name: 'New Relic', href: 'https://newrelic.com/pricing' },
                  { name: 'Grafana Cloud', href: 'https://grafana.com/pricing/' }
                ]},
                { title: 'Security & Compliance', range: '$200–$5,000/mo', links: [
                  { name: 'Wiz', href: 'https://www.wiz.io/pricing' },
                  { name: 'Prisma Cloud', href: 'https://www.paloaltonetworks.com/prisma/cloud/pricing' },
                  { name: 'Vault', href: 'https://www.hashicorp.com/products/vault/pricing' }
                ]},
                { title: 'Vector DB & Retrieval', range: '$20–$1,000/mo', links: [
                  { name: 'Pinecone', href: 'https://www.pinecone.io/pricing/' },
                  { name: 'Weaviate', href: 'https://weaviate.io/pricing' },
                  { name: 'Qdrant', href: 'https://qdrant.tech/pricing/' }
                ]},
                { title: 'Email Deliverability', range: '$50–$300/mo', links: [
                  { name: 'Mailgun', href: 'https://www.mailgun.com/pricing/' },
                  { name: 'SendGrid', href: 'https://sendgrid.com/pricing/' },
                  { name: 'Postmark', href: 'https://postmarkapp.com/pricing' }
                ]}
              ].map((group) => (
                <div key={group.title} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60&quot;>
                  <div className=&quot;flex items-center justify-between mb-2&quot;>
                    <h3 className=&quot;text-xl font-semibold text-white&quot;>{group.title}</h3>
                    <span className=&quot;text-sm text-gray-300&quot;>{group.range}</span>
                  </div>
                  <ul className=&quot;text-slate-300 space-y-1&quot;>
                    {group.links.map((l) => (
                      <li key={l.href}><a className=&quot;text-cyan-400 underline&quot; href={l.href} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>{l.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className=&quot;text-center mt-6&quot;>
              <Button href=&quot;/market-pricing&quot; className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white&quot;>More Market References</Button>
            </div>
          </section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Explore by Category</h2>
            <div className=&quot;flex flex-wrap items-center justify-center gap-3&quot;>
              {anchors.map((a) => (
                <a key={a.title} href={a.href} className=&quot;px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 text-gray-200&quot;>
                  {a.title}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Contact Us</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
              <a href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 flex items-center gap-3&quot;>
                <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span className=&quot;text-gray-200&quot;>{contact.mobile}</span>
              </Link>
              <a href={`mailto:${contact.email}`} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-purple-500/40 flex items-center gap-3&quot;>
                <Mail className=&quot;w-5 h-5 text-purple-400&quot; />
                <span className=&quot;text-gray-200&quot;>{contact.email}</span>
              </Link>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 flex items-center gap-3&quot;>
                <MapPin className=&quot;w-5 h-5 text-emerald-400&quot; />
                <span className=&quot;text-gray-200 text-sm&quot;>{contact.address}</span>
              </Link>
            </div>
          </section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>More Featured Solutions</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
              {[
                { name: 'Email Deliverability Monitor', price: '$149/mo', href: '/email-deliverability-monitor' },
                { name: 'API Security Scanner', price: '$799/mo', href: '/api-security-scanner' },
                { name: 'Domain & DNS Monitor', price: '$89/mo', href: '/domain-dns-monitor' },
                { name: 'Uptime & SLO Monitor', price: '$99/mo', href: '/uptime-slo-monitor' },
                { name: 'PDF Render API', price: '$49/mo', href: '/pdf-render-api' },
                { name: 'Database Performance Monitor', price: '$299/mo', href: '/database-performance-monitor' }
              ].map((o) => (
                <a key={o.name} href={o.href} className=&quot;block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40&quot;>
                  <div className=&quot;text-sm text-gray-400 mb-1&quot;>From</div>
                  <div className=&quot;text-2xl font-bold text-white&quot;>{o.price}</div>
                  <div className=&quot;text-gray-200 mt-2&quot;>{o.name}</div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}
