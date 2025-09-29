import React from 'react';

export const metadata = {
  title: 'AI Procurement 2025: Vendor Evaluation Playbook',
  description: 'Practical scorecards, RFP criteria, and bake-off patterns to evaluate AI vendors reliably in 2025.',
};

export default function Page() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12 py-10 bg-gradient-to-br from-blue-50 to-teal-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Procurement 2025: Vendor Evaluation Playbook
        </h1>
        <div className="text-gray-600">September 29, 2025 • 9 min read • Strategy</div>
      </div>

      <div className="max-w-3xl mx-auto px-4 prose prose-blue">
        <p>
          Selecting AI vendors now requires measurable reliability, safety, and cost control. This playbook
          provides practical evaluation scorecards, RFP prompts, and bake-off designs you can run in a week.
        </p>

        <h2>Scoring Dimensions</h2>
        <ul>
          <li>Quality: groundedness, hallucination rate, evaluation with golden sets</li>
          <li>Latency: P95 and P99 under realistic concurrency</li>
          <li>Cost: per-request cost, caching effectiveness, autoscaling efficiency</li>
          <li>Security & Compliance: data handling, isolation, auditability</li>
          <li>Ops: observability, rollback plans, SLAs, incident response</li>
        </ul>

        <h2>Bake-off Pattern</h2>
        <ol>
          <li>Define 50–200 gold examples with expected outputs and tolerances</li>
          <li>Run with traffic replay and evaluate with automatic metrics + human spot checks</li>
          <li>Capture cost, P95/P99, and error budgets in a single dashboard</li>
        </ol>

        <h2>Procurement Artifacts</h2>
        <ul>
          <li>RFP Questionnaire focusing on data, security, and roadmap</li>
          <li>Evaluation Scorecard template with weights</li>
          <li>Pilot Success Criteria and exit conditions</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <strong>Download:</strong> Contact us for a ready-to-use scorecard and dashboard starter.
        </div>
      </div>
    </div>
  );
}

