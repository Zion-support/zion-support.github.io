export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AI automation', 'cloud computing', 'micro SaaS', 'technology consulting', 'enterprise solutions', 'digital transformation'],
};

export default function HomePage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
        keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
        url="/"
      />
      {/* New Promo: Agent Platform SLOs (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-emerald-100">
            <div>
              <p className="text-sm font-semibold text-emerald-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Agent Platform SLOs That Matter</h2>
              <p className="text-gray-600 mt-2">A concise SLO set for safety, quality, reliability, and cost—ready to adopt.</p>
            </div>
            <div className="flex gap-3">
      {/* New Promo: September 2025 fresh content */}
      <section className="py-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Just published: Real‑Time RAG + Autonomous Ops</h2>
              <p className="text-gray-600 mt-2">Deep dives on low‑latency retrieval architectures and an ops playbook for AI systems.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-real-time-retrieval-architectures" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Real‑Time RAG</Link>
              <Link href="/content/ai-2026-autonomous-ops-playbook" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Autonomous Ops</Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className='min-h-screen bg-white'>
        {/* New Content 2025 Ultimate Showcase Banner - FEATURED */}
        <NewContent2025UltimateShowcaseBanner />
        {/* New Multimodal Agents 2025 Banner - NEW */}
        <NewMultimodalAgents2025Banner />
        {/* Promo: Fresh Content */}
        <section className="py-10 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-purple-700">Just published</p>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">Explore our newest guides</h2>
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
                <p className="text-gray-600 mt-2">Now featuring GenAI Governance 2026 and Agent Observability 2026.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/content/genai-governance-2026" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">GenAI Governance</Link>
                <Link href="/content/agent-observability-2026" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Agent Observability</Link>
        </div>
      </section>
      {/* New Promo: Agentic Sandbox Patterns (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Agentic Sandbox Patterns</h2>
              <p className="text-gray-600 mt-2">Isolation domains, least privilege, and runtime guards for safe tool use.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-agentic-sandbox-patterns" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Overview</Link>
              <Link href="/content/ai-2026-secure-tooling-permissions-blueprint" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Permissions Blueprint</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: GTM Agents Blueprint (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Go-To-Market Agents Blueprint</h2>
              <p className="text-gray-600 mt-2">Pipeline generation, deal acceleration, and expansion with policy-as-code guardrails.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-2026-go-to-market-agents-blueprint" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Blueprint</Link>
              <Link href="/blog/ai-2026-go-to-market-agents-blueprint" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Blog Overview</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Agent Incident Response Playbook (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Agent Incident Response Playbook</h2>
              <p className="text-gray-600 mt-2">Eval‑gated triage, mitigation, and escalation with autonomous agents.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-2026-agent-incident-response-playbook" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Playbook</Link>
              <Link href="/blog/ai-2026-agents-oncall-automation" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Agents‑On‑Call</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Failure Modes + Eval Runbook (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-rose-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Agent Failure Modes + Evaluation Runbook</h2>
              <p className="text-gray-600 mt-2">Catalog failures and ship a repeatable eval SOP to prevent regressions.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-agent-failure-modes-and-mitigations" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Failure Modes</Link>
              <Link href="/content/ai-2026-evaluation-runbook-starter-kit" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Eval Runbook</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: September 2025 fresh content */}
      <section className="py-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Just published: Secure Agent Routing Strategies</h2>
              <p className="text-gray-600 mt-2">Least‑privilege, tiered trust, and eval‑gated routing for safe autonomy.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-secure-agent-routing-strategies" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Article</Link>
              <Link href="/content/ai-2026-agent-incident-response-playbook" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Related Playbook</Link>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Just published: Agent Runbooks + Platform Ops</h2>
              <p className="text-gray-600 mt-2">Eval‑gated runbooks and SLO‑driven agent platform operations with safe change.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-agent-runbooks-blueprint" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Runbooks</Link>
              <Link href="/blog/ai-2026-agent-platform-operations" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Platform Ops</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Safe Tool Use Blueprint */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Safe Tool Use Blueprint</h2>
              <p className="text-gray-600 mt-2">Permissioned tool use with risk tiers, policy-as-code, sandboxes, and runtime checks.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-safe-tool-use-blueprint" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Article</Link>
              <Link href="/content/ai-2026-secure-tooling-permissions-blueprint" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Permissions Blueprint</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Operational Excellence + Operational Blueprint (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div>
              <p className="text-sm font-semibold text-blue-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Operational Excellence + Blueprint</h2>
              <p className="text-gray-600 mt-2">Run safe, reliable, and efficient autonomous agent platforms at scale.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-2026-operational-excellence-handbook" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700">Excellence Handbook</Link>
              <Link href="/blog/ai-2026-operational-blueprint" className="inline-block border border-blue-600 text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50">Operational Blueprint</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Eval-Gated Autonomy + Evaluation Hub */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Eval‑Gated Autonomy + Evaluation Hub</h2>
              <p className="text-gray-600 mt-2">Ship safer autonomy with lifecycle gates and a central evaluation system.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-eval-gated-autonomy" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Eval‑Gated Autonomy</Link>
              <Link href="/content/ai-2026-safe-evaluation-hub" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Evaluation Hub</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Agent Risk Metrics + Governed Tool Use + Starter Kit (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-emerald-100">
            <div>
              <p className="text-sm font-semibold text-emerald-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Agent Risk Metrics + Governed Tool Use</h2>
              <p className="text-gray-600 mt-2">Measure safety and reliability with evaluation gates and policy‑guarded tools.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/ai-2026-enterprise-agent-risk-metrics" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-700">Risk Metrics</Link>
              <Link href="/blog/ai-2026-governed-tool-use-case-studies" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Tool Use Case Studies</Link>
              <Link href="/resources/ai-2026-agent-risk-metrics-starter-kit" className="inline-block border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Starter Kit</Link>
            </div>
          </div>
        </div>
      </section>
      {/* What's New dynamic section */}
      <WhatsNew highlightOnly limit={8} />
      {/* Quick new content spotlight */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <div className="text-sm font-semibold text-purple-700 mb-2">Incident Response</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Incident Response Playbook</h3>
              <p className="text-gray-600 mb-4">Eval‑gated triage, mitigation, and escalation with autonomous agents.</p>
              <Link href="/content/ai-2026-agent-incident-response-playbook" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <div className="text-sm font-semibold text-purple-700 mb-2">Operations</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agents‑On‑Call Automation</h3>
              <p className="text-gray-600 mb-4">Design agents that respond safely with eval gates and observability.</p>
              <Link href="/blog/ai-2026-agents-oncall-automation" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: GTM Agents Blueprint */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Go-To-Market Agents Blueprint</h2>
              <p className="text-gray-600 mt-2">Pipeline generation, deal acceleration, and expansion with policy-as-code guardrails.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-2026-go-to-market-agents-blueprint" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Blueprint</Link>
              <Link href="/blog/ai-2026-go-to-market-agents-blueprint" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Blog Overview</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Change Management + Runbook Kit (Sept 2025) */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Change Management + Runbook Starter Kit</h2>
              <p className="text-gray-600 mt-2">Eval-gated approvals, progressive rollouts, and standardized incident runbooks.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-2026-agent-change-management" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Change Management</Link>
              <Link href="/content/ai-2026-agent-runbook-starter-kit" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Runbook Kit</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Content Promo: Production Safety + Cost Optimization (Sept 2025) */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow border border-gray-100">
            <div>
              <p className="text-sm font-semibold text-purple-700">New content</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Production Safety Checklist + Cost Optimization Blueprint</h2>
              <p className="text-gray-600 mt-2">Ship safer agents and cut compute costs with eval‑gated controls.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-2026-production-safety-checklist" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Safety Checklist</Link>
              <Link href="/content/ai-2026-cost-optimization-blueprint" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Cost Blueprint</Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className='min-h-screen bg-white'>
        {/* New Multimodal Agents 2025 Banner - NEW */}
        <NewMultimodalAgents2025Banner />
        {/* New Content 2025 Analytics Revolution Banner - NEW FEATURED */}
        <NewContent2025AnalyticsRevolutionBanner />
        {/* New Content Promo: Sept 15, 2025 - Agent Safety + Observability + Evals */}
        <section className="py-10 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-700 mb-2">Safety</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI 2026: Agentic Risk and Safety Playbook</h3>
                  <p className="text-gray-600">Safeguards, monitoring, and governance patterns for production agent systems.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-2026-agentic-risk-and-safety-playbook" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-700 mb-2">Observability</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI 2026: Enterprise Agent Observability Guide</h3>
                  <p className="text-gray-600">Telemetry, tracing, and evals for deep visibility into autonomous workflows.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-2026-enterprise-agent-observability-guide" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-700 mb-2">Evaluation</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI 2026: Evaluation Harness Blueprint</h3>
                  <p className="text-gray-600">Scenario suites, metrics, and policy gates to ship reliable autonomous agents.</p>
                </div>
                <div className="mt-4">
                  <Link href="/content/ai-2026-evaluation-harness-blueprint" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* New Content 2025 Analytics Revolution Banner - NEW FEATURED */}
        <NewContent2025AnalyticsRevolutionBanner />
        {/* New Content 2026 Autonomous Revenue Agents Promo - NEW */}
        <NewAutonomousRevenueAgentsPromo />
        {/* New Content Promo: Risk Management & Compliance (2026) */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-700 mb-2">Risk</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Risk Management Blueprint (2026)</h3>
                  <p className="text-gray-600">Mitigate safety, security, and reliability risks with policy-as-code and evals.</p>
                </div>
                <div className="mt-4">
                  <Link href="/content/ai-2026-agent-risk-management" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-700 mb-2">Compliance</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Autonomous Compliance Operating Model (2026)</h3>
                  <p className="text-gray-600">Automate controls, evidence, and tests for audit-ready AI operations.</p>
                </div>
                <div className="mt-4">
                  <Link href="/content/ai-2026-autonomous-compliance" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-700 mb-2">Playbook</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Risk Mitigation Playbook (2026)</h3>
                  <p className="text-gray-600">Safeguards, monitoring, and adoption checklist for enterprise agent systems.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-2026-agent-risk-mitigation-playbook" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Analytics Content Showcase 2025 - NEW FEATURED */}
        <AnalyticsContentShowcase2025 />
        
        {/* New Content 2025 Advanced Automation Banner - NEW FEATURED */}
        <NewContent2025AdvancedAutomationBanner />
        
        {/* Advanced Automation Content Showcase 2025 - NEW FEATURED */}
        <AdvancedAutomationContentShowcase2025 />
        
        {/* Revolutionary AI Content 2026 Banner - NEW FEATURED */}
        <RevolutionaryAIContent2026Banner />

        {/* Promo: Autonomous Analytics Platform 2025 - NEW */}
        <AutonomousAnalytics2025PromoBanner />

        {/* Promo: New Article - Enterprise AI Agents 2025 */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-purple-700 mb-2">New on the blog</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise AI Agents in 2025: Breakthroughs and Real-World Impact</h3>
                <p className="text-gray-600 max-w-2xl">How enterprise AI agents are transforming operations, boosting productivity, and enabling autonomous workflows across industries in 2025.</p>
              </div>
              <div className="shrink-0">
                <Link href="/blog/ai-2026-multimodal-agents-enterprise-blueprint" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Article</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promo: New Article - Enterprise AI Security Blueprint 2026 */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-purple-700 mb-2">New on the blog</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Enterprise AI Security Blueprint</h3>
                <p className="text-gray-600 max-w-2xl">A pragmatic blueprint to secure AI agents, data, and workflows across the modern enterprise in 2026.</p>
              </div>
              <div className="shrink-0">
                <Link href="/blog/ai-2026-enterprise-ai-security-blueprint" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promo: New Article - Enterprise AI Security Blueprint 2026 */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-purple-700 mb-2">New on the blog</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Enterprise AI Security Blueprint</h3>
                <p className="text-gray-600 max-w-2xl">A pragmatic blueprint to secure AI agents, data, and workflows across the modern enterprise in 2026.</p>
              </div>
              <div className="shrink-0">
                <Link href="/blog/ai-2026-enterprise-ai-security-blueprint" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* New Promo: Agents vs Copilots and AI Governance */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-purple-700 mb-2">Fresh insight</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Agents vs. Autonomous Copilots (2025)</h3>
                <p className="text-gray-600">When to deploy each, with architecture patterns and ROI benchmarks.</p>
              </div>
              <div className="mt-6">
                <Link href="/blog/ai-2025-enterprise-agents-vs-autonomous-copilots" className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700">Read Article</Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-purple-700 mb-2">New guide</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI 2026: Governance Operating Models</h3>
                <p className="text-gray-600">Policy-as-code, risk tiers, and org design to scale autonomy safely.</p>
              </div>
              <div className="mt-6">
                <Link href="/blog/ai-2026-ai-governance-operating-models" className="inline-block bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700">Read Guide</Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI 2026 Quantum Revolution Ultimate Banner - NEW FEATURED */}
        <AI2026QuantumRevolutionUltimateBanner />
        
        {/* New Content 2026 Ultimate Showcase - NEW FEATURED */}
        <NewContent2026UltimateShowcase />
        
        {/* AI 2026 Ultimate Showcase Banner */}
        <AI2026UltimateShowcaseBanner />
        
        {/* Quantum AI 2026 Breakthrough Banner */}
        <QuantumAI2026BreakthroughBanner />
        
        {/* Ultimate Promotion Banner */}
        <UltimatePromotionBanner2026 />
        
        {/* AI 2026 Quantum Revolution Banner */}
        <AI2026QuantumRevolutionBanner />
        
        {/* AI 2026 Autonomous Systems Banner */}
        <AI2026AutonomousSystemsBanner />
        
        {/* Revolutionary Content 2025 Banner - NEW CONTENT */}
        <RevolutionaryContent2025Banner />
        
        {/* New Content 2025 Ultimate Banner - FEATURED */}
        <NewContent2025UltimateBanner />
        
        {/* AI 2025 Breakthrough Banner */}
        <AI2025BreakthroughBanner />
        
        {/* Revolutionary AI Content Banner */}
        <RevolutionaryAIContentBanner />
        
        {/* Enhanced Content Promotion Banner */}
        <EnhancedContentPromotionBanner />

        {/* New Content Promo: Hyperautomation Business Playbook 2026 */}
        <section className="py-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-purple-700">New Guide</p>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Hyperautomation Business Playbook</h2>
                <p className="text-gray-600 mt-2">A practical playbook to design, deploy, and scale AI-driven hyperautomation across the enterprise.</p>
              </div>
              <Link href="/blog/ai-2026-hyperautomation-business-playbook" className="shrink-0 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
                Read the Playbook →
              </Link>
            </div>
          </div>
        </section>

        {/* New Content Promo: Autonomous Enterprise Blueprint 2026 */}
        <section className="py-6 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-emerald-700">New Blueprint</p>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Autonomous Enterprise Blueprint</h2>
                <p className="text-gray-600 mt-2">A practical blueprint to evolve from automation to truly autonomous, outcome-driven operations across the enterprise.</p>
              </div>
              <Link href="/blog/ai-2026-autonomous-enterprise-blueprint" className="shrink-0 inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700">
        {/* New Content Promo: Multimodal Agents Blueprint 2026 */}
        <section className="py-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-purple-700">New Blueprint</p>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">AI 2026: Multimodal Agents Blueprint</h2>
                <p className="text-gray-600 mt-2">Design production-grade agents that see, talk, reason, and act across workflows.</p>
              </div>
              <Link href="/blog/ai-2026-multimodal-agents-blueprint" className="shrink-0 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
                Read the Blueprint →
              </Link>
            </div>
          </div>
        </section>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🚀 AI & TECHNOLOGY SOLUTIONS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with AI
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge AI, cloud infrastructure, and micro SaaS solutions. 
                Expert consulting and implementation services for enterprise success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Content Showcase 2025 - NEW FEATURED */}
        <LatestContentShowcase2025 />

        {/* Promo: New Blueprint - Operational Evals 2026 */}
        <section className="py-12 bg-gray-50">
        {/* Featured Content Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-133c
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-teal-700 mb-2">New Blueprint</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Operational Evals Blueprint</h3>
                <p className="text-gray-600 max-w-2xl">An evaluation-first blueprint with metrics, harnesses, and governance to ship reliable AI systems.</p>
              </div>
              <div className="shrink-0">
                <Link href="/content/ai-2026-operational-evals-blueprint" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">Read Blueprint</Link>
              </div>
        {/* Latest Content Showcase 2025 - NEW FEATURED */}
        <LatestContentShowcase2025 />

        {/* Promos: New Articles (Sept 2025) */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-700 mb-2">Framework</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: LLM Evals Maturity Model</h3>
                  <p className="text-gray-600">Evaluation-first roadmap with metrics, harnesses, and governance.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-2026-llm-evals-maturity-model" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-700 mb-2">Governance</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Enterprise AI Governance Blueprint</h3>
                  <p className="text-gray-600">Policy-as-code, risk tiers, and continuous monitoring at scale.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-2026-enterprise-ai-governance-blueprint" className="text-purple-600 font-semibold hover:text-purple-800">Read →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Automation</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent automation solutions that streamline operations and boost productivity across your organization.
                </p>
                <Link href="/services/ai-automation" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable, secure cloud solutions designed to support your business growth and digital transformation.
                </p>
                <Link href="/services/cloud-infrastructure" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-4">
                  Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.
                </p>
                <Link href="/services/micro-saas" className="text-purple-600 font-semibold hover:text-purple-800">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Promotion Banners */}
        <RevolutionaryContent2026Banner />
        <UltimateContentShowcase2026 />
        <QuantumAIContentShowcase2026 />
        <UltimateContentShowcase2025 />
        <NewContent2025PromotionBanner />
        <LatestContentShowcase2025 />
        <EnhancedContentPromotionBanner2026 />
        <ComprehensiveContentShowcase2026 />
        <FeaturedContentShowcase2026 />
        <NewContentPromotionBanner />
        <ComprehensiveSolutionsBanner2025 />
        <NewServicesShowcase2025 />
        <NewContent2026Showcase />
        <InteractiveContentDiscoveryWidget />

        {/* Advanced AI Components */}
        <AdvancedContentRecommendationEngine />
        <RealTimePerformanceDashboard />
        <IntelligentSearchEngine />
        <AdvancedAIAssistant />
        <BusinessIntelligenceDashboard />
        <AdvancedSecurityMonitor />
        <AdvancedAnalyticsEngine />
        <AutomationWorkflowEngine />
        <EnterpriseDataManagement />
        <APIManagementSystem />

        {/* Structured Data */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading..." />}>
          <StructuredData 
            type="Organization" 
            data={{
              name: "Zion Tech Group",
              description: "Transforming businesses through cutting-edge technology solutions",
              url: "https://zion.app",
              logo: "https://zion.app/images/zion-tech-group-logo.png",
              sameAs: [
                "https://twitter.com/ZionTechGroup",
                "https://linkedin.com/company/zion-tech-group"
              ]
            }} 
          />
          <StructuredData 
            type="WebSite" 
            data={{
              name: "Zion Tech Group",
              url: "https://zion.app",
              potentialAction: {
                "@type": "SearchAction",
                "target": "https://zion.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }} 
          />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
