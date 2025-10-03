import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Content Hub | Zion Tech Group',
  description: 'Discover all AI breakthroughs, case studies, and guides.',
};

export default function ContentHub() {
  const featured = [
    { title: 'AI 2027 Quantum AI Breakthrough', url: '/blog/ai-2027-quantum-ai-breakthrough-enterprise-transformation' },
    { title: 'Agentic Workflow Orchestration 2026', url: '/blog/agentic-workflow-orchestration-2026' },
    { title: 'AI Enterprise Automation 2026', url: '/blog/ai-enterprise-automation-2026' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Content Hub</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <Link href={item.url} className="text-blue-400 hover:text-blue-300">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}