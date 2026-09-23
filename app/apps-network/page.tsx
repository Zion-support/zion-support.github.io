import Link from 'next/link';
import type { Metadata } from 'next';
import {
  APPS_NETWORK_HUB,
  appsNetworkCatalog,
  homepageFeaturedApps,
  type AppsNetworkApp,
} from '../data/appsNetwork';

export const metadata: Metadata = {
  title: 'Zion Apps Network — Hub & Interlinks',
  description:
    'Explore the Zion Apps Network: path calculators, product apps, and cross-links across the GitHub apps constellation on ziontechgroup.com.',
  alternates: { canonical: 'https://ziontechgroup.com/apps-network/' },
};

const GROUPS: { key: AppsNetworkApp['group']; label: string; href: string }[] = [
  { key: 'money', label: 'Money & FinOps', href: '/apps/categories/money/' },
  { key: 'ops', label: 'Ops & incidents', href: '/apps/categories/ops/' },
  { key: 'govern', label: 'Governance & bids', href: '/apps/categories/govern/' },
  { key: 'ai', label: 'AI product apps', href: '/apps/' },
  { key: 'field', label: 'Field & support', href: '/apps/' },
  { key: 'work', label: 'Worksheets', href: '/apps/playbook/' },
];

function AppCard({ app }: { app: AppsNetworkApp }) {
  const related = app.related
    .map((slug) => appsNetworkCatalog.find((a) => a.slug === slug))
    .filter(Boolean)
    .slice(0, 3) as AppsNetworkApp[];

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-purple-500/40 transition-colors">
      <p className="text-[10px] uppercase tracking-widest text-purple-300/80 font-semibold mb-2">{app.group}</p>
      <h3 className="text-lg font-semibold text-white mb-2">
        <Link href={app.href} className="hover:text-purple-300 transition-colors">
          {app.name}
        </Link>
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-3">{app.description}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        <Link href={app.href} className="text-purple-300 hover:text-pink-300 font-medium">
          Open →
        </Link>
        {related.map((r) => (
          <Link key={r.slug} href={r.href} className="text-slate-500 hover:text-slate-300">
            {r.name}
          </Link>
        ))}
      </div>
    </article>
  );
}

export default function AppsNetworkPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/25 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">
            Zion Apps Network
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            One hub. Every app linked both ways.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Path calculators on this domain, product apps from the GitHub constellation, and
            commercial routes — cross-linked so discovery works from homepage, hub, or any tool.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {APPS_NETWORK_HUB.hubs.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 hover:bg-purple-500/20 transition-colors"
              >
                {h.name}
              </Link>
            ))}
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
        <h2 className="text-2xl font-bold text-white mb-3">Browse by job-to-be-done</h2>
        <p className="text-slate-400 text-sm mb-8">Each category page interlinks sibling tools and the hub.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GROUPS.map((g) => (
            <Link
              key={g.key}
              href={g.href}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-pink-500/30 transition-colors"
            >
              <h3 className="font-semibold text-white">{g.label}</h3>
              <p className="text-xs text-slate-500 mt-2">
                {appsNetworkCatalog.filter((a) => a.group === g.key).length} apps in catalog →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-3">Featured apps</h2>
          <p className="text-slate-400 text-sm mb-8">
            Homepage highlights with related links so you never dead-end inside the network.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {homepageFeaturedApps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-3">Full path-tool catalog</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {appsNetworkCatalog.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Need these capabilities in production?</h3>
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
              <Link href="/apps/playbook/" className="text-slate-400 hover:text-white">
                Which tool first?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
