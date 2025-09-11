// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export default function AISecurityHardeningChecklist() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/resources" className="text-blue-600 hover:underline">Resources</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Checklist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Security Hardening Checklist (2025)</h1>
          <p className="text-gray-600">A practical, copy-and-use checklist to secure AI applications in production.</p>
        </header>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">Quick Summary</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Zero-trust posture across prompts, tools, retrieval, and outputs</li>
            <li>Typed tool contracts and sandboxed execution</li>
            <li>Retrieval filtering, citations, and data lineage</li>
            <li>Output safety checks and human review gates</li>
            <li>Comprehensive observability and incident response</li>
          </ul>
        </div>

        <section className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">1) Inputs & Prompts</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Normalize input, enforce size limits, strip control characters</li>
              <li>Detect and mask PII/PHI per policy</li>
              <li>Block prompt-injection patterns and jailbreak markers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">2) Tools & Actions</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Define argument schemas; validate and reject out-of-contract calls</li>
              <li>Sandbox I/O; apply rate limits, retries, and timeouts</li>
              <li>Use scoped API keys and short-lived credentials</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">3) Retrieval & Knowledge</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Filter sources and require trust scores</li>
              <li>Attach citations; verify critical claims</li>
              <li>Encrypt data at rest/in transit; segment by tenant</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">4) Outputs & Post-Processing</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Safety and compliance policy enforcement</li>
              <li>Cross-model verification for critical decisions</li>
              <li>Human-in-the-loop for high-risk categories</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">5) Operations</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Structured observability with PII scrubbing</li>
              <li>Runbooks for abuse, leakage, drift; rapid key rotation</li>
              <li>Regular red-teaming and chaos experiments</li>
            </ul>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mt-10">
          <h3 className="text-xl font-semibold mb-3">Need hands-on help?</h3>
          <p className="text-gray-700 mb-4">We can audit your AI stack and implement the controls above tailored to your environment.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">Request Security Audit</Link>
            <Link href="/services/ai-services" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">Explore AI Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

