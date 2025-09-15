import Link from 'next/link';

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
        {/* New items added September 2025 */}
        <article className="bg-white p-6 rounded-xl shadow">
<<<<<<< HEAD
          <div className="text-sm font-semibold text-emerald-700 mb-2">Security</div>
=======
<<<<<<< HEAD
          <div className="text-sm font-semibold text-emerald-700 mb-2">Security</div>
=======
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
          <div className="text-sm font-semibold text-purple-700 mb-2">Guide</div>
>>>>>>> 5d96654a4cae (feat: add new blog content and resolve merge conflicts)
>>>>>>> 989864ad5ef118804be96b17356deb0745379eba
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/secure-agentic-data-pipelines-2026" className="hover:underline">
              Secure Agentic Data Pipelines (2026)
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Zero-trust, policy-as-code data flows with lineage, ABAC, and continuous verification.
          </p>
          <Link href="/content/secure-agentic-data-pipelines-2026" className="text-emerald-600 font-semibold">Read Guide →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Reliability</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/responsible-ai-evaluation-ops-2026" className="hover:underline">
              Responsible AI Evaluation Ops (2026)
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Metrics, scenario harnesses, and CI/CD gates for trustworthy AI delivery.
          </p>
          <Link href="/content/responsible-ai-evaluation-ops-2026" className="text-indigo-700 font-semibold">Explore Framework →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Operations</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-evidence-driven-operations" className="hover:underline">
              AI 2026: Evidence-Driven AI Operations
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Evaluation-first operating model with policy gates, observability, and SLOs for safe scale.
          </p>
          <Link href="/content/ai-2026-evidence-driven-operations" className="text-indigo-700 font-semibold">Read Guide →</Link>
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
          <div className="text-sm font-semibold text-purple-700 mb-2">Guide</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/ai-2026-agent-red-teaming-blueprint" className="hover:underline">
              AI 2026: Agent Red Teaming Blueprint
            </Link>
          </h2>
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 126fbef79ff2 (feat(content): add AI Governance Blueprint 2026 and AI Operating Model 2026; promote on homepage and content hub; resolve homepage conflict)
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
      </div>
    </main>
  );
}

