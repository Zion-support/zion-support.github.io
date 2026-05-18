'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allServices } from '@/app/data/servicesData';

type CategoryFilter = 'all' | 'ai' | 'it' | 'cloud' | 'security' | 'data' | 'automation';
type PriceFilter = 'all' | 'free' | '0-99' | '100-499' | '500-1999' | '2000-plus';

const CATEGORIES: Record<CategoryFilter, string> = {
  all: 'All Categories',
  ai: 'AI & Machine Learning',
  it: 'IT & Security',
  cloud: 'Cloud',
  security: 'Security',
  data: 'Data & Analytics',
  automation: 'Automation',
};

const PRICE_RANGES: Record<PriceFilter, string> = {
  all: 'Any Price',
  free: 'Free / Free Trial',
  '0-99': 'Under $100/mo',
  '100-499': '$100 – $499/mo',
  '500-1999': '$500 – $1,999/mo',
  '2000-plus': '$2,000+/mo',
};

export default function ServiceComparisonTable() {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [priceRange, setPriceRange] = useState<PriceFilter>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = [...allServices];
    if (category !== 'all') {
      list = list.filter(s => s.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q)
      );
    }
    if (priceRange !== 'all') {
      list = list.filter(s => {
        const basic = s.pricing?.basic ?? '';
        const num = parseFloat(basic.replace(/[^0-9.]/g, ''));
        if (priceRange === 'free') return true;
        if (priceRange === '0-99') return num < 100;
        if (priceRange === '100-499') return num >= 100 && num < 500;
        if (priceRange === '500-1999') return num >= 500 && num < 2000;
        if (priceRange === '2000-plus') return num >= 2000;
        return true;
      });
    }
    return list.slice(0, 80); // cap for perf
  }, [category, priceRange, search]);

  const featured = useMemo(() =>
    allServices.filter(s => s.popular).slice(0, 6)
  , []);

  return (
    <div className="space-y-5" id="service-comparison">
      <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 shadow-sm ">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Interactive Service Comparison</p>
        <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
          Compare &amp; Filter All {allServices.length}+ Services
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Filter by category and price, search by name, and compare every service on pricing, features, and benefits — then jump straight to the service page.
        </p>

        {/* Filters */}
        <div className="mt-5 flex flex-wrap gap-3">
          <select
            value={category}
            onChange={e => setCategory(e.target.value as CategoryFilter)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {Object.entries(CATEGORIES).map(([val, label]) => (
              <option key={val} value={val}>{label}</option>
            ))}
          </select>
          <select
            value={priceRange}
            onChange={e => setPriceRange(e.target.value as PriceFilter)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {Object.entries(PRICE_RANGES).map(([val, label]) => (
              <option key={val} value={val}>{label}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search services…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 min-w-[200px] rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <section>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">⭐ Popular Services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map(s => (
              <Link key={s.id} href={s.href}
                className="rounded-xl border border-blue-300 bg-blue-50/60 p-4 transition hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0" role="img" aria-label={s.title}>{s.icon}</span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-slate-900 truncate">{s.title}</h4>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">{s.description}</p>
                    <p className="mt-2 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full inline-block px-2 py-0.5">
                      From {typeof s.pricing?.basic === 'string' ? s.pricing.basic : 'Custom'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Result count */}
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Showing {filtered.length} of {allServices.length} services
        </p>
        {(category !== 'all' || priceRange !== 'all' || search) && (
          <button
            onClick={() => { setCategory('all'); setPriceRange('all'); setSearch(''); }}
            className="text-xs text-blue-600 hover:underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80">
              <th className="px-4 py-3 font-semibold text-slate-500 min-w-[200px]">Service</th>
              <th className="px-3 py-3 font-semibold text-slate-500 text-center">AI / IT</th>
              <th className="px-3 py-3 font-semibold text-slate-500 text-center">Popular</th>
              <th className="px-3 py-3 font-semibold text-slate-500 text-center">From /mo</th>
              <th className="px-3 py-3 font-semibold text-slate-500 min-w-[160px]">Key Features</th>
              <th className="px-4 py-3 font-semibold text-slate-500 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((s, i) => {
              const isPopular = !!s.popular;
              const priceRaw = typeof s.pricing?.basic === 'string' ? s.pricing.basic : '';
              const priceNum = parseFloat(priceRaw.replace(/[^0-9.]/g, ''));
              const priceDisplay = priceNum > 0 ? (priceNum >= 1000 ? `$${(priceNum/1000).toFixed(1)}k` : `$${Math.round(priceNum)}`) : priceRaw || 'Custom';
              const topFeatures = (s.features?.slice(0, 3)) || [];
              const catBadge = (
                <span className={\`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold \${
                  s.category === 'ai' ? 'bg-violet-100 text-violet-800' :
                  s.category === 'it'  ? 'bg-blue-100 text-blue-800'   :
                  s.category === 'cloud'  ? 'bg-sky-100 text-sky-800'    :
                  s.category === 'security' ? 'bg-rose-100 text-rose-800'  :
                  s.category === 'data'    ? 'bg-amber-100 text-amber-800'  :
                  'bg-emerald-100 text-emerald-800'
                }\`}>
                  {s.category === 'it' ? 'IT' : s.category.charAt(0).toUpperCase() + s.category.slice(1)}
                </span>
              );
              return (
                <tr key={s.id + i} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl flex-shrink-0" role="img" aria-label={s.title}>{s.icon}</span>
                      <div className="min-w-0">
                        <Link href={s.href} className="text-sm font-semibold text-slate-900 hover:text-blue-700 truncate block">
                          {s.title}
                        </Link>
                        <p className="text-xs text-slate-500 line-clamp-1">{s.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-center">{catBadge}</td>
                  <td className="px-3 py-3 text-center">
                    {isPopular ? (
                      <span className="inline-block text-base" title="Popular">⭐</span>
                    ) : (
                      <span className="text-slate-300">—</span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="text-sm font-semibold text-slate-900">{priceDisplay}</span>
                    <span className="text-xs text-slate-400">/mo</span>
                  </td>
                  <td className="px-3 py-3">
                    <ul className="space-y-0.5 text-xs text-slate-600">
                      {topFeatures.map((f: string, fi: number) => (
                        <li key={fi} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                          {typeof f === 'string' ? f.replace(/'/g, '') : (f as any).title?.replace(/'/g, '') || 'N/A'}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 transition"
                    >
                      View Details <span aria-hidden>→</span>
                    </Link>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-sm text-slate-500">
                  No services match your filters. Try adjusting your search or category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-slate-400 pb-4">
        Prices shown are starting monthly rates. Enterprise/custom pricing may vary.
        All services include a free consultation — <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.
      </p>
    </div>
  );
}
