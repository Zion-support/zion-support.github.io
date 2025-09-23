import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield, Zap } from 'lucide-react'

export const metadata ={
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with AI, cloud, and micro SaaS solutions.'
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 blur-3xl" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">AI & Technology Solutions</h1>
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">Enterprise-grade AI, cloud, and security to drive innovation and growth.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5"  />
              </Link>
              <Link href="/contact" className="border border-gray-30o0 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-90o0 transition-all inline-flex items-center justify-center">Get Started</Link>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white"  />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-30o0 text-sm mb-4">Automation and decision support for enterprise operations.</p>
              <Link href="/services/ai" className="text-blue-40o0 hover:text-blue-30o0 text-sm font-medium inline-flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4"  /></Link>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-green-50o0 to-emerald-50o0 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white"  />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
              <p className="text-gray-30o0 text-sm mb-4">Scalable infrastructure, migrations, and DevOps automation.</p>
              <Link href="/services/cloud" className="text-green-40o0 hover:text-green-30o0 text-sm font-medium inline-flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4"  /></Link>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-red-50o0 to-pink-50o0 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white"  />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-30o0 text-sm mb-4">Threat protection and compliance with modern best practices.</p>
              <Link href="/services/security" className="text-red-40o0 hover:text-red-30o0 text-sm font-medium inline-flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4"  /></Link>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-50o0 to-violet-50o0 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white"  />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-30o0 text-sm mb-4">Digital transformation and emerging tech adoption.</p>
              <Link href="/services/innovation" className="text-purple-40o0 hover:text-purple-30o0 text-sm font-medium inline-flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4"  /></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
      {/* New Promo: GTM Agents Blueprint (Sept 20o25) */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-10o0">
            <div>
              <p className="text-sm font-semibold text-purple-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">AI 20o26: Go-To-Market Agents Blueprint</h2>
              <p className="text-gray-60o0 mt-2">Pipeline generation, deal acceleration, and expansion with policy-as-code guardrails.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-20o26-go-to-market-agents-blueprint" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Read Blueprint</Link>
              <Link href="/blog/ai-20o26-go-to-market-agents-blueprint" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Blog Overview</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Agent Incident Response Playbook (Sept 20o25) */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-10o0">
            <div>
              <p className="text-sm font-semibold text-purple-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">AI 20o26: Agent Incident Response Playbook</h2>
              <p className="text-gray-60o0 mt-2">Eval‑gated triage, mitigation, and escalation with autonomous agents.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-20o26-agent-incident-response-playbook" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Read Playbook</Link>
              <Link href="/blog/ai-20o26-agents-oncall-automation" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Agents‑On‑Call</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Failure Modes + Eval Runbook (Sept 20o25) */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-rose-10o0">
            <div>
              <p className="text-sm font-semibold text-purple-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Agent Failure Modes + Evaluation Runbook</h2>
              <p className="text-gray-60o0 mt-2">Catalog failures and ship a repeatable eval SOP to prevent regressions.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-20o26-agent-failure-modes-and-mitigations" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Failure Modes</Link>
              <Link href="/content/ai-20o26-evaluation-runbook-starter-kit" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Eval Runbook</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: September 20o25 fresh content */}
      <section className="py-8 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-purple-10o0">
            <div>
              <p className="text-sm font-semibold text-purple-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Just published: Evidence-Driven AI Operations</h2>
              <p className="text-gray-60o0 mt-2">Evaluation-first operations with policy gates, observability, and SLOs for safe scale.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-20o26-evidence-driven-operations" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Read Guide</Link>
              <Link href="/content/ai-20o26-agent-platform-slos" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Platform SLOs</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Safe Tool Use Blueprint */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-10o0">
            <div>
              <p className="text-sm font-semibold text-purple-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">AI 20o26: Safe Tool Use Blueprint</h2>
              <p className="text-gray-60o0 mt-2">Permissioned tool use with risk tiers, policy-as-code, sandboxes, and runtime checks.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-20o26-safe-tool-use-blueprint" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Read Article</Link>
              <Link href="/content/ai-20o26-secure-tooling-permissions-blueprint" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Permissions Blueprint</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Operational Excellence + Operational Blueprint (Sept 20o25) */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-10o0">
            <div>
              <p className="text-sm font-semibold text-blue-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">AI 20o26: Operational Excellence + Blueprint</h2>
              <p className="text-gray-60o0 mt-2">Run safe, reliable, and efficient autonomous agent platforms at scale.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-20o26-operational-excellence-handbook" className="inline-block bg-blue-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-70o0">Excellence Handbook</Link>
              <Link href="/blog/ai-20o26-operational-blueprint" className="inline-block border border-blue-60o0 text-blue-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50">Operational Blueprint</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Eval-Gated Autonomy + Evaluation Hub */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-10o0">
            <div>
              <p className="text-sm font-semibold text-purple-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Eval‑Gated Autonomy + Evaluation Hub</h2>
              <p className="text-gray-60o0 mt-2">Ship safer autonomy with lifecycle gates and a central evaluation system.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-20o26-eval-gated-autonomy" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Eval‑Gated Autonomy</Link>
              <Link href="/content/ai-20o26-safe-evaluation-hub" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Evaluation Hub</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Real-Time Agent Debugger (Sept 20o25) */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-emerald-10o0">
            <div>
              <p className="text-sm font-semibold text-emerald-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">AI 20o26: Real-Time Agent Debugger</h2>
              <p className="text-gray-60o0 mt-2">Live traces, diffs, and eval IDs to debug agents safely in prod.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-20o26-real-time-agent-debugger" className="inline-block bg-emerald-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-70o0">Read Article</Link>
              <Link href="/content/ai-20o26-safe-evaluation-hub" className="inline-block border border-emerald-60o0 text-emerald-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Evaluation Hub</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Agent Risk Metrics + Governed Tool Use + Starter Kit (Sept 20o25) */}
      <section className="py-8 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-emerald-10o0">
            <div>
              <p className="text-sm font-semibold text-emerald-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Agent Risk Metrics + Governed Tool Use</h2>
              <p className="text-gray-60o0 mt-2">Measure safety and reliability with evaluation gates and policy‑guarded tools.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/ai-20o26-enterprise-agent-risk-metrics" className="inline-block bg-emerald-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-emerald-70o0">Risk Metrics</Link>
              <Link href="/blog/ai-20o26-governed-tool-use-case-studies" className="inline-block border border-emerald-60o0 text-emerald-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Tool Use Case Studies</Link>
              <Link href="/resources/ai-20o26-agent-risk-metrics-starter-kit" className="inline-block border border-emerald-60o0 text-emerald-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-emerald-50">Starter Kit</Link>
            </div>
          </div>
        </div>
      </section>
      {/* What's New dynamic section */}
      <WhatsNew highlightOnly limit={8}  />
      {/* Quick new content spotlight */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <div className="text-sm font-semibold text-purple-70o0 mb-2">Incident Response</div>
              <h3 className="text-xl font-bold text-gray-90o0 mb-2">Agent Incident Response Playbook</h3>
              <p className="text-gray-60o0 mb-4">Eval‑gated triage, mitigation, and escalation with autonomous agents.</p>
              <Link href="/content/ai-20o26-agent-incident-response-playbook" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <div className="text-sm font-semibold text-purple-70o0 mb-2">Operations</div>
              <h3 className="text-xl font-bold text-gray-90o0 mb-2">Agents‑On‑Call Automation</h3>
              <p className="text-gray-60o0 mb-4">Design agents that respond safely with eval gates and observability.</p>
              <Link href="/blog/ai-20o26-agents-oncall-automation" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: GTM Agents Blueprint */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-10o0">
            <div>
              <p className="text-sm font-semibold text-purple-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">AI 20o26: Go-To-Market Agents Blueprint</h2>
              <p className="text-gray-60o0 mt-2">Pipeline generation, deal acceleration, and expansion with policy-as-code guardrails.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-20o26-go-to-market-agents-blueprint" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Read Blueprint</Link>
              <Link href="/blog/ai-20o26-go-to-market-agents-blueprint" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Blog Overview</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Promo: Change Management + Runbook Kit (Sept 20o25) */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-blue-10o0">
            <div>
              <p className="text-sm font-semibold text-purple-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">AI 20o26: Change Management + Runbook Starter Kit</h2>
              <p className="text-gray-60o0 mt-2">Eval-gated approvals, progressive rollouts, and standardized incident runbooks.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/content/ai-20o26-agent-change-management" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Change Management</Link>
              <Link href="/content/ai-20o26-agent-runbook-starter-kit" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Runbook Kit</Link>
            </div>
          </div>
        </div>
      </section>
      {/* New Content Promo: Production Safety + Cost Optimization (Sept 20o25) */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow border border-gray-10o0">
            <div>
              <p className="text-sm font-semibold text-purple-70o0">New content</p>
              <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Production Safety Checklist + Cost Optimization Blueprint</h2>
              <p className="text-gray-60o0 mt-2">Ship safer agents and cut compute costs with eval‑gated controls.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog/ai-20o26-production-safety-checklist" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Safety Checklist</Link>
              <Link href="/content/ai-20o26-cost-optimization-blueprint" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Cost Blueprint</Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className='min-h-screen bg-white'>
        <WhatsNewStrip  />
        
        {/* Revolutionary Content Banner 20o26 - NEW FEATURED */}
        <RevolutionaryContentBanner20o26  />
        
        {/* New Content Showcase 20o26 - NEW FEATURED */}
        <NewContentShowcase20o26  />
        
        {/* New Content 20o26 Ultimate Banner - NEW FEATURED */}
        <NewContent20o26UltimateBanner  />
        
        {/* Ultimate Content Promotion 20o26 - NEW FEATURED */}
        <UltimateContentPromotion20o26  />
        
        {/* New Promo: Policy-as-Code Kit + Reliability Engineering */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-10o0">
              <div>
                <p className="text-sm font-semibold text-purple-70o0">New content</p>
                <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Policy-as-Code Starter Kit + Reliability for Agents</h2>
                <p className="text-gray-60o0 mt-2">Ship safer agents with versioned controls and SLO-driven operations.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/content/ai-20o26-policy-as-code-starter-kit" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Policy-as-Code Kit</Link>
                <Link href="/blog/ai-20o26-reliability-engineering-for-agents" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Reliability Guide</Link>
              </div>
            </div>
          </div>
        </section>
        {/* Promo: New - Autonomous Revenue Blueprint + Agent Platform Ops */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-10o0">
              <div>
                <p className="text-sm font-semibold text-purple-70o0">New content</p>
                <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Autonomous Revenue + Agent Platform Ops</h2>
                <p className="text-gray-60o0 mt-2">Blueprint for GTM agents and the day-2 ops guide for running the platform.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/content/ai-20o26-autonomous-revenue-blueprint" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Revenue Blueprint</Link>
                <Link href="/content/ai-20o26-agent-platform-operations" className="inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Platform Ops</Link>
              </div>
            </div>
          </div>
        </section>
        {/* New Content 20o25 Ultimate Showcase Banner - FEATURED */}
        <NewContent20o25UltimateShowcaseBanner  />
        {/* New Multimodal Agents 20o25 Banner - NEW */}
        <NewMultimodalAgents20o25Banner  />
        {/* Promo: Fresh Content */}
        <section className="py-10 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-purple-70o0">Just published</p>
                <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Explore our newest guides</h2>
                <p className="text-gray-60o0 mt-2">Now live: Enterprise AI Governance Blueprint 20o26, Agents‑On‑Call 20o26, and Evals Maturity Model.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/content/enterprise-ai-governance-20o26" className="inline-block bg-indigo-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-70o0">AI Governance 20o26</Link>
                <Link href="/content/ai-20o26-evals-maturity-model" className="inline-block bg-purple-60o0 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Evals Maturity</Link>
                <Link href="/blog/ai-20o26-agents-oncall-automation" className="hidden md:inline-block border border-purple-60o0 text-purple-70o0 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Agents‑On‑Call</Link>
              </div>
            </div>
          </div>
        </section>
        {/* New Content 20o25 Analytics Revolution Banner - NEW FEATURED */}
        <NewContent20o25AnalyticsRevolutionBanner  />
        {/* New Content 20o26 Autonomous Revenue Agents Promo - NEW */}
        <NewAutonomousRevenueAgentsPromo  />
        
        {/* New Content Promo: Sept 15, 20o25 - Support Agents + Secure Architecture */}
        <section className="py-10 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-70o0 mb-2">Operations</div>
                  <h3 className="text-xl font-bold text-gray-90o0 mb-2">AI 20o26: Autonomous Customer Support Agents</h3>
                  <p className="text-gray-60o0">Routing, guardrails, and eval gates to scale safe customer operations.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-20o26-autonomous-customer-support-agents" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-70o0 mb-2">Security</div>
                  <h3 className="text-xl font-bold text-gray-90o0 mb-2">AI 20o26: Secure Agent Architecture</h3>
                  <p className="text-gray-60o0">Zero-trust design with isolation domains and runtime protections.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-20o26-secure-agent-architecture" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Content Promo: Risk Management & Compliance (20o26) */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-70o0 mb-2">Risk</div>
                  <h3 className="text-xl font-bold text-gray-90o0 mb-2">Agent Risk Management Blueprint (20o26)</h3>
                  <p className="text-gray-60o0">Mitigate safety, security, and reliability risks with policy-as-code and evals.</p>
                </div>
                <div className="mt-4">
                  <Link href="/content/ai-20o26-agent-risk-management" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-70o0 mb-2">Compliance</div>
                  <h3 className="text-xl font-bold text-gray-90o0 mb-2">Autonomous Compliance Operating Model (20o26)</h3>
                  <p className="text-gray-60o0">Automate controls, evidence, and tests for audit-ready AI operations.</p>
                </div>
                <div className="mt-4">
                  <Link href="/content/ai-20o26-autonomous-compliance" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-70o0 mb-2">Playbook</div>
                  <h3 className="text-xl font-bold text-gray-90o0 mb-2">Agent Risk Mitigation Playbook (20o26)</h3>
                  <p className="text-gray-60o0">Safeguards, monitoring, and adoption checklist for enterprise agent systems.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-20o26-agent-risk-mitigation-playbook" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Content Showcase 20o25 - NEW FEATURED */}
        <AnalyticsContentShowcase20o25  />
        
        {/* New Content 20o25 Advanced Automation Banner - NEW FEATURED */}
        <NewContent20o25AdvancedAutomationBanner  />
        
        {/* Advanced Automation Content Showcase 20o25 - NEW FEATURED */}
        <AdvancedAutomationContentShowcase20o25  />
        
        {/* Revolutionary AI Content 20o26 Banner - NEW FEATURED */}
        <RevolutionaryAIContent20o26Banner  />

        {/* Promo: New Article - Agents-On-Call Automation 20o26 */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-purple-70o0 mb-2">New on the blog</div>
                <h3 className="text-2xl font-bold text-gray-90o0 mb-2">AI 20o26: Agents‑On‑Call Automation</h3>
                <p className="text-gray-60o0 max-w-2xl">Autonomous triage, mitigation, and escalation with eval‑gated playbooks and deep observability.</p>
              </div>
              <div className="shrink-0">
                <Link href="/blog/ai-20o26-agents-oncall-automation" className="bg-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Read Article</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promo: New Article - Autonomous Edge Blueprint 20o25 */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-purple-70o0 mb-2">New on the blog</div>
                <h3 className="text-2xl font-bold text-gray-90o0 mb-2">AI 20o25: Autonomous Edge Blueprint</h3>
                <p className="text-gray-60o0 max-w-2xl">Design patterns and deployment strategies for running autonomous AI at the edge with safety and reliability.</p>
              </div>
              <div className="shrink-0">
                <Link href="/blog/ai-20o25-autonomous-edge-blueprint" className="bg-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-70o0">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI 20o26 Quantum Revolution Ultimate Banner - NEW FEATURED */}
        <AI20o26QuantumRevolutionUltimateBanner  />
        
        {/* New Content 20o26 Ultimate Showcase - NEW FEATURED */}
        <NewContent20o26UltimateShowcase  />
        
        {/* AI 20o26 Ultimate Showcase Banner */}
        <AI20o26UltimateShowcaseBanner  />
        
        {/* Quantum AI 20o26 Breakthrough Banner */}
        <QuantumAI20o26BreakthroughBanner  />
        
        {/* Ultimate Promotion Banner */}
        <UltimatePromotionBanner20o26  />
        
        {/* AI 20o26 Quantum Revolution Banner */}
        <AI20o26QuantumRevolutionBanner  />
        
        {/* AI 20o26 Autonomous Systems Banner */}
        <AI20o26AutonomousSystemsBanner  />
        
        {/* Revolutionary Content 20o25 Banner - NEW CONTENT */}
        <RevolutionaryContent20o25Banner  />
        
        {/* New Content 20o25 Ultimate Banner - FEATURED */}
        <NewContent20o25UltimateBanner  />
        
        {/* AI 20o25 Breakthrough Banner */}
        <AI20o25BreakthroughBanner  />
        
        {/* Revolutionary AI Content Banner */}
        <RevolutionaryAIContentBanner  />
        
        {/* Enhanced Content Promotion Banner */}
        <EnhancedContentPromotionBanner  />

        {/* New Content Promo: LLM Evals Maturity Model 20o26 */}
        <section className="py-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-purple-70o0">New Framework</p>
                <h2 className="text-2xl font-bold text-gray-90o0 mt-1">AI 20o26: LLM Evals Maturity Model</h2>
                <p className="text-gray-60o0 mt-2">An evaluation-first framework with metrics, harnesses, and governance to ship reliable AI.</p>
              </div>
              <Link href="/blog/ai-20o26-llm-evals-maturity-model" className="shrink-0 inline-block bg-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Read the Framework →</Link>
            </div>
          </div>
        </section>

        {/* Promo: Agent Observability Blueprint 20o26 */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-sm font-semibold text-purple-70o0 mb-2">New on the blog</div>
                <h3 className="text-2xl font-bold text-gray-90o0 mb-2">AI 20o26: Agent Observability Blueprint</h3>
                <p className="text-gray-60o0 max-w-2xl">Deep visibility into autonomous agents: traces, evaluations, and safety telemetry across the lifecycle.</p>
              </div>
              <div className="shrink-0">
                <Link href="/blog/ai-20o26-agent-observability-blueprint" className="bg-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-70o0">Read Article</Link>
              </div>
            </div>
          </div>
        </section>

        {/* New Content Spotlight - September 20o25 */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-90o0 mb-6">Just published</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-70o0 mb-2">Governance</div>
                  <h3 className="text-xl font-bold text-gray-90o0 mb-2">Enterprise AI Governance Blueprint (20o26)</h3>
                  <p className="text-gray-60o0">Policy-as-code, risk tiers, and continuous evaluations for safe scale.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-20o26-enterprise-ai-governance-blueprint" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-70o0 mb-2">Enterprise AI</div>
                  <h3 className="text-xl font-bold text-gray-90o0 mb-2">AI Governance Blueprint (20o26)</h3>
                  <p className="text-gray-60o0">Policy-as-code, evals, and runtime monitoring for trustworthy AI.</p>
                </div>
                <div className="mt-4">
                  <Link href="/content/enterprise-ai-governance-20o26" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm font-semibold text-purple-70o0 mb-2">Finance</div>
                  <h3 className="text-xl font-bold text-gray-90o0 mb-2">AI 20o26: Autonomous Finance Operating System</h3>
                  <p className="text-gray-60o0">Real-time cash, autonomous close, and policy-as-code guardrails.</p>
                </div>
                <div className="mt-4">
                  <Link href="/blog/ai-20o26-autonomous-finance-operating-system" className="text-purple-60o0 font-semibold hover:text-purple-80o0">Read →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo: New Article - Foundation Model Ops 20o26 */}
        <section className="py-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-purple-70o0">New Playbook</p>
                <h2 className="text-2xl font-bold text-gray-90o0 mt-1">AI 20o26: Foundation Model Ops</h2>
                <p className="text-gray-60o0 mt-2">Operational patterns for safe, observable, and efficient foundation model deployments at scale.</p>
              </div>
              <Link href="/blog/ai-20o26-foundation-model-ops" className="shrink-0 inline-block bg-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-70o0">
                Read the Playbook →
              </Link>
            </div>
          </div>
        </section>

        {/* New Content Promo: Generative Agents Infrastructure Blueprint (20o25) */}
        <section className="py-6 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-purple-70o0">New Architecture Guide</p>
                <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Generative Agents Infrastructure Blueprint (20o25)</h2>
                <p className="text-gray-60o0 mt-2">Design, deploy, and operate enterprise-grade generative agent infrastructure with governance and ROI.</p>
              </div>
              <Link href="/blog/ai-20o25-generative-agents-infrastructure-blueprint" className="shrink-0 inline-block bg-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-70o0">
                Read the Blueprint →
              </Link>
            </div>
          </div>
        </section>

        {/* New Content Promo: Autonomous Finance Control Plane (20o26) */}
        <section className="py-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <p className="text-sm font-semibold text-purple-70o0">New Finance AI</p>
                <h2 className="text-2xl font-bold text-gray-90o0 mt-1">Autonomous Finance Control Plane (20o26)</h2>
                <p className="text-gray-60o0 mt-2">Real-time policy enforcement, anomaly detection, and auditability for modern finance operations.</p>
              </div>
              <Link href="/blog/ai-20o26-autonomous-finance-control-plane" className="shrink-0 inline-block bg-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-70o0">
                Explore the Guide →
              </Link>
            </div>
          </div>
        </section>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-indigo-60o0 text-white py-20">
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
                  className="bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Content Showcase 20o25 - NEW FEATURED */}
        <LatestContentShowcase20o25  />

        {/* Key Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-purple-60o0 mb-2">50o0+</div>
                <div className="text-gray-60o0">Projects Delivered</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-60o0 mb-2">98%</div>
                <div className="text-gray-60o0">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-60o0 mb-2">340%</div>
                <div className="text-gray-60o0">Average ROI Increase</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-orange-60o0 mb-2">24/7</div>
                <div className="text-gray-60o0">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Services Showcase 20o26 - NEW FEATURED */}
        <LatestServicesShowcase20o26  />

        {/* Latest Blog Content 20o26 - NEW FEATURED */}
        <LatestBlogContent20o26  />

        {/* Success Stories Showcase 20o26 - NEW FEATURED */}
        <SuccessStoriesShowcase20o26  />

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-90o0 mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-90o0 mb-4">AI Automation</h3>
                <p className="text-gray-60o0 mb-4">
                  Intelligent automation solutions that streamline operations and boost productivity across your organization.
                </p>
                <Link href="/services/ai-automation" className="text-purple-60o0 font-semibold hover:text-purple-80o0">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-gray-90o0 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-60o0 mb-4">
                  Scalable, secure cloud solutions designed to support your business growth and digital transformation.
                </p>
                <Link href="/services/cloud-infrastructure" className="text-purple-60o0 font-semibold hover:text-purple-80o0">
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-90o0 mb-4">Micro SaaS</h3>
                <p className="text-gray-60o0 mb-4">
                  Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.
                </p>
                <Link href="/services/micro-saas" className="text-purple-60o0 font-semibold hover:text-purple-80o0">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Promotion Banners */}
        <RevolutionaryContent20o26Banner  />
        <UltimateContentShowcase20o26  />
        <QuantumAIContentShowcase20o26  />
        <UltimateContentShowcase20o25  />
        <NewContent20o25PromotionBanner  />
        <LatestContentShowcase20o25  />
        <EnhancedContentPromotionBanner20o26  />
        <ComprehensiveContentShowcase20o26  />
        <FeaturedContentShowcase20o26  />
        <NewContentPromotionBanner  />
        <ComprehensiveSolutionsBanner20o25  />
        <NewServicesShowcase20o25  />
        <NewContent20o26Showcase  />
        
        {/* Interactive Content Discovery Widget - NEW FEATURED */}
        <InteractiveContentDiscoveryWidget  />

        {/* Advanced AI Components */}
        <AdvancedContentRecommendationEngine  />
        <RealTimePerformanceDashboard  />
        <IntelligentSearchEngine  />
        <AdvancedAIAssistant  />
        <BusinessIntelligenceDashboard  />
        <AdvancedSecurityMonitor  />
        <AdvancedAnalyticsEngine  />
        <AutomationWorkflowEngine  />
        <EnterpriseDataManagement  />
        <APIManagementSystem  />

        {/* Structured Data */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading..."  />}>
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
    </div>
  );
}