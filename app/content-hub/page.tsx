import React from 'react';
import Link from 'next/link';

export const metadata = {
  title= 'Content Hub | Zion Tech Group',
  description: 'Discover all AI breakthroughs, case studies, and guides.',
};

export default function ContentHub() {
  const featured = [
    { title= 'AI 2027 Quantum AI Breakthrough', url: '/blog/ai-2027-quantum-ai-breakthrough-enterprise-transformation' },
    { title= 'Agentic Workflow Orchestration 2026', url: '/blog/agentic-workflow-orchestration-2026' },
    { title= 'AI Enterprise Automation 2026', url: '/blog/ai-enterprise-automation-2026' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">"
      <div className="max-w-7xl mx-auto px-4 py-16">"
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Content Hub</h1>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
          {featured.map((item, index) => (
            <Link key={index} href={item.url} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">"
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>"
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}