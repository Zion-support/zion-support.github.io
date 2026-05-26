// app/api-development/page.tsx
'use client';
import Link from 'next/link';

const FEATURES = [
  { num: 1, title: 'API Design & Governance', desc: 'OpenAPI 3.1 specification-first design with automated validation, versioning strategy, and style enforcement across your entire API portfolio.' },
  { num: 2, title: 'GraphQL Federation', desc: 'Apollo Federation 2 gateway composing multiple subgraph schemas into a unified, type-safe GraphQL API with distributed caching.' },
  { num: 3, title: 'API Gateway & Rate Limiting', desc: 'Kong, Apigee, or custom gateway with OAuth2, rate limiting, caching, circuit breakers, and real-time usage analytics.' },
  { num: 4, title: 'Microservice APIs', desc: 'Event-driven microservice architecture with gRPC, message queues (Kafka/RabbitMQ), and idempotent event handlers.' },
  { num: 5, title: 'Integration Platform', desc: 'Pre-built connectors for 200+ enterprise SaaS platforms with unified authentication and monitoring.' },
  { num: 6, title: 'API Security', desc: 'OAuth2/OIDC, mTLS, API key rotation, WAF integration, and automated security scanning in CI/CD pipelines.' },
];

const USE_CASES = [
  { title: 'SaaS Integration Hub', desc: 'Unified API layer connecting your product to customers existing toolchains including CRM, ERP, and marketing automation.' },
  { title: 'Partner API Program', desc: 'Developer portal with documentation, SDK generation in 10+ languages, sandbox environments, and usage-based billing.' },
  { title: 'Legacy Modernization', desc: 'Wrap legacy SOAP/mainframe APIs with REST/GraphQL facades for incremental modernization without rip-and-replace.' },
];

export default function ApiDevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]"></div>
        <div className="relative container-page">
          <nav className="mb-8 text-sm text-slate-400">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-purple-300">API Development &amp; Integration</span>
          </nav>
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">🔗</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">API Development &amp; Integration</h1>
            <p className="text-xl text-slate-300 mb-8">RESTful and GraphQL API design, development, and management platforms for modern enterprises.</p>
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
          <p className="text-slate-400 mb-10">Everything you need to design, deploy, and manage APIs at scale</p>
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
          <p className="text-slate-400 mb-10">Real-world API integration scenarios</p>
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
            <div className="text-4xl mb-4">🔗</div>
            <h2 className="text-3xl font-bold text-white mb-4">Need API Expertise?</h2>
            <p className="text-slate-300 mb-8 text-lg">Tell us about your integration needs and we will match you with the right team.</p>
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