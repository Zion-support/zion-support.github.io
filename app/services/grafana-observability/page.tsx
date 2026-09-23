import Link from 'next/link';

export const metadata = {
  title: 'Grafana Observability Stack | Zion Tech Group',
  description: 'Open-source metrics, logs, and traces visualization through composable dashboards. Combined with Loki (log aggregation) and Tempo (distributed tracing), delivers a full-stack observability suite that rivals Datadog and New Relic at zero licensing cost for self-hosted deployments.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/grafana-observability',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Grafana Observability Stack</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Open-source metrics, logs, and traces visualization through composable dashboards. Combined with Loki (log aggregation) and Tempo (distributed tracing), delivers a full-stack observability suite that rivals Datadog and New Relic at zero licensing cost for self-hosted deployments.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Book a Consultation
            </a>
            <Link href="/services" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Browse All Services
            </Link>
            <Link href="/contact" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Composable dashboards with 100+ visualization types (time series, heatmaps, geomaps, gauges)</li>
            <li>Unified observability: metrics (Prometheus/Mimir), logs (Loki), and traces (Tempo) in a single interface</li>
            <li>Alerting engine with multi-channel notifications (Slack, PagerDuty, email, webhooks)</li>
            <li>150+ data source plugins: Prometheus, MySQL, PostgreSQL, Elasticsearch, cloud APIs</li>
            <li>Grafana Cloud free tier: 10K active metrics, 50GB logs, 50GB traces, 3 users — no credit card</li>
            <li>Self-hostable on any infrastructure; Helm chart for Kubernetes, Docker Compose for simpler setups</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Replaces expensive SaaS observability tools (Datadog, New Relic) that charge $15–$25+/host/mo — self-hosted Grafana stack is free at any scale</li>
            <li>Unified metrics/logs/traces in one UI eliminates context-switching between 3+ tools during incident response</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (self-hosted)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">Free tier: 10K metrics, 50GB logs</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Cloud Pro from $29/mo</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Need a tailored rollout? Call{' '}
          <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
          {' '}or email{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>
      </section>
    </main>
  );
}
