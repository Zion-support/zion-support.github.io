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
    <div className="text-left">
      <div className="text-left">
        <h1 className="text-left">Content Hub</h1>"
        <div className="text-left">
          {featured.map((item, index) => (
            <Link key={index} href={item.url} className="text-left">
              <h3 className="text-left">{item.title}</h3>"
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}