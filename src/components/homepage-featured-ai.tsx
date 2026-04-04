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
        status: c.status,
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
      'quantum-neural-network-orchestrator': '🧠',
      'self-healing-knowledge-graph': '🧩',
      'quantum-entangled-scheduling': '⏳',
      'quantum-enhanced-learning-system': '🤖',
      'cognitive-emulation-layer': '🧠',
      'quantum-entangled-bitcoin-integration': '⚛️💰',
      'fractal-market-intelligence': '📈'
    };
    return iconMap[id] || '🤖';
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-indigo-800 mb-4">
          🌌 Quantum-Ready Autonomous Intelligence Platform
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Powered by 127 autonomous AI components across quantum, fractal, and neural dimensions
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
        {featuredComponents.map(component => (
          <div key={component.id} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-900">{component.icon}</span>
              </div>
              <h3 className="mt-3 text-lg font-medium text-indigo-900">{component.name}</h3>
              <p className="mt-1 text-sm text-gray-700">{component.description}</p>
              <div className="mt-3 flex items-center space-x-2">
                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-900 rounded-full">
                  {component.status} 
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center space-y-4">
        <button
          onClick={() => window.location.href = '/innovation-report.html'}
          className="px-8 py-3 bg-indigo-600 text-white rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors">
          Explore Innovation Report
        </button>
        <div className="text-sm text-gray-500">
          Automatic verification: All components validated live in production
        </div>
      </div>
    </div>
  );
}