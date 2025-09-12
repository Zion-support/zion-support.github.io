import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Telecom AI Network Automation: 55% OPEX Reduction in 9 Months',
  description: 'How a global telecom automated L2-L4 operations with AI agents, cutting outages 38% and reducing OPEX 55% in 9 months.',
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-4">NEW • Case Study</div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Telecom AI Network Automation Success</h1>
        <p className="text-gray-600 text-lg">Global Tier-1 operator automates incident response, change management, and capacity planning using AI agents.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold">Business Impact</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>55% OPEX reduction across NOC runbooks</li>
            <li>38% fewer customer-impacting outages</li>
            <li>72% faster mean-time-to-resolve (MTTR)</li>
            <li>Automated 64% of Tier-1 tickets, 22% of Tier-2 workflows</li>
          </ul>

          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-700">A secure AI automation platform integrated with OSS/BSS, telemetry, and change controls. Multi-agent orchestration handled detection, diagnosis, remediation, and post-incident reports.</p>

          <h2 className="text-2xl font-semibold">Architecture Highlights</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Streaming anomaly detection over network telemetry</li>
            <li>Policy-guarded runbook execution with approvals</li>
            <li>Closed-loop remediation with rollback safety</li>
            <li>Structured observability for audit and RCA</li>
          </ul>

          <h2 className="text-2xl font-semibold">Outcomes</h2>
          <p className="text-gray-700">The operator scaled from 5 to 31 automated scenarios in 9 months with measurable improvements in uptime, cost, and customer satisfaction (CSAT +14 points).</p>
        </div>
        <aside className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Company Profile</h3>
            <div className="text-sm text-gray-700">
              <div>Industry: Telecommunications</div>
              <div>Employees: 25,000+</div>
              <div>Footprint: 32 countries</div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Services Used</h3>
            <ul className="text-sm text-gray-700 list-disc pl-5">
              <li>AI Automation Consulting</li>
              <li>Agent Orchestration Platform</li>
              <li>Observability & SRE Enablement</li>
            </ul>
            <div className="mt-4">
              <Link href="/services/ai-automation" className="text-blue-600 hover:text-blue-700">Explore Services →</Link>
            </div>
          </div>
        </aside>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Plan your AI Automation roadmap</h3>
            <p className="text-gray-700">Get a free assessment tailored to your operations.</p>
          </div>
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full md:w-auto text-center">
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

