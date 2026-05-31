import React from 'react';

const V686V690Showcase: React.FC = () => {
  const engines = [
    {
      id: 'V686',
      name: 'Email Delegation Intelligence',
      icon: '🔀',
      description: 'Detect emails that should be delegated, suggest the best person based on expertise, and track delegation chains.',
      features: [
        'Delegation scoring (0-100)',
        'Expertise-based person matching',
        'Delegation chain tracking',
        'Loop detection (DFS graph traversal)',
        'Analytics & recommendations'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'V687',
      name: 'Email Negotiation Intelligence',
      icon: '🤝',
      description: 'Detect negotiation stages, extract terms, assess leverage, and suggest counter-offers for better deals.',
      features: [
        '8 negotiation stage detection',
        'Term extraction (price, timeline, SLA)',
        '8 leverage source analysis',
        '10 counter-offer tactics',
        'BATNA strength scoring'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'V688',
      name: 'Email Compliance Guardian',
      icon: '🛡️',
      description: 'Scan emails for GDPR, HIPAA, CCPA, and PCI-DSS violations with risk scoring and remediation suggestions.',
      features: [
        'GDPR personal data detection',
        'HIPAA PHI scanning (ICD-10, CPT)',
        'CCPA consumer data alerts',
        'PCI-DSS credit card validation',
        'Sensitive data pattern detection'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'V689',
      name: 'Email Sarcasm & Irony Detector',
      icon: '🎭',
      description: 'Detect sarcasm, irony, passive-aggressive language, and tonal ambiguity to prevent miscommunication.',
      features: [
        'Verbal irony & exaggeration detection',
        'Passive-aggressive phrase scanning',
        'Backhanded compliment identification',
        'Rhetorical question analysis',
        'Tone clarity suggestions'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'V690',
      name: 'Email Cultural Sensitivity Analyzer',
      icon: '🌍',
      description: 'Detect culturally insensitive language and suggest alternatives for respectful global communication.',
      features: [
        '10 cultural sensitivity categories',
        'Gendered language detection',
        'Disability-inclusive suggestions',
        'Cultural appropriation alerts',
        'Global audience optimization'
      ],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            V686-V690: Communication Excellence Suite
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Five advanced engines that ensure every email is properly delegated, negotiation-ready,
            compliant, clear in tone, and culturally respectful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-5xl bg-gradient-to-br ${engine.color} p-4 rounded-xl`}>
                  {engine.icon}
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-mono">{engine.id}</div>
                  <h3 className="text-xl font-bold text-white">{engine.name}</h3>
                </div>
              </div>

              <p className="text-slate-300 mb-6">{engine.description}</p>

              <ul className="space-y-2">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className={`text-lg bg-gradient-to-br ${engine.color} bg-clip-text text-transparent`}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Why V686-V690?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔀</div>
              <h4 className="text-xl font-bold text-white mb-2">Smart Delegation</h4>
              <p className="text-slate-300 text-sm">Route emails to the right person automatically</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-2">Better Deals</h4>
              <p className="text-slate-300 text-sm">Win negotiations with AI-powered strategies</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold text-white mb-2">Stay Compliant</h4>
              <p className="text-slate-300 text-sm">Avoid GDPR/HIPAA violations automatically</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎭</div>
              <h4 className="text-xl font-bold text-white mb-2">Clear Tone</h4>
              <p className="text-slate-300 text-sm">Eliminate sarcasm and passive-aggression</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h4 className="text-xl font-bold text-white mb-2">Global Respect</h4>
              <p className="text-slate-300 text-sm">Communicate respectfully across cultures</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 rounded-full">
            <div className="bg-slate-900 px-8 py-4 rounded-full">
              <span className="text-white font-bold">
                🚀 3,148 Total Services Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V686V690Showcase;
