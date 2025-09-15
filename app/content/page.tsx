import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Content Hub | Zion Tech Group',
  description: 'Explore our latest guides and articles on AI and automation.'
};

export default function ContentIndexPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Content</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Stay ahead with our practical guides and deep-dives into enterprise AI and automation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-emerald-700 mb-2">Blueprint</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-governance-blueprint-2026" className="hover:underline">
              AI Governance Blueprint 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Operationalize responsible AI with policy-as-code, risk controls, and evaluation.
          </p>
          <Link href="/content/ai-governance-blueprint-2026" className="text-emerald-600 font-semibold">Read Blueprint →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-orange-700 mb-2">Playbook</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-agents-roi-playbook-2026" className="hover:underline">
              AI Agents ROI Playbook 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            A step-by-step approach to quantify, track, and realize ROI from AI agents.
          </p>
          <Link href="/content/ai-agents-roi-playbook-2026" className="text-orange-600 font-semibold">Read Playbook →</Link>
        </article>
        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-purple-700 mb-2">Guide</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/hyperautomation-blueprint-2026" className="hover:underline">
              Hyperautomation Blueprint 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            A practical blueprint to design, deploy, and scale AI-driven hyperautomation across the enterprise.
          </p>
          <Link href="/content/hyperautomation-blueprint-2026" className="text-purple-600 font-semibold">Read Guide →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-purple-700 mb-2">Blueprint</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-operational-excellence-blueprint" className="hover:underline">
              AI 2026: Operational Excellence Blueprint
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Align reliability, quality, cost, and speed with AI-driven automation and observability.
          </p>
          <Link href="/content/ai-2026-operational-excellence-blueprint" className="text-purple-600 font-semibold">Read Blueprint →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-blue-700 mb-2">Article</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/edge-ai-agents-2026" className="hover:underline">
              Edge AI Agents: Real-Time Autonomy
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            How edge-native agents enable ultra-low-latency decisioning and intelligent automation at the edge.
          </p>
          <Link href="/content/edge-ai-agents-2026" className="text-blue-600 font-semibold">Read Article →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Framework</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/genai-governance-2026" className="hover:underline">
              GenAI Governance 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Policies, controls, and guardrails to deploy GenAI responsibly across the enterprise.
          </p>
          <Link href="/content/genai-governance-2026" className="text-indigo-700 font-semibold">Explore Framework →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Framework</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-evals-maturity-model" className="hover:underline">
              AI 2026: LLM Evals Maturity Model
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            A staged path from ad-hoc tests to continuous, governance-aligned evaluations.
          </p>
          <Link href="/content/ai-2026-evals-maturity-model" className="text-indigo-700 font-semibold">Explore Framework →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-emerald-700 mb-2">Safety</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-agent-safety-certification" className="hover:underline">
              AI 2026: Agent Safety Certification
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Certification levels, audit criteria, and runtime compliance for enterprise agents.
          </p>
          <Link href="/content/ai-2026-agent-safety-certification" className="text-emerald-700 font-semibold">Read Guide →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-purple-700 mb-2">Governance</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-agent-governance-policy-as-code" className="hover:underline">
              AI 2026: Agent Governance Policy-as-Code
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Codify controls and attestations for automated, continuous compliance.
          </p>
          <Link href="/content/ai-2026-agent-governance-policy-as-code" className="text-purple-600 font-semibold">Read Article →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-emerald-700 mb-2">Framework</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-agent-risk-management-framework" className="hover:underline">
              AI 2026: Agent Risk Management Framework
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Threat models, layered controls, and runtime guardrails for enterprise agents.
          </p>
          <Link href="/content/ai-2026-agent-risk-management-framework" className="text-emerald-700 font-semibold">Read Framework →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-green-700 mb-2">Guide</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/agent-observability-2026" className="hover:underline">
              Agent Observability 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Build an end-to-end observability stack for AI agents with metrics, tracing, and evals.
          </p>
          <Link href="/content/agent-observability-2026" className="text-green-700 font-semibold">Read Guide →</Link>
        </article>
      </div>
    </main>
  );
}

