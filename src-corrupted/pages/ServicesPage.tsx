import React, { useState } from 'react';

export default function ServicesPage(props: any) {
  const [category, setCategory] = useState<string>('all');
  const services = [
    { id: 'ai', title: 'AI Services', description: 'Custom LLMs and AI integrations' },
    { id: 'cloud', title: 'Cloud & DevOps', description: 'Kubernetes, IaC and automation' },
    { id: 'security', title: 'Cybersecurity', description: 'Security audits and hardening' },
  ];
  const filtered = category === 'all' ? services : services.filter(s => s.id === category);

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Services</h1>
        <select
          className="bg-gray-900 border border-gray-700 rounded px-3 py-2"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="ai">AI</option>
          <option value="cloud">Cloud</option>
          <option value="security">Security</option>
        </select>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map(svc => (
          <div key={svc.id} className="p-4 rounded border border-gray-800 bg-gray-900">
            <h2 className="font-semibold mb-2">{svc.title}</h2>
            <p className="text-gray-300 text-sm">{svc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

</string>