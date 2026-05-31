import React from 'react';

export default function V516V520Showcase() {
  const engines = [
    {
      version: 'V516',
      name: 'Sentiment Evolution Tracker',
      icon: '📈',
      description: 'Track sentiment changes across email threads with emotion trajectory visualization and trend prediction',
      features: ['5 emotion levels', 'Trend detection', 'Volatility tracking', 'Momentum scoring', 'Trajectory prediction'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      version: 'V517',
      name: 'Stakeholder Influence Mapper',
      icon: '🔗',
      description: 'Identify key decision-makers and influence networks in email conversations',
      features: ['7 stakeholder roles', 'Influence scoring', 'Gatekeeper detection', 'Decision flow mapping', 'Network visualization'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      version: 'V518',
      name: 'Contract Intelligence',
      icon: '📋',
      description: 'Extract contract terms, deadlines, and obligations with auto-calendar integration',
      features: ['8 contract elements', 'Obligation tracking', 'Risk analysis', 'Calendar integration', 'Value extraction'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      version: 'V519',
      name: 'Meeting Scheduler AI',
      icon: '📅',
      description: 'Detect scheduling intent and auto-propose optimal meeting times across timezones',
      features: ['Intent detection', '8 meeting types', 'Multi-timezone', 'Time slot proposals', 'Conflict resolution'],
      color: 'from-green-500 to-teal-500'
    },
    {
      version: 'V520',
      name: 'Knowledge Base Auto-Builder',
      icon: '📚',
      description: 'Convert email Q&A threads into searchable FAQ/knowledge base articles',
      features: ['Q&A extraction', '6 article types', 'Auto-categorization', 'Quality scoring', 'SEO optimization'],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            V516-V520: Advanced Intelligence Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sentiment evolution, stakeholder mapping, contract intelligence, meeting scheduling, and knowledge base automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, idx) => (
            <div
              key={engine.version}
              className={`bg-gradient-to-br ${engine.color} p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300`}
            >
              <div className="text-5xl mb-4">{engine.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {engine.version}: {engine.name}
              </h3>
              <p className="text-gray-100 mb-4 text-sm">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.map((feature, i) => (
                  <li key={i} className="text-gray-200 text-sm flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 rounded-xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            🏆 Platform Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">320+</div>
              <div className="text-gray-300">Email Engines</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2,346+</div>
              <div className="text-gray-300">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">7</div>
              <div className="text-gray-300">Stakeholder Roles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">8</div>
              <div className="text-gray-300">Contract Elements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-300">Reply-All Enforced</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Email Intelligence?
          </h3>
          <p className="text-gray-100 mb-6">
            320 engines. 2,346 services. Infinite possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white text-sm">
            <div>📞 +1 302 464 0950</div>
            <div>✉️ kleber@ziontechgroup.com</div>
            <div>📍 364 E Main St STE 1008, Middletown DE 19709</div>
          </div>
        </div>
      </div>
    </section>
  );
}
