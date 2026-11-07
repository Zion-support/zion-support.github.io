// Standardized app-page template for the Zion Apps Network — consistent design,
// layout, navigation, and interlinking across every app page.
//
// Use it as the source pattern for all `app/<slug>/page.tsx` files.
import Link from 'next/link';
import type { ReactNode } from 'react';
import { appsNetworkCatalog, relatedApps } from '../data/appsNetwork';

export interface AppPageProps {
  app: AppsNetworkApp;
  /** Hero heading (defaults to app.name) */
  heading?: string;
  /** Hero supporting text (defaults to generic) */
  description?: string;
  /** Extra banner content to show above the feature grid */
  banner?: ReactNode;
  /** Body content sections rendered before the related-apps + CTA block */
  body?: ReactNode;
  related?: AppsNetworkApp[];
  /** Canonical URL for SEO */
  canonical?: string;
}

export interface AppsNetworkApp {
  slug: string;
  name: string;
  href: string;
  description: string;
  descriptionPt?: string;
  group: 'money' | 'ops' | 'govern' | 'work' | 'ai' | 'field' | 'hub';
  related: string[];
}

// Category accent colour for app showcase cards (maps group → gradient).
const groupAccent: Record<string, string> = {
  ai: '#a78bfa',
  money: '#fb7185',
  ops: '#fb923c',
  govern: '#34d399',
  work: '#8b5cf6',
  field: '#2dd4bf',
  hub: '#38bdf8',
};

const groupHex: Record<string, string> = {
  ai: '#8b5cf6',
  money: '#fb7185',
  ops: '#fb923c',
  govern: '#34d399',
  work: '#8b5cf6',
  field: '#2dd4bf',
  hub: '#38bdf8',
};

export function AppPageTemplate({
  app,
  heading,
  description,
  banner,
  body,
  related = relatedApps(app.slug, 4),
  canonical,
}: AppPageProps) {
  const relatedSlugs = related.map((r) => r.slug);
  const allRelated = appsNetworkCatalog.filter(
    (a) => a.slug !== app.slug && !relatedSlugs.includes(a.slug)
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16 sm:pt-28 sm:pb-20">
        {banner ? (
          <div className="absolute inset-0 opacity-8">{banner}</div>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        )}
        <div className="container-page relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-purple-400/20 bg-purple-400/5 text-purple-300 text-xs font-semibold uppercase tracking-widest">
              {app.group}
            </span>
            <Link
              href="/apps-network"
              className="text-xs text-slate-500 hover:text-purple-300 transition-colors"
            >
              ← Back to Apps Network
            </Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
            {heading || app.name}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">
            {description || (app.descriptionPt || app.description)}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/discovery/" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition">
              Discovery $99
            </a>
            <a href="/pricing" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      {body ? (
        <section className="bg-slate-900/5 border-b border-slate-800/60">
          <div className="container-page py-12 sm:py-16">{body}</div>
        </section>
      ) : null}

      {/* Related apps + CTA */}
      <section className="bg-slate-950/40">
        <div className="container-page py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: related apps */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Related apps in this network
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <article
                    key={r.slug}
                    className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 hover:border-purple-500/40 transition-colors"
                  >
                    <h4 className="text-sm font-semibold text-white mb-1">
                      <Link
                        href={r.href}
                        className="hover:text-purple-300 transition-colors"
                      >
                        {r.name}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {r.description}
                    </p>
                  </article>
                ))}
              </div>
              {allRelated.length > 0 ? (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">
                    Also in the network ({allRelated.length})
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allRelated.slice(0, 12).map((a) => (
                      <Link
                        key={a.slug}
                        href={a.href}
                        className="text-xs text-slate-500 hover:text-purple-300 transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Right: features / CTA */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-slate-900 p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {app.name} — in one place
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {app.description} Get it as part of the full Zion Apps Network —
                  path calculators, product apps, and commercial routes, all
                  cross-linked.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/discovery/"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition"
                  >
                    Free AI/IT Discovery $99
                  </Link>
                  <Link
                    href="/apps/playbook/"
                    className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-purple-500/40 transition"
                  >
                    Find the right tool
                  </Link>
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Links to this page are tracked. If a link is dead, file an issue
                  at github.com/Zion-support/zion-support.github.io.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
