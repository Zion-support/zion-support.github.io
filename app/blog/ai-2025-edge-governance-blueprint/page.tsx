import React from 'react';
import { Link } from 'react-router-dom';

export const metadata = {
  title: 'Edge AI Governance Blueprint 2025 | Zion Tech Group',
  description: 'Privacy-by-design governance for on-device and edge AI: policies, controls, and compliance patterns for 2025.',
  keywords: 'edge ai governance, privacy by design, compliance, on-device, security'
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-flex items-center bg-cyan-500/20 text-cyan-100 rounded-full px-4 py-1 text-sm">NEW • September 2025</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Edge AI Governance Blueprint 2025</h1>
          <p className="mt-4 text-lg text-cyan-100/90">Operational controls to ship compliant edge intelligence without blocking delivery.</p>
        </div>

        <div className="prose prose-invert prose-lg">
          <p>
            Edge AI introduces unique risks: data locality, consent, offline operation, and incident response.
            This blueprint turns principles into concrete controls teams can implement today.
          </p>
          <h2>Policy to Control Mapping</h2>
          <ul>
            <li>Data minimization → on-device redaction and purpose binding</li>
            <li>Consent → local consent vault with verifiable logs</li>
            <li>Transparency → on-device model cards and activity receipts</li>
            <li>Security → secure enclaves, signed model artifacts, attestation</li>
          </ul>
          <h2>Compliance Patterns</h2>
          <ul>
            <li>Geo-fenced inference and storage</li>
            <li>Over-the-air policy updates with kill switches</li>
            <li>Offline-first incident capture and delayed reporting</li>
          </ul>
          <p>
            Start with a minimal control set that meets regulatory expectations while preserving velocity,
            then mature with telemetry and automated audits.
          </p>
        </div>

        <div className="mt-10 flex gap-3">
          <Link href="/blog" className="bg-white text-cyan-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Back to Blog</Link>
          <Link href="/resources" className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-cyan-700 transition-colors">Download Resources</Link>
        </div>
      </div>
    </div>
  );
}

