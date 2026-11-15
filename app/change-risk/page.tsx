import Link from 'next/link';
import type { Metadata } from 'next';
import { APPS_NETWORK_HUB, appsNetworkBySlug, relatedApps } from '../data/appsNetwork';

export const metadata: Metadata = {
  title: 'Change Risk — Zion Tech Group',
  description: 'Score change risk before a patch window.',
  alternates: { canonical: 'https://ziontechgroup.com/change-risk/' },
};

const FEATURES = ["Change risk scoring", "Impact assessment", "Rollback planning", "Approval workflow integration", "Historical analysis"];

export default function Page() {
  const related = relatedApps('change-risk', 4);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/25 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">
            ⚠️ Ops · Zion Apps Network
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Change Risk
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Score change risk before a patch window.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/apps-network/"
              className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 hover:bg-purple-500/20 transition-colors"
            >
              Apps Network hub
            </Link>
            <Link
              href="/discovery/"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Discovery $99
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-3">Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div key={f} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-purple-500/30 transition-colors">
              <p className="text-sm text-slate-300">{f}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-3">Related apps</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={r.href}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-pink-500/30 transition-colors"
              >
                <h3 className="font-semibold text-white">{r.name}</h3>
                <p className="text-xs text-slate-500 mt-2">{r.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Need this capability in production?</h3>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Start with a $99 Discovery — one process, one report, one 30-minute session — then
              Consulting, Starter, or Growth.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/discovery/" className="text-purple-300 font-semibold hover:text-pink-300">
                Book Discovery →
              </Link>
              <Link href="/en/plans/" className="text-slate-400 hover:text-white">
                Official plans
              </Link>
              <Link href="/apps-network/" className="text-slate-400 hover:text-white">
                Apps Network hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
