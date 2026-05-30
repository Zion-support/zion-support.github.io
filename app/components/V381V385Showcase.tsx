'use client';

import React from 'react';

const V381V385Showcase = () => {
  const engines = [
    {
      version: 'V381',
      name: 'Sentiment Forecasting',
      icon: '🔮',
      color: 'from-violet-500 to-purple-600',
      description:
        'Predict emotional trajectory in ongoing email threads — analyze sentiment velocity, detect mood shifts before they escalate, and recommend optimal response timing and tone to maintain positive momentum.',
      capabilities: [
        'Sentiment velocity tracking across multi-turn conversations',
        'Emotional trajectory prediction with confidence scoring',
        'Mood shift early-warning alerts for critical threads',
        'Optimal response timing recommendations based on sentiment state',
        'Tone-matching suggestions to de-escalate or reinforce sentiment'
      ]
    },
    {
      version: 'V382',
      name: 'Priority Orchestrator',
      icon: '🎯',
      color: 'from-orange-500 to-red-600',
      description:
        'Intelligently orchestrate email priority across your entire inbox — combine sender authority, urgency signals, deadline proximity, and business context to dynamically rank, defer, and escalate messages in real-time.',
      capabilities: [
        'Multi-signal priority scoring (sender weight × urgency × context)',
        'Dynamic inbox reordering based on evolving business priorities',
        'Deadline proximity detection from email content and attachments',
        'Automatic defer-and-resurface for low-priority threads',
        'Escalation routing for messages exceeding response SLA thresholds'
      ]
    },
    {
      version: 'V383',
      name: 'Knowledge Extraction',
      icon: '🧠',
      color: 'from-sky-500 to-blue-600',
      description:
        'Automatically extract, structure, and index institutional knowledge from email conversations — capture decisions, action items, expertise mappings, and tribal knowledge before it disappears from organizational memory.',
      capabilities: [
        'Decision capture and indexing from email approvals and sign-offs',
        'Expertise mapping — who knows what based on email contribution history',
        'Action item extraction with automatic task system sync',
        'Tribal knowledge preservation from informal email exchanges',
        'Searchable knowledge graph built from unstructured email data'
      ]
    },
    {
      version: 'V384',
      name: 'Delivery Assurance',
      icon: '🛡️',
      color: 'from-emerald-500 to-green-600',
      description:
        'Guarantee critical email delivery and track engagement through the full lifecycle — verify receipt, monitor open and reply signals, detect silent failures, and trigger smart follow-ups when messages go unanswered.',
      capabilities: [
        'Delivery confirmation with bounce and blacklist detection',
        'Open and engagement signal tracking without invasive pixels',
        'Silent failure detection for emails that never reach the inbox',
        'Smart follow-up scheduling based on recipient behavior patterns',
        'Delivery reputation monitoring and sender health scoring'
      ]
    },
    {
      version: 'V385',
      name: 'Thread Synthesizer',
      icon: '⚡',
      color: 'from-amber-500 to-yellow-600',
      description:
        'Synthesize sprawling email threads into concise intelligence briefs — collapse hundreds of messages into structured summaries with key decisions, open questions, stakeholder positions, and recommended next steps.',
      capabilities: [
        'Long-thread collapse into structured executive summaries',
        'Key decision extraction with stakeholder attribution',
        'Open question and unresolved item identification',
        'Stakeholder position mapping across thread participants',
        'Next-step recommendation engine based on thread state analysis'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border border-indigo-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-indigo-300 text-sm font-semibold tracking-wide uppercase">
              Latest Release
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
            Email Intelligence V381-V385
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five cutting-edge engines that redefine email intelligence —
            sentiment forecasting, priority orchestration, knowledge extraction, delivery assurance, and thread synthesis
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-500/30 text-indigo-200 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold">
              ✓ All engines enforce reply-all for multi-recipient emails
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              187
            </p>
            <p className="text-gray-400 mt-1 font-medium">Total Engines</p>
          </div>
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              1896+
            </p>
            <p className="text-gray-400 mt-1 font-medium">Services Available</p>
          </div>
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              V199–V385
            </p>
            <p className="text-gray-400 mt-1 font-medium">Engine Range</p>
          </div>
          <div className="bg-gray-800/60 border border-indigo-500/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              5
            </p>
            <p className="text-gray-400 mt-1 font-medium">New in This Release</p>
          </div>
        </div>

        {/* Engine Cards */}
        <div className="grid gap-8 max-w-7xl mx-auto">
          {engines.map((engine) => (
            <div
              key={engine.version}
              className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
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
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl p-8 shadow-2xl shadow-indigo-500/20">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Email Intelligence?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 10,000+ companies using Zion Tech Group&apos;s AI-powered email platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
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

export default V381V385Showcase;
