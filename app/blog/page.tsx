import Link from 'next/link';

const posts = [
  { href: '/blog/ai-2026-guardrail-scorecards-executive-brief', title: 'Guardrail Scorecards — Executive Brief (2026)', tag: 'New' },
  { href: '/blog/ai-2026-zero-downtime-agent-rollouts', title: 'AI 2026: Zero‑Downtime Agent Rollouts', tag: 'New' },
  { href: '/blog/ai-2026-agentic-cost-controls-deep-dive', title: 'Agentic Cost Controls — Deep Dive (2026)', tag: 'New' },
  { href: '/blog/ai-2026-enterprise-ai-readiness-checklist', title: 'Enterprise AI Readiness Checklist (2026)', tag: 'New' },
  { href: '/blog/ai-2026-production-agent-runbooks-templates', title: 'Production Agent Runbooks — Templates (2026)', tag: 'New' },
  { href: '/blog/trusted-rag-2026-grounded-answer-scorecards', title: 'Trusted RAG — Grounded Answer Scorecards (2026)', tag: 'New' },
  { href: '/blog/ai-2026-eval-gated-safety-scorecards', title: 'Eval‑Gated Safety Scorecards (2026)', tag: 'New' },
  { href: '/blog/ai-2026-enterprise-ai-readiness-checklist', title: 'Enterprise AI Readiness Checklist (2026)', tag: 'New' },
  { href: '/blog/ai-2026-evidence-hub-architecture', title: 'Production Evidence Hub Architecture (2026)', tag: 'New' },
  { href: '/blog/ai-2026-policy-as-code-blueprint', title: 'Policy‑as‑Code Blueprint (2026)', tag: 'New' },
  { href: '/blog/ai-2026-policy-as-code-starter-kit', title: 'Policy‑as‑Code Starter Kit (2026)', tag: 'New' },
  { href: '/blog/ai-2026-agentic-observability-overview', title: 'Agentic Observability — Executive Overview (2026)', tag: 'New' },
  { href: '/blog/ai-2026-agent-posture-management', title: 'Agent Posture Management — Executive Guide (2026)', tag: 'Featured' },
  { href: '/blog/ai-2026-executive-ai-security-playbook', title: 'Executive AI Security Playbook (2026)', tag: 'New' },
  { href: '/blog/ai-2026-trusted-rag-guardrailed-retrieval', title: 'Trusted RAG — Guardrailed Retrieval (2026)', tag: 'New' },
  { href: '/blog/ai-2026-operational-reliability-blueprint', title: 'Operational Reliability Blueprint (2026)', tag: 'New' },
  { href: '/blog/ai-2026-real-world-eval-gates-case-studies', title: 'Real‑World Eval Gates — Case Studies (2026)', tag: 'New' },
  { href: '/blog/ai-2026-eval-gated-ci-cd-blueprint', title: 'Eval‑Gated CI/CD Blueprint (2026)', tag: 'New' },
  { href: '/blog/ai-2026-reliable-autonomy-operations', title: 'Reliable Autonomy Operations (2026)', tag: 'New' },
  { href: '/blog/ai-2026-enterprise-ai-security-blueprint', title: 'Enterprise AI Security Blueprint (2026)', tag: 'New' },
  { href: '/blog/ai-2026-production-safety-checklist', title: 'Production Safety Checklist (2026)', tag: 'Guide' },
  { href: '/blog/ai-2025-enterprise-agents-vs-autonomous-copilots', title: 'Agents vs. Copilots (2025)', tag: 'Trending' },
  { href: '/blog/ai-2026-production-evidence-hub-blueprint', title: 'Production Evidence Hub — Blueprint (2026)', tag: 'Guide' },
  { href: '/blog/ai-2026-trustworthy-autonomous-agents-blueprint', title: 'Trustworthy Autonomous Agents Blueprint (2026)', tag: 'Featured' },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="mt-3 text-purple-100/90">Practical guides, playbooks, and blueprints for AI in the enterprise.</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.href} href={p.href} className="block bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-semibold text-purple-700">{p.tag}</div>
              <div className="text-lg font-bold text-gray-900 mt-1">{p.title}</div>
              <div className="mt-2 text-purple-700 font-semibold">Read →</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

