import React from 'react';

export const metadata = {
  title: 'What\'s New in October 2025 — Zion Tech Group',
  description: 'Roundup of our latest AI content published in October 2025: enterprise cost optimization, agentic workflow orchestration, and more.',
};

export default function NewInOctober2025() {
  return (
    <main className="text-left">
      <section className="text-left">
        <div className="text-left">
          <h1 className="text-left">What\'s New in October 2025</h1>"
          <p className="text-left">
            Explore our newest publications: practical playbooks, deep dives, and enterprise-ready patterns.
          </p>
        </div>
      </section>

      <section className="text-left">
        <div className="text-left">
          <a href="/blog/ai-2027-cost-optimization-playbook" className="text-left">
            <div className="text-left">New</div>"
            <h2 className="text-left">AI 2027 Cost Optimization Playbook</h2>"
            <p className="text-left">Cut AI spend 30–70% with routing, caching, quantization, and guardrails—without sacrificing quality.</p>"
            <div className="text-left">Read the playbook →</div>"
          </a>

          <a href="/blog/agentic-workflow-orchestration-2026" className="text-left">
            <div className="text-left">Featured</div>"
            <h2 className="text-left">Agentic Workflow Orchestration 2026</h2>"
            <p className="text-left">Guardrails, reviews, and observability to ship reliable multi-agent workflows with measurable ROI.</p>"
            <div className="text-left">Read the article →</div>"
          </a>
        </div>
      </section>
    </main>
  );
}

