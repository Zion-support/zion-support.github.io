// app/discovery-sprint/page.tsx — Free AI/IT Discovery (Always Online, Always Free)
import Link from 'next/link';

export const metadata = {
  title: 'Free AI/IT Discovery — Zion Tech Group',
  description: 'Free online discovery to map your AI opportunity and run 7 quick risk checks. No commitment, no credit card, no data stored.',
  alternates: {
    canonical: 'https://ziontechgroup.com/discovery-sprint/',
    languages: {
      'en': 'https://ziontechgroup.com/discovery-sprint/',
      'pt-BR': 'https://ziontechgroup.com/pt/discovery-sprint/',
      'es': 'https://ziontechgroup.com/es/discovery-sprint/',
      'fr': 'https://ziontechgroup.com/fr/discovery-sprint/',
      'de': 'https://ziontechgroup.com/de/discovery-sprint/',
    },
  },
};

export default function DiscoverySprintPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">Zion Apps Network</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Free AI/IT Discovery — Always Online, Always Free</h1>
          <p className="mt-3 text-slate-400 max-w-3xl text-sm leading-relaxed">
            Free online discovery to map your AI opportunity and run 7 quick risk checks.
            No commitment, no credit card, no data stored. Start in minutes, get a clear recommendation.
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-slate-900 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">What you get</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Start with a free online discovery that maps your AI opportunity, runs 7 quick checks,
                  and shares a clear recommendation in minutes. Nothing is stored. Nothing is sold.
                </p>
              </div>
              <Link href="/discovery/" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition">
                Take the free discovery now
              </Link>
            </div>
            <div className="mt-5 grid sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: 'What you get', value: 'use-case map + 7 risk checks' },
                { label: 'How long', value: 'minutes, online' },
                { label: 'Cost', value: 'free, no credit card' },
              ].map(f => (
                <div key={f.label} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                  <dt className="text-[10px] uppercase tracking-widest text-slate-500">{f.label}</dt>
                  <dd className="text-white font-semibold mt-1">{f.value}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Use-case map', emoji: '🗺️', desc: 'Map your AI opportunity: what to automate, where to start, expected impact.' },
              { name: 'Risk checks', emoji: '⚠️', desc: '7 quick checks: data readiness, compliance, integration complexity, team capacity.' },
              { name: 'Recommendation', emoji: '💡', desc: 'Clear next steps: free tools, paid packages, or a full AI Sprint build.' },
              { name: 'No sales call', emoji: '🤝', desc: 'No obligation, no credit card, no data stored. Just facts and recommendations.' },
              { name: 'Advance later', emoji: '📈', desc: 'When ready, advance to a paid package or full AI Sprint build.' },
              { name: 'Always online', emoji: '🌐', desc: 'Available 24/7. Takes 3-5 minutes. No sign-up required.' },
            ].map(app => (
              <div key={app.name} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <div className="text-2xl mb-2">{app.emoji}</div>
                <h3 className="text-sm font-semibold text-white mb-1">{app.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/discovery/" className="rounded-full bg-gradient-to-r from-emerald-600 to-green-500 px-5 py-2.5 text-sm font-semibold text-white hover:from-emerald-500 hover:to-green-400 transition">
              Take the free discovery now
            </Link>
            <Link href="/apps-network/" className="rounded-full border border-purple-500/40 px-5 py-2.5 text-sm font-medium text-purple-200 hover:bg-purple-500/10 transition">
              Back to Apps Network
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
