import Link from 'next/link';
import React from 'react';

export const metadata = {
  keywords: [
    'knowledge graphs',
    'enterprise AI',
    'RAG',
    'data unification',
    'autonomous decisioning'
  ]
};

export default function EnterpriseKnowledgeGraphsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6 text-sm text-purple-700 font-semibold">Enterprise AI</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Knowledge Graphs</h1>
      <p className="text-gray-600 mb-8">
        How modern enterprises are using knowledge graphs to unify data, power RAG, and drive autonomous decisioning across the business.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2>Key Benefits</h2>
        <ul>
          <li>Unified data representation across systems</li>
          <li>Enhanced RAG capabilities</li>
          <li>Autonomous decisioning support</li>
          <li>Improved data governance</li>
        </ul>
      </div>

      <div className="mt-10 flex gap-4">
        <Link href="/contact" className="inline-block bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700">Learn More</Link>
        <Link href="/resources" className="inline-block border border-purple-600 text-purple-700 px-5 py-3 rounded-lg font-semibold hover:bg-purple-50">Explore Resources</Link>
      </div>
    </main>
  );
}