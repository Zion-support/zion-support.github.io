import React from 'react';
import Link from 'next/link';

export default function LatestContentShowcase2025() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Content & Insights 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest research, case studies, and implementation guides covering the most cutting-edge AI and automation technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Agent Risk Management 2026</h3>
            <p className="text-gray-600 mb-4">
              Threat models, layered controls, and runtime guardrails for enterprise agents.
            </p>
            <Link 
              href="/content/ai-2026-agent-risk-management"
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read Framework →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Cost Optimization 2026</h3>
            <p className="text-gray-600 mb-4">
              Right-size compute, optimize inference, and automate savings with safe guardrails.
            </p>
            <Link 
              href="/content/ai-2026-autonomous-cost-optimization-blueprint"
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read Blueprint →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Agentic Sales Acceleration 2026</h3>
            <p className="text-gray-600 mb-4">
              Deploy revenue agents for enrichment, outreach, and scheduling with compliance.
            </p>
            <Link 
              href="/content/ai-2026-agentic-sales-acceleration-playbook"
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read Playbook →
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of companies already using our AI solutions to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/content/ai-governance-blueprint-2026" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Read AI Governance Blueprint</Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}