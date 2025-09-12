import React from 'react';

export const metadata = {
  title: 'AI Governance Starter Kit 2025 (Free Download)',
  description: 'Templates and policies to operationalize AI governance: risk register, model cards, DPIA, and decision logs.',
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-4">NEW • Resource</div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">AI Governance Starter Kit 2025</h1>
        <p className="text-gray-600 text-lg">Everything you need to kickstart responsible AI at your organization.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">What’s Inside</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>AI Risk Register (editable)</li>
          <li>Model Card template with evaluation checklist</li>
          <li>DPIA / privacy impact templates</li>
          <li>Decision and Exception Logs</li>
          <li>Policy starter pack (usage, data, vendor, monitoring)</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-6 mb-10 text-center">
        <p className="mb-4 text-lg">Get the editable kit in Google Docs and Notion format.</p>
        <a href="#" className="inline-flex justify-center bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Download Free</a>
        <div className="text-xs opacity-80 mt-3">No spam. Instant access link.</div>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>How to Use</h2>
        <p>Start with the risk register and model cards, then align policies with legal and security. Roll out a lightweight review process and track decisions in the logs for auditability.</p>

        <h2>Who It’s For</h2>
        <p>Heads of AI, Security, Legal, and product teams who need pragmatic governance that doesn’t slow delivery.</p>
      </div>
    </div>
  );
}

