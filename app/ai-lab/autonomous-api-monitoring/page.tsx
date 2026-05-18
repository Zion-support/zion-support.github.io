import type { Metadata } from 'next';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

export const metadata: Metadata = {
  title: 'Autonomous API Monitoring',
  description:
    'Self-healing API monitoring with AI-powered anomaly detection, automatic root-cause analysis, and proactive alerting for every endpoint.',
};

export default function AutonomousAPIMonitoringPage() {
  return (
    <div className="bg-slate-950/90">
      <AILabToolLayout
        title="Autonomous API Monitoring"
        subtitle="Self-healing API observability: AI-powered anomaly detection, automated root-cause analysis, and proactive alerting across every endpoint — no manual dashboard required."
      >
        <div className="space-y-8">
          {/* Hero Stats */}
          <section className="grid gap-6 md:grid-cols-4">
            {[
              { label: 'Health Score', value: '99.2', unit: '/100', color: 'emerald' },
              { label: 'Endpoints', value: '247', unit: 'tracked', color: 'blue' },
              { label: 'Alerts Today', value: '3', unit: 'auto-resolved', color: 'purple' },
              { label: 'MTTR', value: '47s', unit: 'avg', color: 'amber' },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">{stat.label}</p>
                <p className={`mt-3 text-4xl font-bold text-${stat.color}-300`}>
                  {stat.value}<span className="ml-1 text-base font-semibold text-slate-400">{stat.unit}</span>
                </p>
                <p className="mt-2 text-xs text-slate-400">Real-time signal from 247 monitored endpoints across staging, production, and edge environments.</p>
                <p className="mt-3 text-[11px] text-slate-500">
                  Last updated: <time dateTime={new Date().toISOString()}>{new Date().toLocaleString()}</time>
                </p>
              </div>
            ))}
          </section>

          {/* Endpoint Coverage */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Environment Coverage</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { env: 'Production', status: '99.2%', color: 'emerald', latency: '12.4ms' },
                  { env: 'Staging', status: '97.8%', color: 'blue', latency: '8.9ms' },
                  { env: 'Edge / CDN', status: '99.9%', color: 'teal', latency: '3.2ms' },
                  { env: 'Integration Tests', status: '95.1%', color: 'amber', latency: '45.7ms' },
                ].map((e, i) => (
                  <div key={i} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="text-xs font-semibold text-slate-400">{e.env}</p>
                    <p className={`mt-2 text-2xl font-bold text-${e.color}-300`}>{e.status}</p>
                    <p className="text-xs text-slate-500">• {e.latency} avg latency</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">AI Anomaly Detection</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                  <div className="h-3 w-3 flex-shrink-0 mt-1 rounded-full bg-emerald-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-100">P95 latency spike detected on /checkout</p>
                    <p className="text-xs text-slate-400">Auto-resolved in 22s — cache backfill triggered, no human action needed.</p>
                    <p className="text-[10px] text-slate-500 mt-1">2 min ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-amber-700/50 bg-slate-900/50 p-4">
                  <div className="h-3 w-3 flex-shrink-0 mt-1 rounded-full bg-amber-400 animate-pulse" />
                  <div>
                    <p className="text-sm font-medium text-amber-100">Error rate drifted on /api/v2/payments (+1.8%)</p>
                    <p className="text-xs text-slate-400">Root-cause: new dependency version mismatch identified. Alert sent to #engineering.</p>
                    <p className="text-[10px] text-slate-500 mt-1">Active — 14 min ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                  <div className="h-3 w-3 flex-shrink-0 mt-1 rounded-full bg-blue-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-100">Throughput anomaly on /search — seasonal pattern, OK</p>
                    <p className="text-xs text-slate-400">AI classified as expected traffic surge — no action required.</p>
                    <p className="text-[10px] text-slate-500 mt-1">1 hr ago</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Insights */}
          <section className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">AI Optimization Suggestions</p>
            <div className="mt-4 space-y-3">
              {[
                { title: 'Add response compression for /api/v1/reports', detail: 'Estimated 38% bandwidth reduction • Priority: High', color: 'blue' },
                { title: 'Implement circuit breaker for payment-service', detail: 'Prevent cascade failures • Priority: High', color: 'red' },
                { title: 'Enable API caching for /analytics/* endpoints', detail: 'Estimated 42% latency reduction • Priority: Medium', color: 'purple' },
                { title: 'Add request/response logging for /auth/session', detail: 'Improve debug traceability • Priority: Low', color: 'indigo' },
              ].map((s, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/50 p-4`}>
                  <div className={`h-3 w-3 flex-shrink-0 mt-1 rounded-full bg-${s.color}-400`} />
                  <div>
                    <p className="text-sm font-medium text-slate-100">{s.title}</p>
                    <p className="text-xs text-slate-400">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-indigo-500/30 bg-indigo-950/40 p-6">
            <div>
              <p className="text-sm font-semibold text-indigo-200">Want autonomous API monitoring for your infrastructure?</p>
              <p className="mt-1 text-xs text-indigo-300/70">Self-healing alerts, AI root-cause analysis, zero-config setup — free consultation.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact?topic=api-monitoring&source=ai-lab" className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">
                Get Started Free
              </Link>
              <Link href="/services" className="rounded-lg border border-indigo-300 bg-indigo-50 px-5 py-2.5 text-sm font-semibold text-indigo-800 hover:bg-indigo-100 transition-colors">
                View All Services
              </Link>
            </div>
          </section>
        </div>
      </AILabToolLayout>
    </div>
  );
}
