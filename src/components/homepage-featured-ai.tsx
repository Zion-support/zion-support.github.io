'use client';

import { useState, useEffect } from 'react';
import { AIComponents } from './ai-components';
import { AutonomousImprovementDashboard } from './autonomous-improvement-dashboard';

export default function HomepageFeaturedAI() {
  const [featuredComponents, setFeaturedComponents] = useState([]);
  const [quantumWaveActive, setQuantumWaveActive] = useState(false);
  const [advancedWaveActive, setAdvancedWaveActive] = useState(false);

  useEffect(() => {
    const showcaseComponents = [
      {
        id: 'autonomous-skill-evolution',
        name: 'Autonomous Skill Evolution',
        icon: '🧠',
        status: 'active',
        description: 'Self-generating skill combinations with cross-domain adaptation'
      },
      {
        id: 'self-optimizing-database-layer',
        name: 'Self-Optimizing Database Layer',
        icon: '🗃️',
        status: 'active',
        description: 'AI-driven query optimization with autonomous schema evolution'
      },
      {
        id: 'quantum-cognitive-agent',
        name: 'Quantum Cognitive Agent',
        icon: '🧮',
        status: 'active',
        description: 'Quantum-enhanced problem-solving with probabilistic reasoning'
      }
    ];
    setFeaturedComponents(showcaseComponents);
  }, []);

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