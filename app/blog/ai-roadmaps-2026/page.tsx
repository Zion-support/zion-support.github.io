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

