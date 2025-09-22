import Link from 'next/link';
import React from 'react';
export const metadata = {
  keywords: [
    'agent platform operations',
    'SLOs',
    'incident response',
    'change management',
    'eval-gated releases'
  ]
};

export default function AgentPlatformOperationsPage() {
  return (
    <div className="min-h-screen bg-white">
      

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-6 text-sm text-purple-700 font-semibold">Platform Operations</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Agent Platform Operations</h1>
        <p className="text-gray-600 mb-8">
          Operate agent platforms with SLOs, incident response, change management, and eval-gated releases.
        </p>

        <div className="prose prose-lg max-w-none">
          <h2>Key Operations</h2>
          <ul>
            <li>SLO monitoring and alerting</li>
            <li>Incident response procedures</li>
            <li>Change management processes</li>
            <li>Evaluation-gated releases</li>
          </ul>
        </div>

        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Get Started</Link>
          <Link href="/resources" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Learn More</Link>
        </div>
      </main>
    </div>
  );
}