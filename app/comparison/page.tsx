"use client";

import { useState, useMemo } from 'react';
import { allServices } from '@/data/servicesData';
import ComparisonTable from '@/components/ComparisonTable';
import ExportButtons from '@/components/ExportButtons';

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const maxSelect = 4;

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : prev.length < maxSelect ? [...prev, id] : prev
    );
  };

  const selectedServices = useMemo(() =>
    allServices.filter(s => selectedIds.includes(s.id)),
    [selectedIds]
  );

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Service Comparison Matrix
        </h1>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Select up to {maxSelect} services to compare features, benefits, and pricing side-by-side.
        </p>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Choose Services to Compare</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allServices.map((service) => (
              <label
                key={service.id}
                className={\`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all \${
                  selectedIds.includes(service.id)
                    ? 'border-purple-500 bg-purple-900/20'
                    : 'border-slate-700/50 bg-slate-900/40 hover:border-purple-400/50'\`}
              >
                <input
                  type="checkbox"
                  checked={selectedIds.includes(service.id)}
                  onChange={() => toggleSelect(service.id)}
                  className="mt-1 h-4 w-4 rounded border-purple-500"
                  disabled={!selectedIds.includes(service.id) && selectedIds.length >= maxSelect}
                />
                <div>
                  <div className="font-medium text-white">{service.title}</div>
                  <div className="text-sm text-slate-400">{service.category.toUpperCase()}</div>
                </div>
              </label>
            ))}
          </div>
          {selectedIds.length >= maxSelect && (
            <p className="mt-2 text-sm text-amber-400">
              Maximum of {maxSelect} services selected. Deselect one to add another.
            </p>
          )}
        </div>

        {selectedServices.length > 0 && (
          <>
            <div className="mb-6 flex justify-end">
              <ExportButtons services={selectedServices} />
            </div>
            <ComparisonTable services={selectedServices} />
          </>
        )}

        {selectedServices.length === 0 && (
          <div className="text-center text-slate-500 py-20">
            Select services above to see comparison
          </div>
        )}
      </div>
    </div>
  );
}
