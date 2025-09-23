import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyComplianceAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Compliance Automation</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Automate DPIAs, RoPAs, DSAR workflows, and vendor assessments. Reduce audit prep from weeks to days
          with evidence collection, policies, and asset inventories in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">What’s included</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>DSAR intake, verification, fulfillment tracking</li>
              <li>Automated data mapping and RoPA generation</li>
              <li>Policy library with versioning and approvals</li>
              <li>Evidence collection for SOC2/ISO audits</li>
              <li>Vendor risk management and questionnaires</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">Pricing</h2>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Essentials</strong>: $499/mo – up to 1k employees</li>
              <li><strong>Business</strong>: $1,499/mo – SSO, SSOX, ticketing</li>
              <li><strong>Enterprise</strong>: Custom – multi-entity, DLP integrations</li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">Talk to compliance experts</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyComplianceAutomation;

