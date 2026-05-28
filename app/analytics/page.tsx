/* eslint-disable @typescript-eslint/no-unused-vars */
// app/analytics/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Analytics & BI',
  description: 'Executive BI dashboards, predictive forecasting, embedded analytics, and self-serve analytics platforms.',
  alternates: { canonical: '/analytics' },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services/" className="hover:text-purple-400 transition">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Data Analytics &amp; Business Intelligence</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-6xl mb-4 block">📊</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Data Analytics &amp; Business Intelligence</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">Executive BI dashboards, predictive forecasting, embedded analytics, and self-serve analytics platforms.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['BI Dashboards','Predictive Analytics','Data Viz','AI Insights'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">{tag}</span>
            ))}
          </div>
          <Link href="/configurator/" className="btn-primary text-lg px-10 py-4 inline-block">⚡ Get Your Custom Proposal →</Link>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '📈', title: 'BI Dashboards', desc: 'Real-time interactive dashboards with drill-down analytics, custom metrics, and automated reporting.' },
              { emoji: '🔮', title: 'Predictive Analytics', desc: 'ML-driven forecasting, trend analysis, and anomaly detection to anticipate outcomes.' },
              { emoji: '📊', title: 'Data Visualization', desc: 'Rich visual analytics with charts, heatmaps, geo-maps, and custom data storytelling.' },
            ].map(item => (
              <div key={item.title} className="glass-card">
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Zion Tech Group */}
        <div className="mb-16 glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Why Zion Tech Group</h2>
          <ul className="space-y-3">
            {[
              'Proven expertise across BI, ML, and data engineering',
              'End-to-end delivery from data pipeline to executive dashboards',
              'Custom solutions tailored to your industry and scale',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="text-purple-400 mt-1 shrink-0">✓</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free assessment of your current analytics maturity and a roadmap to AI-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/configurator/" className="btn-primary text-lg px-10 py-4">⚡ Get Custom Proposal</Link>
            <Link href="/contact/" className="btn-secondary text-lg px-10 py-4">Talk to an Expert</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
