'use client';

import React from 'react';

const V651V655Showcase: React.FC = () => {
  const engines = [
    {
      id: 'V651',
      icon: '🔗',
      title: 'Email Thread Relationship Mapper',
      description: 'Map and analyze email thread relationships to identify key stakeholders, decision-makers, and communication dynamics using network analysis.',
      features: [
        'Stakeholder identification (decision-makers, influencers, executors)',
        'Reply pattern analysis (who replies to whom)',
        'Influence scoring based on response rates and participation',
        'Network centrality analysis (hub, authority, bridge roles)',
        'Communication flow optimization recommendations',
        'Relationship strength scoring (0-100)'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'V652',
      icon: '📈',
      title: 'Email Sentiment Evolution Tracker',
      description: 'Track how sentiment changes over time in email conversations. Detect escalation patterns and identify optimal intervention points.',
      features: [
        'Sentiment timeline tracking per conversation',
        'Escalation detection with negative trend alerts',
        'Cooling-down period identification',
        'Optimal intervention point recommendations',
        'Sentiment velocity calculation',
        'Conversation health scoring (0-100)'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'V653',
      icon: '⏰',
      title: 'Email Response Time Optimizer',
      description: 'Analyze optimal times to send emails for faster responses using historical data, recipient patterns, and timezone intelligence.',
      features: [
        'Optimal send time calculation per recipient',
        'Historical response time analysis',
        'Timezone-aware scheduling',
        'Day-of-week pattern detection',
        'Response probability scoring',
        'Engagement heatmaps by day/hour'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'V654',
      icon: '🛡️',
      title: 'Email Content Authenticity Verifier',
      description: 'Detect AI-generated vs human-written emails using linguistic analysis and pattern recognition. Identify phishing and spam threats.',
      features: [
        'AI vs human writing detection',
        'Phishing pattern recognition',
        'Spam indicator analysis',
        'Linguistic fingerprinting',
        'Metadata authenticity checks',
        'Authenticity confidence scoring (0-100)'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'V655',
      icon: '✅',
      title: 'Email Meeting Action Item Extractor',
      description: 'Extract and track action items from meeting-related emails with deadline detection, owner assignment, and dependency tracking.',
      features: [
        'Automatic action item extraction from meeting emails',
        'Deadline detection and tracking',
        'Owner assignment based on context',
        'Dependency identification between action items',
        'Progress tracking and reminders',
        'Meeting summary generation'
      ],
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Email Intelligence Engines V651-V655
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Advanced AI-powered email intelligence with relationship mapping, sentiment tracking, 
            response optimization, authenticity verification, and meeting action extraction.
          </p>
          <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-white font-semibold">455 Total Engines</span>
            <span className="text-blue-300 mx-2">•</span>
            <span className="text-white font-semibold">2,923 Services</span>
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
              <p className="text-blue-200 mb-4 text-sm">{engine.description}</p>
              <ul className="space-y-2">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-blue-100">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <span className="text-2xl mr-3">🔗</span>
              <div>
                <h4 className="font-semibold text-white">Network Analysis</h4>
                <p className="text-blue-200 text-sm">Map relationships and influence networks</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📊</span>
              <div>
                <h4 className="font-semibold text-white">Sentiment Tracking</h4>
                <p className="text-blue-200 text-sm">Monitor conversation health over time</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">⚡</span>
              <div>
                <h4 className="font-semibold text-white">Smart Scheduling</h4>
                <p className="text-blue-200 text-sm">Optimize send times for faster responses</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🛡️</span>
              <div>
                <h4 className="font-semibold text-white">Security Verification</h4>
                <p className="text-blue-200 text-sm">Detect AI content and phishing threats</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">📋</span>
              <div>
                <h4 className="font-semibold text-white">Action Extraction</h4>
                <p className="text-blue-200 text-sm">Auto-extract meeting action items</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">🔄</span>
              <div>
                <h4 className="font-semibold text-white">Reply-All Enforcement</h4>
                <p className="text-blue-200 text-sm">100% coverage for multi-recipient emails</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Email Intelligence?</h3>
            <p className="text-blue-100 mb-6">Contact us today to learn more about V651-V655</p>
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

export default V651V655Showcase;
