import { Link } from 'react-router-dom';
import React from 'react';

export const metadata = {
  title: 'AI Roadmaps 2026: What to Build Next and Why',
  description: 'A pragmatic roadmap for 2026 across CX, ops, and platforms with high-ROI sequencing and metrics.',
};

export default function AIRoadmaps2026() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12 py-10 bg-gradient-to-br from-indigo-50 to-purple-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Roadmaps 2026</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A pragmatic roadmap for 2026 across customer experience, operations, and platforms. High-ROI bets with
          clear sequencing, governance, and measurable outcomes.
        </p>
        <div className="text-sm text-gray-500 mt-3">September 29, 2025 • 10 min read • Strategy</div>
      </div>

      <div className="max-w-3xl mx-auto px-4 prose prose-lg">
        <h2>Executive Summary</h2>
        <p>
          Focus 2026 investments on revenue-facing copilots, reliable automation, and platform hardening. Sequence
          by impact and readiness: start with high-intent workflows, then scale with shared services.
        </p>

        <h2>Priority Tracks</h2>
        <ul>
          <li>Revenue copilots: guided selling, account planning, proposal assist</li>
          <li>Ops automation: intake triage, reconciliations, exception handling</li>
          <li>Platform: evals, risk register, observability, cost governance</li>
        </ul>

        <h2>Milestones & Metrics</h2>
        <p>
          Define quarterly milestones with target adoption, cycle-time reduction, quality gates, and cost-per-outcome.
          Use scorecards for teams to balance speed, reliability, and spend.
        </p>

        <div className="mt-8">
          <Link to="/blog" className="text-blue-600 font-semibold">← Back to Blog</Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export const metadata = {
  title: 'AI Roadmaps 2026: What to Build Next and Why',
  description: 'A pragmatic roadmap for 2026 across customer experience, ops, and platforms. High-ROI bets with sequencing, risks, and metrics.',
};

export default function AIRoadmaps2026Page() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12 py-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Roadmaps 2026: What to Build Next and Why</h1>
        <div className="text-gray-600">September 29, 2025 • 10 min read • Strategy</div>
      </div>

      <div className="max-w-3xl mx-auto px-4 prose prose-lg">
        <p>
          As AI platforms mature, the question shifts from "Can we ship?" to "What should we build next?" This roadmap
          focuses on compounding ROI, reliability, and compliance.
        </p>

        <h2>2026 Bet Areas</h2>
        <ul>
          <li>Customer Experience: proactive assistants, multi-turn journeys, on-device personalization</li>
          <li>Operations: autonomous workflows with policy gates and observable actions</li>
          <li>Platforms: eval harnesses, data contracts, vector governance, cost controls</li>
        </ul>

        <h2>Sequencing Framework</h2>
        <ol>
          <li>Stabilize: guardrails, evals, observability, cost posture</li>
          <li>Scale: platform abstractions, reusable tools, golden prompts</li>
          <li>Differentiate: domain models, proprietary data advantages</li>
        </ol>

        <div className="my-8 p-4 rounded-xl bg-teal-50 border border-teal-200">
          <strong>Roadmap Workshop:</strong> We run 2-week roadmap sprints, aligning exec priorities with platform
          capabilities and shipping a sequenced backlog with owners and KPIs.
        </div>

        <p>
          Ready to plan 2026? We facilitate strategy, architecture, and delivery plans with an execution-ready backlog
          for your teams.
        </p>
      </div>
    </div>
  );
}

