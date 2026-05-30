'use client';

import React from 'react';

const V366V370Showcase = () => {
  const engines = [
    {
      version: 'V366',
      name: 'Sentiment Analyzer',
      icon: '😊',
      color: 'from-purple-500 to-pink-500',
      description:
        'Analyze emotional tone and sentiment in every email — detect positivity, negativity, frustration, or enthusiasm in real time to guide your responses.',
      capabilities: [
        'Real-time sentiment scoring per email',
        'Multi-language sentiment detection',
        'Tone shift alerts within threads',
        'Emotional intensity heatmaps',
        'Sentiment trend dashboards per contact'
      ]
    },
    {
      version: 'V367',
      name: 'Urgency Detector',
      icon: '🚨',
      color: 'from-red-500 to-orange-500',
      description:
        'Automatically detect urgent emails based on language, deadlines, sender importance, and context — never miss a critical message again.',
      capabilities: [
        'Deadline and time-pressure keyword detection',
        'Priority escalation based on sender hierarchy',
        'Smart inbox re-ordering by urgency',
        'Push notifications for critical messages',
        'False-positive filtering with ML tuning'
      ]
    },
    {
      version: 'V368',
      name: 'Thread Summarizer',
      icon: '📝',
      color: 'from-blue-500 to-cyan-500',
      description:
        'Instantly generate concise summaries of long email threads — capture key decisions, open questions, and context without reading every message.',
      capabilities: [
        'One-click thread digest generation',
        'Key decision and outcome extraction',
        'Open question and blocker highlighting',
        'Participant contribution summaries',
        'Chronological milestone timelines'
      ]
    },
    {
      version: 'V369',
      name: 'Action Item Extractor',
      icon: '✅',
      color: 'from-green-500 to-emerald-500',
      description:
        'Automatically extract action items, tasks, and to-dos from emails — assign owners, set deadlines, and sync with your project management tools.',
      capabilities: [
        'Automatic task and to-do identification',
        'Owner and deadline extraction',
        'Integration with task management platforms',
        'Follow-up reminder generation',
        'Completion tracking and status updates'
      ]
    },
    {
      version: 'V370',
      name: 'Intent Classifier',
      icon: '🎯',
      color: 'from-indigo-500 to-purple-500',
      description:
        'Classify the intent behind every email — whether it is a request, complaint, inquiry, confirmation, or escalation — to route and prioritize automatically.',
      capabilities: [
        'Multi-label intent classification (request, complaint, inquiry, etc.)',
        'Custom intent category training',
        'Automatic routing based on detected intent',
        'Escalation level identification',
        'Intent confidence scoring with explanations'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-300 text-sm font-semibold tracking-wide uppercase">
              New Release
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Email Intelligence V366-V370
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five new AI-powered engines that bring deep understanding to every email —
            sentiment, urgency, summaries, action items, and intent classification
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-purple-900/50 border border-purple-500/30 text-purple-200 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold">
              ✓ All engines enforce reply-all for multi-recipient emails
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="bg-gray-800/60 border border-purple-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              172
            </p>
            <p className="text-gray-400 mt-1 font-medium">Total Engines</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              V199–V370
            </p>
            <p className="text-gray-400 mt-1 font-medium">Engine Range</p>
          </div>
          <div className="bg-gray-800/60 border border-purple-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              5
            </p>
            <p className="text-gray-400 mt-1 font-medium">New in This Release</p>
          </div>
        </div>

        {/* Engine Cards */}
        <div className="grid gap-8 max-w-7xl mx-auto">
          {engines.map((engine, idx) => (
            <div
              key={engine.version}
              className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="lg:flex">
                <div
                  className={`lg:w-1/3 bg-gradient-to-br ${engine.color} p-8 text-white flex flex-col justify-center`}
                >
                  <div className="text-6xl mb-4">{engine.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{engine.version}</h3>
                  <p className="text-xl font-semibold">{engine.name}</p>
                </div>
                <div className="lg:w-2/3 p-8">
                  <p className="text-gray-300 text-lg mb-6">{engine.description}</p>
                  <div>
                    <h4 className="text-sm font-bold text-gray-100 mb-3 uppercase tracking-wide">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {engine.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-300">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-2xl shadow-purple-500/20">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Email Intelligence?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 10,000+ companies using Zion Tech Group&apos;s AI-powered email platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule a Demo
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Explore All Services
              </a>
            </div>
            <div className="mt-6 text-sm opacity-80">
              <p>📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V366V370Showcase;
