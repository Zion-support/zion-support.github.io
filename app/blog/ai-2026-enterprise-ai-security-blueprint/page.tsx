<<<<<<< HEAD
=======
import React from 'react';
import Link from 'next/link';

export default function EnterpriseAISecurityBlueprint2026() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <Link href="/blog" className="inline-block text-indigo-100 hover:text-white mb-4">← Back to Blog</Link>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">AI 2026: Enterprise AI Security Blueprint</h1>
          <p className="text-lg md:text-xl mt-4 opacity-95 max-w-3xl">A pragmatic blueprint to secure AI agents, data, and workflows across the modern enterprise in 2026.</p>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-6 py-12 prose prose-lg">
        <h2>Security Priorities</h2>
        <ul>
          <li>Identity, secrets, and permissioned tool use with least privilege.</li>
          <li>Evaluation gates with red team scenarios and continuous monitoring.</li>
          <li>Data governance: lineage, PII controls, retention, and access policy.</li>
        </ul>
        <h2>Operational Controls</h2>
        <ul>
          <li>Runtime guardrails and sandboxing for external actions.</li>
          <li>Incident response playbooks with automated mitigations.</li>
          <li>Audit-ready evidence collection for releases and incidents.</li>
        </ul>
        <div className="mt-8 flex gap-3">
          <Link href="/content/ai-2026-secure-tooling-permissions-blueprint" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700">Permissions Blueprint</Link>
          <Link href="/blog/ai-2026-agent-risk-mitigation-playbook" className="inline-block border border-indigo-600 text-indigo-700 px-5 py-3 rounded-lg font-semibold hover:bg-indigo-50">Risk Playbook</Link>
        </div>
      </article>
    </div>
  );
}

import Link from 'next/link';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
import React from 'react';

const page: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">page</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default page;