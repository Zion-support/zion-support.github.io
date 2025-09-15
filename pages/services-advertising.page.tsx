import React from 'react';
import Head from 'next/head';

import { ArrowRight, CheckCircle, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
export default function ServicesAdvertisingPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };
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
  const newHighlights = [
    { title: 'Privacy Request Portal (DSAR)', price: 'From $99/mo + usage', refs: ['https://transcend.io/pricing/', 'https://www.onetrust.com/pricing/'], href: '/services/gdpr-dsar-portal' },
    { title: 'CSP & Security Headers Manager', price: 'From $49/mo per domain', refs: ['https://securityheaders.com/'], href: '/services/security-headers-csp-manager' },
    { title: 'Checkout A/B Optimizer', price: 'From $99/mo', refs: ['https://www.optimizely.com/pricing/'], href: '/services/checkout-performance-optimizer' },
    { title: 'Status & Incident Hub', price: 'From $59/mo', refs: ['https://betterstack.com/status/pricing'], href: '/services/status-incident-hub' }
  ];
  const anchors = [
    { title: 'AI & ML', href: '#ai-evaluation-orchestrator' },
    { title: 'Security', href: '#ai-guardrails-safety' },
    { title: 'Observability', href: '#status-page-slo-monitor' },
    { title: 'Compliance', href: '#k8s-soc2-control-pack' },
    { title: 'Edge & Cron', href: '#edge-cron-orchestrator' },
    { title: 'Commerce', href: '#checkout-performance-optimizer' }
  ];
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
  ];
  const external = {
    privacy: [
      { name: 'OneTrust', href: 'https://www.onetrust.com/pricing/' },
      { name: 'Transcend', href: 'https://transcend.io/pricing/' }
    ],
    finops: [
      { name: 'CloudZero', href: 'https://www.cloudzero.com/pricing' },
      { name: 'Vantage', href: 'https://www.vantage.sh/pricing' }
    ],
    devex: [
      { name: 'BuildPulse', href: 'https://buildpulse.io/pricing' }
    ],
    seo: [
      { name: 'ContentKing', href: 'https://www.contentkingapp.com/pricing/' },
      { name: 'Little Warden', href: 'https://littlewarden.com/pricing' }
    ]
  } as const;
  function ext(url: string) {
    return (
      <a className="text-cyan-400 underline" href={url} target="_blank" rel="noopener noreferrer">{new URL(url).host}/pricing</a>
    );
  }
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>AI, IT and Micro SaaS Services Advertising | Zion Tech Group</title>
        <meta name="description" content="Explore our AI, IT, and micro SaaS services with features, capabilities, benefits, pricing references, and easy contact options." />
        <link rel="canonical" href="https://ziontechgroup.com/services-advertising" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Services That Ship Outcomes
            </h1>
            <p className="text-gray-300 text-lg">AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg inline-flex items-center">
                Talk to Sales <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/market-pricing" className="px-8 py-4 border border-gray-600 text-gray-200 rounded-lg inline-flex items-center">
                View Market Pricing <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </header>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Why Zion Tech Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                    <p className="text-gray-200">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Spotlight: New Expert Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">Developer Productivity Copilot</h3>
                <p className="text-slate-300 mb-2">AI PR reviews, test generation, and CI insights.</p>
                <div className="text-sm text-slate-400">Typical: $19–$39/dev/mo</div>
                <ul className="text-slate-300 space-y-1 mt-2">
                  <li><a className="text-cyan-400 underline" href="https://github.com/features/copilot#pricing" target="_blank" rel="noopener noreferrer">github.com/features/copilot#pricing</a></li>
                  <li><a className="text-cyan-400 underline" href="https://codeium.com/pricing" target="_blank" rel="noopener noreferrer">codeium.com/pricing</a></li>
                  <li><a className="text-cyan-400 underline" href="https://buildpulse.io/pricing" target="_blank" rel="noopener noreferrer">buildpulse.io/pricing</a></li>
                </ul>
                <div className="mt-3"><a href="/services/developer-productivity-copilot" className="text-cyan-400 underline">Learn more</a></div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">AI Sales Assistant</h3>
                <p className="text-slate-300 mb-2">Qualify leads, personalize outreach, schedule meetings.</p>
                <div className="text-sm text-slate-400">Typical: $30–$150/user/mo</div>
                <ul className="text-slate-300 space-y-1 mt-2">
                  <li><a className="text-cyan-400 underline" href="https://www.apollo.io/pricing" target="_blank" rel="noopener noreferrer">apollo.io/pricing</a></li>
                  <li><a className="text-cyan-400 underline" href="https://www.lemlist.com/pricing" target="_blank" rel="noopener noreferrer">lemlist.com/pricing</a></li>
                  <li><a className="text-cyan-400 underline" href="https://www.hubspot.com/pricing/sales" target="_blank" rel="noopener noreferrer">hubspot.com/pricing/sales</a></li>
                </ul>
                <div className="mt-3"><a href="/services/ai-sales-assistant" className="text-cyan-400 underline">Learn more</a></div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">Security Posture Guardian</h3>
                <p className="text-slate-300 mb-2">Misconfig and secret scanning with auto-fixes.</p>
                <div className="text-sm text-slate-400">Typical: $100–$2,000/mo</div>
                <ul className="text-slate-300 space-y-1 mt-2">
                  <li><a className="text-cyan-400 underline" href="https://www.wiz.io/pricing" target="_blank" rel="noopener noreferrer">wiz.io/pricing</a></li>
                  <li><a className="text-cyan-400 underline" href="https://snyk.io/plans/" target="_blank" rel="noopener noreferrer">snyk.io/plans</a></li>
                  <li><a className="text-cyan-400 underline" href="https://www.paloaltonetworks.com/prisma/cloud/pricing" target="_blank" rel="noopener noreferrer">paloaltonetworks.com/prisma/cloud/pricing</a></li>
                </ul>
                <div className="mt-3"><a href="/services/security-posture-guardian" className="text-cyan-400 underline">Learn more</a></div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">AI Data Pipeline Optimizer</h3>
                <p className="text-slate-300 mb-2">Optimize ETL/ELT and RAG cost/latency.</p>
                <div className="text-sm text-slate-400">Typical: $200–$2,000/mo</div>
                <ul className="text-slate-300 space-y-1 mt-2">
                  <li><a className="text-cyan-400 underline" href="https://www.databricks.com/product/pricing" target="_blank" rel="noopener noreferrer">databricks.com/product/pricing</a></li>
                  <li><a className="text-cyan-400 underline" href="https://www.snowflake.com/pricing/" target="_blank" rel="noopener noreferrer">snowflake.com/pricing</a></li>
                  <li><a className="text-cyan-400 underline" href="https://www.getdbt.com/pricing" target="_blank" rel="noopener noreferrer">getdbt.com/pricing</a></li>
                </ul>
                <div className="mt-3"><a href="/services/ai-data-pipeline-optimizer" className="text-cyan-400 underline">Learn more</a></div>
              </div>
              {newHighlights.map((h) => (
                <div key={h.title} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                  <h3 className="text-white font-semibold mb-2">{h.title}</h3>
                  <div className="text-sm text-slate-400 mb-2">Typical: {h.price}</div>
                  <ul className="text-slate-300 space-y-1 mt-2">
                    {h.refs.map((u) => (
                      <li key={u}><a className="text-cyan-400 underline" href={u} target="_blank" rel="noopener noreferrer">{new URL(u).host}/pricing</a></li>
                    ))}
                  </ul>
                  <div className="mt-3"><a href={h.href} className="text-cyan-400 underline">Learn more</a></div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">New in Q2 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'AI Sales Playbook Generator', price: '$99/mo', href: '/services/ai-sales-playbook-generator' },
                { name: 'Customer Journey Analytics Starter', price: '$79/mo', href: '/services/customer-journey-analytics-starter' },
                { name: 'Incident Postmortem AI Scribe', price: '$39/mo', href: '/services/incident-postmortem-ai-scribe' },
                { name: 'SLO Burn Rate Coach', price: '$49/mo', href: '/services/slo-burn-rate-coach' },
                { name: 'API Changelog & SDK Publisher', price: '$59/mo', href: '/services/api-changelog-sdk-publisher' },
                { name: 'Browser Performance Optimizer', price: '$69/mo', href: '/services/browser-performance-optimizer' },
                { name: 'Secret Rotation Orchestrator', price: '$129/mo', href: '/services/secret-rotation-orchestrator' },
                { name: 'SaaS Billing Anomaly Guard', price: '$119/mo', href: '/services/saas-billing-anomaly-guard' },
                { name: 'ML Feature Store Starter', price: '$149/mo', href: '/services/ml-feature-store-starter' },
                { name: 'Edge Cron Orchestrator', price: '$59/mo', href: '/services/edge-cron-orchestrator' },
                { name: 'GDPR DSAR Portal', price: '$129/mo', href: '/services/gdpr-dsar-portal' },
                { name: 'SOC 2 Evidence Collector', price: '$149/mo', href: '/services/soc2-evidence-collector' },
                { name: 'SEO Change Monitor', price: '$69/mo', href: '/services/seo-change-monitor' },
                { name: 'CI/CD Flaky Test Detector', price: '$59/mo', href: '/services/cicd-flaky-test-detector' },
                { name: 'Cloud Cost Anomaly Guard', price: '$79/mo', href: '/services/cloud-cost-anomaly-guard' },
                { name: 'Data Pipeline SLA Tracker', price: '$89/mo', href: '/services/data-pipeline-sla-tracker' },
                { name: 'Edge Image Optimizer', price: '$39/mo', href: '/services/edge-image-optimizer' },
                { name: 'Managed Kubernetes SRE', price: '$2,500/mo', href: '/services/managed-kubernetes-sre' },
                { name: 'Zero Trust Rollout Coaching', price: '$4,000/engagement', href: '/services/zero-trust-rollout-coaching' },
                { name: 'PDF Render API', price: '$29/mo', href: '/services/pdf-render-api' },
                { name: 'Email Deliverability Monitor', price: '$39/mo', href: '/services/email-deliverability-monitor' },
                { name: 'Synthetic Data Generator', price: '$119/mo', href: '/services/synthetic-data-generator' },
                { name: 'AI Meeting Notes Agent', price: '$69/mo', href: '/services/ai-meeting-notes-agent' }
              ].map((o) => (
                <a key={o.name} href={o.href} className="block p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40">
                  <div className="text-sm text-gray-400 mb-1">From</div>
                  <div className="text-2xl font-bold text-white">{o.price}</div>
                  <div className="text-gray-200 mt-2">{o.name}</div>
                </a>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Market References for New Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">Privacy & DSAR</h3>
                <ul className="text-slate-300 space-y-1">
                  {external.privacy.map((l) => (
                    <li key={l.href}><a className="text-cyan-400 underline" href={l.href} target="_blank" rel="noopener noreferrer">{new URL(l.href).host}/pricing</a></li>
                  ))}
                </ul>
                <div className="text-sm text-slate-400 mt-3">Typical: $50–$500/mo.</div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">FinOps</h3>
                <ul className="text-slate-300 space-y-1">
                  {external.finops.map((l) => (
                    <li key={l.href}><a className="text-cyan-400 underline" href={l.href} target="_blank" rel="noopener noreferrer">{new URL(l.href).host}/pricing</a></li>
                  ))}
                </ul>
                <div className="text-sm text-slate-400 mt-3">Typical: $50–$500/mo.</div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">Developer Productivity</h3>
                <ul className="text-slate-300 space-y-1">
                  {external.devex.map((l) => (
                    <li key={l.href}><a className="text-cyan-400 underline" href={l.href} target="_blank" rel="noopener noreferrer">{new URL(l.href).host}/pricing</a></li>
                  ))}
                </ul>
                <div className="text-sm text-slate-400 mt-3">Typical: $20–$200/mo.</div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">SEO Monitoring</h3>
                <ul className="text-slate-300 space-y-1">
                  {external.seo.map((l) => (
                    <li key={l.href}><a className="text-cyan-400 underline" href={l.href} target="_blank" rel="noopener noreferrer">{new URL(l.href).host}/pricing</a></li>
                  ))}
                </ul>
                <div className="text-sm text-slate-400 mt-3">Typical: $20–$150/mo.</div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Average Market Prices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-sky-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Affiliate & Partnerships</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>Impact.com: <a className="text-cyan-400 underline" href="https://impact.com/pricing/" target="_blank" rel="noopener noreferrer">impact.com/pricing</a></li>
                  <li>PartnerStack: <a className="text-cyan-400 underline" href="https://partnerstack.com/pricing" target="_blank" rel="noopener noreferrer">partnerstack.com/pricing</a></li>
                  <li>Refersion: <a className="text-cyan-400 underline" href="https://www.refersion.com/pricing" target="_blank" rel="noopener noreferrer">refersion.com/pricing</a></li>
                </ul>
                <div className="text-sm text-slate-400 mt-3">Typical: $99–$500/month + commissions.</div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-emerald-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Website Analytics</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>Plausible: <a className="text-cyan-400 underline" href="https://plausible.io/pricing" target="_blank" rel="noopener noreferrer">plausible.io/pricing</a></li>
                  <li>Fathom: <a className="text-cyan-400 underline" href="https://usefathom.com/pricing" target="_blank" rel="noopener noreferrer">usefathom.com/pricing</a></li>
                  <li>Simple Analytics: <a className="text-cyan-400 underline" href="https://simpleanalytics.com/pricing" target="_blank" rel="noopener noreferrer">simpleanalytics.com/pricing</a></li>
                </ul>
                <div className="text-sm text-slate-400 mt-3">Typical: $9–$59/month.</div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-pink-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">Helpdesk & Chat</h3>
                <ul className="text-slate-300 space-y-1">
                  <li>Zendesk: <a className="text-cyan-400 underline" href="https://www.zendesk.com/pricing/" target="_blank" rel="noopener noreferrer">zendesk.com/pricing</a></li>
                  <li>Freshdesk: <a className="text-cyan-400 underline" href="https://freshdesk.com/pricing" target="_blank" rel="noopener noreferrer">freshdesk.com/pricing</a></li>
                  <li>Help Scout: <a className="text-cyan-400 underline" href="https://www.helpscout.com/pricing/" target="_blank" rel="noopener noreferrer">helpscout.com/pricing</a></li>
                </ul>
                <div className="text-sm text-slate-400 mt-3">Typical: $15–$99/agent/month.</div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Explore by Category</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {anchors.map((a) => (
                <a key={a.title} href={a.href} className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 text-gray-200">
                  {a.title}
                </a>
              ))}
            </div>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Podcast Transcription & Insights</h2>
            <p className="text-slate-300">Transcripts, chapters, show notes, and SEO-ready blog pages.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical budget: $10–$60/mo + usage</li>
              <li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.descript.com/pricing')}</li>
              <li>Try: <a href="/services/podcast-transcription-insights" className="text-cyan-400 underline">ziontechgroup.com/services/podcast-transcription-insights</a></li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">SEO Technical Monitor</h2>
            <p className="text-slate-300">Automated crawls, schema checks, sitemap health, and Core Web Vitals alerts.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $20–$150/mo</li>
              <li>References: {ext('https://www.contentkingapp.com/pricing/')}, {ext('https://ahrefs.com/pricing')}</li>
            </ul>
          </section>
          <section id="ai-evaluation-orchestrator" className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">AI Evaluation Orchestrator</h2>
            <p className="text-slate-300">Automate LLM evals, regression tests, red-teaming, and leaderboards across OpenAI, Anthropic, Groq, and more.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $50–$400/mo + API usage</li>
              <li>References: {ext('https://openai.com/api/pricing')}, {ext('https://www.anthropic.com/pricing')}, {ext('https://openrouter.ai/models')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Vector Search Starter</h2>
            <p className="text-slate-300">Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $50–$1,000/mo</li>
              <li>References: {ext('https://www.pinecone.io/pricing/')}, {ext('https://weaviate.io/pricing')}, {ext('https://www.elastic.co/pricing')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Managed Postgres HA</h2>
            <p className="text-slate-300">SRE-backed high availability Postgres with PITR backups, failover, and tuning.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $1,200–$5,000/mo</li>
              <li>References: {ext('https://cloud.google.com/sql/pricing')}, {ext('https://aws.amazon.com/rds/postgresql/pricing/')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">AI Guardrails & Safety</h2>
            <p className="text-slate-300">Policy engine, PII detection, jailbreak protection, and audit logs for LLM apps.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $0–$500/mo</li>
              <li>References: {ext('https://openai.com/safety')}, {ext('https://github.com/guardrails-ai/guardrails')}</li>
            </ul>
          </section>
          
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Identity & SSO/SCIM</h2>
            <p className="text-slate-300">Enterprise SSO and user lifecycle with Okta/Auth0/WorkOS.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $100–$1,500/mo</li>
              <li>References: {ext('https://auth0.com/pricing')}, {ext('https://workos.com/pricing')}, {ext('https://www.okta.com/pricing/')}</li>
            </ul>
          </section>
          
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Status Page & SLO Monitor</h2>
            <p className="text-slate-300">Public status pages, incident comms, and SLO/error budget tracking.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $20–$200/mo</li>
              <li>References: {ext('https://www.atlassian.com/software/statuspage/pricing')}, {ext('https://www.checklyhq.com/pricing/')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">TLS Certificate Monitor</h2>
            <p className="text-slate-300">Expiry alerts, issuance auditing, and auto-renew guidance.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $5–$50/mo</li>
              <li>References: {ext('https://letsencrypt.org/')} , {ext('https://www.ssllabs.com/ssltest/')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Domain & DNS Monitor</h2>
            <p className="text-slate-300">WHOIS, nameserver, and DNS record drift detection with alerts.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $5–$40/mo</li>
              <li>References: {ext('https://www.cloudflare.com/plans/')}, {ext('https://www.digicert.com/tools')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Affiliate Attribution & Payouts Hub</h2>
            <p className="text-slate-300">Cross-device attribution with first-party identity stitching and automated payouts.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $100–$300/mo</li>
              <li>References: {ext('https://stripe.com/pricing')}, {ext('https://pay.google.com/about/business/')}, {ext('https://partnerstack.com/')}</li>
            </ul>
          </section>
          
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">API Security Scanner</h2>
            <p className="text-slate-300">Continuously discover APIs and detect OWASP API Top 10 risks with CI gating.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $100–$2,000/mo</li>
              <li>References: {ext('https://www.cloudflare.com/plans/')}, {ext('https://www.fastly.com/pricing')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Edge Feature Flags</h2>
            <p className="text-slate-300">Audience and geo-targeted flags at the edge with gradual rollouts and fallbacks.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $50–$500/mo</li>
              <li>References: {ext('https://vercel.com/pricing')}, {ext('https://www.cloudflare.com/plans/')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Micro CRM for Local Business</h2>
            <p className="text-slate-300">Contacts, deals, appointments, and reminders without enterprise complexity.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $15–$60/mo</li>
              <li>References: {ext('https://www.hubspot.com/pricing')}, {ext('https://www.zoho.com/crm/pricing.html')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Employee Scheduling Suite</h2>
            <p className="text-slate-300">Shift planning with availability, time-off, swap requests, and notifications.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $30–$100/mo</li>
              <li>References: {ext('https://joinhomebase.com/pricing/')}, {ext('https://wheniwork.com/pricing')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">LMS Starter</h2>
            <p className="text-slate-300">Courses, quizzes, certificates, and progress tracking in days.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $30–$150/mo</li>
              <li>References: {ext('https://teachable.com/pricing')}, {ext('https://www.thinkific.com/pricing/')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">SMB Website Analytics</h2>
            <p className="text-slate-300">Privacy-friendly dashboards with goals and funnels. Cookie-less.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $9–$50/mo</li>
              <li>References: {ext('https://plausible.io/#pricing')}, {ext('https://usefathom.com/pricing')}</li>
            </ul>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Automated Email Follow-ups</h2>
            <p className="text-slate-300">Time and event sequences with A/B tests and performance analytics.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $20–$100/mo</li>
              <li>References: {ext('https://mailshake.com/pricing')}, {ext('https://www.gmass.co/pricing')}</li>
            </ul>
          </section>
          
          <div className="pt-4 text-slate-400 text-sm">See also: <a className="text-cyan-400 underline" href="/market-pricing">Market Pricing</a> for a broader list of benchmarks and links.</div>
          <section id="ai-email-responder" className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">AI Email Responder</h2>
            <p className="text-slate-300">Autonomous replies, prioritization, and sentiment analysis integrated with your CRM.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $20–$50/user/mo</li>
              <li>References: {ext('https://workspace.google.com/pricing')}, {ext('https://www.microsoft.com/microsoft-365/business/compare-all-microsoft-365-business-products')}</li>
            </ul>
          </section>
          <section id="mobile-first-survey-tool" className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Mobile-first Survey Tool</h2>
            <p className="text-slate-300">Adaptive surveys with conditional logic and real-time dashboards.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Typical SMB budget: $30–$70/mo</li>
              <li>References: {ext('https://www.typeform.com/pricing/')}, {ext('https://www.surveymonkey.com/pricing/')}</li>
            </ul>
          </section>
          <section id="contact" className="space-y-4 border-t border-white/10 pt-10">
            <h2 className="text-3xl font-bold text-white">Contact Us</h2>
            <p className="text-slate-300">We respond fast. Prefer WhatsApp or email for quickest turnaround.</p>
            <ul className="text-slate-300 space-y-1">
              <li><strong className="text-white">Mobile:</strong> <a className="text-cyan-400 underline" href="tel:+13024640950">+1 302 464 0950</a></li>
              <li><strong className="text-white">E-mail:</strong> <a className="text-cyan-400 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
              <li><strong className="text-white">Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</li>
              <li><strong className="text-white">Website:</strong> <a className="text-cyan-400 underline" href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">ziontechgroup.com</a></li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/contact" className="px-6 py-3 bg-cyan-600 text-white rounded-lg inline-flex">Contact Sales</a>
              <a href="/services" className="px-6 py-3 border border-gray-600 text-gray-200 rounded-lg inline-flex">Browse Services</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}