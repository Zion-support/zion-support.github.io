import React from 'react';
import SEO from '../components/SEO';

const ext = (url: string) => (
	<a className="text-cyan-400 underline" href={`/out?u=${encodeURIComponent(url)}`} target="_blank" rel="nofollow noopener noreferrer">{url.replace('https://', '')}</a>
);

export default function ServicesAdvertisingPage() {
  const benefits = [
    '1000% ROI target with measurable KPIs',
    'Transparent pricing with market references',
    'Fast onboarding with templates and playbooks',
    'Enterprise-grade security and compliance',
    '24/7 support with SLAs',
    'Proven architectures and reference implementations',
    'No long-term lock-in; cancel anytime',
    'SOC 2-aligned processes and data handling',
    'Flexible deployment: SaaS or self-hosted options'
  ];

  const marketReferences = [
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
      note: 'SMB budgets: $0–$2,000/mo.'
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
      note: 'SMB budgets: $50–$1,500/mo.'
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
      note: 'SMB budgets: $25–$1,000/mo.'
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
      note: 'SMB budgets: $0–$2,000/mo.'
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
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO title="Services Advertising | Zion Tech Group" description="Features, benefits, and market references for Zion Tech Group services" url="https://ziontechgroup.com/services-advertising/" />
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services Advertising</h1>

        {/* Core micro SaaS and AI additions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">AI Document Summarizer</h2>
          <p className="text-slate-300">Concise summaries with citations for PDFs, docs, and URLs with export options.</p>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Typical budget: $10–$30/mo + usage</li>
            <li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.pinecone.io/pricing/')}</li>
            <li>Try: <a href="/services/ai-document-summarizer" className="text-cyan-400 underline">ziontechgroup.com/services/ai-document-summarizer</a></li>
          </ul>
        </section>

        <header className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Services That Ship Outcomes
          </h1>
          <p className="text-gray-300 text-lg">AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg">
              Talk to Sales →
            </a>
            <a href="/market-pricing" className="px-8 py-4 border border-gray-600 text-gray-200 rounded-lg">
              View Market Pricing ↗
            </a>
          </div>
        </header>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">New Real Micro SaaS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'AI Social Media Manager', price: '$99/mo', href: '/ai-social-media-manager' },
              { name: 'AI Document Summarizer', price: '$49/mo', href: '/ai-document-summarizer' },
              { name: 'AI Content Calendar', price: '$79/mo', href: '/ai-content-calendar' },
              { name: 'AI SEO Auditor', price: '$149/mo', href: '/ai-seo-auditor' },
              { name: 'AI Customer Support Bot', price: '$199/mo', href: '/ai-customer-support-bot' },
              { name: 'AI Landing Page Generator', price: '$299/mo', href: '/ai-landing-page-generator' },
              { name: 'AI Price Intelligence', price: '$399/mo', href: '/ai-price-intelligence' },
              { name: 'AI Instagram Scheduler', price: '$59/mo', href: '/ai-instagram-scheduler' },
              { name: 'Uptime & SLO Monitor', price: '$99/mo', href: '/uptime-slo-monitor' },
              { name: 'PDF Render API', price: '$49/mo', href: '/pdf-render-api' },
              { name: 'Database Performance Monitor', price: '$299/mo', href: '/database-performance-monitor' }
            ].map((o) => (
              <a key={o.name} href={o.href} className="block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40">
                <div className="text-sm text-gray-400 mb-1">From</div>
                <div className="text-2xl font-bold text-white">{o.price}</div>
                <div className="text-gray-200 mt-2">{o.name}</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}