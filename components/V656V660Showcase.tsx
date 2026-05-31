'use client';

import React from 'react';

const V656V660Showcase: React.FC = () => {
  const engines = [
    {
      id: 'V656',
      icon: '🧠',
      title: 'Email Knowledge Graph Builder',
      description: 'Build searchable knowledge graphs from email conversations. Automatically map topics, people, organizations, and relationships.',
      features: [
        'Entity extraction (people, orgs, topics, products, dates)',
        'Relationship mapping between entities',
        'Topic clustering and categorization',
        'Temporal knowledge tracking',
        'Semantic search across email corpus',
        'Knowledge graph visualization data'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'V657',
      icon: '🤝',
      title: 'Email Negotiation Intelligence',
      description: 'Detect negotiation stages, leverage points, and optimal counter-offers using game theory and behavioral analysis.',
      features: [
        'Negotiation stage detection (opening → closing)',
        'Leverage point identification (time, competition, authority)',
        'Counter-offer recommendations',
        'BATNA analysis (Best Alternative To Negotiated Agreement)',
        'Concession tracking and optimization',
        'Win-win opportunity detection'
      ],
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'V658',
      icon: '♿',
      title: 'Email Accessibility Auditor',
      description: 'Ensure all outgoing emails meet WCAG 2.1 accessibility standards. Check contrast, alt text, semantic structure, and screen reader compatibility.',
      features: [
        'WCAG 2.1 AA compliance checking',
        'Color contrast ratio validation (4.5:1 minimum)',
        'Image alt text verification',
        'Semantic HTML structure analysis',
        'Screen reader compatibility scoring',
        'Plain text fallback validation'
      ],
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'V659',
      icon: '💚',
      title: 'Email Burnout Prevention Engine',
      description: 'Monitor email load per team member and suggest redistribution before burnout. Track response burden and after-hours activity.',
      features: [
        'Per-person email load monitoring',
        'After-hours activity detection',
        'Workload imbalance identification',
        'Redistribution recommendations',
        'Burnout risk scoring (0-100)',
        'Wellness break suggestions'
      ],
      color: 'from-rose-500 to-pink-500'
    },
    {
      id: 'V660',
      icon: '💰',
      title: 'Email Revenue Attribution Engine',
      description: 'Track which email conversations lead to closed deals and revenue. Provides ROI analysis on communication patterns.',
      features: [
        'Deal-to-email conversation tracking',
        'Revenue attribution per conversation thread',
        'Communication pattern ROI analysis',
        'High-value email pattern identification',
        'Sales cycle email optimization',
        'Customer lifetime value correlation'
      ],
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Email Intelligence Engines V656-V660
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Next-generation email intelligence: knowledge graphs, negotiation AI, accessibility compliance,
            burnout prevention, and revenue attribution — all with reply-all enforcement.
          </p>
          <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-white font-semibold">460 Total Engines</span>
            <span className="text-indigo-300 mx-2">•</span>
            <span className="text-white font-semibold">2,948 Services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${engine.color} flex items-center justify-center text-3xl mb-4`}>
                {engine.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{engine.title}</h3>
              <p className="text-indigo-200 mb-4 text-sm">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-indigo-100">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Breakthrough Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <span className="text-2xl mr-3">🧠</span>
              <div>
                <h4 className="font-semibold text-white">Organizational Brain</h4>
                <p className="text-indigo-200 text-sm">Turn emails into searchable knowledge</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🤝</span>
              <div>
                <h4 className="font-semibold text-white">Deal Intelligence</h4>
                <p className="text-indigo-200 text-sm">Win more negotiations with AI strategy</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">♿</span>
              <div>
                <h4 className="font-semibold text-white">Universal Access</h4>
                <p className="text-indigo-200 text-sm">WCAG 2.1 compliance for all emails</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">💚</span>
              <div>
                <h4 className="font-semibold text-white">Team Wellness</h4>
                <p className="text-indigo-200 text-sm">Prevent burnout before it happens</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">💰</span>
              <div>
                <h4 className="font-semibold text-white">Revenue Tracking</h4>
                <p className="text-indigo-200 text-sm">Know which emails drive revenue</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🔄</span>
              <div>
                <h4 className="font-semibold text-white">Reply-All Enforcement</h4>
                <p className="text-indigo-200 text-sm">100% multi-recipient coverage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Next-Level Email Intelligence?</h3>
            <p className="text-indigo-100 mb-6">Contact us to learn more about V656-V660</p>
            <div className="text-white space-y-2">
              <p className="font-semibold">📱 Mobile: +1 302 464 0950</p>
              <p className="font-semibold">📧 Email: kleber@ziontechgroup.com</p>
              <p className="font-semibold">📍 Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V656V660Showcase;
