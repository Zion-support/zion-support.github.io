'use client';

import React from 'react';

const V616V620Showcase: React.FC = () => {
  const engines = [
    {
      version: 'V616',
      name: 'Email Priority Decay Engine',
      icon: '⏳',
      description: 'Automatically adjusts email priority based on age, engagement, and context with intelligent decay multipliers.',
      features: ['Age-based decay', 'Engagement tracking', 'Sender importance', 'Thread activity', 'Content relevance'],
      benefit: 'Focus on what matters most with dynamic priority adjustment'
    },
    {
      version: 'V617',
      name: 'Email Thread Summarizer Pro',
      icon: '📋',
      description: 'Advanced multi-thread summarization with cross-reference analysis, participant tracking, and executive briefs.',
      features: ['Participant analysis', 'Topic extraction', 'Decision tracking', 'Action items', 'Sentiment arc'],
      benefit: 'Catch up on long threads in seconds with AI-powered summaries'
    },
    {
      version: 'V618',
      name: 'Email Signature A/B Testing',
      icon: '🧪',
      description: 'Test different email signatures for engagement optimization with statistical significance analysis.',
      features: ['Multi-variant testing', 'Open rate tracking', 'Click tracking', 'Reply rate analysis', 'Winner selection'],
      benefit: 'Optimize every email signature for maximum engagement'
    },
    {
      version: 'V619',
      name: 'Email Archival Intelligence',
      icon: '🗄️',
      description: 'Smart archival with semantic search, compliance retention policies, and intelligent organization.',
      features: ['Semantic search', 'Auto-categorization', 'Compliance retention', 'Importance scoring', 'Deduplication'],
      benefit: 'Find any archived email instantly with AI-powered search'
    },
    {
      version: 'V620',
      name: 'Email Deliverability Optimizer',
      icon: '📬',
      description: 'Comprehensive deliverability analysis with spam scoring, authentication checks, and inbox placement optimization.',
      features: ['Spam score analysis', 'SPF/DKIM/DMARC', 'Content quality', 'Sender reputation', 'Inbox placement'],
      benefit: 'Ensure your emails reach the inbox with proven optimization'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🚀 Email Intelligence V616-V620
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five breakthrough engines for priority management, thread summarization, signature testing, archival intelligence, and deliverability optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {engines.map((engine, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{engine.icon}</div>
              <div className="inline-block px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full mb-3">
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
                <p className="text-amber-300 text-sm font-semibold">
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

        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-400/30 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            📞 Contact Us for a Free Demo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-amber-300 font-semibold">📱 Mobile</p>
              <p className="text-white">+1 302 464 0950</p>
            </div>
            <div>
              <p className="text-amber-300 font-semibold">✉️ Email</p>
              <p className="text-white">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <p className="text-amber-300 font-semibold">📍 Address</p>
              <p className="text-white">364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All 420 Email Intelligence Engines →
          </a>
        </div>
      </div>
    </section>
  );
};

export default V616V620Showcase;
