import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2026: Zero-Trust Agent Architecture | Zion Tech Group',
  description:
    'A practical blueprint for zero-trust autonomous agents with isolation domains, policy-as-code, permissions, and runtime guards.',
};

export default function ZeroTrustAgentArchitecturePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        <div className="text-sm font-semibold text-purple-700 mb-2">Architecture</div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          AI 2026: Zero-Trust Agent Architecture
        </h1>
        <p className="text-gray-600 text-lg">
          Design autonomous systems that assume compromise by default. Implement layered controls
          across identity, permissions, isolation domains, and runtime policy enforcement.
        </p>
      </header>

      <section className="prose prose-lg max-w-none">
        <h2>Key pillars</h2>
        <ul>
          <li>Strong identity and workload attestation for every agent and tool.</li>
          <li>Fine-grained permissions with least-privilege and time-bounded grants.</li>
          <li>Isolation domains for data, tools, and networks with explicit bridges.</li>
          <li>Policy-as-code for preflight checks, runtime guards, and post-action attestations.</li>
          <li>Continuous evaluations and red-team scenarios in CI/CD.</li>
        </ul>

        <h2>Reference controls</h2>
        <ol>
          <li>Guarded tool use with permission prompts routed through policy gates.</li>
          <li>Immutable audit trails and cryptographic event signing.</li>
          <li>Safe-mode fallbacks and kill-switches with human-in-the-loop options.</li>
          <li>Data egress filters and output verification with grounding and citations.</li>
        </ol>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8">
          <div className="font-semibold text-purple-800 mb-2">Success metrics</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-2xl font-bold text-purple-700">99.9%</div>
              <div className="text-gray-600">Incident prevention</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-700">65%</div>
              <div className="text-gray-600">Risk reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-700">2x</div>
              <div className="text-gray-600">Approval speed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-700">100%</div>
              <div className="text-gray-600">Audit coverage</div>
            </div>
          </div>
        </div>

        <h2>Next steps</h2>
        <p>
          Start with a minimal policy set, instrument everything, and progressively tighten controls
          as evaluation coverage grows.
        </p>
      </section>

      <footer className="mt-10 flex gap-3">
        <Link href="/content/ai-2026-agent-risk-management-framework" className="text-purple-700 font-semibold">
          Risk Framework →
        </Link>
        <Link href="/blog/ai-2026-secure-agent-architecture" className="text-purple-700 font-semibold">
          Secure Architecture →
        </Link>
      </footer>
    </main>
  );
}

