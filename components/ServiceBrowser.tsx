'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Service { name?: string; title?: string; description?: string; icon?: string; href?: string; category?: string; }

export default function ServiceBrowser({ services }: { services: Service[] }) {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const categories = useMemo(() => ['all', ...new Set(services.map(s => s.category).filter(Boolean) as string[])], [services]);
  const filtered = useMemo(() => services.filter(s => {
    const matchSearch = !search || (s.name || s.title || '').toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCat === 'all' || s.category === selectedCat;
    return matchSearch && matchCat;
  }), [services, search, selectedCat]);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input type="text" placeholder="Search 2000+ services..." value={search} onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <select value={selectedCat} onChange={e => setSelectedCat(e.target.value)}
          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
          {categories.map(c => <option key={c} value={c} className="bg-slate-900">{c === 'all' ? 'All Categories' : c}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.slice(0, 30).map((s, i) => (
          <Link key={i} href={s.href || '#'} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all hover:scale-105">
            <div className="text-2xl mb-2">{s.icon || '⭐'}</div>
            <h3 className="text-white font-semibold mb-1">{s.name || s.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-2">{s.description}</p>
            <span className="inline-block mt-2 px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">{s.category}</span>
          </Link>
        ))}
      </div>
      {filtered.length > 30 && <p className="text-center text-gray-400 mt-4">Showing 30 of {filtered.length}. Search to narrow down.</p>}
    </div>
  );
}
