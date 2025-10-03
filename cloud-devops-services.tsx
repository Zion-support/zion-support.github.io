// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Zap, CheckCircle, ArrowRight, Smartphone } from 'lucide-react';

export default function CloudDevOpsServices() {
  const title = 'Cloud & DevOps Services — Zion Tech Group';
  const description = 'Well-Architected cloud platforms, GitOps, CI/CD, observability, and cost optimization.';

  const offerings = [
    {
      name: 'Well-Architected Review & Remediation',
      price: '$6,000 - $25,000/project',
      eta: '2-6 weeks',
      bullets: [
        'Pillars: reliability, security, cost, performance, ops excellence',
        'Actionable backlog with cost/impact score',
        'Hands-on remediation and knowledge transfer'
      ]
    },
    {
      name: 'CI/CD & GitOps Enablement',
      price: '$8,000 - $40,000/project',
      eta: '3-8 weeks',
      bullets: [
        'Pipelines with quality gates and previews',
        'Progressive delivery and rollout safety',
        'Golden path templates for teams'
      ]
    },
    {
      name: 'Observability & SRE Foundations',
      price: '$7,500 - $30,000/project',
      eta: '3-6 weeks',
      bullets: [
        'SLIs/SLOs, error budgets and incident workflows',
        'Unified logs/metrics/traces with dashboards',
        'On-call runbooks and game days'
      ]
    },
    {
      name: 'Cloud Cost Optimization (FinOps)',
      price: '$5,000 - $20,000/project',
      eta: '2-4 weeks',
      bullets: [
        'Right-sizing, autoscaling, and commitment planning',
        'Cost guardrails and alerts',
        'Showback/chargeback reporting'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-devops" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Cloud className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Cloud & DevOps</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Cloud & DevOps Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{description}</p>
          </div>
        </section>
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((o, i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{o.name}</h3>
                    <div className="text-cyan-400 font-semibold">{o.price}</div>
                    <div className="text-slate-400 text-sm">{o.eta}</div>
                  </div>
                </div>
                <ul className="space-y-1 mb-6">
                  {o.bullets.map((b, idx) => (
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
            <h2 className="text-3xl font-bold mb-2">Accelerate Delivery with Confidence</h2>
            <p className="text-slate-300">Launch safer, ship faster, and control cloud spend with proven practices.</p>
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

