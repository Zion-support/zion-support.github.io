<<<<<<< HEAD
=======
"use client";

import React from 'react';

const PerformanceMetrics: React.FC = () => {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5">
      <h3 className="text-xl font-semibold">Performance Metrics (Coming Soon)</h3>
    </div>
  );
};

export default PerformanceMetrics;

=======
'use client';

export default function PerformanceMetrics() {
  const items = [
    { label: 'Uptime', value: '99.99%' },
    { label: 'Latency', value: '45ms' },
    { label: 'Throughput', value: '1.2k rps' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((i) => (
        <div key={i.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
          <div className="text-sm opacity-80">{i.label}</div>
          <div className="text-2xl font-bold">{i.value}</div>
        </div>
      ))}
    </div>
  );
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-4850:app/components/PerformanceMetrics.tsx
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
