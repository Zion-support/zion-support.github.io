import Head from 'next/head'
import Link from 'next/link'
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground'

const posts = [
  { slug: 'ai-2026-autonomous-incident-response-blueprint', title: 'Autonomous Incident Response Blueprint (2026)', excerpt: 'Close the loop from detection to remediation with safe, auditable autonomy.' },
  { slug: 'ai-2026-reliable-autonomy-operations', title: 'Reliable Autonomy Operations (2026)', excerpt: 'Operate agents safely with SLOs, eval gates, incidents, and governed tools.' },
  { slug: 'ai-2026-agent-slo-scorecards', title: 'Agent SLO Scorecards (2026)', excerpt: 'Objective gates for safe autonomy rollouts.' },
  { slug: 'ai-2026-cost-aware-model-routing', title: 'Cost-Aware Model Routing (2026)', excerpt: 'Route by budget, latency, and quality with evals.' },
  { slug: 'ai-2026-operational-evals-blueprint', title: 'Operational Evals — Blueprint (2026)', excerpt: 'Eval gates, safe rollbacks, and audit‑ready evidence.' },
  { slug: 'ai-2026-agent-observability-blueprint', title: 'Agent Observability Blueprint (2026)', excerpt: 'Traces, evals, guardrails, incidents, and SLOs for production AI agents.' },
  { slug: 'ai-2026-agentic-observability-deep-dive', title: 'Agentic Observability — Deep Dive (2026)', excerpt: 'Traces, policy events, and evidence that keep agents reliable.' },
  { slug: 'ai-customer-agents-2025', title: 'Customer-Facing AI Agents in 2025', excerpt: 'Design reliable, on-brand customer agents with measurable ROI.' },
  { slug: 'ai-customer-agents-2025', title: 'Customer-Facing AI Agents in 2025', excerpt: 'Design reliable, on-brand customer agents with measurable ROI.' },
  { slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' },
  { slug: 'ai-2026-agent-observability-blueprint', title: 'Agent Observability Blueprint (2026)', excerpt: 'Traces, evals, guardrails, incidents, and SLOs for production AI agents.' },
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' },
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' },
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' },
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' },
  { slug: 'autonomous-content-generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' },
  { slug: 'agentic-product-playbooks', title: 'Agentic Product Playbooks', excerpt: 'Practical blueprints for shipping agentic workflows into production.' },
  { slug: 'evals-and-guardrails', title: 'Evals, Guardrails, and Safety', excerpt: 'Build trustworthy AI systems with evaluations and safety baselines.' },
  { slug: 'ai-2026-runtime-guardrails-blueprint', title: 'AI 2026: Runtime Guardrails Blueprint', excerpt: 'Runtime checks, policy-as-code, and safe tool envelopes.' },
  { slug: 'ai-2026-evaluation-cookbook', title: 'AI 2026: Evaluation Cookbook', excerpt: 'Scenario suites and policies to ship reliable autonomy.' },
  { slug: 'ai-2026-cost-optimization-blueprint', title: 'AI 2026: Cost Optimization Blueprint', excerpt: 'Budgets, routing, and FinOps for predictable AI spend.' },
  { slug: 'genai-2025-practical-compliance-patterns', title: 'GenAI for Regulated Industries (2025)', excerpt: 'Practical compliance patterns for GenAI rollouts in regulated sectors.' },
  { slug: 'genai-2025-evidence-driven-ai-governance', title: 'Evidence‑Driven AI Governance (2025)', excerpt: 'Policies, evals, approvals, and audit‑ready evidence across the AI lifecycle.' },
  { slug: 'agentic-crm-autonomous-revenue-workflows-2025', title: 'Agentic CRM: Autonomous Revenue Workflows (2025)', excerpt: 'Design safe, effective autonomous workflows across the revenue funnel.' },
  { slug: 'ai-2026-foundation-model-quality-engineering', title: 'Foundation Model Quality Engineering (2026)', excerpt: 'Evals, safety, and release health for production-grade foundation model apps.' },
  { slug: 'ai-2026-operationalizing-agentic-workflows', title: 'Operationalizing Agentic Workflows (2026)', excerpt: 'Design SLIs/SLOs, guardrails, and evals to ship reliable agentic systems.' }
  ,{ slug: 'ai-2026-operational-risk-metrics-for-agents', title: 'Operational Risk Metrics for Agents (2026)', excerpt: 'Standardize override rates, violations, groundedness, and MTTR.' }
  ,{ slug: 'ai-2026-production-evidence-hub-blueprint', title: 'Production Evidence Hub — Blueprint (2026)', excerpt: 'Centralize evals, traces, policy events, and incidents for audits.' }
  ,{ slug: 'ai-2026-secure-tooling-permissions-blueprint', title: 'Secure Tooling Permissions — Blueprint (2026)', excerpt: 'Risk‑tiered adapters, approvals, and budgets for safe agent actions.' }
  ,{ slug: 'ai-2026-guardrailed-tooling-risk-tiers', title: 'Guardrailed Tooling: Risk Tiers (2026)', excerpt: 'Risk‑tiered adapters, approvals, and budgets for safe tool actions.' }
  ,{ slug: 'ai-2026-real-time-rag-architectures', title: 'Real-Time RAG Architectures (2026)', excerpt: 'Low-latency retrieval with hybrid indexes, caches, and routing.' }
  ,{ slug: 'ai-2026-runtime-guardrails-blueprint', title: 'AI 2026: Runtime Guardrails Blueprint', excerpt: 'Runtime checks, policy-as-code, and safe tool envelopes.' }
  ,{ slug: 'ai-2026-evaluation-cookbook', title: 'AI 2026: Evaluation Cookbook', excerpt: 'Scenario suites and policies to ship reliable autonomy.' }
  ,{ slug: 'ai-2026-trusted-genai-patterns-regulated-enterprises', title: 'AI 2026: Trusted GenAI Patterns for Regulated Enterprises', excerpt: 'Compliant, observable, and cost-aware GenAI architectures that scale safely.' }
  ,{ slug: 'ai-2026-secure-multi-agent-ops-blueprint', title: 'AI 2026: Secure Multi-Agent Operations Blueprint', excerpt: 'Operate multi-agent systems safely with risk tiers and telemetry.' }
  ,{ slug: 'ai-2026-agent-observability-scorecards', title: 'Agent Observability Scorecards (2026)', excerpt: 'Scorecards for reliability, safety, quality, and efficiency.' }
  ,{ slug: 'ai-2026-cost-aware-routing-in-practice', title: 'Cost-Aware Routing in Practice (2026)', excerpt: 'Route by budget, latency, and quality with safe fallbacks.' }
  ,{ slug: 'ai-2026-agentic-benchmarking-field-guide', title: 'Agentic Benchmarking Field Guide (2026)', excerpt: 'Benchmark agentic systems with scenario suites and business-aligned SLIs.' }
  ,{ slug: 'ai-2026-operationalizing-ai-safety-controls', title: 'Operationalizing AI Safety Controls (2026)', excerpt: 'Turn policies into runtime controls wired to SLOs and incidents.' }
]

// Newly added posts (Sept 2025)
posts.unshift(
  { slug: 'ai-2026-safe-autonomy-in-production', title: 'AI 2026: Safe Autonomy in Production', excerpt: 'Deploy autonomous agents with guardrails, SLOs, and audit-ready evidence.' },
  { slug: 'ai-2026-evidence-hub-in-practice', title: 'AI 2026: Evidence Hub in Practice', excerpt: 'Centralize evals, traces, policy events, and incidents to ship faster, safer.' },
  { slug: 'ai-2026-agent-safety-playbook', title: 'AI 2026: Agent Safety Playbook', excerpt: 'Actionable patterns to ship safe, governed, and trustworthy agentic systems.' },
  { slug: 'ai-2026-agent-slo-blueprint', title: 'Agent Platform SLO Blueprint (2026)', excerpt: 'A concise SLO set for safety, quality, reliability, and cost.' },
  { slug: 'ai-2026-governed-tool-use-case-studies', title: 'Governed Tool Use — Case Studies (2026)', excerpt: 'Risk‑tiered adapters, approvals, and runtime checks in practice.' }
)
// New article (Sept 2025) — Enterprise Agent Risk Mitigation
posts.unshift(
  { slug: 'ai-2026-enterprise-agent-risk-mitigation', title: 'Enterprise Agent Risk Mitigation (2026)', excerpt: 'Practical patterns to reduce safety, reliability, cost, and compliance risks.' }
)

export default function BlogIndexPage() {
  return (
    <UltraFuturisticBackground intensity="medium">
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights on AI, cloud, automation, and platform engineering." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Insights & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Practical playbooks and deep dives on AI, cloud, and modern software delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* New: Reliable Real-Time Agents (2026) */}
          <div key="ai-2026-reliable-real-time-agents" className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors rounded-lg backdrop-blur-sm">
            <h2 className="text-white text-xl font-semibold mb-2">Reliable Real‑Time Agents (2026)</h2>
            <p className="text-gray-400 mb-4">Design sub‑200ms perceived latency with streaming, speculation, and safe fallbacks.</p>
            <Link href={`/blog/ai-2026-reliable-real-time-agents`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
          </div>
          {posts.map((p) => (
            <div key={p.slug} className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors rounded-lg backdrop-blur-sm">
              <h2 className="text-white text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-400 mb-4">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
            </div>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  )
}

