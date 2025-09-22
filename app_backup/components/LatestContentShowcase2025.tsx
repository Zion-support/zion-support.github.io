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
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trustworthy Autonomous Agents 2026</h3>
            <p className="text-gray-600 mb-4">
              Governance-by-design with evals-as-code, policy-as-code, and safety telemetry.
            </p>
            <Link 
              href="/content/trustworthy-autonomous-agents-2026"
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read Blueprint →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Risk-Aware Agents Blueprint</h3>
            <p className="text-gray-600 mb-4">
              Policy-constrained, risk-scored agent workflows with evals and guardrails.
            </p>
            <Link 
              href="/content/ai-2026-risk-aware-agents-blueprint"
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read Full Guide →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
<<<<<<< HEAD
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Evaluations in Production</h3>
            <p className="text-gray-600 mb-4">
              Operationalize LLM and agent evals with live metrics and rollbacks.
            </p>
            <Link 
<<<<<<< HEAD
              href="/blog/ai-2026-evaluations-in-production"
=======
              href="/content/hyperautomation-blueprint-2026"
>>>>>>> origin/feature/new-content-and-promotions
=======
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Cost Optimization 2026</h3>
            <p className="text-gray-600 mb-4">
              Right-size compute, optimize inference, and automate savings with safe guardrails.
            </p>
            <Link 
              href="/content/ai-2026-autonomous-cost-optimization-blueprint"
>>>>>>> origin/feature/new-content-2026
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read Blueprint →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-4xl mb-4">📏</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Agents ROI Playbook</h3>
            <p className="text-gray-600 mb-4">
              A practical playbook to model, track, and realize ROI from enterprise AI agents.
            </p>
            <Link 
              href="/content/ai-agents-roi-playbook-2026"
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read Playbook →
=======
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Edge AI Agents</h3>
            <p className="text-gray-600 mb-4">
              Real-time autonomy with on-device intelligence and sub-50ms control loops.
            </p>
            <Link 
              href="/content/edge-ai-agents-2026"
              className="text-purple-600 font-semibold hover:text-purple-800"
            >
              Read the Article →
>>>>>>> origin/feature/new-content-and-promotions
=======
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
>>>>>>> origin/feature/new-content-2026
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