import Link from 'next/link';

const APPS: { slug: string; title: string; emoji: string; blurb: string }[] = [
  { slug: 'zion-ai-field-service-manager', title: 'AI Field Service Manager', emoji: '🛠️', blurb: 'Dispatch, SLA tracking and technician coordination.' },
  { slug: 'zion-ai-help-desk', title: 'AI Help Desk', emoji: '🎧', blurb: 'Ticket triage, routing and resolution workflows.' },
  { slug: 'zion-ai-incident-response', title: 'AI Incident Response', emoji: '🚨', blurb: 'Detect, respond and document incidents faster.' },
  { slug: 'zion-ai-resource-scheduler', title: 'AI Resource Scheduler', emoji: '📅', blurb: 'Match people, skills and windows to jobs.' },
  { slug: 'zion-ai-predictive-analytics', title: 'AI Predictive Analytics', emoji: '📈', blurb: 'Forecast demand, risk and maintenance needs.' },
  { slug: 'zion-ai-vendor-manager', title: 'AI Vendor Manager', emoji: '🤝', blurb: 'Onboard, qualify and manage suppliers.' },
  { slug: 'zion-ai-procurement-automation', title: 'AI Procurement Automation', emoji: '🛒', blurb: 'Automate purchase requests and approvals.' },
  { slug: 'zion-ai-quality-insights', title: 'AI Quality Insights', emoji: '✅', blurb: 'Quality signals and audit-ready evidence.' },
  { slug: 'zion-ai-contract-lifecycle', title: 'AI Contract Lifecycle', emoji: '📄', blurb: 'Draft, review and track contracts end to end.' },
  { slug: 'zion-ai-knowledge-base', title: 'AI Knowledge Base', emoji: '📚', blurb: 'Searchable institutional knowledge for teams.' },
  { slug: 'zion-ai-seo-optimizer', title: 'AI SEO Optimizer', emoji: '🔍', blurb: 'Content and technical SEO recommendations.' },
  { slug: 'zion-ai-marketing-automation', title: 'AI Marketing Automation', emoji: '📣', blurb: 'Campaigns, segmentation and reporting.' },
];

export default function AppsNetworkShowcase() {
  return (
    <section className="py-20 bg-slate-900/20 border-t border-slate-800/60">
      <div className="container-page">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-900/30 text-amber-300 uppercase tracking-wider">
            Apps Network
          </span>
          <h2 className="text-3xl font-bold text-white mt-4">
            Explore the Zion Apps Network
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Ready-to-use AI products that plug into your operation — field service,
            help desk, incident response, scheduling, procurement and more.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {APPS.map((app) => (
            <Link
              key={app.slug}
              href={`/${app.slug}/`}
              className="p-5 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-amber-500/60 transition"
            >
              <span className="text-3xl">{app.emoji}</span>
              <h3 className="font-semibold text-white mt-3">{app.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{app.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
