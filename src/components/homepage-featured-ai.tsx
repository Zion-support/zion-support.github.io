'use client';

import { useState, useEffect } from 'react';
import { AIComponents } from './ai-components';

export default function HomepageFeaturedAI() {
  const [featuredComponents, setFeaturedComponents] = useState([]);

  useEffect(() => {
    // Dynamically showcase all active AI components
    const showcaseComponents = AIComponents
      .filter(c => c.status === 'active')
      .map(c => ({
        id: c.id,
        name: c.name,
        icon: getIconForComponent(c.id),
        status: 'active',
        description: c.description
      }));
    setFeaturedComponents(showcaseComponents);
  }, []);

  function getIconForComponent(id: string): string {
    const iconMap: Record<string, string> = {
      'autonomous-skill-evolution': '🧠',
      'quantum-cognitive-agent': '🧮',
      'cross-platform-sync-engine': '🔄',
      'self-optimizing-database-layer': '🗃️',
      'neural-symbolic-reasoning-engine': '🔗',
      'quantum-threshold-response-system': '⚛️',
      'quantum-crypto-agent': '🔐',
      'autonomous-learning-network': '🔥',
      'quantum-hybrid-orchestrator': '⚛️',
      'post-quantum-security-framework': '🔐',
      'continuous-code-evolution-system': '🔧',
      'quantum-resilient-design-system': '🛡️',
      'autonomous-threat-intelligence': '🚨',
      'cross-domain-knowledge-graph': '🌐',
      'quantum-neural-network-orchestrator': '🧠'
    };
    return iconMap[id] || '🤖';
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold text-center mb-4">🚀 Quantum-Ready Intelligence Ready!</h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
        {featuredComponents.map(component => (
          <div key={component.id} className="bg-gray-50 rounded-xl p-4 shadow-lg transition-shadow hover:shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-indigo-700">{component.icon}</span>
              <h3 className="text-lg font-medium mb-2">{component.name}</h3>
            </div>
            <p className="text-gray-700 mb-2">{component.description}</p>
            <div className="text-right text-sm text-gray-500">
              <span className="text-indigo-600">Status:</span>
              <span className="text-indigo-500">Active</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-gray-600">
        <button
          onClick={() => {
            setQuantumWaveActive(true);
          }}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Explore Quantum Wave
        </button>
      </div>
    </div>
  );
')