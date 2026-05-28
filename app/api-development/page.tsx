/* eslint-disable @typescript-eslint/no-unused-vars */
// app/api-development/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Development & Integration',
  description: 'RESTful APIs, GraphQL, microservices architecture, and third-party integrations for enterprise applications.',
  alternates: { canonical: '/api-development' },
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
          <span className="text-slate-300">API Development &amp; Integration</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-6xl mb-4 block">🔌</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">API Development &amp; Integration</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">RESTful APIs, GraphQL, microservices architecture, and third-party integrations for enterprise applications.</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['REST','GraphQL','Microservices','Webhooks','OAuth 2.0'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">{tag}</span>
            ))}
          </div>
          <Link href="/configurator/" className="btn-primary text-lg px-10 py-4 inline-block">⚡ Get Your Custom Proposal →</Link>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🔧', title: 'RESTful API Design', desc: 'Clean, versioned, documented REST APIs with OpenAPI specs and automated SDK generation.' },
              { emoji: '📊', title: 'GraphQL Services', desc: 'Flexible, efficient GraphQL APIs with schema stitching, federation, and real-time subscriptions.' },
              { emoji: '⚙️', title: 'System Integration', desc: 'Connect legacy systems, SaaS platforms, and data sources with robust ETL and API middleware.' },
            ].map(item => (
              <div key={item.title} className="glass-card">
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Why Zion Tech Group</h2>
          <ul className="space-y-3">
            {[
              'API-first architecture philosophy — design for scale from day one',
              'Comprehensive API security — OAuth 2.0, rate limiting, WAF integration',
              'Full API lifecycle management — from design through deprecation',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="text-purple-400 mt-1 shrink-0">✓</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Connect Everything</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Build robust APIs that power your digital ecosystem. From design to deployment to monitoring.
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
