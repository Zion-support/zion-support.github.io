'use client';

import React from 'react';

const V661V665Showcase: React.FC = () => {
  const engines = [
    {
      id: 'V661',
      icon: '⚖️',
      title: 'Email Legal Compliance Guardian',
      description: 'Auto-detect GDPR, CCPA, HIPAA, SOX, and PCI-DSS compliance issues before sending. Prevent legal liability with real-time PII scanning.',
      features: [
        'GDPR compliance scanning (personal data, consent, erasure rights)',
        'HIPAA Protected Health Information (PHI) detection',
        'PCI-DSS credit card and payment data detection',
        'SOX financial disclosure compliance',
        'Attorney-client privilege detection',
        'Automated PII redaction suggestions'
      ],
      color: 'from-red-600 to-orange-500'
    },
    {
      id: 'V662',
      icon: '🌍',
      title: 'Email Culture Intelligence',
      description: 'Detect cultural communication patterns using Hofstede\'s 6 dimensions. Adapt tone for international recipients and prevent cultural misunderstandings.',
      features: [
        '15 cultural profiles (US, UK, DE, JP, CN, IN, BR, FR, KR, MX, AE, SE, AU, SA, SG)',
        'Formality level detection and adaptation',
        'Directness vs indirectness analysis',
        'Cultural sensitivity screening (religion, politics, money)',
        'Greeting and sign-off cultural appropriateness',
        'Cultural fit scoring (0-100)'
      ],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'V663',
      icon: '🚨',
      title: 'Email Crisis Communication Engine',
      description: 'Detect PR crises (P1-P4 severity) and generate approved communication templates with stakeholder routing and approval chains.',
      features: [
        'Crisis severity classification (P1-P4)',
        '5 crisis templates (data breach, outage, PR, employee, financial)',
        'Stakeholder identification and routing',
        'Message approval chain management',
        'Multi-channel communication coordination',
        'Post-crisis impact analysis'
      ],
      color: 'from-amber-500 to-red-500'
    },
    {
      id: 'V664',
      icon: '📚',
      title: 'Email Knowledge Transfer System',
      description: 'Automatically capture institutional knowledge when employees leave. Extract relationships, ongoing projects, commitments, and tribal knowledge.',
      features: [
        'Departing employee knowledge extraction',
        'Relationship and contact mapping (internal + external)',
        'Ongoing project tracking with status detection',
        'Commitment and promise extraction',
        'Tribal knowledge capture (undocumented processes)',
        'Successor handoff package generation'
      ],
      color: 'from-violet-500 to-indigo-500'
    },
    {
      id: 'V665',
      icon: '🏆',
      title: 'Email Competitive Intelligence Engine',
      description: 'Extract competitor mentions, pricing intelligence, and market signals from emails. Track win/loss patterns and assess competitive threats.',
      features: [
        'Competitor mention tracking with sentiment analysis',
        'Pricing intelligence extraction ($ amounts, discounts)',
        '7 market signal types (entry, partnership, funding, talent, customer loss, tech, pricing war)',
        'Win/loss analysis with reason extraction',
        'Feature comparison extraction',
        'Competitive threat assessment (0-100 scoring)'
      ],
      color: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-900 via-orange-900 to-amber-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Email Intelligence Engines V661-V665
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Enterprise-grade email intelligence: legal compliance, cultural adaptation, crisis management,
            knowledge transfer, and competitive intelligence — all with reply-all enforcement.
          </p>
          <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-white font-semibold">465 Total Engines</span>
            <span className="text-orange-300 mx-2">•</span>
            <span className="text-white font-semibold">2,973 Services</span>
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
              <p className="text-orange-200 mb-4 text-sm">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-orange-100">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Enterprise-Grade Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <span className="text-2xl mr-3">⚖️</span>
              <div>
                <h4 className="font-semibold text-white">Legal Compliance</h4>
                <p className="text-orange-200 text-sm">GDPR, HIPAA, SOX, PCI-DSS, CCPA</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🌍</span>
              <div>
                <h4 className="font-semibold text-white">15 Cultural Profiles</h4>
                <p className="text-orange-200 text-sm">Hofstede dimensions + tone adaptation</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🚨</span>
              <div>
                <h4 className="font-semibold text-white">Crisis Response</h4>
                <p className="text-orange-200 text-sm">P1-P4 severity with approval chains</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📚</span>
              <div>
                <h4 className="font-semibold text-white">Knowledge Preservation</h4>
                <p className="text-orange-200 text-sm">Capture tribal knowledge before departures</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🏆</span>
              <div>
                <h4 className="font-semibold text-white">Competitive Intel</h4>
                <p className="text-orange-200 text-sm">Win/loss tracking + pricing intelligence</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🔄</span>
              <div>
                <h4 className="font-semibold text-white">Reply-All Enforcement</h4>
                <p className="text-orange-200 text-sm">100% multi-recipient coverage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Enterprise Email Intelligence?</h3>
            <p className="text-orange-100 mb-6">Contact us to learn more about V661-V665</p>
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

export default V661V665Showcase;
