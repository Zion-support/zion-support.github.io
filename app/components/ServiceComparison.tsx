'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Sparkles, BarChart3, DollarSign, Shield, Zap, ArrowRightLeft, FolderOpen } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import type { Service } from '../data/servicesData';
import { saveComparison } from '../lib/portal-storage';
import type { ComparisonSet } from '../lib/portal-storage';
import toast from 'react-hot-toast';

export default function ServiceComparison() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const maxSelect = 4;

  const allServices = useMemo(() => servicesData.allServices, []);

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      if (prev.length >= maxSelect) return prev;
      return [...prev, id];
    });
  }, []);

  const handleSaveComparison = () => {
    if (selectedServices.length < 2) {
      toast.error('Select at least 2 services to compare.');
      return;
    }
    const name = prompt('Name this comparison (e.g., "AI Showdown"):');
    if (!name) return;
    const comp: ComparisonSet = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      serviceIds: selectedIds,
    };
    saveComparison(comp);
    toast.success('Comparison saved to Client Portal!');
  };

  const selectedServices = useMemo(() =>
    allServices.filter(s => selectedIds.includes(s.id)) as Service[],
    [allServices, selectedIds]
  );

  // Union of all features across selected
  const allFeatureSet = useMemo(() => {
    const sets = selectedServices.map(s => new Set(s.features));
    const union = new Set<string>();
    sets.forEach(set => set.forEach(f => union.add(f)));
    return Array.from(union).sort();
  }, [selectedServices]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            <ArrowRightLeft className="w-4 h-4" />
            Free Comparison Tool
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Compare AI & IT Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select up to {maxSelect} services to see features, benefits, and pricing side-by-side.
          </p>
        </div>

        {/* Selection Grid */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            Choose Services ({selectedIds.length}/{maxSelect})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allServices.map(svc => {
              const isSelected = selectedIds.includes(svc.id);
              return (
                <button
                  key={svc.id}
                  onClick={() => toggleSelect(svc.id)}
                  disabled={!isSelected && selectedIds.length >= maxSelect}
                  className={`p-4 border-2 rounded-xl text-left transition relative ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-50 shadow-md'
                      : 'border-gray-200 hover:border-indigo-300 bg-white'
                  } ${!isSelected && selectedIds.length >= maxSelect ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 bg-indigo-600 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-3xl mb-2">{svc.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm line-clamp-2 leading-tight">
                    {svc.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 capitalize">{svc.category}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedServices.length === 0 ? (
          <div className="text-center py-16 bg-white border border-gray-200 rounded-2xl">
            <ArrowRightLeft className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Select at least one service to begin comparison</p>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Actions bar */}
            <div className="bg-indigo-50 px-4 py-2 border-b border-indigo-100 flex items-center justify-between">
              <span className="text-sm text-indigo-900 font-medium">
                Comparing {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveComparison}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-medium hover:bg-indigo-700 transition"
                >
                  <FolderOpen className="w-3 h-3" />
                  Save to Portal
                </button>
              </div>
            </div>

            {/* Header */}
            <div className="grid bg-gray-50 border-b border-gray-200" style={{ gridTemplateColumns: `200px repeat(${selectedServices.length}, 1fr)` }}>
              <div className="p-4 font-semibold text-gray-700 border-r border-gray-200">Feature</div>
              {selectedServices.map(svc => (
                <div key={svc.id} className="p-4 text-center border-r border-gray-200 last:border-0">
                  <div className="text-3xl mb-2">{svc.icon}</div>
                  <div className="font-semibold text-gray-900 leading-tight text-sm">{svc.title}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="grid border-b border-gray-200 bg-white" style={{ gridTemplateColumns: `200px repeat(${selectedServices.length}, 1fr)` }}>
              <div className="p-4 font-medium text-gray-600 border-r border-gray-200 bg-gray-50">Description</div>
              {selectedServices.map(svc => (
                <div key={svc.id} className="p-4 text-sm text-gray-700 border-r border-gray-200 last:border-0 leading-relaxed">
                  {svc.description}
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="grid border-b border-gray-200 bg-indigo-50" style={{ gridTemplateColumns: `200px repeat(${selectedServices.length}, 1fr)` }}>
              <div className="p-4 font-semibold text-indigo-900 border-r border-gray-200 flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Pricing (monthly)
              </div>
              {selectedServices.map(svc => (
                <div key={svc.id} className="p-4 text-center border-r border-gray-200 last:border-0">
                  <div className="text-xs text-gray-600 mb-1">Standard</div>
                  <div className="font-bold text-indigo-700">{svc.pricing.basic}</div>
                  <div className="text-xs text-gray-500 mt-2 mb-1">Premium</div>
                  <div className="font-semibold text-indigo-600">{svc.pricing.pro}</div>
                  <div className="text-xs text-gray-500 mt-2">Enterprise</div>
                  <div className="font-bold text-indigo-800">{svc.pricing.enterprise}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="border-b border-gray-200">
              <div className="bg-gray-50 px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 flex items-center gap-2">
                <Zap className="w-4 h-4" />Key Features
              </div>
              <div className="grid" style={{ gridTemplateColumns: `200px repeat(${selectedServices.length}, 1fr)` }}>
                <div className="p-4 border-r border-gray-200 bg-gray-50"></div>
                {selectedServices.map(svc => (
                  <div key={svc.id} className="p-4 border-r border-gray-200 last:border-0">
                    <ul className="space-y-2 text-sm">
                      {allFeatureSet.map(feature => {
                        const has = svc.features.includes(feature);
                        return (
                          <li key={feature} className="flex items-start gap-2">
                            {has ? (
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={has ? 'text-gray-800' : 'text-gray-400'}>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="border-b border-gray-200 bg-white">
              <div className="bg-green-50 px-4 py-3 font-semibold text-green-700 border-b border-green-100 flex items-center gap-2">
                <Shield className="w-4 h-4" />Benefits
              </div>
              <div className="grid" style={{ gridTemplateColumns: `200px repeat(${selectedServices.length}, 1fr)` }}>
                <div className="p-4 border-r border-gray-200 bg-green-50"></div>
                {selectedServices.map(svc => (
                  <div key={svc.id} className="p-4 border-r border-gray-200 last:border-0">
                    <ul className="space-y-2 text-sm">
                      {svc.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-800">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Category + CTA */}
            <div className="bg-gray-50 px-4 py-3 font-semibold text-gray-700 border-t border-gray-200">
              Category & Next Steps
            </div>
            <div className="grid" style={{ gridTemplateColumns: `200px repeat(${selectedServices.length}, 1fr)` }}>
              <div className="p-4 border-r border-gray-200 bg-gray-50"></div>
              {selectedServices.map(svc => (
                <div key={svc.id} className="p-4 border-r border-gray-200 last:border-0 text-center">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium capitalize mb-3">
                    {svc.category}
                  </span>
                  <div className="text-sm text-gray-600 mb-3">
                    <a href={svc.href} className="text-indigo-600 hover:underline text-xs">View details →</a>
                  </div>
                  <a
                    href={`/proposal-generator`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                  >
                    Generate Proposal
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Ready to move forward?</h3>
          <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
            Once you've compared services, generate a custom proposal with pricing, SLA terms, and contact details.
          </p>
          <a
            href="/proposal-generator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Create Your Proposal <Sparkles className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
