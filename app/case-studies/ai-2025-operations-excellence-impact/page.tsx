import React from 'react';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'Operations Excellence Impact: 41% MTTR Reduction | Case Study',
  description: 'How agentic operations automated runbooks and reduced MTTR by 41%, with measurable reliability and cost improvements.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Operations Excellence Impact: 41% MTTR Reduction"
        description="Agentic ops automated runbooks, correlated incidents, and delivered 41% MTTR reduction with strong guardrails."
        keywords="AIOps case study, MTTR reduction, incident automation, SLOs, agentic operations"
        url="/case-studies/ai-2025-operations-excellence-impact"
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
        <h1>Operations Excellence Impact: 41% MTTR Reduction</h1>
        <p className="lead">Global SaaS platform implemented agentic runbook automation and incident correlation, cutting MTTR by 41% and paging by 28%.</p>

        <h2>Highlights</h2>
        <ul>
          <li>41% MTTR reduction and 28% fewer pages</li>
          <li>Policy-gated remediation with audit trails</li>
          <li>End-to-end tracing and evals for safety and correctness</li>
        </ul>

        <h2>Approach</h2>
        <p>Agents executed standardized runbooks with approvals, integrated with telemetry and ticketing, and produced structured traces for analysis.</p>

        <h2>Outcomes</h2>
        <p>Improved reliability and reduced toil enabled teams to focus on prevention and higher leverage work.</p>
      </article>
    </div>
  );
}

