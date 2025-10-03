import React from 'react';

export const metadata = {
  title: 'AI Governance, Risk & Compliance | Zion Tech Group',
  description: 'Operationalize responsible AI with policies, model inventory, evaluations, evidence automation, and compliance mapping.',
};

export default function AIGRCPage() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">AI Governance, Risk & Compliance</h1>
          <p className="text-indigo-200 max-w-3xl">
            Meet the EU AI Act, NIST AI RMF, and sectoral standards with evidence automation, model cards, and continuous controls.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Model registry and inventory with lineage</li>
              <li>Policy packs mapped to NIST AI RMF and EU AI Act</li>
              <li>Bias, robustness, safety and privacy evaluations</li>
              <li>Evidence collection, approvals, and audit trails</li>
              <li>Vendor/third-party AI risk assessments</li>
              <li>Human-in-the-loop and override controls</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="font-bold">Starter</div>
                <div className="text-blue-600 font-extrabold text-xl">$799/month</div>
                <div className="text-gray-600 text-sm">Single org, core policies, model cards</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="font-bold">Business</div>
                <div className="text-blue-600 font-extrabold text-xl">$2,499/month</div>
                <div className="text-gray-600 text-sm">Multi-tenant, approvals, vendor risk</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="font-bold">Enterprise</div>
                <div className="text-blue-600 font-extrabold text-xl">Custom</div>
                <div className="text-gray-600 text-sm">SSO/SCIM, custom evals, on-call SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="text-gray-700 space-y-1">
            <div>Phone: {contact.phone}</div>
            <div>Email: {contact.email}</div>
            <div>Address: {contact.address}</div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function AIGovernanceRiskCompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">AI Governance, Risk & Compliance (GRC)</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Operationalize responsible AI with policy kits, risk registers, model cards, evaluation pipelines,
            and audit-ready evidence for SOC2/ISO/NIST/AI Act. Implement guardrails without blocking innovation.
          </p>
          <div className="mt-6 text-sm text-gray-600"><span className="font-semibold text-emerald-700">Pricing</span>: Starter $799/month, Growth $1,999/month, Enterprise custom.</div>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Talk to an Expert</Link>
            <a href="mailto:kleber@ziontechgroup.com" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">Email Us</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Get</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Policy templates mapped to SOC2, ISO 27001/27701, NIST AI RMF, EU AI Act</li>
              <li>• Model inventory, lineage, and model cards with usage constraints</li>
              <li>• Pre/post-deployment evaluations with bias and safety checks</li>
              <li>• Prompt/security guardrails and secrets governance</li>
              <li>• Risk register with ownership and mitigation workflows</li>
              <li>• Evidence automation and auditor-ready reports</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benchmarks & Links</h2>
            <ul className="list-disc pl-6 text-blue-700">
              <li><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" className="hover:underline">NIST AI Risk Management Framework</a></li>
              <li><a href="https://artificialintelligenceact.eu/" target="_blank" rel="noopener noreferrer" className="hover:underline">EU AI Act resources</a></li>
              <li><a href="https://cloud.withgoogle.com/partners/detail/one-trust" target="_blank" rel="noopener noreferrer" className="hover:underline">OneTrust GRC overview</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-500">Phone</div>
            <a href="tel:+13024640950" className="text-blue-600 font-semibold">+1 302 464 0950</a>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-500">Email</div>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 font-semibold">kleber@ziontechgroup.com</a>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-sm text-gray-500">Address</div>
            <div className="text-gray-800 font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </div>
      </section>
    </div>
  );
}

