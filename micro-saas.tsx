// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, CheckCircle, ArrowRight, Smartphone } from 'lucide-react';

export default function MicroSaaS() {
  const title = 'Micro SaaS Services — Zion Tech Group';
  const description = 'Production-ready micro SaaS products with rapid deployment, transparent pricing, and measurable ROI.';

  const products = [
    {
      title: 'Review Response AI',
      price: '$49 - $199/month',
      delivery: 'Go-live in 3-5 days',
      bullets: [
        'Auto-draft on-brand responses for major review sites',
        'Sentiment analysis and escalation rules',
        'Team approval workflows and analytics'
      ]
    },
    {
      title: 'SEO Schema Generator',
      price: '$29 - $149/month',
      delivery: 'Same-day rollout',
      bullets: [
        'Structured data for 20+ entity types',
        'Change monitoring and alerts',
        'CMS integrations (WordPress, Headless)'
      ]
    },
    {
      title: 'Smart Lead Enricher',
      price: '$79 - $399/month',
      delivery: '1 week',
      bullets: [
        'Firmographic and technographic enrichment',
        'ICP matching and scoring',
        'CRM sync and dedupe'
      ]
    },
    {
      title: 'Contract Clause Watcher',
      price: '$99 - $499/month',
      delivery: '1-2 weeks',
      bullets: [
        'Clause extraction and risk flags',
        'Change tracking across versions',
        'Legal ops dashboard'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Code className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Micro SaaS</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Launch-Ready Micro SaaS</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{description}</p>
          </div>
        </section>
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <div className="text-cyan-400 font-semibold mb-1">{p.price}</div>
                <div className="text-slate-400 text-sm mb-4">{p.delivery}</div>
                <ul className="space-y-1 mb-6">
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto px-6 py-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold mb-2">Fast Time-to-Value</h2>
            <p className="text-slate-300">Most products deploy in under two weeks with measurable KPIs.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <a href="tel:+13024640950" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                <Smartphone className="w-4 h-4" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

