import React from 'react';

export const metadata = {
};

export default function AgentPostureManagementPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6 text-sm text-purple-700 font-semibold">Security</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Agent Posture Management</h1>
      <p className="text-gray-600 mb-8">
        Continuously assess, harden, and govern autonomous agents across environments with posture baselines, controls, and evaluations.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>Key Capabilities</h2>
        <ul>
          <li>Continuous posture assessment</li>
          <li>Security hardening</li>
          <li>Cross-environment governance</li>
          <li>Baseline controls and evaluations</li>
        </ul>
      </div>
    </main>
  );
}