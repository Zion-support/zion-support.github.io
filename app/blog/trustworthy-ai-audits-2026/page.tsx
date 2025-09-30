import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Trustworthy AI Audits 2026: From Policies to Proof',
  description:
    'A practical blueprint for audit-ready AI systems in 2026: controls, evidence, and continuous assurance.',
};

export default function TrustworthyAIAudits2026() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Trustworthy AI Audits 2026: From Policies to Proof
        </h1>
        <div className="text-sm text-gray-500 flex gap-2">
          <span>October 9, 2025</span>
          <span>•</span>
          <span>12 min read</span>
          <span>•</span>
          <span>AI Reliability</span>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-6">
        Enterprises need audit-ready AI—systems that demonstrate compliance, safety, and reliability with
        evidence, not just policy. This guide shows how to move from intent to proof using measurable
        controls, versioned evidence, and continuous assurance.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Audit Scope and Controls</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>Model risk controls: documented contracts, evals coverage, red-team scope</li>
        <li>Data governance: lineage, PII handling, consent and retention policies</li>
        <li>Operational safeguards: rate limits, fallback trees, incident runbooks</li>
        <li>Security: SBOMs, signed artifacts, dependency posture, infra isolation</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Evidence That Matters</h2>
      <p className="text-gray-700 mb-4">
        Replace manual spreadsheets with living evidence: automated eval reports, policy test results,
        incident timelines, and gated deployments linked to risk tiers.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <h3 className="font-semibold text-blue-900 mb-2">Audit Evidence Checklist</h3>
        <ul className="list-disc pl-6 text-blue-900 space-y-1">
          <li>Versioned model and prompt contracts with change logs</li>
          <li>Automated offline and online evals with thresholds</li>
          <li>Guardrail policy tests covering privacy, safety, and bias</li>
          <li>Security attestations, SBOMs, and vulnerability scans</li>
          <li>Incident records with MTTR and preventative actions</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Continuous Assurance</h2>
      <p className="text-gray-700 mb-6">
        Embed assurance in the delivery loop: pre-prod gates on evals, runtime monitors with SLOs,
        and periodic governance reviews that downgrade risk over time.
      </p>

      <div className="mt-10">
        <Link
          href="/blog"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}

