'use client';

import { motion } from 'framer-motion';
import { BarChart2, Trash2, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '../data/servicesData';
import type { ComparisonSet } from '../lib/portal-storage';

interface SavedComparisonsProps {
  comparisons: ComparisonSet[];
  onDelete: (id: string) => void;
}

export function SavedComparisons({ comparisons, onDelete }: SavedComparisonsProps) {
  const getService = (id: string) => servicesData.allServices.find(s => s.id === id);

  return (
    <div className="space-y-4">
      {comparisons.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <BarChart2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No saved comparisons yet.</p>
          <a href="/tools/service-comparison" className="text-indigo-600 hover:underline text-sm mt-2 inline-block">
            Compare services now →
          </a>
        </div>
      ) : (
        comparisons.map((comp) => {
          const services = comp.serviceIds.map(getService).filter(Boolean);
          return (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{comp.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {services.length} services compared · {new Date(comp.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => onDelete(comp.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  title="Delete comparison"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {services.map((svc) => (
                  <Link
                    key={svc!.id}
                    href={`/services/${svc!.category}/${svc!.id}`}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition"
                  >
                    <span className="text-xl">{svc!.icon}</span>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{svc!.title}</div>
                      <div className="text-xs text-gray-500">
                        {svc!.pricing.basic}–{svc!.pricing.enterprise}/mo
                      </div>
                    </div>
                    <ExternalLink className="w-3 h-3 text-gray-400 ml-1" />
                  </Link>
                ))}
              </div>

              <div className="mt-3">
                <Link
                  href="/tools/service-comparison"
                  className="text-indigo-600 hover:underline text-sm inline-flex items-center gap-1"
                >
                  <BarChart2 className="w-4 h-4" />
                  Re-run comparison
                </Link>
              </div>
            </motion.div>
          );
        })
      )}
    </div>
  );
}
