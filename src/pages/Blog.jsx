import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: 'agentic-ops-2026-blueprint',
    title: 'Agentic Ops 2026: Practical Enterprise Blueprint',
    summary: 'A pragmatic guide to deploying agentic operations with risk gates and observability.',
    date: '2025-09-16',
  },
  {
    slug: 'ai-2026-reliable-agent-deployments',
    title: 'AI 2026: Reliable Agent Deployments — Canary, Rollback, Scorecards',
    summary: 'Practical steps to ship agent features safely using canaries, automated rollback, and journey scorecards.',
    date: '2025-09-16',
  },
  {
    slug: 'trustworthy-model-routing',
    title: 'Trustworthy Model Routing: Production Patterns',
    summary: 'Deterministic and probabilistic routing strategies that balance cost, latency, and safety.',
    date: '2025-09-16',
  },
  {
    slug: 'ai-2026-safe-agent-rollouts-checklist',
    title: 'AI 2026: Safe Agent Rollouts Checklist',
    summary: 'Preflight, canary, and rollback steps to ship agent features safely.',
    date: '2025-09-16',
  },
  {
    slug: 'ai-2026-evidence-hubs-blueprint',
    title: 'AI 2026: Production Evidence Hubs — Blueprint',
    summary: 'Capture traces, artifacts, and policy events for auditable AI.',
    date: '2025-09-16',
  },
  {
    slug: 'ai-2026-governed-tool-use-starter',
    title: 'AI 2026: Governed Tool Use — Starter You Can Ship Today',
    summary: 'Risk-tiered permissions, audit trails, and policy gates to keep tool use safe and compliant.',
    date: '2025-09-16',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Insights</h1>
        <p className="text-gray-600 mb-10">Latest research, guides, and implementation patterns.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <div className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
            </article>
          ))}
        </div>
      </div>
    );
  }  }
