'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Zap, Sparkles, LayoutGrid, FileText, AlertCircle } from 'lucide-react';
import { ALL_SEARCH_ITEMS, searchItems, groupByCategory } from '../config/searchIndex';

const CATEGORIES = [
  { id: 'all', label: 'All', icon: <LayoutGrid className="h-4 w-4" /> },
  { id: 'Pages', label: 'Pages', icon: <FileText className="h-4 w-4" /> },
  { id: 'Services', label: 'Services', icon: <Zap className="h-4 w-4" /> },
  { id: 'AI Lab', label: 'AI Lab', icon: <Sparkles className="h-4 w-4" /> },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const results = useMemo(() => {
    const items = activeCategory === 'all'
      ? ALL_SEARCH_ITEMS
      : ALL_SEARCH_ITEMS.filter((i) => i.category === activeCategory);
    return searchItems(query, items);
  }, [query, activeCategory]);

  const grouped = useMemo(() => groupByCategory(results), [results]);

  return (
    <main className="flex min-h-[80vh] flex-col bg-slate-950 px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SearchResultsPage',
            name: 'Search',
            description: 'Search all AI tools, services, and pages on Zion Tech Group platform.',
            url: typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com/search',
          }),
        }}
      />

      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
            <Search className="h-8 w-8" />
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Search
          </h1>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
            Search across {ALL_SEARCH_ITEMS.length}+ pages, tools, and services.
          </p>
        </div>

        <div className="relative">
          <div className="relative flex items-center rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 shadow-lg focus-within:border-purple-400/50 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
            <Search className="h-5 w-5 flex-shrink-0 text-slate-500" />
            <input
              type="text"
              placeholder="Search tools, services, pages..."
              className="w-full bg-transparent pl-3 pr-4 text-base text-white placeholder-slate-400 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'border-purple-400 bg-purple-500/20 text-purple-300'
                  : 'border-slate-700/60 bg-slate-900/50 text-slate-400 hover:border-slate-500 hover:text-slate-200'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-slate-400">
          {results.length} result{results.length !== 1 ? 's' : ''}
          {query ? ` for "${query}"` : ''}
          {activeCategory !== 'all' ? ` in ${activeCategory}` : ''}
        </p>

        {query && results.length === 0 && (
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/30 p-8 text-center">
            <AlertCircle className="mx-auto h-8 w-8 text-slate-600" />
            <p className="mt-3 text-sm text-slate-400">
              No matching results found for &ldquo;<span className="text-slate-200">{query}</span>&rdquo;
            </p>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-6">
            {Array.from(grouped.entries()).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                  {category} ({items.length})
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-900/50 p-4 transition hover:border-purple-400/40 hover:bg-slate-800/50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-white">{item.title}</p>
                        <p className="mt-0.5 truncate text-xs text-slate-500">{item.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {!query && results.length === 0 && (
          <div className="space-y-6">
            {Array.from(groupByCategory(ALL_SEARCH_ITEMS.slice(0, 40))).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                  {category}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {items.slice(0, 6).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-900/50 p-4 transition hover:border-purple-400/40 hover:bg-slate-800/50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-white">{item.title}</p>
                        <p className="mt-0.5 truncate text-xs text-slate-500">{item.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <p className="text-sm text-slate-500">
            Need help? Contact us{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">
              kleber@ziontechgroup.com
            </a>{' '}
            or call{' '}
            <span className="text-purple-400">+1 302 464 0950</span>
          </p>
        </div>
      </div>
    </main>
  );
}