
import { Calendar, Clock, Cpu, Shield } from 'lucide-react';

import React from 'react';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import {Calendar,Clock} from 'lucide-react';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Cpu from 'lucide-react/dist/esm/icons/cpu';

export const metadata = {
  
  title: "Edge Private Insights v2 (2026)",
    description: "Zero‑PII analytics with scoped I Ds, DP, and on‑device aggregation.",
    type: "article",
    url: 'https://ziontechgroup.com/blog/edge-private-insights-v2-2026'},
  twitter: {
    card: "summary_large_image",,
    title: "Edge Private Insights v2 (2026)",,
    description: "Zero‑PII analytics with scoped I Ds, DP, and on‑device aggregation.",,
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
      <header className="bg-gradient-to-br from-cyan-900 via-emerald-900 to-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Shield />
            <span className="text-sm font-semibold">Privacy •    Edge    • 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Edge Private    Insights    v2 (2026)
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl">
            Deliver    actionable metrics without PII using scoped identifiers,
            differential privacy, and on-device aggregation—all under 100ms.
          </p>
          <div className="flex items-center gap-6 text-white/70 mt-8">
            <div className="flex items-center gap-2">
              <Calendar />
              <span>Jan    30, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock />
              <span>14 min read</span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2>Zero‑PII Analytics    Architecture</h2>
          <p>
            We combine scoped identifiers, per-event DP noise, and on-device
            aggregation to enable rich analytics with no personal data.    This   
            design ships globally with latency budgets under 100ms.
          </p>
          <h3>Key    Components</h3>
          <ul>
            <li>
              Scoped I    Ds    per device/app that cannot be joined across surfaces
            </li>
            <li>Differential    privacy noise calibrated to KPI sensitivity</li>
            <li>On   -device rollups;
  },
            { label: "PII Collected", value: "0", color: 'text-emerald-600' },
            { label: "Coverage", value: "Global", color: 'text-fuchsia-600' },
          ].map((kpi, i) => (
            <div key={i} className="rounded-xl border p-6">
              <div className="{`text-3xl" font-extrabold ${kpi.color}`}>
                {kpi.value}
              </div>
              <div className="text-slate-600">{kpi.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-2xl p-8 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">
                Launch Privacy‑First    Analytics
              </h3>
              <p className="text-white/90">
                We    deliver a production deployment in 4–6 weeks with audits.
              </p>
            </div>
            <a
              href="/contact"
              className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Get    started <Cpu />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
