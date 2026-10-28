// app/services-hub/page.tsx — Services Hub: main entry point for browsing all services
'use client';

import Link from 'next/link';
import { allServices, type Service } from '@/data/servicesData';
import { CATEGORIES, type CategoryMeta } from '@/constants/categories';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// ── Category hex colors (mirrors homepage CATEGORY_HEX) ──────────────────────
const CATEGORY_HEX: Record<string, string> = {
  ai: '#8b5cf6',
  it: '#38bdf8',
  cloud: '#7dd3fc',
  security: '#fb923c',
  data: '#34d399',
  automation: '#fb7185',
  'micro-saas': '#fbbf24',
  devops: '#22d3ee',
  blockchain: '#fbbf24',
  iot: '#2dd4bf',
  'email-intelligence': '#8b5cf6',
  database: '#3b82f6',
  collaboration: '#38bdf8',
  'media-streaming': '#f43f5e',
  'infrastructure-as-code': '#d97706',
  'low-code': '#10b981',
  monitoring: '#3b82f6',
  logging: '#94a3b8',
  'security-scanning': '#f97316',
  'backup-recovery': '#10b981',
  'identity-management': '#a855f7',
};

const hexToRgba = (hex: string, alpha = 0.35) => {
  const cleaned = hex.replace('#', '');
  const r = parseInt(cleaned.slice(0, 2) || '00', 16);
  const g = parseInt(cleaned.slice(2, 4) || '00', 16);
  const b = parseInt(cleaned.slice(4, 6) || '00', 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// ── Related categories mapping ────────────────────────────────────────────────
const RELATED_CATEGORIES: Record<string, string[]> = {
  ai: ['data', 'automation', 'security', 'micro-saas'],
  it: ['cloud', 'devops', 'security', 'database'],
  cloud: ['devops', 'it', 'monitoring', 'backup-recovery'],
  security: ['identity-management', 'security-scanning', 'backup-recovery', 'ai'],
  data: ['ai', 'database', 'monitoring', 'cloud'],
  automation: ['ai', 'micro-saas', 'low-code', 'devops'],
  'micro-saas': ['automation', 'low-code', 'collaboration', 'ai'],
  devops: ['cloud', 'infrastructure-as-code', 'monitoring', 'it'],
  blockchain: ['security', 'data', 'iot', 'micro-saas'],
  iot: ['cloud', 'data', 'security', 'automation'],
  'email-intelligence': ['automation', 'data', 'micro-saas', 'collaboration'],
  database: ['data', 'it', 'cloud', 'devops'],
  collaboration: ['micro-saas', 'automation', 'cloud', 'media-streaming'],
  'media-streaming': ['cloud', 'data', 'infrastructure-as-code', 'micro-saas'],
  'infrastructure-as-code': ['devops', 'cloud', 'monitoring', 'backup-recovery'],
  'low-code': ['automation', 'micro-saas', 'collaboration', 'data'],
  monitoring: ['devops', 'cloud', 'data', 'logging'],
  logging: ['monitoring', 'devops', 'data', 'backup-recovery'],
  'security-scanning': ['security', 'identity-management', 'backup-recovery', 'devops'],
  'backup-recovery': ['cloud', 'infrastructure-as-code', 'security', 'monitoring'],
  'identity-management': ['security', 'cloud', 'backup-recovery', 'it'],
};

// ── Featured service selection per category ───────────────────────────────────
function getFeaturedForCategory(catKey: string, services: Service[]): Service[] {
  const catServices = services.filter((s: any) => s.category === catKey);
  if (catServices.length === 0) return [];

  const popular = catServices.filter((s: any) => s.popular === true);
  const featured = popular.length >= 2 ? popular : catServices;
  return featured.slice(0, 3);
}

// ── Trending: top popular services across all categories ──────────────────────
function getTrendingServices(services: Service[]): Service[] {
  const popular = services.filter((s: any) => s.popular === true);
  return popular
    .map((s: any) => ({
      ...s,
      _score:
        (s.features?.length || 0) * 3 +
        (s.benefits?.length || 0) * 2 +
        (s.description || '').length * 0.3,
    }))
    .sort((a: any, b: any) => b._score - a._score)
    .slice(0, 8);
}

// ── Cross-link suggestions ─────────────────────────────────────────────────────
function getCrossLinks(catKey: string): CategoryMeta[] {
  const relatedKeys = RELATED_CATEGORIES[catKey] || [];
  return relatedKeys
    .map((k) => CATEGORIES.find((c) => c.key === k))
    .filter((c): c is CategoryMeta => c !== undefined);
}

export const metadata = {
  title: 'Services Hub — Browse All Categories',
  description:
    'Explore all 16+ service categories at Zion Tech Group. AI, IT, Cloud, Security, Data, Automation, Micro-SaaS, DevOps, Blockchain, IoT, and more. Find your perfect solution.',
  alternates: { canonical: 'https://ziontechgroup.com/services-hub/' },
};

export default function ServicesHubPage() {
  const services = allServices as Service[];
  const serviceCount = services.length;

  // Group services by category from CATEGORIES (not the data's category field)
  const byCategory = CATEGORIES.reduce<Record<string, Service[]>>((acc, cat) => {
    acc[cat.key] = services.filter((s: any) => s.category === cat.key);
    return acc;
  }, {});

  // Featured services per category
  const featuredByCategory = CATEGORIES.reduce<Record<string, Service[]>>((acc, cat) => {
    acc[cat.key] = getFeaturedForCategory(cat.key, services);
    return acc;
  }, {});

  // Trending
  const trending = getTrendingServices(services);

  // Category counts for display
  const categoryCounts = CATEGORIES.reduce<Record<string, number>>((acc, cat) => {
    acc[cat.key] = byCategory[cat.key]?.length ?? 0;
    return acc;
  }, {});

  const totalCategories = CATEGORIES.length;
  const categoriesWithServices = CATEGORIES.filter((c) => (categoryCounts[c.key] || 0) > 0).length;

  return (
    <main className="min-h-screen bg-slate-950">
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Services Hub — Zion Tech Group',
            description:
              'Browse all service categories: AI, IT, Cloud, Security, Data, Automation, Micro-SaaS, DevOps, Blockchain, IoT, and more.',
            url: 'https://ziontechgroup.com/services-hub/',
            about: {
              '@type': 'Organization',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com',
            },
          }),
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.2),rgba(20,10,40,0.95))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(200,50,150,0.08),transparent_50%)]" />
        <div className="relative container-page py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span>
              <span className="font-medium">Services Hub</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">
                {totalCategories} categories · {serviceCount.toLocaleString()}+ services
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Explore Our</span>{' '}
              <span className="text-white">Full Service Catalog</span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              From AI and IT to Cloud, Security, Data, Automation, Micro-SaaS, DevOps,
              Blockchain, and IoT —{' '}
              <span className="text-purple-300 font-medium">{serviceCount.toLocaleString()}+ services</span>{' '}
              across {totalCategories} categories. Find exactly what your business needs.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact/"
                className="btn-primary text-lg px-10 py-4"
              >
                ⚡ Get Your Custom Proposal →
              </Link>
              <Link
                href="/services/?category=ai"
                className="btn-secondary text-lg px-10 py-4"
              >
                🧠 Start with AI Services
              </Link>
              <Link
                href="/search/"
                className="btn-secondary text-lg px-10 py-4"
              >
                🔍 Search All Services
              </Link>
            </div>

            {/* Quick category picker */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {CATEGORIES.slice(0, 8).map((cat) => (
                <Link
                  key={cat.key}
                  href={`/services/?category=${cat.key}`}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:bg-purple-500/15 hover:border-purple-500/30 hover:text-purple-300 transition-all"
                >
                  {cat.emoji} {cat.label}
                </Link>
              ))}
              <Link
                href="/services/"
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:bg-purple-500/15 hover:border-purple-500/30 hover:text-purple-300 transition-all"
              >
                + {totalCategories - 8} more →
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          STATS BANNER
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-8 border-b border-slate-800/40">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: serviceCount.toLocaleString(), label: 'Total Services', emoji: '📚' },
              { value: totalCategories.toString(), label: 'Categories', emoji: '🗂️' },
              { value: categoriesWithServices.toString(), label: 'Active Categories', emoji: '✅' },
              { value: trending.length.toString(), label: 'Trending Now', emoji: '🔥' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/40 hover:border-purple-500/30 transition-colors"
              >
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ALL CATEGORIES — PROMINENT CARDS (21 categories)
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="categories" className="py-20">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🗂️</span>
            <h2 className="text-2xl font-bold text-white">All Service Categories</h2>
          </div>
          <p className="text-slate-400 mb-10 max-w-2xl">
            Click any category to browse its services, or scroll down to see featured services
            and trending picks across all domains.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.key] || 0;
              const featured = featuredByCategory[cat.key] || [];
              const hasServices = count > 0;
              const accentHex = CATEGORY_HEX[cat.key] || '#8b5cf6';

              return (
                <Link
                  key={cat.key}
                  href={hasServices ? `/services/?category=${cat.key}` : '#'}
                  className={`group relative rounded-2xl border bg-slate-900/70 hover:bg-slate-900 transition-all duration-300 ${
                    hasServices
                      ? 'hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-900/20 hover:scale-[1.02]'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  style={{
                    borderColor: hasServices ? 'rgba(100,100,120,0.3)' : 'rgba(100,100,120,0.15)',
                  }}
                >
                  {/* Gradient accent bar at top */}
                  <div
                    className="absolute top-0 left-4 right-4 h-1 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${accentHex}, ${accentHex}88)`,
                      opacity: 0.6,
                    }}
                  />

                  <div className="p-6 pt-5">
                    {/* Emoji + label */}
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-lg shrink-0
                          group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                      >
                        {cat.emoji}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors leading-tight">
                          {cat.label}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          {hasServices ? `${count} service${count !== 1 ? 's' : ''}` : 'No services yet'}
                        </p>
                      </div>
                    </div>

                    {/* Featured preview — up to 2 services */}
                    {hasServices && featured.length > 0 && (
                      <div className="mt-4 space-y-2 border-t border-slate-700/30 pt-3">
                        { featured.slice(0, 2)
                          .map((svc: any) => (
                            <div
                              key={svc.id}
                              className="flex items-center gap-2 text-xs text-slate-400 group-hover:text-purple-300 transition-colors"
                            >
                              <span className="shrink-0">{svc.icon || '📄'}</span>
                              <span className="truncate">{svc.title}</span>
                              <span className="ml-auto shrink-0 text-purple-400 font-medium">→</span>
                            </div>
                          ))}
                      </div>
                    )}

                    {/* Browse link */}
                    <div className="mt-3 flex items-center gap-1 text-xs">
                      <span
                        className={`font-medium transition-colors ${
                          hasServices
                            ? 'text-purple-400 group-hover:text-purple-300'
                            : 'text-slate-500'
                        }`}
                      >
                        {hasServices ? 'Browse services →' : 'Coming soon'}
                      </span>
                    </div>
                  </div>

                  {/* Hover glow */}
                  {hasServices && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${hexToRgba(accentHex, 0.15)}, transparent 60%)`,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* All categories link */}
          <div className="text-center mt-10">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300 transition-all text-sm font-medium"
            >
              🏭 View Full Service Browser with Search & Filters
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FEATURED SERVICES BY CATEGORY
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="featured" className="py-20 bg-slate-900/20 border-t border-slate-800/40">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⭐</span>
            <h2 className="text-2xl font-bold text-white">Featured Services by Category</h2>
          </div>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Hand-picked services from each category — our most popular and highest-rated solutions
            based on client demand and feature depth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.filter((c) => (categoryCounts[c.key] || 0) > 0).map((cat) => {
              const featured = featuredByCategory[cat.key] || [];
              const accentHex = CATEGORY_HEX[cat.key] || '#8b5cf6';

              if (featured.length === 0) return null;

              return (
                <div key={cat.key} className="rounded-2xl border border-slate-700/40 bg-slate-900/50 overflow-hidden">
                  {/* Category header */}
                  <div
                    className="px-5 py-4 flex items-center gap-3"
                    style={{
                      background: `linear-gradient(135deg, ${hexToRgba(accentHex, 0.12)}, transparent)`,
                    }}
                  >
                    <span className="text-2xl">{cat.emoji}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{cat.label}</h3>
                      <p className="text-xs text-slate-400">
                        {categoryCounts[cat.key]} service{categoryCounts[cat.key] !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <Link
                      href={`/services/?category=${cat.key}`}
                      className="ml-auto text-xs text-purple-400 hover:text-purple-300 font-medium"
                    >
                      View all →
                    </Link>
                  </div>

                  {/* Featured cards */}
                  <div className="p-4 space-y-3">
                    {featured.map((svc: any) => {
                      const pricingKeys = Object.keys(svc.pricing || {});
                      const price = pricingKeys.length > 0
                        ? `$${svc.pricing[pricingKeys[0]]}/mo`
                        : 'Custom';

                      return (
                        <Link
                          key={svc.id}
                          href={`/services/${svc.id}`}
                          className="block rounded-xl border border-slate-700/40 bg-slate-800/40 p-4 hover:border-purple-500/30 hover:bg-slate-800/60 transition-all group"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-xl shrink-0">{svc.icon || '📄'}</span>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">
                                {svc.title}
                              </h4>
                              <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                                {svc.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs text-slate-500">{price}</span>
                                {svc.popular && (
                                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-orange-500/12 text-orange-300 border border-orange-500/25 px-1.5 py-0.5 rounded">
                                    ★ Popular
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="shrink-0 text-purple-400 group-hover:translate-x-1 transition-transform">
                              →
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Cross-links to related categories */}
                  {(() => {
                    const cross = getCrossLinks(cat.key);
                    if (cross.length === 0) return null;
                    return (
                      <div className="px-5 py-3 border-t border-slate-700/30 bg-slate-800/20">
                        <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                          Related categories
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {cross.map((rc) => (
                            <Link
                              key={rc.key}
                              href={`/services/?category=${rc.key}`}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] text-slate-400 hover:text-purple-300 hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20 transition-all"
                            >
                              {rc.emoji} {rc.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRENDING SERVICES
      ════════════════════════════════════════════════════════════════════════ */}
      <section id="trending" className="py-20">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔥</span>
            <h2 className="text-2xl font-bold text-white">Trending Services</h2>
          </div>
          <p className="text-slate-400 mb-10 max-w-2xl">
            The most sought-after services across our catalog right now — ranked by client demand,
            feature richness, and popularity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {trending.map((svc: any, idx: number) => {
              const catMeta = CATEGORIES.find((c) => c.key === svc.category);
              const catColor = catMeta?.color || 'from-purple-500 to-indigo-500';
              const pricingKeys = Object.keys(svc.pricing || {});
              const price =
                pricingKeys.length > 0
                  ? `$${svc.pricing[pricingKeys[0]]}/mo`
                  : 'Custom';

              return (
                <Link
                  key={svc.id}
                  href={`/services/${svc.id}`}
                  className="group relative rounded-2xl border border-slate-700/40 bg-slate-900/70 hover:border-purple-500/40 hover:bg-slate-900 transition-all duration-300 overflow-hidden"
                >
                  {/* Rank badge */}
                  <div
                    className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      idx === 0
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900'
                        : idx === 1
                          ? 'bg-gradient-to-r from-slate-400 to-slate-300 text-slate-900'
                          : idx === 2
                            ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-white'
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    #{idx + 1}
                  </div>

                  {/* Gradient accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-60"
                    style={{
                      background: `linear-gradient(90deg, ${CATEGORY_HEX[svc.category] || '#8b5cf6'}, ${CATEGORY_HEX[svc.category] || '#8b5cf6'}88)`,
                    }}
                  />

                  <div className="p-5 pt-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${catColor} flex items-center justify-center text-lg shadow-lg shrink-0`}
                      >
                        {svc.icon || '📄'}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors">
                          {svc.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                          {svc.description}
                        </p>
                      </div>
                    </div>

                    {/* Meta row */}
                    <div className="flex items-center justify-between text-xs mt-3 pt-3 border-t border-slate-700/30">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50"
                          style={{ color: `${CATEGORY_HEX[svc.category] || '#8b5cf6'}` }}
                        >
                          {catMeta?.label || svc.category}
                        </span>
                        <span className="text-slate-500">{price}</span>
                      </div>
                      {svc.popular && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-orange-500/12 text-orange-300 border border-orange-500/25 px-1.5 py-0.5 rounded">
                          ★ Popular
                        </span>
                      )}
                    </div>

                    {/* Feature count */}
                    <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500">
                      <span>{svc.features?.length || 0} features</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      <span>{svc.benefits?.length || 0} benefits</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${hexToRgba(CATEGORY_HEX[svc.category] || '#8b5cf6', 0.1)}, transparent 60%)`,
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* View all trending */}
          <div className="text-center mt-8">
            <Link
              href="/services/?sort=popular"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600/10 border border-purple-500/25 text-purple-300 hover:bg-purple-600/20 hover:border-purple-500/40 transition-all text-sm font-medium"
            >
              🔥 View All Popular Services ({services.filter((s: any) => s.popular).length} available)
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          HOW TO USE THE HUB
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-900/20 border-t border-slate-800/40">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">How to Use the Services Hub</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Three simple ways to find the right service for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                num: '01',
                icon: '🗂️',
                title: 'Browse by Category',
                desc: 'Pick from 21 service categories above. Each category shows featured services and links to related domains.',
                href: '#categories',
              },
              {
                num: '02',
                icon: '🔥',
                title: 'Check Trending Services',
                desc: 'See what businesses are choosing right now — ranked by popularity, features, and client demand.',
                href: '#trending',
              },
              {
                num: '03',
                icon: '🔍',
                title: 'Search & Filter',
                desc: 'Use the full service browser with search, category filters, and sorting to find exactly what you need.',
                href: '/services/',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-slate-700/40 bg-slate-900/50 p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-xs font-bold text-purple-400 mb-1">STEP {step.num}</div>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                <Link
                  href={step.href}
                  className="mt-4 inline-flex text-xs text-purple-400 hover:text-purple-300 font-medium"
                >
                  {step.href === '/services/' ? 'Go to browser →' : 'Explore →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTAs — GET STARTED
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-slate-900 to-slate-900 p-8 md:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs">🚀</span>
                <span className="text-xs text-purple-300 font-medium">Get Started Today</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Find Your Perfect Service?
              </h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                Our team will match you with the best services for your business — free, no obligation.
                Get a custom proposal in 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact/" className="btn-primary text-lg px-10 py-4">
                  ⚡ Get Your Custom Proposal →
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="btn-secondary text-lg px-10 py-4"
                >
                  ✉️ Email Us Directly
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                {[
                  { icon: '✅', text: 'Free consultation' },
                  { icon: '🔒', text: 'No obligation' },
                  { icon: '📞', text: '+1 302 464 0950' },
                  { icon: '🇺🇸', text: 'US-based team' },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-1.5">
                    <span className="text-base">{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BOTTOM NAV — quick links to key sections
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-8 border-t border-slate-800/60">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="#categories" className="text-slate-400 hover:text-purple-300 transition-colors">
              🗂️ All Categories
            </Link>
            <Link href="#featured" className="text-slate-400 hover:text-purple-300 transition-colors">
              ⭐ Featured Services
            </Link>
            <Link href="#trending" className="text-slate-400 hover:text-purple-300 transition-colors">
              🔥 Trending
            </Link>
            <Link href="/services/" className="text-slate-400 hover:text-purple-300 transition-colors">
              🛠️ Full Service Browser
            </Link>
            <Link href="/contact/" className="text-slate-400 hover:text-purple-300 transition-colors">
              📞 Contact Us
            </Link>
            <Link href="/blog/" className="text-slate-400 hover:text-purple-300 transition-colors">
              📝 Blog
            </Link>
            <Link href="/tools/ai-service-router/" className="text-slate-400 hover:text-purple-300 transition-colors">
              🧭 AI Service Router
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BREADCRUMB SCHEMA (SSR-compatible)
      ════════════════════════════════════════════════════════════════════════ */}
      <BreadcrumbSchema path="/services-hub/" title="Services Hub" />
    </main>
  );
}
