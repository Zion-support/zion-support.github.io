'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export type CatalogItem = {
  href: string;
  title: string;
  excerpt: string;
  topics: string[];
  featured?: boolean;
};

export default function CatalogBrowser({
  items,
  searchPlaceholder = 'Search…',
}: {
  items: CatalogItem[];
  searchPlaceholder?: string;
}) {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('All');

  const topics = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => item.topics.forEach((value) => set.add(value)));
    return ['All', ...Array.from(set).sort()];
  }, [items]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return items.filter((item) => {
      const topicOk = topic === 'All' || item.topics.includes(topic);
      if (!topicOk) return false;
      if (!needle) return true;
      return (
        item.title.toLowerCase().includes(needle) ||
        item.excerpt.toLowerCase().includes(needle) ||
        item.topics.some((value) => value.toLowerCase().includes(needle))
      );
    });
  }, [items, query, topic]);

  const featured = filtered.filter((item) => item.featured);
  const rest = filtered.filter((item) => !item.featured);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none focus:border-purple-500/60"
        />
        <select
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none focus:border-purple-500/60 sm:w-56"
        >
          {topics.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
      </div>
      <p className="mb-6 text-sm text-slate-500">{filtered.length} guides</p>
      {featured.length > 0 ? (
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <CatalogCard key={item.href} item={item} featured />
          ))}
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item) => (
          <CatalogCard key={item.href} item={item} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="page-card text-center text-slate-400">No matching guides. Try another topic or search term.</p>
      ) : null}
    </div>
  );
}

function CatalogCard({ item, featured = false }: { item: CatalogItem; featured?: boolean }) {
  return (
    <Link href={item.href} className="page-card group block hover:border-purple-500/40">
      <div className="mb-3 flex flex-wrap gap-2">
        {featured ? <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300">Featured</span> : null}
        {item.topics.slice(0, 2).map((topic) => (
          <span key={topic} className="rounded-full border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300">
            {topic}
          </span>
        ))}
      </div>
      <h2 className="text-lg font-semibold text-white group-hover:text-purple-200">{item.title}</h2>
      <p className="mt-2 line-clamp-3 text-sm text-slate-400">{item.excerpt}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-purple-300">Read guide →</span>
    </Link>
  );
}
