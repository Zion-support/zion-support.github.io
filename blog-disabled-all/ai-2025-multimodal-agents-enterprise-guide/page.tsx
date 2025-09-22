import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  keywords: [
    'multimodal AI',
    'AI agents',
    'enterprise automation',
    'customer experience',
    'ROI'
  ]
};

export default function MultimodalAgentsEnterpriseGuidePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6 text-sm text-purple-700 font-semibold">Enterprise AI</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Multimodal Agents Enterprise Guide</h1>
      <p className="text-gray-600 mb-8">
        How enterprises deploy multimodal AI agents for automation, analytics, and customer experience. A practical 2025 playbook with architecture and ROI.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>Key Applications</h2>
        <ul>
          <li>Process automation</li>
          <li>Analytics and insights</li>
          <li>Customer experience enhancement</li>
          <li>Operational efficiency</li>
        </ul>
      </div>

      <div className="mt-10 flex gap-4">
        <Link href="/contact" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Get Started</Link>
        <Link href="/resources" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Learn More</Link>
      </div>
    </main>
  );
}