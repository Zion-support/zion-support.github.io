// app/analytics/page.tsx
'use client';
import Link from 'next/link';
import { allServices } from '@/data/servicesData';
import type { Service } from '@/data/servicesData';

const CATEGORY_KEY = 'analytics';

const FEATURES = [
  { num: 1, title: 'Executive BI Dashboards', desc: 'Real-time KPI dashboards with drill-down, anomaly detection, and automated weekly report generation for C-suite stakeholders.' },
  { num: 2, title: 'Predictive ML Forecasting', desc: 'Time-series forecasting, demand prediction, churn modeling, and revenue projection using ensemble ML models.' },
  { num: 3, title: 'Self-Serve Analytics', desc: 'Natural-language query interface enabling non-technical teams to explore data, build charts, and share insights without SQL.' },
  { num: 4, title: 'Embedded Analytics SDK', desc: 'White-label analytics components that embed directly into your SaaS product with dashboards, reports, and alerts.' },
  { num: 5, title: 'Real-Time Streaming', desc: 'Stream processing pipelines (Kafka, Flink) for live metrics, operational dashboards, and event-driven alerting.' },
  { num: 6, title: 'Data Lakehouse Architecture', desc: 'Unified lakehouse combining data lake flexibility with warehouse reliability using Delta Lake or Iceberg.' },
];

const USE_CASES = [
  { title: 'Revenue Operations', desc: 'Unified revenue data from CRM, ERP, and billing with pipeline velocity, forecast accuracy, and churn signals.' },
  { title: 'Supply Chain Analytics', desc: 'End-to-end visibility from procurement to delivery with inventory optimization and supplier performance.' },
  { title: 'Customer Analytics', desc: 'Behavioral cohorts, funnel analysis, LTV modeling, and sentiment tracking across web, mobile, and support.' },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]"></div>
        <div className="relative container-page">
          <nav className="mb-8 text-sm text-slate-400">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-purple-300">Data Analytics &amp; BI</span>
          </nav>
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">📊</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Data Analytics &amp; BI</h1>
            <p className="text-xl text-slate-300 mb-8">Enterprise business intelligence, predictive analytics, real-time dashboards, and self-serve analytics platforms.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/" className="btn-primary text-lg px-8 py-3">View Related Services</Link>
              <Link href="/contact/" className="btn-secondary text-lg px-8 py-3">Talk to an Expert</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-3">Key Capabilities</h2>
          <p className="text-slate-400 mb-10">Everything you need to turn data into decisions</p>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.num} className="glass-card p-6 hover:border-purple-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-xl font-bold shrink-0">{f.num}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-3">Use Cases</h2>
          <p className="text-slate-400 mb-10">Real-world applications across industries</p>
          <div className="grid md:grid-cols-3 gap-6">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="glass-card p-6 hover:border-purple-500/40 transition-all">
                <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-slate-800">
        <div className="container-page text-center">
          <div className="max-w-2xl mx-auto glass-card p-10">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8 text-lg">Tell us about your analytics needs and we will match you with the right team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">Build Your Solution</Link>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-10 py-4">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
