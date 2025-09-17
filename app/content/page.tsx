import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Content Hub | Zion Tech Group',
  description: 'Explore our latest guides and articles on AI and automation.'
};

export default function ContentIndexPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Content</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Stay ahead with our practical guides and deep-dives into enterprise AI and automation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-indigo-700 mb-2">Blueprint</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/blog/ai-2026-responsible-ai-operations-blueprint" className="hover:underline">
              Responsible AI Operations Blueprint (2026)
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Implement policy-as-code, evals, and incident playbooks to ship reliable AI at scale.
          </p>
          <Link href="/blog/ai-2026-responsible-ai-operations-blueprint" className="text-indigo-700 font-semibold">Read Blueprint →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-emerald-700 mb-2">Playbook</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/blog/ai-2026-foundational-models-cost-optimization-playbook" className="hover:underline">
              Foundational Models Cost Optimization (2026)
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            Reduce AI infra costs 30–70% with routing, caching, and distillation strategies.
          </p>
          <Link href="/blog/ai-2026-foundational-models-cost-optimization-playbook" className="text-emerald-700 font-semibold">Read Playbook →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-purple-700 mb-2">Guide</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/hyperautomation-blueprint-2026" className="hover:underline">
              Hyperautomation Blueprint 2026
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            A practical blueprint to design, deploy, and scale AI-driven hyperautomation across the enterprise.
          </p>
          <Link href="/content/hyperautomation-blueprint-2026" className="text-purple-600 font-semibold">Read Guide →</Link>
        </article>

        <article className="bg-white p-6 rounded-xl shadow">
          <div className="text-sm font-semibold text-blue-700 mb-2">Article</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link href="/content/edge-ai-agents-2026" className="hover:underline">
              Edge AI Agents: Real-Time Autonomy
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">
            How edge-native agents enable ultra-low-latency decisioning and intelligent automation at the edge.
          </p>
          <Link href="/content/edge-ai-agents-2026" className="text-blue-600 font-semibold">Read Article →</Link>
        </article>
      </div>
    </main>
  );
}

