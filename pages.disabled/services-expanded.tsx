import React from 'react';
import Head from 'next/head';

const Ext = ({ href, children }: { href: string; children?: React.ReactNode }) => (
  <a className="text-cyan-400 underline" href={href} target="_blank" rel="noopener noreferrer">
    {children || href.replace('https://', '').replace('http://', '')}
  </a>
);

export default function ServicesExpandedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-24 pb-24">
      <Head>
        <title>Expanded Services Catalog | Zion Tech Group</title>
        <meta name="description" content="Expanded catalog of AI, IT, and micro SaaS services with market pricing references and contact options." />
        <link rel="canonical" href="https://ziontechgroup.com/services-expanded" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <header className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Expanded Services Catalog
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Real, outcome-focused solutions across AI, micro SaaS, and Enterprise IT. Built on proven tools, with transparent, market-referenced pricing.
          </p>
        </header>

        {/* Contact strip */}
        <section className="rounded-2xl border border-cyan-500/30 bg-black/30 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-200">
            <div>
              <div className="text-slate-400 text-sm">Call</div>
              <div className="font-semibold">+1 302 464 0950</div>
            </div>
            <div>
              <div className="text-slate-400 text-sm">Email</div>
              <div className="font-semibold">kleber@ziontechgroup.com</div>
            </div>
            <div>
              <div className="text-slate-400 text-sm">Address</div>
              <div className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</div>
            </div>
          </div>
        </section>

        {/* Micro SaaS */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Micro SaaS Accelerators</h2>
          <p className="text-slate-300 mb-4">Launch fast with hosted or self-hosted options, clear SLAs, and export-anytime data portability.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$39/mo</div>
              <div className="mt-2 font-semibold">AI Meeting Note Taker</div>
              <p className="text-slate-300 mt-2">Auto-transcribe, summarize, action items; export to Notion/Jira/Slack.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://zoom.us/pricing">zoom.us/pricing</Ext>, <Ext href="https://otter.ai/pricing">otter.ai/pricing</Ext>, <Ext href="https://openai.com/api/pricing">openai.com/api/pricing</Ext></li>
              </ul>
            </div>
            {/* 2 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$59/mo</div>
              <div className="mt-2 font-semibold">Email Deliverability Monitor</div>
              <p className="text-slate-300 mt-2">SPF/DKIM/DMARC checks, blocklist alerts, inbox placement tests.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://postmarkapp.com/pricing">postmarkapp.com/pricing</Ext>, <Ext href="https://mailgun.com/pricing/">mailgun.com/pricing</Ext>, <Ext href="https://dmarcian.com/pricing/">dmarcian.com/pricing</Ext></li>
              </ul>
            </div>
            {/* 3 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$69/mo</div>
              <div className="mt-2 font-semibold">SEO Technical Auditor</div>
              <p className="text-slate-300 mt-2">Crawl audits, sitemaps, Core Web Vitals, schema, and issue tracking.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://ahrefs.com/pricing">ahrefs.com/pricing</Ext>, <Ext href="https://www.semrush.com/prices/">semrush.com/prices</Ext>, <Ext href="https://pagespeed.web.dev/">pagespeed.web.dev</Ext></li>
              </ul>
            </div>
            {/* 4 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$79/mo</div>
              <div className="mt-2 font-semibold">E‑commerce CRO Toolkit</div>
              <p className="text-slate-300 mt-2">A/B testing, heatmaps, funnel analytics, and abandoned cart recovery.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://vwo.com/plans/">vwo.com/plans</Ext>, <Ext href="https://www.optimizely.com/pricing/">optimizely.com/pricing</Ext>, <Ext href="https://www.hotjar.com/pricing/">hotjar.com/pricing</Ext></li>
              </ul>
            </div>
            {/* 5 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$99/mo</div>
              <div className="mt-2 font-semibold">Data Quality Monitor</div>
              <p className="text-slate-300 mt-2">Schema drift, null spikes, freshness SLAs with alerts to Slack/Teams.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://www.montecarlodata.com/pricing/">montecarlodata.com/pricing</Ext>, <Ext href="https://www.bigeye.com/pricing">bigeye.com/pricing</Ext></li>
              </ul>
            </div>
            {/* 6 */}
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$119/mo</div>
              <div className="mt-2 font-semibold">SaaS Billing Anomaly Guard</div>
              <p className="text-slate-300 mt-2">Detect overages and suspicious usage; webhook remediation playbooks.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://stripe.com/pricing">stripe.com/pricing</Ext>, <Ext href="https://www.chargebee.com/pricing/">chargebee.com/pricing</Ext></li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section>
          <h2 className="text-3xl font-bold mb-4">AI Services & Automation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$2,500</div>
              <div className="mt-2 font-semibold">AI Code Review & PR Assistant</div>
              <p className="text-slate-300 mt-2">Language model powered code review, security checks, and refactor suggestions integrated into CI.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://github.com/features/copilot">github.com/features/copilot</Ext>, <Ext href="https://www.deepsource.com/pricing">deepsource.com/pricing</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$4,000</div>
              <div className="mt-2 font-semibold">RAG & Search Implementation</div>
              <p className="text-slate-300 mt-2">Production-grade retrieval augmented generation with evals, safety, and observability.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://www.pinecone.io/pricing/">pinecone.io/pricing</Ext>, <Ext href="https://weaviate.io/pricing">weaviate.io/pricing</Ext>, <Ext href="https://openai.com/api/pricing">openai.com/api/pricing</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$3,000</div>
              <div className="mt-2 font-semibold">MLOps Pipeline Setup</div>
              <p className="text-slate-300 mt-2">Feature stores, model registry, CI/CD for models, and monitoring.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://www.mlflow.org/">mlflow.org</Ext>, <Ext href="https://www.feast.dev/">feast.dev</Ext>, <Ext href="https://wandb.ai/site/pricing">wandb.ai/pricing</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$1,500</div>
              <div className="mt-2 font-semibold">AI Customer Support Assistant</div>
              <p className="text-slate-300 mt-2">Context-grounded chat with escalation, transcripts, and analytics.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://www.zendesk.com/pricing/">zendesk.com/pricing</Ext>, <Ext href="https://www.helpscout.com/pricing/">helpscout.com/pricing</Ext>, <Ext href="https://openrouter.ai/models">openrouter.ai/models</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$2,000</div>
              <div className="mt-2 font-semibold">AI Sales Playbooks & Outreach</div>
              <p className="text-slate-300 mt-2">ICP discovery, tailored messaging, and multichannel cadences with auto-logging.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://www.apollo.io/pricing">apollo.io/pricing</Ext>, <Ext href="https://www.hubspot.com/pricing">hubspot.com/pricing</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$2,500</div>
              <div className="mt-2 font-semibold">Security Copilot & Threat Hunting</div>
              <p className="text-slate-300 mt-2">LLM‑assisted triage across logs, EDR/XDR, and cloud misconfigurations; playbook automation.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://www.crowdstrike.com/pricing/">crowdstrike.com/pricing</Ext>, <Ext href="https://www.wiz.io/pricing">wiz.io/pricing</Ext>, <Ext href="https://www.datadoghq.com/pricing/">datadoghq.com/pricing</Ext></li>
              </ul>
            </div>
          </div>
        </section>

        {/* IT & Cloud */}
        <section>
          <h2 className="text-3xl font-bold mb-4">IT, Cloud, and Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$1,200/mo</div>
              <div className="mt-2 font-semibold">Managed Kubernetes (SRE‑backed)</div>
              <p className="text-slate-300 mt-2">Cluster hardening, upgrades, autoscaling, and cost controls with monthly runbooks.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://cloud.google.com/kubernetes-engine/pricing">GKE pricing</Ext>, <Ext href="https://aws.amazon.com/eks/pricing/">EKS pricing</Ext>, <Ext href="https://azure.microsoft.com/pricing/details/kubernetes-service/">AKS pricing</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$2,000</div>
              <div className="mt-2 font-semibold">Cloud Cost Optimization Sprint</div>
              <p className="text-slate-300 mt-2">Rightsizing, storage tiers, autoscaling, and egress minimization with 90‑day ROI plan.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://calculator.aws">calculator.aws</Ext>, <Ext href="https://azure.microsoft.com/pricing">azure.microsoft.com/pricing</Ext>, <Ext href="https://www.cloudflare.com/plans/">cloudflare.com/plans</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$3,500</div>
              <div className="mt-2 font-semibold">Zero Trust & SSO/SCIM Rollout</div>
              <p className="text-slate-300 mt-2">Okta/Auth0/WorkOS integration, device posture checks, and least‑privilege access.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://workos.com/pricing">workos.com/pricing</Ext>, <Ext href="https://auth0.com/pricing">auth0.com/pricing</Ext>, <Ext href="https://www.okta.com/pricing/">okta.com/pricing</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$2,500</div>
              <div className="mt-2 font-semibold">Observability & Incident Response</div>
              <p className="text-slate-300 mt-2">Tracing, metrics, and logs with SLO burn rate alerts and on‑call playbooks.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://www.datadoghq.com/pricing/">datadoghq.com/pricing</Ext>, <Ext href="https://grafana.com/pricing/">grafana.com/pricing</Ext>, <Ext href="https://newrelic.com/pricing">newrelic.com/pricing</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$1,000</div>
              <div className="mt-2 font-semibold">GDPR/CCPA Compliance Toolkit</div>
              <p className="text-slate-300 mt-2">Data mapping, consent capture, DSR workflows, and audit-ready logs.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://iapp.org/resources/article/sample-privacy-notices-and-policies/">IAPP resources</Ext>, <Ext href="https://www.onetrust.com/platform/privacy-management/">onetrust.com</Ext></li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-2xl font-bold">$2,000</div>
              <div className="mt-2 font-semibold">EDR/XDR & MDR Setup</div>
              <p className="text-slate-300 mt-2">Endpoint protection, detection rules, and MDR integration with weekly reports.</p>
              <ul className="text-slate-400 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>References: <Ext href="https://www.crowdstrike.com/pricing/">crowdstrike.com/pricing</Ext>, <Ext href="https://arcticwolf.com/platform/managed-detection-response/">arcticwolf.com</Ext>, <Ext href="https://www.microsoft.com/security/business/microsoft-defender-pricing">defender pricing</Ext></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-purple-500/30 bg-black/30 p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-2">How to Engage</h3>
          <p className="text-slate-300">Start with a free discovery call. We scope outcomes, price transparently, and deliver playbooks you keep.</p>
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href="tel:+13024640950" className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Call +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="px-5 py-3 rounded-lg border border-gray-600 text-gray-200">Email kleber@ziontechgroup.com</a>
            <a href="https://ziontechgroup.com/contact" className="px-5 py-3 rounded-lg border border-purple-600 text-purple-200">Contact Form</a>
          </div>
        </section>
      </div>
    </div>
  );
}