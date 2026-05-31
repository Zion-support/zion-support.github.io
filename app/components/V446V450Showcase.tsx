'use client';

import React from 'react';

const V446V450Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V446',
      name: 'Context Switching Detector',
      icon: '🔄',
      description: 'Detects when users switch between email threads and provides context summaries to prevent confusion.',
      features: ['Thread tracking', 'Context summaries', 'Confusion prevention', 'Related thread detection'],
      benefit: 'Never lose context when managing multiple conversations'
    },
    {
      version: 'V447',
      name: 'Email Energy Optimizer',
      icon: '⚡',
      description: 'Analyzes email writing patterns to reduce cognitive load and improve clarity with readability scoring.',
      features: ['Readability scoring', 'Passive voice detection', 'Jargon identification', 'Sentence optimization'],
      benefit: 'Write clearer, more effective emails that get better responses'
    },
    {
      version: 'V448',
      name: 'Meeting Extractor',
      icon: '📅',
      description: 'Automatically extracts meeting details from emails and creates calendar events with conflict detection.',
      features: ['Date/time extraction', 'Attendee identification', 'Location detection', 'Agenda extraction'],
      benefit: 'Turn email conversations into scheduled meetings automatically'
    },
    {
      version: 'V449',
      name: 'Urgency Escalation Engine',
      icon: '🚨',
      description: 'Detects escalating urgency in email threads and alerts managers before issues become critical.',
      features: ['Urgency trend analysis', 'Escalation prediction', 'SLA monitoring', 'Churn prevention'],
      benefit: 'Prevent customer churn through early intervention'
    },
    {
      version: 'V450',
      name: 'Knowledge Graph Builder',
      icon: '🕸️',
      description: 'Builds a knowledge graph from email conversations to answer questions and find experts.',
      features: ['Entity extraction', 'Relationship mapping', 'Expert identification', 'Natural language queries'],
      benefit: 'Instantly find who knows what and what was decided about any topic'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🚀 Latest Email Intelligence: V446-V450
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough AI engines that make your email communication smarter, faster, and more intelligent than ever before
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{engine.icon}</div>
              <div className="inline-block px-3 py-1 bg-purple-500 text-white text-sm font-bold rounded-full mb-3">
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
                <p className="text-purple-300 text-sm font-semibold">
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
                <h4 className="text-white font-semibold">Case-by-Case Analysis</h4>
                <p className="text-gray-300 text-sm">Each email analyzed individually for appropriate action</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="text-white font-semibold">Real-Time Processing</h4>
                <p className="text-gray-300 text-sm">Instant analysis and actionable insights</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="text-white font-semibold">Privacy-First</h4>
                <p className="text-gray-300 text-sm">All processing happens securely with your data protected</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📊</span>
              <div>
                <h4 className="text-white font-semibold">Actionable Insights</h4>
                <p className="text-gray-300 text-sm">Clear recommendations for every email</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔄</span>
              <div>
                <h4 className="text-white font-semibold">Continuous Learning</h4>
                <p className="text-gray-300 text-sm">Improves with every email processed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 inline-block">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Email Communication?
            </h3>
            <p className="text-xl text-gray-200 mb-6">
              Join thousands of professionals using AI-powered email intelligence
            </p>
            <div className="space-y-2 text-left text-gray-200">
              <p>📞 <strong>Call:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Visit:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V446V450Showcase;
