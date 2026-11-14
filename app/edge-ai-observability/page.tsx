"use client";

import { useState } from "react";

const services = [
  {
    title: "Edge AI / Low-Latency Infrastructure",
    category: "AI & Infrastructure",
    description:
      "Deploy AI inference at the edge with sub-ms latency, data-residency-compliant processing, and 5G-ready edge nodes. Designed for real-time workloads (autonomous systems, industrial IoT, fintech) where central-cloud latency breaks SLAs.",
    icon: "⚡",
    features: [
      "Edge AI deployment (GPU/CPU nodes)",
      "Sub-ms latency architecture",
      "Data-residency compliance (LGPD)",
      "5G-ready edge nodes",
      "Multi-region failover",
      "Real-time monitoring & alerting",
    ],
    useCases: [
      {
        title: "Autonomous Systems",
        description: "Low-latency control loops for autonomous industrial systems.",
        icon: "🤖",
      },
      {
        title: "Industrial IoT",
        description: "Real-time sensor data processing at the edge.",
        icon: "🏭",
      },
      {
        title: "Fintech Edge",
        description: "Fraud detection with sub-ms latency for payment transactions.",
        icon: "💳",
      },
    ],
    benefits: ["23.5% CAGR market", "Data sovereignty compliance", "Reduced latency", "5G-ready"],
    ctaLabel: "Get Started with Edge AI",
  },
];

export default function EdgeAIObservability() {
  const [active, setActive] = useState(0);
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="container-page relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-400/5 mb-6">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">AI Infrastructure</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">{services[active].title}</h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">{services[active].description}</p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:opacity-90 transition">
              {services[active].ctaLabel}
            </a>
            <a href="/services" className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-blue-500/40 transition">
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
                <div className="text-xl font-bold text-blue-400 mb-2">{i + 1}</div>
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
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Edge AI</h2>
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
            Need edge AI infrastructure with data-residency compliance? Zion Tech Group delivers turnkey edge AI deployments.
          </p>
          <a href="/contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg hover:opacity-90 transition">
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
