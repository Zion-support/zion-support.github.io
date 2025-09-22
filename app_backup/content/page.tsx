import React from 'react';
import Link from 'next/link';

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI & Technology Content
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, blueprints, and frameworks for AI implementation, enterprise automation, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white p-6 rounded-xl shadow">
            <div className="text-sm font-semibold text-blue-700 mb-2">Guide</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              <Link href="/content/ai-2026-ultimate-guide" className="hover:underline">
                AI 2026 Ultimate Guide
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Complete guide to AI implementation, governance, and best practices for 2026.
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow">
            <div className="text-sm font-semibold text-green-700 mb-2">Blueprint</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              <Link href="/content/enterprise-automation-2026" className="hover:underline">
                Enterprise Automation 2026
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Strategic blueprint for implementing enterprise-wide automation solutions.
            </p>
          </article>

          <article className="bg-white p-6 rounded-xl shadow">
            <div className="text-sm font-semibold text-purple-700 mb-2">Framework</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              <Link href="/content/ai-governance-framework" className="hover:underline">
                AI Governance Framework
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive framework for AI governance, risk management, and compliance.
            </p>
          </article>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Need Custom Content?</h3>
            <p className="text-blue-100 mb-6">
              We create tailored content, guides, and frameworks for your specific AI and automation needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Custom Content
            </Link>
          </div>
          <p className="text-gray-600 mb-4">
            Adversarial scenarios, attack surfaces, and eval-gated mitigations to harden agents.
          </p>
          <Link href="/content/ai-2026-agent-red-teaming-blueprint" className="text-red-700 font-semibold">Read Blueprint →</Link>
        </article>
        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Hub</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-evaluation-hub" className="hover:underline">
              AI 2026: Evaluation Hub
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Central hub for eval harnesses, scenario suites, and governance gates for autonomous AI.
          </p>
          <Link href="/content/ai-2026-evaluation-hub" className="text-indigo-700 font-semibold">Explore Hub →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-rose-700 mb-2">Guide</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-operational-guardrails" className="hover:underline">
              AI 2026: Operational Guardrails
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Practical runtime safeguards, policy gates, and incident response for safe AI operations.
          </p>
          <Link href="/content/ai-2026-operational-guardrails" className="text-rose-700 font-semibold">Read Guide →</Link>
        </article>
        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Blueprint</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/blog/ai-2026-responsible-ai-operations-blueprint" className="hover:underline">
              Responsible AI Operations Blueprint (2026)
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Implement policy-as-code, evals, and incident playbooks to ship reliable AI at scale.
          </p>
          <Link href="/blog/ai-2026-responsible-ai-operations-blueprint" className="text-indigo-700 font-semibold">Read Blueprint →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-emerald-700 mb-2">Playbook</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/blog/ai-2026-foundational-models-cost-optimization-playbook" className="hover:underline">
              Foundational Models Cost Optimization (2026)
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Reduce AI infra costs 30–70% with routing, caching, and distillation strategies.
          </p>
          <Link href="/blog/ai-2026-foundational-models-cost-optimization-playbook" className="text-emerald-700 font-semibold">Read Playbook →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-emerald-700 mb-2">Blueprint</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-autonomous-cost-optimization-blueprint" className="hover:underline">
              Autonomous Cost Optimization 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Reduce cloud and AI spend with agentic automation and policy-as-code guardrails.
          </p>
          <Link href="/content/ai-2026-autonomous-cost-optimization-blueprint" className="text-emerald-600 font-semibold">Read Blueprint →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-blue-700 mb-2">Playbook</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-agentic-sales-acceleration-playbook" className="hover:underline">
              Agentic Sales Acceleration 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Deploy revenue agents for enrichment, outreach, and scheduling with compliance.
          </p>
          <Link href="/content/ai-2026-agentic-sales-acceleration-playbook" className="text-blue-600 font-semibold">Read Playbook →</Link>
        </article>
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
            <Link href="/blog/ai-2026-agent-observability-blueprint" className="hover:underline">
              Agent Observability Blueprint 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            A practical blueprint to instrument agents with metrics, traces, evals, and safety guardrails.
          </p>
          <Link href="/blog/ai-2026-agent-observability-blueprint" className="text-purple-600 font-semibold">Read Guide →</Link>
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
            <Link href="/blog/ai-2026-trustworthy-rag-blueprint" className="hover:underline">
              Trustworthy RAG Blueprint 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Build reliable RAG with grounding, citations, verification, and continuous evaluations.
          </p>
          <Link href="/blog/ai-2026-trustworthy-rag-blueprint" className="text-blue-600 font-semibold">Read Article →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-emerald-700 mb-2">Governance</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-governance-blueprint-2026" className="hover:underline">
              AI Governance Blueprint 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Practical, risk-aware governance with evaluations, policy-as-code, and monitoring.
          </p>
          <Link href="/content/ai-governance-blueprint-2026" className="text-emerald-600 font-semibold">Read Blueprint →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-orange-700 mb-2">Operating Model</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-operating-model-2026" className="hover:underline">
              AI Operating Model 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Structure teams, processes, and platforms to deliver sustained AI outcomes.
          </p>
          <Link href="/content/ai-operating-model-2026" className="text-orange-600 font-semibold">Read Guide →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Framework</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/blog/ai-2026-autonomous-operations-framework" className="hover:underline">
              AI 2026: Autonomous Operations Framework
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Build self-healing, self-optimizing systems that reduce manual intervention by 90% and achieve 99.9% uptime.
          </p>
          <Link href="/blog/ai-2026-autonomous-operations-framework" className="text-indigo-700 font-semibold">Read Framework →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-emerald-700 mb-2">Revolution</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/blog/ai-2026-predictive-maintenance-revolution" className="hover:underline">
              AI 2026: Predictive Maintenance Revolution
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Revolutionize maintenance operations with AI-powered analytics that reduce downtime by 85% and costs by 60%.
          </p>
          <Link href="/blog/ai-2026-predictive-maintenance-revolution" className="text-emerald-700 font-semibold">Read Revolution →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Blueprint</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/enterprise-ai-governance-2026" className="hover:underline">
              Enterprise AI Governance Blueprint 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Practical governance: policy-as-code, evals, monitoring, and risk workflows for trustworthy AI.
          </p>
          <Link href="/content/enterprise-ai-governance-2026" className="text-indigo-700 font-semibold">Read Blueprint →</Link>
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
          <div className="text-sm font-semibold text-teal-700 mb-2">Blueprint</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-operational-evals-blueprint" className="hover:underline">
              AI 2026: Operational Evals Blueprint
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            An evaluation-first blueprint with metrics, harnesses, and governance to ship reliable AI systems.
          </p>
          <Link href="/content/ai-2026-operational-evals-blueprint" className="text-teal-700 font-semibold">Read Blueprint →</Link>
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
        </div>
      </div>
    </div>
  );
}