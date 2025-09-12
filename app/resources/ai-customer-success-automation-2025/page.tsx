import React from 'react';
import SEO from '../../../components/SEO';

export default function AICustomerSuccessAutomation2025() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Customer Success Automation 2025 - Zion Tech Group"
        description="Playbooks to automate onboarding, QBRs, health scoring, and proactive retention with AI while keeping humans-in-the-loop."
        keywords="customer success automation, AI onboarding, QBR automation, health score, retention, CS ops"
        url="/resources/ai-customer-success-automation-2025"
      />

      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">🤝 AI Customer Success Automation 2025</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Automate repetitive CS workflows and focus your team on outcomes—without sacrificing quality or trust.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Onboarding', desc: 'Checklists, provisioning, training, and first value milestones' },
            { title: 'QBRs', desc: 'Automated deck drafts with usage insights and ROI stories' },
            { title: 'Health Scoring', desc: 'Signals from product usage, tickets, finance, and NPS' },
            { title: 'Renewals', desc: 'Risk alerts, playbooks, and next best actions' },
            { title: 'Knowledge', desc: 'Assistants for docs, how-tos, and case deflection' },
            { title: 'Voice of Customer', desc: 'Summaries from calls, tickets, and product feedback' },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold mb-2">{c.title}</h3>
              <p className="text-gray-700">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold mb-4">Reference Architecture</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Data: product analytics, CRM, billing, support</li>
            <li>• Orchestration: event bus with deterministic routing and guardrails</li>
            <li>• Models: tiered LLMs with caching and cost controls</li>
            <li>• Assistants: agentic workflows for CS and self-serve portals</li>
            <li>• Governance: audit logs, evals, red teaming, PII controls</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold mb-1">Ready to Automate CS Workflows?</h4>
              <p className="opacity-90">We deploy secure, measurable CS automation tailored to your stack.</p>
            </div>
            <a href="/contact" className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

