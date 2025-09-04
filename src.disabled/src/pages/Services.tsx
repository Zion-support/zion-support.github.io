import React, { useMemo, useState } from 'react';
import { REAL_MICRO_SAAS_SERVICES_2025, SERVICE_CATEGORIES } from '../data/realMicroSaasServices2025';

export default function Services() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');

  const services = useMemo(() => {
    const q = query.trim().toLowerCase();
    return REAL_MICRO_SAAS_SERVICES_2025.filter(s => {
      const matchesQuery = !q || s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.tags.join(' ').toLowerCase().includes(q);
      const matchesCategory = category === 'All' || s.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="space-y-4">
      <h2>Services</h2>
      <div className="card">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services..."
            className="w-full md:w-1/2 border border-gray-300 rounded-md px-3 py-2"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-52 border border-gray-300 rounded-md px-3 py-2"
          >
            <option>All</option>
            {SERVICE_CATEGORIES.map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s => (
          <a key={s.id} className="card hover:shadow-sm transition" href={s.website} target="_blank" rel="noreferrer">
            <div className="text-xs text-gray-500 mb-1">{s.category}</div>
            <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-gray-700 line-clamp-4">{s.description}</p>
            <div className="mt-3 text-sm text-gray-600">Market: {s.marketPrice}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

