import React from 'react';
import { Link } from 'react-router-dom';

const LeadEnrichment: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Lead Enrichment API</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          A realtime API that enriches emails and domains with firmographic and technographic data.
          Prioritize high-intent accounts, route intelligently, and personalize outreach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">Features</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Company size, industry, revenue, funding</li>
              <li>Tech stack detection (cloud, CRM, web tech)</li>
              <li>Intent scoring and routing signals</li>
              <li>GDPR/CCPA compliant processing</li>
              <li>SDKs and batch CSV uploads</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">Pricing</h2>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Pay-as-you-go</strong>: $0.06 per record</li>
              <li><strong>Growth</strong>: $399/mo for 10k records</li>
              <li><strong>Scale</strong>: $1,499/mo for 50k records</li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">Get API access</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadEnrichment;

