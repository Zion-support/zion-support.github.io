import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Enterprise AI Security Blueprint (2025) | Zion Tech Group',
  description: 'Layered controls for model, data, runtime, and supply chain risk in enterprise AI systems.'
};

export default function EnterpriseAISecurityBlueprint2025Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6 text-sm text-purple-700 font-semibold">Security</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise AI Security Blueprint (2025)</h1>
      <p className="text-gray-600 mb-8">
        A practical blueprint for establishing layered controls across model, data, runtime, and supply chain to
        secure enterprise AI systems while maintaining developer velocity and business impact.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Security Layers</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Model security and integrity</li>
          <li>Data protection and privacy</li>
          <li>Runtime monitoring and protection</li>
          <li>Supply chain security</li>
          <li>Governance and compliance</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Strategy</h2>
        <p className="text-gray-700 mb-4">
          Start with risk assessment, implement controls incrementally, and establish continuous monitoring.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Threat Model</h2>
        <p className="text-gray-700 mb-4">
          Consider prompt injection, model exfiltration, data leakage, training data poisoning, and supply-chain compromise. 
          Map mitigations across development and runtime.
        </p>
      </div>
    </main>
  );
}