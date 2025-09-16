import React from 'react';
import { useParams, Link } from 'react-router-dom';

const content = {
  'agentic-ops-2026-blueprint': {
    title: 'Agentic Ops 2026: Practical Enterprise Blueprint',
    body: `Learn how to productionize agentic workflows with:

 - Evaluation gates at integration and release time
 - Observability across autonomy levels
 - Risk-tiered tool permissions
 - Incident response patterns for LLM systems

This blueprint includes architecture diagrams, rollout checklists, and KPI templates.`,
    date: '2025-09-16',
  },
  'trustworthy-model-routing': {
    title: 'Trustworthy Model Routing: Production Patterns',
    body: `We cover routing strategies across heterogeneous models:

 - Deterministic routing by task profile
 - Probabilistic A/B routing with guardrails
 - Cost/latency-aware fallbacks
 - Safety triage and attribution

Includes example configs and test harness ideas.`,
    date: '2025-09-16',
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = content[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-2xl font-semibold mb-4">Post not found</h1>
          <Link to="/blog" className="text-indigo-600 hover:underline">Back to Insights</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/blog" className="text-sm text-indigo-600 hover:underline">← All Insights</Link>
        <h1 className="text-4xl font-bold tracking-tight mt-3 mb-3">{post.title}</h1>
        <div className="text-sm text-gray-500 mb-8">{new Date(post.date).toLocaleDateString()}</div>
        <div className="prose prose-indigo max-w-none whitespace-pre-wrap">{post.body}</div>
      </div>
    </div>
  );
}

