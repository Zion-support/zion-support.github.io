import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Agent Safety & Governance 2025: Enterprise Guide',
  description: 'Implement robust safety, governance, and compliance for AI agents in the enterprise. Practical controls, org models, audits, and measurable KPIs.',
  keywords: 'AI safety, AI governance, enterprise AI, model risk, compliance, audits, safety guardrails',
  openGraph: {
    title: 'AI Agent Safety & Governance 2025: Enterprise Guide',
    description: 'Implement robust safety, governance, and compliance for AI agents in the enterprise. Practical controls, org models, audits, and measurable KPIs.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIAgentSafetyGovernance2025() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">/</span>
            <span>AI & Governance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Agent Safety & Governance 2025: Enterprise Guide
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">🛡️ GOVERNANCE</span>
            <span className="text-sm">Published September 12, 2025</span>
            <span className="mx-2">•</span>
            <span className="text-sm">22 min read</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            A pragmatic blueprint for safe, compliant, and auditable AI agent deployments. Covers org design, technical guardrails, evaluation, red-teaming, and ongoing risk management.
          </p>
        </header>

        <nav className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#operating-model" className="text-blue-600 hover:text-blue-800">1. Operating Model</a></li>
            <li><a href="#controls" className="text-blue-600 hover:text-blue-800">2. Technical Controls</a></li>
            <li><a href="#evaluation" className="text-blue-600 hover:text-blue-800">3. Evaluation & Red-Teaming</a></li>
            <li><a href="#compliance" className="text-blue-600 hover:text-blue-800">4. Compliance & Audits</a></li>
            <li><a href="#metrics" className="text-blue-600 hover:text-blue-800">5. KPIs & SLAs</a></li>
          </ul>
        </nav>

        <section id="operating-model" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Operating Model</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">RACI</div>
              <div className="text-sm text-gray-600">Clear ownership</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">3 Lines</div>
              <div className="text-sm text-gray-600">Ops, Risk, Audit</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">CAB</div>
              <div className="text-sm text-gray-600">Change board</div>
            </div>
          </div>
          <p className="text-lg text-gray-700">
            Establish an AI Governance Council, model risk function, and change advisory board with documented decision logs and risk acceptances.
          </p>
        </section>

        <section id="controls" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Controls</h2>
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <pre className="text-green-400 text-sm overflow-x-auto">{`// Safety control middleware (pseudo)
export async function secureAgentAction(action, context) {
  enforceRateLimits(context.userId);
  validatePII(context.input);
  const decision = await policyEngine.evaluate(action, context);
  if (!decision.allow) throw new Error('Blocked by policy');
  return await runWithSandbox(action, context);
}`}</pre>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Prompt hardening, tool whitelisting, constrained outputs</li>
            <li>PII/PHI detection, data loss prevention, secrets scanning</li>
            <li>Isolation, timeouts, quotas, circuit breakers</li>
          </ul>
        </section>

        <section id="evaluation" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Evaluation & Red-Teaming</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Critical Activities</h3>
            <ul className="text-yellow-800 space-y-1">
              <li>• Adversarial prompt suites and jailbreak testing</li>
              <li>• Safety benchmarks and regression gates in CI</li>
              <li>• Incident response runbooks and postmortems</li>
            </ul>
          </div>
        </section>

        <section id="compliance" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance & Audits</h2>
          <p className="text-lg text-gray-700 mb-4">Map controls to SOC 2, ISO 27001, GDPR/CCPA, AI Act. Maintain evidence vault and audit trails.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-gray-700">Threat models, DPIAs, model cards, data lineage.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-sm text-gray-700">Safety incidents, blocked actions, policy drift.</p>
            </div>
          </div>
        </section>

        <section id="metrics" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">KPIs & SLAs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2"><span>0</span></div>
              <div className="text-sm text-gray-600">P1 Safety Incidents</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Policy Enforcement Success</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2"><span>&lt;250ms</span></div>
              <div className="text-sm text-gray-600">Guardrail Overhead</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need a safety review?</h2>
            <p className="text-lg mb-6 opacity-90">Book a free 30-minute assessment. Get a prioritized risk report and roadmap.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">Get Expert Consultation</Link>
              <Link href="/resources" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">Download Resources</Link>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/ai-2025-enterprise-ai-governance-framework" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise AI Governance Framework</h4>
              <p className="text-sm text-gray-600">End-to-end governance model with templates and controls.</p>
            </Link>
            <Link href="/blog/ai-cost-optimization-2025" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
              <h4 className="font-semibold text-gray-900 mb-2">AI Cost Optimization 2025</h4>
              <p className="text-sm text-gray-600">Ship faster, spend less—without compromising safety.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

