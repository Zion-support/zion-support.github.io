// app/components/AdvancedIntelligenceShowcase.tsx
'use client';

import { useState } from 'react';

const engines = [
  {
    id: 'v99',
    name: 'V99: Sentiment Evolution Tracker',
    icon: '📈',
    description: 'Track sentiment changes across email threads to identify relationship health, escalation risks, and optimal intervention moments.',
    features: [
      'Real-time sentiment tracking across threads',
      'Relationship health scoring (Excellent to Critical)',
      'Trend analysis (Improving, Stable, Declining, Volatile)',
      'Escalation risk detection',
      'Churn risk prediction',
      'Proactive intervention alerts'
    ],
    color: 'from-blue-500 to-cyan-500',
    useCases: ['Customer Success', 'Account Management', 'Support Teams']
  },
  {
    id: 'v100',
    name: 'V100: Compliance Guardian Pro',
    icon: '🛡️',
    description: 'Advanced compliance checking for GDPR, CCPA, HIPAA, SOX, PCI-DSS with automatic audit trails and risk scoring.',
    features: [
      'Multi-framework compliance (GDPR, HIPAA, PCI-DSS, SOX)',
      'PII/PHI/PCI detection and classification',
      'Legal hold requirement detection',
      'Data retention policy enforcement',
      'Comprehensive audit trails',
      'Risk scoring and remediation guidance'
    ],
    color: 'from-red-500 to-orange-500',
    useCases: ['Legal Teams', 'Compliance Officers', 'Healthcare', 'Finance']
  },
  {
    id: 'v101',
    name: 'V101: Knowledge Graph Builder',
    icon: '🕸️',
    description: 'Automatically build knowledge graphs from email conversations with entity extraction, relationship mapping, and topic clustering.',
    features: [
      'Entity extraction (people, orgs, projects, tech)',
      'Relationship mapping and visualization',
      'Topic clustering and extraction',
      'Temporal relationship tracking',
      'Smart search across email history',
      'Context-aware recommendations'
    ],
    color: 'from-purple-500 to-pink-500',
    useCases: ['Research Teams', 'Project Management', 'Knowledge Management']
  },
  {
    id: 'v102',
    name: 'V102: Priority Decay Engine',
    icon: '⏱️',
    description: 'Dynamic priority adjustment based on time elapsed, sender importance, business impact, and SLA deadlines.',
    features: [
      'Dynamic priority scoring (0-100)',
      'Time-based priority decay',
      'Sender importance weighting',
      'Business impact assessment',
      'SLA deadline tracking',
      'Priority boost algorithms'
    ],
    color: 'from-yellow-500 to-amber-500',
    useCases: ['Executive Assistants', 'Support Teams', 'Sales Teams']
  },
  {
    id: 'v103',
    name: 'V103: Intelligence Orchestrator',
    icon: '🎭',
    description: 'Master orchestrator combining all email intelligence engines (V89-V102) for comprehensive case-by-case analysis.',
    features: [
      'Unified intelligence from 14 engines',
      'Case-by-case comprehensive analysis',
      'Intelligence level classification',
      'Confidence scoring',
      'Action type recommendations',
      'Cross-engine coordination'
    ],
    color: 'from-indigo-500 to-blue-500',
    useCases: ['All Teams', 'Enterprise', 'Complex Workflows']
  }
];

export default function AdvancedIntelligenceShowcase() {
  const [selectedEngine, setSelectedEngine] = useState(engines[0]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced Email Intelligence Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            V99-V103: Next-generation email intelligence with sentiment tracking, compliance, knowledge graphs, 
            priority decay, and master orchestration
          </p>
        </div>

        {/* Engine Selector */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {engines.map((engine) => (
            <button
              key={engine.id}
              onClick={() => setSelectedEngine(engine)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedEngine.id === engine.id
                  ? 'border-white bg-white/10 scale-105'
                  : 'border-gray-700 bg-slate-800/50 hover:border-gray-500'
              }`}
            >
              <div className="text-3xl mb-2">{engine.icon}</div>
              <div className="text-sm font-semibold text-white">{engine.id.toUpperCase()}</div>
            </button>
          ))}
        </div>

        {/* Selected Engine Details */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{selectedEngine.icon}</span>
            <div>
              <h3 className="text-3xl font-bold text-white">{selectedEngine.name}</h3>
              <p className="text-gray-300 mt-2">{selectedEngine.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
              <ul className="space-y-3">
                {selectedEngine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`text-2xl bg-gradient-to-r ${selectedEngine.color} bg-clip-text text-transparent`}>✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Perfect For</h4>
              <div className="space-y-3">
                {selectedEngine.useCases.map((useCase, idx) => (
                  <div key={idx} className="bg-slate-700/50 rounded-lg p-4">
                    <span className="text-white font-medium">{useCase}</span>
                  </div>
                ))}
              </div>

              <div className={`mt-6 p-4 bg-gradient-to-r ${selectedEngine.color} rounded-lg`}>
                <h5 className="text-white font-semibold mb-2">Reply-All Enforcement</h5>
                <p className="text-white/90 text-sm">
                  All engines enforce 100% reply-all to ensure complete communication transparency
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          <div className="text-center p-6 bg-slate-800/50 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">15</div>
            <div className="text-gray-400">Intelligence Engines</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Reply-All Enforced</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Autonomous Operation</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-400">Scalability</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready for Advanced Email Intelligence?
            </h4>
            <p className="text-gray-200 mb-6">
              Implement V99-V103 for comprehensive email analysis and automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-left">
              <div className="text-white">
                <div className="font-semibold">📞 Phone:</div>
                <div>+1 302 464 0950</div>
              </div>
              <div className="text-white">
                <div className="font-semibold">✉️ Email:</div>
                <div>kleber@ziontechgroup.com</div>
              </div>
              <div className="text-white">
                <div className="font-semibold">📍 Address:</div>
                <div>364 E Main St STE 1008<br/>Middletown, DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
