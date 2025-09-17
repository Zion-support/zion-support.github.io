import React from 'react';
<<<<<<< HEAD
=======

export const metadata = {
  title: 'AI 2026: Agent Observability Blueprint',
  description: 'Traces, evals, and safety telemetry to operate agents reliably at scale.',
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900">AI 2026: Agent Observability Blueprint</h1>
      <p className="text-gray-700 mt-4">
        Build end-to-end visibility across agent workflows with traces, evaluation signals, incident telemetry,
        and SLOs. This blueprint outlines the minimal data you should collect, how to wire scorecards into
        CI/CD and runtime, and how to make evidence audit-ready.
      </p>
      <h2 className="text-2xl font-semibold mt-8">Key Objectives</h2>
      <ul className="list-disc pl-6 text-gray-700 mt-2">
        <li>Unified traces with task, tool, and data lineage</li>
        <li>Evaluation gates and regression suites mapped to risks</li>
        <li>Incident telemetry and postmortem-ready context</li>
        <li>Business-facing scorecards and SLOs</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8">First 30 Days</h2>
      <ol className="list-decimal pl-6 text-gray-700 mt-2">
        <li>Instrument traces and identifiers across critical journeys</li>
        <li>Stand up baseline evals and wire to pre-prod gate</li>
        <li>Define SLOs for quality, safety, latency, and cost</li>
        <li>Publish scorecards with rollback contracts</li>
      </ol>
    </main>
  );
}

import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
>>>>>>> origin/feat/add-sept16-content-promos

const page: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">page</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default page;