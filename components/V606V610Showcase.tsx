'use client';

import React from 'react';

const V606V610Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V606',
      name: 'Email Relationship Health Tracker',
      icon: '🤝',
      description: 'Monitor and analyze sender relationships over time with health scoring, deterioration detection, and intervention suggestions.',
      features: ['Health scoring (0-100)', 'Response time tracking', 'Sentiment trends', 'Reciprocity analysis', 'Engagement depth'],
      benefit: 'Build stronger business relationships with data-driven insights'
    },
    {
      version: 'V607',
      name: 'Email Calendar Intelligence',
      icon: '📅',
      description: 'Extract meeting proposals from emails, detect scheduling conflicts, and auto-suggest optimal meeting times.',
      features: ['Date/time extraction', 'Conflict detection', 'Time suggestions', 'Attendee tracking', 'Agenda extraction'],
      benefit: 'Turn email conversations into scheduled meetings automatically'
    },
    {
      version: 'V608',
      name: 'Email Compliance Guardian',
      icon: '🛡️',
      description: 'Real-time GDPR, HIPAA, and SOX compliance checking with PII detection, auto-redaction, and audit trails.',
      features: ['PII detection', 'Auto-redaction', 'GDPR/HIPAA/SOX checks', 'Audit logging', 'Compliance scoring'],
      benefit: 'Stay compliant and avoid costly violations with real-time monitoring'
    },
    {
      version: 'V609',
      name: 'Email Knowledge Graph',
      icon: '🕸️',
      description: 'Build entity-relationship graphs from email conversations for intelligent search and expert discovery.',
      features: ['Entity extraction', 'Relationship mapping', 'Topic analysis', 'Expert finding', 'Natural language queries'],
      benefit: 'Find who knows what and discover hidden connections in your emails'
    },
    {
      version: 'V610',
      name: 'Email Burnout Prevention',
      icon: '🔥',
      description: 'Detect overwork patterns, suggest delegation, and enforce work-life boundaries to prevent email burnout.',
      features: ['After-hours detection', 'Weekend monitoring', 'Response pressure analysis', 'Delegation suggestions', 'Boundary enforcement'],
      benefit: 'Protect your team from burnout with intelligent email habits'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🚀 Email Intelligence V606-V610
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines for relationship management, calendar intelligence, compliance, knowledge graphs, and burnout prevention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{engine.icon}</div>
              <div className="inline-block px-3 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full mb-3">
                {engine.version}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{engine.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{engine.description}</p>
              <ul className="space-y-2 mb-4">
                {engine.features.map((feature, fidx) => (
                  <li key={fidx} className="text-gray-300 text-sm flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/20">
                <p className="text-emerald-300 text-sm font-semibold">
                  💡 {engine.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🎯 Key Features Across All Engines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📨</span>
              <div>
                <h4 className="text-white font-semibold">Reply-All Enforcement</h4>
                <p className="text-gray-300 text-sm">Always replies to all recipients in multi-person threads</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h4 className="text-white font-semibold">AI-Powered Analysis</h4>
                <p className="text-gray-300 text-sm">Advanced NLP and machine learning for deeper insights</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="text-white font-semibold">Enterprise Security</h4>
                <p className="text-gray-300 text-sm">End-to-end encryption and compliance monitoring</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="text-white font-semibold">Real-Time Processing</h4>
                <p className="text-gray-300 text-sm">Instant analysis and actionable recommendations</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🌐</span>
              <div>
                <h4 className="text-white font-semibold">Multi-Language Support</h4>
                <p className="text-gray-300 text-sm">40+ languages with automatic detection</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📊</span>
              <div>
                <h4 className="text-white font-semibold">Analytics & Insights</h4>
                <p className="text-gray-300 text-sm">Detailed metrics and performance tracking</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-400/30 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            📞 Contact Us for a Free Demo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-emerald-300 font-semibold">📱 Mobile</p>
              <p className="text-white">+1 302 464 0950</p>
            </div>
            <div>
              <p className="text-emerald-300 font-semibold">✉️ Email</p>
              <p className="text-white">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <p className="text-emerald-300 font-semibold">📍 Address</p>
              <p className="text-white">364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Email Intelligence Engines →
          </a>
        </div>
      </div>
    </section>
  );
};

export default V606V610Showcase;
