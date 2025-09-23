import React from 'react';
import { Link } from 'react-router-dom';

const AiRfpCopilot: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI RFP Response Copilot</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Accelerate RFP and security questionnaire responses with a controllable AI copilot.
          Ingest your past proposals, policies, and knowledge base to draft accurate, compliant answers in minutes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">Capabilities</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Private knowledge base with granular citations</li>
              <li>Template-aware drafting for RFP portals and Excel</li>
              <li>Review workflows and redline-ready exports</li>
              <li>Compliance alignment (SOC2, ISO 27001, HIPAA)</li>
              <li>Audit trails and response reuse library</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">Pricing</h2>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Starter</strong>: $299/mo – 3 users, 5k docs</li>
              <li><strong>Growth</strong>: $799/mo – 15 users, 50k docs</li>
              <li><strong>Enterprise</strong>: Custom – SSO, on-prem options</li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">Request a demo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiRfpCopilot;

