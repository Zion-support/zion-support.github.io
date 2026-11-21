"use client";

import { useState } from "react";

const services = [
  {
    title: "Financial Services IT Outsourcing",
    category: "Financial Services",
    description:
      "Managed IT services for Brazilian banks, fintechs, and insurance companies. Covers cloud migration, cybersecurity, process automation, and AI adoption. Brazil's banking sector invests US$10B+ in technology annually; Zion delivers the outsourced execution.",
    icon: "🏦",
    features: [
      "Cloud migration & FinOps",
      "Cybersecurity & compliance (LGPD, PCI-DSS)",
      "Process automation (RPA, AI agents)",
      "24/7 SOC & monitoring",
      "Integration platforms (open-banking APIs)",
      "SAP for financial services",
    ],
    useCases: [
      {
        title: "Bank IT Outsourcing",
        description: "Outsourced IT execution for São Paulo banks with 24/7 support.",
        icon: "🏦",
      },
      {
        title: "Fintech Enablement",
        description: "Elastic infrastructure for Pix-scale transaction volumes.",
        icon: "💸",
      },
      {
        title: "Regulatory Compliance",
        description: "LGPD audit-ready security operations and transparency reports.",
        icon: "📋",
      },
    ],
    benefits: ["US$10B+ banking IT spend", "84% of banks prioritize cloud & AI", "24/7 SOC support", "LGPD compliance"],
    ctaLabel: "Get Started with Financial Services IT",
  },
];

export default function FinancialServicesIT() {
  const [active, setActive] = useState(0);
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/5 mb-6">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Financial Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">{services[active].title}</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">{services[active].description}</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:opacity-90 transition">
              {services[active].ctaLabel}
            </a>
            <a href="/services" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-emerald-500/40 transition">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-900/50 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services[active].features.map((f, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700/40 rounded-lg p-5">
                <div className="text-xl font-bold text-emerald-400 mb-2">{i + 1}</div>
                <h3 className="text-white font-semibold mb-1">{f}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-slate-950 border-t border-slate-800/60">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services[active].useCases.map((u, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-700/40 rounded-lg p-6">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="text-white font-semibold mb-2">{u.title}</h3>
                <p className="text-slate-400">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-900/50 border-t border-slate-800/60">
        <div className="container-page">
          <div className="bg-slate-800/50 border border-slate-700/40 rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Financial Services IT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services[active].benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-green-400">●</span>
                  <span className="text-slate-300">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 border-t border-slate-800/60">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Started</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Banks need 24/7 IT execution and AI adoption. Zion Tech Group delivers managed IT for financial services.
          </p>
          <a href="/contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-lg hover:opacity-90 transition">
            Contact Zion Tech Group
          </a>
          <p className="text-xs text-slate-600 mt-4">
            Free Discovery questionnaire available — no payment required.
          </p>
        </div>
      </section>
    </main>
  );
}
