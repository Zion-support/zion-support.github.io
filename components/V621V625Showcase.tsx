'use client';

import React from 'react';

const V621V625Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V621',
      name: 'Email Context Memory System',
      icon: '🧠',
      description: 'Persistent context memory across conversations with contact profiles, conversation graphs, and intelligent recall.',
      features: ['Cross-thread memory', 'Contact profiles', 'Conversation graphs', 'Contextual recall', 'Relationship tracking'],
      benefit: 'Never lose context - remember every conversation detail automatically'
    },
    {
      version: 'V622',
      name: 'Email Delegation Intelligence',
      icon: '🎯',
      description: 'Smart auto-forwarding and delegation based on expertise matching, workload balancing, and urgency assessment.',
      features: ['Expertise matching', 'Workload balancing', 'Urgency assessment', 'Auto-forwarding', 'Response time estimation'],
      benefit: 'Route emails to the right person automatically for faster responses'
    },
    {
      version: 'V623',
      name: 'Email Negotiation Assistant',
      icon: '🤝',
      description: 'AI-powered negotiation analysis with signal detection, strategy recommendations, and leverage scoring.',
      features: ['Signal detection', 'Strategy recommendations', 'Leverage scoring', 'Talking points', 'Risk assessment'],
      benefit: 'Win more deals with AI-powered negotiation intelligence'
    },
    {
      version: 'V624',
      name: 'Email Accessibility Checker',
      icon: '♿',
      description: 'WCAG 2.1 compliance checking with color contrast analysis, alt text validation, and screen reader optimization.',
      features: ['WCAG 2.1 compliance', 'Color contrast check', 'Alt text validation', 'Heading structure', 'Link text analysis'],
      benefit: 'Ensure your emails are accessible to everyone'
    },
    {
      version: 'V625',
      name: 'Email Voice Transcription',
      icon: '🎙️',
      description: 'Convert voice emails to text with 95% accuracy, automatic summarization, and action item extraction.',
      features: ['Voice-to-text', 'Auto-summarization', 'Action extraction', 'Speaker identification', 'Quality scoring'],
      benefit: 'Never miss important details in voice messages'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🚀 Email Intelligence V621-V625
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines for context memory, delegation, negotiation, accessibility, and voice transcription
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{engine.icon}</div>
              <div className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm font-bold rounded-full mb-3">
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
                <p className="text-cyan-300 text-sm font-semibold">
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
                <h4 className="text-white font-semibold">AI-Powered Intelligence</h4>
                <p className="text-gray-300 text-sm">Advanced NLP and machine learning for smarter processing</p>
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

        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-400/30 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            📞 Contact Us for a Free Demo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-cyan-300 font-semibold">📱 Mobile</p>
              <p className="text-white">+1 302 464 0950</p>
            </div>
            <div>
              <p className="text-cyan-300 font-semibold">✉️ Email</p>
              <p className="text-white">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <p className="text-cyan-300 font-semibold">📍 Address</p>
              <p className="text-white">364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All 425 Email Intelligence Engines →
          </a>
        </div>
      </div>
    </section>
  );
};

export default V621V625Showcase;
